"use client";

import { useState, useEffect, useRef } from "react";
import { Pixelify_Sans } from "next/font/google";

// Initialize Pixelify Sans font
const pixelFont = Pixelify_Sans({
  subsets: ["latin"],
  weight: "400",
});

// Noise component with subtle grain texture
const Noise = () => (
  <div
    className="absolute inset-0 opacity-5 pointer-events-none"
    style={{
      backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" fill="rgba(255,255,255,0.1)"/%3E%3C/svg%3E')`,
    }}
  />
);

const data = {
  name: "Arya Bisma Putra Refman",
  nrp: "5027241036",
  image: "036.jpg",
  funfact: "Dengerin lagu barat sama jepang aja (no indo)",
  hobby: "Musik, Game, Komik, Anime, Traveling",
  origin: "Bukittinggi, Sumatra Barat",
  linkedin: "https://www.linkedin.com/in/aryarefman/",
  instagram: "https://www.instagram.com/aryarefman/",
};

// Type definitions for game objects
interface Tamer {
  x: number;
  y: number;
  width: number;
  height: number;
  velocityY: number;
  velocityX: number;
  jumping: boolean;
  onGround: boolean;
  direction: number;
  invulnerable: boolean;
  invulnerableTime: number;
}

interface Platform {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Orb {
  x: number;
  y: number;
  width: number;
  height: number;
  collected: boolean;
  animate: number;
}

interface Monster {
  x: number;
  y: number;
  width: number;
  height: number;
  velocityX: number;
  captured: boolean;
  initialX: number;
  patrolRange: number;
}

interface GameState {
  tamer: Tamer;
  orbs: Orb[];
  monsters: Monster[];
  platforms: Platform[];
  keys: { [key: string]: boolean };
  gameRunning: boolean;
  orbsCollected: number;
  monstersCaptured: number;
  camera: { x: number; y: number };
  lives: number;
}

interface GameStats {
  orbs: number;
  monsters: number;
  lives: number;
}

// Monster Catching Game Component
const MonsterGame = ({ onWin, onClose }) => {
  const canvasRef = useRef(null);
  const gameRef = useRef(null);
  const animationRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameStats, setGameStats] = useState({ orbs: 0, monsters: 0, lives: 3 });

  // Initialize game state once
  const initializeGameState = () => ({
    tamer: {
      x: 50,
      y: 348, // Positioned on the first platform (380 - 32)
      width: 32,
      height: 32,
      velocityY: 0,
      velocityX: 0,
      jumping: false,
      onGround: true,
      direction: 1,
      invulnerable: false,
      invulnerableTime: 0,
    },
    orbs: [],
    monsters: [],
    platforms: [
      { x: 0, y: 380, width: 800, height: 20 }, // Ground
      { x: 150, y: 280, width: 120, height: 20 },
      { x: 350, y: 220, width: 120, height: 20 },
      { x: 550, y: 160, width: 120, height: 20 },
    ],
    keys: {},
    gameRunning: true,
    orbsCollected: 0,
    monstersCaptured: 0,
    camera: { x: 0, y: 0 },
    lives: 3,
  });

  // Generate orbs and monsters
  const populateGameObjects = (game) => {
    const orbPositions = [
      { x: 200, y: 240 },
      { x: 400, y: 180 },
      { x: 600, y: 120 },
      { x: 100, y: 340 },
      { x: 300, y: 340 },
      { x: 500, y: 340 },
      { x: 700, y: 340 },
      { x: 450, y: 180 },
    ];
    orbPositions.forEach((pos, i) => {
      game.orbs.push({
        x: pos.x,
        y: pos.y,
        width: 20,
        height: 20,
        collected: false,
        animate: i * 0.5,
      });
    });

    const monsterPositions = [
      { x: 300, y: 350 },
      { x: 500, y: 350 },
      { x: 250, y: 250 },
    ];
    monsterPositions.forEach((pos, i) => {
      game.monsters.push({
        x: pos.x,
        y: pos.y,
        width: 28,
        height: 28,
        velocityX: (i % 2 === 0 ? -1 : 1) * 1.5,
        captured: false,
        initialX: pos.x,
        patrolRange: 100,
      });
    });
  };

  useEffect(() => {
    if (!gameStarted || gameOver || gameWon) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Initialize game state if not already set
    if (!gameRef.current) {
      const game = initializeGameState();
      populateGameObjects(game);
      gameRef.current = game;
    }
    const game = gameRef.current;

    // Sakura petal particles for background
    const sakuraParticles = [];
    for (let i = 0; i < 20; i++) {
      sakuraParticles.push({
        x: Math.random() * 800,
        y: Math.random() * 400,
        velocityX: (Math.random() - 0.5) * 0.5,
        velocityY: Math.random() * 0.5 + 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
        rotation: Math.random() * Math.PI * 2,
      });
    }

    // Sakura petal drawing function
    const drawSakuraPetal = (ctx, x, y, size, rotation) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(size * 0.3, -size * 0.5, size, 0);
      ctx.quadraticCurveTo(size * 0.3, size * 0.5, 0, 0);
      ctx.quadraticCurveTo(-size * 0.3, size * 0.5, -size, 0);
      ctx.quadraticCurveTo(-size * 0.3, -size * 0.5, 0, 0);
      ctx.fill();
      ctx.restore();
    };

    // Collision detection
    const checkCollision = (rect1, rect2) => {
      return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
      );
    };

    // Input handling
    const handleKeyDown = (e) => {
      e.preventDefault();
      game.keys[e.key.toLowerCase()] = true;
      if (
        (e.key === " " || e.key === "ArrowUp" || e.key === "w") &&
        game.tamer.onGround &&
        !game.tamer.jumping
      ) {
        game.tamer.velocityY = -12;
        game.tamer.jumping = true;
        game.tamer.onGround = false;
      }
    };

    const handleKeyUp = (e) => {
      game.keys[e.key.toLowerCase()] = false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    // Ensure tamer starts on platform
    const ensureGroundedStart = () => {
      game.tamer.y = game.platforms[0].y - game.tamer.height;
      game.tamer.velocityY = 0;
      game.tamer.onGround = true;
    };

    // Game loop
    const gameLoop = () => {
      if (!game.gameRunning || !ctx || gameOver || gameWon) return;

      game.tamer.invulnerableTime = Math.max(0, game.tamer.invulnerableTime - 1);
      if (game.tamer.invulnerableTime <= 0) game.tamer.invulnerable = false;

      // Clear canvas with forest background
      ctx.fillStyle = "#1B3B1B"; // Dark forest green
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw sakura particles
      ctx.fillStyle = "rgba(255, 182, 193, 0.8)";
      sakuraParticles.forEach((petal) => {
        petal.x += petal.velocityX;
        petal.y += petal.velocityY;
        if (petal.x > canvas.width) petal.x -= canvas.width;
        if (petal.x < 0) petal.x += canvas.width;
        if (petal.y > canvas.height) petal.y -= canvas.height;
        ctx.globalAlpha = petal.opacity;
        drawSakuraPetal(ctx, petal.x, petal.y, petal.size * 2, petal.rotation);
      });
      ctx.globalAlpha = 1;

      // Handle input
      const moveSpeed = 5;
      game.tamer.velocityX = 0;
      if (game.keys["arrowleft"] || game.keys["a"]) {
        game.tamer.velocityX = -moveSpeed;
        game.tamer.direction = -1;
      }
      if (game.keys["arrowright"] || game.keys["d"]) {
        game.tamer.velocityX = moveSpeed;
        game.tamer.direction = 1;
      }

      // Apply physics
      game.tamer.velocityY += 0.6;
      game.tamer.y += game.tamer.velocityY;
      game.tamer.x += game.tamer.velocityX;

      // Platform collision
      game.tamer.onGround = false;
      game.platforms.forEach((platform) => {
        if (
          checkCollision(game.tamer, platform) &&
          game.tamer.velocityY >= 0 &&
          game.tamer.y + game.tamer.height > platform.y &&
          game.tamer.y < platform.y + platform.height / 2
        ) {
          game.tamer.y = platform.y - game.tamer.height;
          game.tamer.velocityY = 0;
          game.tamer.onGround = true;
          game.tamer.jumping = false;
        }
      });

      // Ground collision
      if (game.tamer.y > canvas.height - game.tamer.height) {
        game.tamer.y = canvas.height - game.tamer.height;
        game.tamer.velocityY = 0;
        game.tamer.onGround = true;
        game.tamer.jumping = false;
      }

      // Keep tamer within bounds
      game.tamer.x = Math.max(0, Math.min(canvas.width - game.tamer.width, game.tamer.x));

      // Draw platforms
      game.platforms.forEach((platform) => {
        ctx.fillStyle = "#4A2F1A"; // Dark bamboo brown
        ctx.fillRect(platform.x + 2, platform.y + 2, platform.width, platform.height);
        ctx.fillStyle = "#355E3B"; // Forest green overlay
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
        ctx.fillStyle = "#FFD700"; // Gold trim
        ctx.fillRect(platform.x, platform.y, platform.width, 4);
      });

      // Update and draw orbs
      game.orbs.forEach((orb) => {
        if (!orb.collected) {
          orb.animate += 0.15;
          if (checkCollision(game.tamer, orb)) {
            orb.collected = true;
            game.orbsCollected++;
            setScore((prev) => prev + 100);
            setGameStats((prev) => ({ ...prev, orbs: game.orbsCollected, monsters: game.monstersCaptured, lives: game.lives }));
          }
          ctx.save();
          ctx.translate(orb.x + orb.width / 2, orb.y + orb.height / 2);
          ctx.rotate(orb.animate * 0.5);
          const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, 20);
          glow.addColorStop(0, "rgba(0, 206, 209, 0.9)");
          glow.addColorStop(1, "rgba(0, 206, 209, 0)");
          ctx.fillStyle = glow;
          ctx.fillRect(-15, -15, 30, 30);
          ctx.fillStyle = "#00CED1"; // Cyan orb
          ctx.beginPath();
          ctx.arc(0, 0, 10, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      // Update and draw monsters
      game.monsters.forEach((monster) => {
        if (!monster.captured) {
          monster.x += monster.velocityX;
          if (
            monster.x <= monster.initialX - monster.patrolRange ||
            monster.x >= monster.initialX + monster.patrolRange
          ) {
            monster.velocityX *= -1;
          }
          if (monster.x <= 0 || monster.x >= canvas.width - monster.width) {
            monster.velocityX *= -1;
          }
          if (
            checkCollision(game.tamer, { ...monster, y: monster.y - 10, height: monster.height + 10 }) &&
            !game.tamer.invulnerable
          ) {
            if (
              game.tamer.velocityY > 0 &&
              game.tamer.y + game.tamer.height < monster.y + monster.height / 2
            ) {
              monster.captured = true;
              game.monstersCaptured++;
              game.tamer.velocityY = -10;
              setScore((prev) => prev + 200);
              setGameStats((prev) => ({ ...prev, orbs: game.orbsCollected, monsters: game.monstersCaptured, lives: game.lives }));
            } else {
              game.lives--;
              setGameStats((prev) => ({ ...prev, orbs: game.orbsCollected, monsters: game.monstersCaptured, lives: game.lives }));
              game.tamer.invulnerable = true;
              game.tamer.invulnerableTime = 120;
              game.tamer.velocityY = -8; // Slight knockback
              game.tamer.velocityX = game.tamer.direction * -5;
              if (game.lives <= 0) {
                setGameOver(true);
                game.gameRunning = false;
              }
            }
          }
          ctx.save();
          ctx.translate(monster.x + monster.width / 2, monster.y + monster.height / 2);
          ctx.fillStyle = "#4B0082"; // Purple monster
          ctx.beginPath();
          ctx.arc(0, 0, monster.width / 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(-6, -6, 6, 6);
          ctx.fillRect(6, -6, 6, 6);
          ctx.fillStyle = "#000000";
          ctx.fillRect(-4, -4, 2, 2);
          ctx.fillRect(8, -4, 2, 2);
          ctx.restore();
        }
      });

      // Draw tamer
      ctx.save();
      ctx.translate(game.tamer.x + game.tamer.width / 2, game.tamer.y + game.tamer.height / 2);
      if (game.tamer.invulnerable && Math.floor(Date.now() / 100) % 2) ctx.globalAlpha = 0.5;
      ctx.fillStyle = "#2F4F4F"; // Dark slate robe
      ctx.fillRect(-16, -16, 32, 32);
      ctx.fillStyle = "#FFD700"; // Gold belt
      ctx.fillRect(-16, 0, 32, 4);
      ctx.fillStyle = "#FFDBAC"; // Skin tone
      ctx.fillRect(-8, -16, 16, 16);
      ctx.fillStyle = "#000000";
      if (game.tamer.direction === 1) {
        ctx.fillRect(4, -12, 2, 2);
        ctx.fillRect(10, -12, 2, 2);
      } else {
        ctx.fillRect(-12, -12, 2, 2);
        ctx.fillRect(-6, -12, 2, 2);
      }
      if (game.tamer.jumping) {
        ctx.fillStyle = "#00CED1"; // Cyan orb effect
        ctx.beginPath();
        ctx.arc(0, 20, 5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // Win condition
      if ((game.orbsCollected >= 3 || game.monstersCaptured >= 2) && !gameWon) {
        setGameWon(true);
        game.gameRunning = false;
        ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00CED1";
        ctx.font = `bold 48px ${pixelFont.style.fontFamily}`;
        ctx.textAlign = "center";
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 4;
        ctx.strokeText("MONSTER QUEST CLEARED!", canvas.width / 2, canvas.height / 2 - 20);
        ctx.fillText("MONSTER QUEST CLEARED!", canvas.width / 2, canvas.height / 2 - 20);
        ctx.fillStyle = "#FFFFFF";
        ctx.font = `bold 24px ${pixelFont.style.fontFamily}`;
        ctx.strokeText("Profile Unlocked!", canvas.width / 2, canvas.height / 2 + 30);
        ctx.fillText("Profile Unlocked!", canvas.width / 2, canvas.height / 2 + 30);
        setTimeout(() => onWin(), 2000);
      }

      // Game over screen
      if (gameOver) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#FF4500";
        ctx.font = `bold 48px ${pixelFont.style.fontFamily}`;
        ctx.textAlign = "center";
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 4;
        ctx.strokeText("QUEST FAILED", canvas.width / 2, canvas.height / 2 - 20);
        ctx.fillText("QUEST FAILED", canvas.width / 2, canvas.height / 2 - 20);
        ctx.fillStyle = "#FFFFFF";
        ctx.font = `bold 24px ${pixelFont.style.fontFamily}`;
        ctx.strokeText("Press Restart to Try Again", canvas.width / 2, canvas.height / 2 + 30);
        ctx.fillText("Press Restart to Try Again", canvas.width / 2, canvas.height / 2 + 30);
      }

      // Draw UI
      ctx.textAlign = "left";
      ctx.font = `bold 20px ${pixelFont.style.fontFamily}`;
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.fillRect(5, 5, 250, 115);
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 3;
      ctx.fillStyle = "#FFFFFF";
      ctx.strokeText(`Score: ${score}`, 15, 30);
      ctx.fillText(`Score: ${score}`, 15, 30);
      ctx.strokeText(`Orbs: ${game.orbsCollected}/3`, 15, 55);
      ctx.fillText(`Orbs: ${game.orbsCollected}/3`, 15, 55);
      ctx.strokeText(`Monsters: ${game.monstersCaptured}/2`, 15, 80);
      ctx.fillText(`Monsters: ${game.monstersCaptured}/2`, 15, 80);
      ctx.strokeText(`Lives: ${game.lives}`, 15, 105);
      ctx.fillText(`Lives: ${game.lives}`, 15, 105);

      if (game.gameRunning && !gameOver && !gameWon) {
        animationRef.current = requestAnimationFrame(gameLoop);
      }
    };

    // Initialize game with a slight delay
    const startGameLoop = () => {
      if (gameRef.current) {
        ensureGroundedStart();
        if (gameStarted && !gameOver && !gameWon) {
          animationRef.current = requestAnimationFrame(gameLoop);
        }
      }
    };

    setTimeout(startGameLoop, 100);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (gameRef.current) gameRef.current.gameRunning = false;
    };
  }, [gameStarted, gameOver, gameWon, onWin]);

  const startGame = () => {
    const game = initializeGameState();
    populateGameObjects(game);
    gameRef.current = game;
    setGameStarted(true);
    setScore(0);
    setGameWon(false);
    setGameOver(false);
    setGameStats({ orbs: 0, monsters: 0, lives: 3 });
  };

  const resetGame = () => {
    const game = initializeGameState();
    populateGameObjects(game);
    gameRef.current = game;
    setGameStarted(false);
    setScore(0);
    setGameWon(false);
    setGameOver(false);
    setGameStats({ orbs: 0, monsters: 0, lives: 3 });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="bg-gradient-to-br from-[#2F4F4F] to-[#355E3B] rounded-2xl p-6 shadow-2xl border border-[#FFD700]/30">
        <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00CED1] to-[#FFD700] text-center mb-4 ${pixelFont.className}`}>
          🌸 Monster Quest 🌸
        </h3>
        {!gameStarted ? (
          <div className={`text-center text-white space-y-4 ${pixelFont.className}`}>
            <p className="text-lg font-semibold">Collect 3 monster orbs or capture 2 wild monsters to unlock the profile!</p>
            <div className="space-y-2 text-sm bg-black/20 p-4 rounded-lg">
              <p className="font-medium">🎮 <strong>Controls:</strong></p>
              <p>← → Arrow Keys or A/D to move</p>
              <p>↑ Arrow Key, W, or SPACE to jump</p>
              <p>🌌 Collect glowing monster orbs</p>
              <p>👾 Jump on wild monsters to capture them</p>
              <p>⚠️ Avoid touching monsters from the side! (Lose 1 life)</p>
            </div>
            <button
              onClick={startGame}
              className="px-8 py-3 bg-gradient-to-r from-[#00CED1] to-[#FFD700] hover:from-[#FFD700] hover:to-[#00CED1] text-white font-bold rounded-lg transition-all transform hover:scale-105"
            >
              Start Quest
            </button>
          </div>
        ) : (
          <div className="text-center">
            <canvas
              ref={canvasRef}
              width={800}
              height={400}
              className="border-4 border-[#FFD700]/30 rounded-lg bg-[#1B3B1B] shadow-lg"
            />
            <div className="mt-4 flex justify-center gap-4">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-colors"
              >
                Abandon
              </button>
              <button
                onClick={resetGame}
                className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold rounded-lg transition-colors"
              >
                Restart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const defaultData = {
  image: "default.jpg",
  name: "Unknown Member",
  nrp: "N/A",
  origin: "Unknown",
  hobby: "None",
  funfact: "No fun facts available",
  linkedin: "#",
  instagram: "#",
};

const MemberProfile = ({ onClose, data = defaultData }) => {
  const [isHoveringQuote, setIsHoveringQuote] = useState(false);

  // Abstract background with smoother, glass-like shapes
  const AbstractBackground = () => {
    const canvasRefs = useRef([]);
    useEffect(() => {
      canvasRefs.current.forEach((canvas, i) => {
        if (canvas) {
          const ctx = canvas.getContext("2d");
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          
          // Create a radial gradient for a soft, glowing effect
          const gradient = ctx.createRadialGradient(150, 150, 0, 150, 150, 100);
          gradient.addColorStop(0, `rgba(255, 215, 0, 0.2)`); // Gold-inspired center
          gradient.addColorStop(1, `rgba(0, 206, 209, 0.05)`); // Cyan-inspired edge
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          // Draw smooth ellipses instead of sharp polygons
          ctx.ellipse(150, 150, 60 + Math.random() * 40, 40 + Math.random() * 30, 0, 0, Math.PI * 2);
          ctx.fill();
          
          // Add a subtle stroke for definition
          ctx.strokeStyle = `rgba(0, 206, 209, 0.15)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });
    }, []);

    return (
      <>
        {[...Array(6)].map((_, i) => (
          <canvas
            key={i}
            ref={(el) => (canvasRefs.current[i] = el)}
            width={300}
            height={300}
            className="absolute opacity-25 animate-float-smooth"
            style={{
              left: `${Math.random() * 80}%`,
              top: `${Math.random() * 80}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
              filter: "blur(3px)", // Increased blur for smoother effect
            }}
          />
        ))}
      </>
    );
  };

  // Falling cherry blossom petals animation (vertical only)
  const FallingPetals = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      const petals = [];
      const petalCount = 30;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      class Petal {
        constructor() {
          this.reset();
        }

        reset() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height * 0.5;
          this.size = Math.random() * 10 + 5;
          this.speedY = Math.random() * 2 + 1;
          this.opacity = Math.random() * 0.5 + 0.3;
          this.angle = Math.random() * Math.PI * 2;
          this.spin = Math.random() * 0.05 - 0.025;
        }

        draw() {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.angle);
          ctx.fillStyle = `rgba(224, 183, 194, ${this.opacity})`;
          ctx.beginPath();
          ctx.ellipse(0, 0, this.size / 2, this.size / 4, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        update() {
          this.y += this.speedY;
          this.angle += this.spin;

          if (this.y > canvas.height) {
            this.reset();
            this.y = -this.size;
          }
        }
      }

      for (let i = 0; i < petalCount; i++) {
        petals.push(new Petal());
      }

      let animationFrameId;
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        petals.forEach((petal) => {
          petal.update();
          petal.draw();
        });
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
      };
    }, []);

    return (
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 pointer-events-none"
        style={{ zIndex: 1, opacity: 0.7 }}
      />
    );
  };

  // Noise component for texture
  const Noise = () => (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
        opacity: 0.1,
        mixBlendMode: "overlay",
      }}
    />
  );

  return (
    <div
      className={`p-8 relative h-full overflow-hidden ${pixelFont.className}`}
      style={{
        background: "linear-gradient(135deg, #1B3B1B 0%, #2F4F4F 100%)",
        height: "95vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Noise />
      <AbstractBackground />
      <FallingPetals />

      {/* Header Section */}
      <div className="text-center mb-12 flex-shrink-0 relative z-10">
        <div
          className="text-6xl mb-6 text-[#FFD700] animate-pulse"
          style={{ textShadow: "0 0 10px rgba(255, 215, 0, 0.5)" }}
        >
          🌸
        </div>
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#00CED1] to-[#FFD700] mb-4 animate-gradient">
          CONGRATULATIONS!
        </h1>
        <p className="text-xl text-[#E0B7C2] animate-fade-in">
          You've unlocked the profile!
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8 items-start flex-1 relative z-10">
        {/* Image Section */}
        <div className="lg:w-1/3 w-full flex-shrink-0">
          <div className="w-full aspect-[4/5] rounded-xl overflow-hidden relative transform-gpu transition-all duration-500 hover:scale-105 shadow-2xl border border-[#FFD700]/40 group">
            <img
              src={`/images/members/${data.image || defaultData.image}`}
              alt={data.name || defaultData.name}
              className="w-full h-full object-cover transform-gpu transition-all duration-700 group-hover:scale-110"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />
            <div
              className="w-full h-full bg-gradient-to-br from-[#FFD700]/50 via-[#00CED1]/50 to-[#355E3B]/50 flex items-center justify-center"
              style={{ display: "none" }}
            >
              <div className={`text-white text-6xl font-bold opacity-90 ${pixelFont.className}`}>
                {(data.name || defaultData.name).split(" ").map((n) => n[0]).join("")}
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/30 via-[#00CED1]/30 to-[#355E3B]/30 opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
          </div>
          <div
            className="mt-4 text-center text-[#E0B7C2] text-lg italic transition-all duration-500 hover:text-[#FFD700] hover:scale-110 cursor-pointer"
            onMouseEnter={() => setIsHoveringQuote(true)}
            onMouseLeave={() => setIsHoveringQuote(false)}
            style={{ textShadow: "0 0 5px rgba(224, 183, 194, 0.5)" }}
          >
            {isHoveringQuote
              ? "Hidup adalah perjalanan, nikmati setiap langkahnya."
              : "人生は旅であり、毎ステップを楽しんでください。"}
          </div>
        </div>

        {/* Info Section */}
        <div className="lg:w-2/3 w-full space-y-6 flex-shrink">
          <div>
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#00CED1] to-[#FFD700] mb-3 animate-gradient">
              {data.name || defaultData.name}
            </h2>
            <p className="text-xl text-[#00CED1] mb-4 font-mono tracking-widest animate-fade-in">
              {data.nrp || defaultData.nrp}
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#FFD700]/40 to-transparent" />
          <div className="grid gap-6">
            {[
              { icon: "🌍", label: "Asal", value: data.origin || defaultData.origin, color: "from-[#FFD700] to-[#00CED1]" },
              { icon: "🎯", label: "Hobi", value: data.hobby || defaultData.hobby, color: "from-[#00CED1] to-[#355E3B]" },
              { icon: "✨", label: "Funfact", value: data.funfact || defaultData.funfact, color: "from-[#355E3B] to-[#FFD700]" },
            ].map((item, i) => (
              <div key={i} className="group">
                <div className="flex items-start gap-4 p-5 bg-[#2F4F4F]/60 rounded-xl backdrop-blur-md hover:bg-[#2F4F4F]/80 transition-all duration-300 transform-gpu hover:scale-102 hover:shadow-lg border border-[#FFD700]/30">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300 text-[#FFD700] animate-pulse">
                    {item.icon}
                  </span>
                  <div className="flex-1">
                    <strong className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.label}:
                    </strong>
                    <p className="text-[#E0B7C2] mt-2 text-base leading-relaxed">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 bg-gradient-to-r from-[#FFD700]/30 to-[#355E3B]/30 rounded-xl border border-[#00CED1]/40 shadow-inner flex-shrink-0 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4">
              <div className="text-3xl text-[#FFD700] animate-bounce">🏅</div>
              <div>
                <div className="text-[#FFD700] font-bold text-lg">Mobile Legend</div>
                <div className="text-[#E0B7C2] text-sm">Top Global Fanny S7 & S12</div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex space-x-6 flex-shrink-0">
            <a
              href={data.linkedin || defaultData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00CED1] hover:text-[#FFD700] transition-all duration-300 hover:scale-110"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.012-3.05-1.864-3.05-1.865 0-2.149 1.451-2.149 2.953v5.701h-3v-11h2.879v1.512h.041c.401-.762 1.381-1.564 2.843-1.564 3.039 0 3.604 2.003 3.604 4.605v6.447z"/>
              </svg>
            </a>
            <a
              href={data.instagram || defaultData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00CED1] hover:text-[#FFD700] transition-all duration-300 hover:scale-110"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.317 3.608 1.292.975.975 1.23 2.242 1.292 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.317 2.633-1.292 3.608-.975.975-2.242 1.23-3.608 1.292-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.317-3.608-1.292-.975-.975-1.23-2.242-1.292-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.317-2.633 1.292-3.608.975-.975 2.242-1.23 3.608-1.292 1.266-.058 1.649.07 4.85.07zm0-2.163c-3.259 0-3.67.013-4.947.072-1.314.059-2.593.32-3.528.868-1.057.6-1.95 1.493-2.549 2.549-.548.935-.809 2.214-.868 3.528-.059 1.277-.072 1.688-.072 4.947s.013 3.67.072 4.947c.059 1.314.32 2.593.868 3.528.6 1.057 1.493 1.95 2.549 2.549.935.548 2.214.809 3.528.868 1.277.059 1.688.072 4.947.072s3.67-.013 4.947-.072c1.314-.059 2.593-.32 3.528-.868 1.057-.6 1.95-1.493 2.549-2.549.548-.935.809-2.214.868-3.528.059-1.277.072-1.688.072-4.947s-.013-3.67-.072-4.947c-.059-1.314-.32-2.593-.868-3.528-.6-1.057-1.493-1.95-2.549-2.549-.935-.548-2.214-.809-3.528-.868-1.277-.059-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-[#FFD700] hover:text-[#00CED1] transition-all duration-300 hover:scale-110 focus:outline-none"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <style jsx>{`
        @keyframes float-smooth {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.25;
          }
          50% {
            transform: translateY(-50px) scale(1.05);
            opacity: 0.35;
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float-smooth {
          animation: float-smooth 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 8s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default function NRP036() {
  const [open, setOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });
    }
  };

  const handleGameWin = () => {
    setShowProfile(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
    setShowProfile(false);
  };

  // Sakura petal drawing function for card
  const drawSakuraPetal = (ctx, x, y, size, rotation) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(size * 0.3, -size * 0.5, size, 0);
    ctx.quadraticCurveTo(size * 0.3, size * 0.5, 0, 0);
    ctx.quadraticCurveTo(-size * 0.3, size * 0.5, -size, 0);
    ctx.quadraticCurveTo(-size * 0.3, -size * 0.5, 0, 0);
    ctx.fill();
    ctx.restore();
  };

  return (
    <>
      <div
        ref={cardRef}
        className="cursor-pointer w-full shrink-0 p-8 rounded-3xl border border-white/10 relative bg-gradient-to-br from-[#2F4F4F] via-[#355E3B] to-[#1B3B1B] backdrop-blur-xl transform-gpu transition-all duration-500 hover:scale-105 group perspective-500"
        onClick={() => setOpen(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      >
        <Noise />
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 206, 209, 0.2), transparent 40%)`,
          }}
        />
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          {[...Array(8)].map((_, i) => (
            <canvas
              key={i}
              width={20}
              height={20}
              className="absolute opacity-60 animate-float"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 4) * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + (i % 3)}s`,
              }}
              ref={(el) => {
                if (el) {
                  const ctx = el.getContext("2d");
                  ctx.fillStyle = `hsl(${Math.random() * 30 + 330}, 70%, 70%)`;
                  drawSakuraPetal(ctx, 10, 10, 8, Math.random() * Math.PI * 2);
                }
              }}
            />
          ))}
        </div>
        <div className="aspect-[4/5] rounded-2xl z-10 relative overflow-hidden transform-gpu transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#FFD700]/30">
          <div className="absolute inset-0 bg-gradient-to-br from-[#00CED1]/20 via-[#FFD700]/20 to-[#355E3B]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
            <div className={`text-white text-center bg-black/60 p-4 rounded-xl backdrop-blur-sm ${pixelFont.className}`}>
              <div className="text-4xl mb-2">🌸</div>
              <div className="text-sm font-bold">Catch Monsters!</div>
            </div>
          </div>
          <img
            src={`/images/members/${data.image}`}
            alt={data.name}
            className="w-full h-full object-cover transform-gpu transition-all duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextElementSibling.style.display = "flex";
            }}
          />
          <div
            className="w-full h-full bg-gradient-to-br from-[#00CED1] via-[#FFD700] to-[#355E3B] flex items-center justify-center"
            style={{ display: "none" }}
          >
            <div className={`text-white text-4xl font-bold opacity-90 ${pixelFont.className}`}>
              {data.name.split(" ").map((n) => n[0]).join("")}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </div>
        <div className="mt-6 z-10 transform-gpu transition-all duration-300 group-hover:translate-y-1">
          <h4 className={`text-xl font-bold text-white mb-2 transform-gpu transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00CED1] group-hover:to-[#FFD700] drop-shadow-lg ${pixelFont.className}`}>
            {data.name}
          </h4>
          <h6 className={`text-white/90 font-mono transform-gpu transition-all duration-300 group-hover:text-[#FFD700] group-hover:tracking-wider drop-shadow-md ${pixelFont.className}`}>
            {data.nrp}
          </h6>
          <div className={`text-[#00CED1] text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold drop-shadow-lg ${pixelFont.className}`}>
            🌸 Catch monsters to unlock profile!
          </div>
          <div className="mt-4 flex space-x-4">
            <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.012-3.05-1.864-3.05-1.865 0-2.149 1.451-2.149 2.953v5.701h-3v-11h2.879v1.512h.041c.401-.762 1.381-1.564 2.843-1.564 3.039 0 3.604 2.003 3.604 4.605v6.447z"/>
              </svg>
            </a>
            <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.317 3.608 1.292.975.975 1.23 2.242 1.292 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.317 2.633-1.292 3.608-.975.975-2.242 1.23-3.608 1.292-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.317-3.608-1.292-.975-.975-1.23-2.242-1.292-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.317-2.633 1.292-3.608.975-.975 2.242-1.23 3.608-1.292 1.266-.058 1.649.07 4.85.07zm0-2.163c-3.259 0-3.67.013-4.947.072-1.314.059-2.593.32-3.528.868-1.057.6-1.95 1.493-2.549 2.549-.548.935-.809 2.214-.868 3.528-.059 1.277-.072 1.688-.072 4.947s.013 3.67.072 4.947c.059 1.314.32 2.593.868 3.528.6 1.057 1.493 1.95 2.549 2.549.935.548 2.214.809 3.528.868 1.277.059 1.688.072 4.947.072s3.67-.013 4.947-.072c1.314-.059 2.593-.32 3.528-.868 1.057-.6 1.95-1.493 2.549-2.549.548-.935.809-2.214.868-3.528.059-1.277.072-1.688.072-4.947s-.013-3.67-.072-4.947c-.059-1.314-.32-2.593-.868-3.528-.6-1.057-1.493-1.95-2.549-2.549-.935-.548-2.214-.809-3.528-.868-1.277-.059-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-br from-[#2F4F4F]/20 via-[#355E3B]/20 to-[#1B3B1B]/20 rounded-3xl transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-1" />
        <div className="absolute -z-20 inset-0 bg-gradient-to-br from-[#00CED1]/10 via-[#FFD700]/10 to-[#355E3B]/10 rounded-3xl blur-xl transform-gpu transition-all duration-700 group-hover:scale-125 group-hover:blur-2xl animate-pulse" />
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={handleCloseDialog} />
          <div className="w-full max-w-4xl max-h-[95vh] bg-gradient-to-br from-[#1E2A44]/95 via-[#2A3D5E]/90 to-[#3E5C76]/95 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden focus:outline-none relative border border-[#D4A5A5]/10">
            <button
              onClick={handleCloseDialog}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 text-white hover:text-[#E0B7C2] hover:rotate-90 hover:scale-110 backdrop-blur-sm border border-gray-700/20 z-50"
            >
              <span className="text-lg">×</span>
            </button>
            {!showProfile ? (
              <MonsterGame onWin={handleGameWin} onClose={handleCloseDialog} />
            ) : (
              <MemberProfile onClose={handleCloseDialog} data={data} />
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(10deg);
          }
        }

        @keyframes twinkle {
          0% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .perspective-500 {
          perspective: 500px;
        }

        .transform-gpu {
          transform: translateZ(0);
        }
      `}</style>
    </>
  );
}