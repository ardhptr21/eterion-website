import { cn } from "@/lib/utils";
import {
  Crosshair,
  Github,
  Instagram,
  Linkedin,
  Lock,
  LockOpen,
  Shield,
  Star,
  Target,
  Trophy,
  Unlock,
  X,
} from "lucide-react";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface MemberData {
  name: string;
  nrp: string;
  image: string;
  funfact: string;
  hobby: string;
  origin: string;
  socials: {
    instagram: string;
    linkedin: string;
    github: string;
  };
}

interface Player {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface Bullet {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
}

interface Enemy {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  color: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  color: string;
}

interface GameState {
  player: Player;
  bullets: Bullet[];
  enemies: Enemy[];
  particles: Particle[];
  keys: Record<string, boolean>;
  lastEnemySpawn: number;
  lastShot: number;
}

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkle: number;
}

const data: MemberData = {
  name: "Ardhi Putra Pradana",
  nrp: "5027241022",
  image: "/images/members/022.jpg",
  funfact: "sering dikira islam :v",
  hobby: "main musik 🎸",
  origin: "Semarang",
  socials: {
    instagram: "ardhptr21",
    linkedin: "ardhptr21",
    github: "ardhptr21",
  },
};

const CyberpunkGrid: React.FC<{ className?: string }> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;
    let isHovered = false;
    let resizeTimeout: NodeJS.Timeout | null = null;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.scale(dpr, dpr);

      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      time += 0.012;

      ctx.strokeStyle = "rgba(0, 255, 255, 0.1)";
      ctx.lineWidth = 1;

      const gridSize = 30;
      const offset = Math.floor((time * 20) % gridSize);

      for (let x = -offset; x <= width + gridSize; x += gridSize) {
        if (x >= -gridSize && x <= width + gridSize) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
          ctx.stroke();
        }
      }

      for (let y = -offset; y <= height + gridSize; y += gridSize) {
        if (y >= -gridSize && y <= height + gridSize) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }

      const scanProgress = (time * 0.8) % 1;
      const scanLine = scanProgress * height;

      const gradient = ctx.createLinearGradient(0, scanLine - 10, 0, scanLine + 10);
      gradient.addColorStop(0, "rgba(0, 255, 255, 0)");
      gradient.addColorStop(0.5, "rgba(0, 255, 255, 0.3)");
      gradient.addColorStop(1, "rgba(0, 255, 255, 0)");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(0, scanLine);
      ctx.lineTo(width, scanLine);
      ctx.stroke();

      if (Math.random() < 0.008) {
        ctx.fillStyle = `rgba(0, 255, 255, ${Math.random() * 0.05 + 0.02})`;
        const glitchX = Math.random() * width;
        const glitchY = Math.random() * height;
        ctx.fillRect(glitchX, glitchY, Math.random() * 40 + 10, 1);
      }

      ctx.strokeStyle = "rgba(0, 255, 255, 0.2)";
      ctx.lineWidth = 1;

      const cornerSize = 15;

      ctx.beginPath();
      ctx.moveTo(0, cornerSize);
      ctx.lineTo(0, 0);
      ctx.lineTo(cornerSize, 0);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(width - cornerSize, 0);
      ctx.lineTo(width, 0);
      ctx.lineTo(width, cornerSize);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, height - cornerSize);
      ctx.lineTo(0, height);
      ctx.lineTo(cornerSize, height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(width - cornerSize, height);
      ctx.lineTo(width, height);
      ctx.lineTo(width, height - cornerSize);
      ctx.stroke();

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    const debouncedResize = () => {
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      resizeTimeout = setTimeout(resize, 16);
    };

    resize();
    animate();

    const resizeObserver = new ResizeObserver(debouncedResize);

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
      canvas.parentElement.addEventListener("mouseenter", handleMouseEnter);
      canvas.parentElement.addEventListener("mouseleave", handleMouseLeave);
    }

    window.addEventListener("resize", debouncedResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", debouncedResize);
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }
      resizeObserver.disconnect();
      if (canvas.parentElement) {
        canvas.parentElement.removeEventListener("mouseenter", handleMouseEnter);
        canvas.parentElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        transform: "translateZ(0)",
        willChange: "transform",
      }}
    />
  );
};

interface SpaceShooterProps {
  onComplete: () => void;
  onClose: () => void;
}

const SpaceShooter: React.FC<SpaceShooterProps> = ({ onComplete, onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState<number>(0);
  const [gameState, setGameState] = useState<"intro" | "playing" | "won" | "lost">("intro");
  const [lives, setLives] = useState<number>(3);
  const [showWinMessage, setShowWinMessage] = useState<boolean>(false);
  const WINNING_SCORE = 21;

  const gameRef = useRef<GameState>({
    player: { x: 200, y: 300, width: 30, height: 30 },
    bullets: [],
    enemies: [],
    particles: [],
    keys: {},
    lastEnemySpawn: 0,
    lastShot: 0,
  });

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (
      [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        " ",
        "Enter",
        "w",
        "a",
        "s",
        "d",
      ].includes(e.key)
    ) {
      e.preventDefault();
    }
    gameRef.current.keys[e.key] = true;
  }, []);

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    if (
      [
        "ArrowUp",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        " ",
        "Enter",
        "w",
        "a",
        "s",
        "d",
      ].includes(e.key)
    ) {
      e.preventDefault();
    }
    gameRef.current.keys[e.key] = false;
  }, []);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const game = gameRef.current;

    canvas.width = 400;
    canvas.height = 500;

    const createParticles = (x: number, y: number, color: string = "#00ffff") => {
      for (let i = 0; i < 12; i++) {
        game.particles.push({
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          life: 40,
          color: color,
        });
      }
    };

    let animationId: number;
    let time = 0;

    const gameLoop = () => {
      if (gameState !== "playing") return;

      time += 16;

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#0a0a0a");
      gradient.addColorStop(0.5, "#1a1a2e");
      gradient.addColorStop(1, "#0f0f0f");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(0, 255, 255, 0.1)";
      ctx.lineWidth = 1;
      for (let i = 0; i < canvas.width; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
      }
      for (let i = 0; i < canvas.height; i += 40) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      ctx.fillStyle = "rgba(0, 255, 255, 0.8)";
      for (let i = 0; i < 30; i++) {
        const x = (i * 47) % canvas.width;
        const y = (i * 31 + time * 0.15) % canvas.height;
        const size = Math.sin(time * 0.01 + i) * 0.5 + 1;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      const player = game.player;
      if (game.keys["ArrowLeft"] || game.keys["a"]) {
        player.x = Math.max(0, player.x - 6);
      }
      if (game.keys["ArrowRight"] || game.keys["d"]) {
        player.x = Math.min(canvas.width - player.width, player.x + 6);
      }
      if (game.keys["ArrowUp"] || game.keys["w"]) {
        player.y = Math.max(0, player.y - 6);
      }
      if (game.keys["ArrowDown"] || game.keys["s"]) {
        player.y = Math.min(canvas.height - player.height, player.y + 6);
      }

      if ((game.keys[" "] || game.keys["Enter"]) && time - game.lastShot > 150) {
        game.bullets.push({
          x: player.x + player.width / 2 - 2,
          y: player.y,
          width: 4,
          height: 12,
          speed: 10,
        });
        game.lastShot = time;
      }

      if (time - game.lastEnemySpawn > 800) {
        game.enemies.push({
          x: Math.random() * (canvas.width - 30),
          y: -30,
          width: 30,
          height: 30,
          speed: 2.5 + Math.random() * 2.5,
          color: `hsl(${Math.random() * 60 + 340}, 80%, 60%)`,
        });
        game.lastEnemySpawn = time;
      }

      game.bullets = game.bullets.filter((bullet) => {
        bullet.y -= bullet.speed;
        return bullet.y > -bullet.height;
      });

      game.enemies = game.enemies.filter((enemy) => {
        enemy.y += enemy.speed;
        return enemy.y < canvas.height + enemy.height;
      });

      game.particles = game.particles.filter((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;
        return particle.life > 0;
      });

      game.bullets.forEach((bullet, bulletIndex) => {
        game.enemies.forEach((enemy, enemyIndex) => {
          if (
            bullet.x < enemy.x + enemy.width &&
            bullet.x + bullet.width > enemy.x &&
            bullet.y < enemy.y + enemy.height &&
            bullet.y + bullet.height > enemy.y
          ) {
            createParticles(enemy.x + enemy.width / 2, enemy.y + enemy.height / 2, "#00ffff");
            game.bullets.splice(bulletIndex, 1);
            game.enemies.splice(enemyIndex, 1);
            setScore((prev) => prev + 1);
          }
        });
      });

      game.enemies.forEach((enemy, enemyIndex) => {
        if (
          player.x < enemy.x + enemy.width &&
          player.x + player.width > enemy.x &&
          player.y < enemy.y + enemy.height &&
          player.y + player.height > enemy.y
        ) {
          createParticles(player.x + player.width / 2, player.y + player.height / 2, "#ff4444");
          game.enemies.splice(enemyIndex, 1);
          setLives((prev) => prev - 1);
        }
      });

      ctx.fillStyle = "#00ffff";
      ctx.fillRect(player.x, player.y, player.width, player.height);
      ctx.fillStyle = "#0099cc";
      ctx.fillRect(player.x + 3, player.y + 3, player.width - 6, player.height - 6);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(player.x + 10, player.y + 10, player.width - 20, player.height - 20);

      game.bullets.forEach((bullet) => {
        ctx.shadowColor = "#00ffff";
        ctx.shadowBlur = 10;
        ctx.fillStyle = "#00ffff";
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
        ctx.shadowBlur = 0;
      });

      game.enemies.forEach((enemy) => {
        ctx.shadowColor = enemy.color;
        ctx.shadowBlur = 8;
        ctx.fillStyle = enemy.color;
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        ctx.fillRect(enemy.x + 4, enemy.y + 4, enemy.width - 8, enemy.height - 8);
        ctx.shadowBlur = 0;
      });

      game.particles.forEach((particle) => {
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.life / 40;
        ctx.fillRect(particle.x, particle.y, 4, 4);
        ctx.globalAlpha = 1;
      });

      animationId = requestAnimationFrame(gameLoop);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    gameLoop();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [gameState, handleKeyDown, handleKeyUp]);

  useEffect(() => {
    if (score >= WINNING_SCORE) {
      setGameState("won");
      setShowWinMessage(true);
      setTimeout(() => {
        setShowWinMessage(false);
        onComplete();
      }, 4000); // Increased to 4 seconds for better animation timing
    } else if (lives <= 0) {
      setGameState("lost");
    }
  }, [score, lives, onComplete]);

  const startGame = () => {
    setGameState("playing");
  };

  const resetGame = () => {
    setScore(0);
    setLives(3);
    setGameState("playing");
    setShowWinMessage(false);
    gameRef.current = {
      player: { x: 200, y: 300, width: 30, height: 30 },
      bullets: [],
      enemies: [],
      particles: [],
      keys: {},
      lastEnemySpawn: 0,
      lastShot: 0,
    };
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 border border-cyan-500/30 rounded-xl p-6 max-w-md w-full shadow-2xl shadow-cyan-500/10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-cyan-400 flex items-center gap-2">
            <Shield className="text-cyan-400" />
            SYSTEM BREACH
          </h3>
          <button onClick={onClose} className="text-cyan-400 hover:text-cyan-300 transition-colors">
            <X size={24} />
          </button>
        </div>

        {gameState === "intro" && (
          <div className="bg-black/80 border border-cyan-500/20 rounded-lg p-6 mb-4 relative overflow-hidden">
            <CyberpunkGrid className="opacity-20" />
            <div className="relative z-10 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full border border-red-500/50 mb-4">
                  <Lock className="text-red-400 animate-pulse" size={32} />
                </div>
                <h4 className="text-xl font-bold text-cyan-400 mb-2 font-mono">
                  SECURITY BREACH INITIATED
                </h4>
                <p className="text-sm text-gray-300 mb-4 font-mono">
                  Unauthorized access detected. Deploying defensive measures.
                </p>
              </div>

              <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-4 mb-6">
                <h5 className="text-cyan-400 font-mono text-sm mb-3 uppercase tracking-wide">
                  Mission Brief:
                </h5>
                <div className="text-xs text-gray-300 space-y-2 font-mono">
                  <p>• Eliminate 21 security drones to breach the system</p>
                  <p>• Avoid collision with hostile entities</p>
                  <p>• You have 3 shield charges available</p>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-cyan-500/30 rounded-lg p-4 mb-6">
                <h5 className="text-cyan-400 font-mono text-sm mb-3 uppercase tracking-wide">
                  Controls:
                </h5>
                <div className="text-xs text-gray-300 space-y-1 font-mono">
                  <p>WASD / Arrow Keys: Navigate</p>
                  <p>SPACE / ENTER: Fire weapon</p>
                </div>
              </div>

              <button
                onClick={startGame}
                className="px-8 py-3 bg-cyan-600/20 border border-cyan-500/50 text-cyan-400 rounded hover:bg-cyan-600/30 transition-colors font-mono uppercase tracking-wide text-sm"
              >
                Initialize Breach
              </button>
            </div>
          </div>
        )}

        {gameState === "playing" && (
          <div className="bg-black/80 border border-cyan-500/20 rounded-lg p-4 mb-4 relative overflow-hidden">
            <CyberpunkGrid className="opacity-20" />
            <div className="relative z-10">
              <div className="flex justify-between text-cyan-400 mb-2 font-mono text-sm">
                <span>TARGETS: {score}/21</span>
                <span>SHIELDS: {lives}</span>
              </div>
              <canvas
                ref={canvasRef}
                className="w-full bg-black/50 rounded border border-cyan-500/30"
                style={{ aspectRatio: "4/5" }}
              />
            </div>
          </div>
        )}

        {gameState === "won" && (
          <div className="bg-black/80 border border-cyan-500/20 rounded-lg p-6 mb-4 relative overflow-hidden">
            <CyberpunkGrid className="opacity-20" />
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Trophy className="text-yellow-400 animate-pulse" size={48} />
                  <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-lg animate-pulse" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-cyan-400 mb-2 font-mono uppercase tracking-wide">
                BREACH SUCCESSFUL
              </h4>
              <p className="text-sm text-gray-300 font-mono mb-4">
                Security systems compromised. Access granted to classified data.
              </p>

              {showWinMessage && (
                <div className="space-y-4">
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 mb-4 animate-pulse">
                    <div className="flex items-center justify-center gap-2 text-green-400 mb-2">
                      <LockOpen size={20} />
                      <span className="font-mono text-sm uppercase">Data Unlocked</span>
                    </div>
                    <p className="text-xs text-green-300 font-mono">
                      Personal information now available for viewing
                    </p>
                  </div>

                  <div className="bg-blue-500/20 border border-blue-500/50 rounded-lg p-4 animate-pulse">
                    <div className="flex items-center justify-center gap-2 text-blue-400 mb-2">
                      <Target size={20} />
                      <span className="font-mono text-sm uppercase">Accessing Database</span>
                    </div>
                    <div className="flex justify-center">
                      <div className="flex space-x-1">
                        <div
                          className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                          style={{ animationDelay: "0s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="text-cyan-400 font-mono text-sm mt-10">
                <p>Final Score: {score} targets eliminated</p>
                <p className="text-yellow-400 animate-pulse mt-2">Preparing data presentation...</p>
              </div>
            </div>
          </div>
        )}

        {gameState === "lost" && (
          <div className="bg-black/80 border border-cyan-500/20 rounded-lg p-6 mb-4 relative overflow-hidden">
            <CyberpunkGrid className="opacity-20" />
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <X className="text-red-400 animate-pulse" size={48} />
                  <div className="absolute inset-0 bg-red-400/20 rounded-full blur-lg animate-pulse" />
                </div>
              </div>
              <h4 className="text-xl font-bold text-red-400 mb-2 font-mono uppercase tracking-wide">
                SYSTEM LOCKDOWN
              </h4>
              <p className="text-sm text-gray-300 font-mono mb-4">
                Security protocols activated. Breach attempt failed.
              </p>
              <p className="text-xs text-red-300 font-mono mb-4">
                Score: {score}/21 targets eliminated
              </p>
              <button
                onClick={resetGame}
                className="px-6 py-2 bg-red-600/20 border border-red-500/50 text-red-400 rounded hover:bg-red-600/30 transition-colors font-mono uppercase tracking-wide"
              >
                RETRY BREACH
              </button>
            </div>
          </div>
        )}

        {gameState === "playing" && (
          <div className="text-center text-cyan-400 text-xs font-mono space-y-1">
            <p>WASD / ARROWS: Navigate</p>
            <p>SPACE / ENTER: Fire</p>
            <p className="text-yellow-400">ELIMINATE 21 TARGETS TO BREACH SYSTEM</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default function NRP022() {
  const [open, setOpen] = useState<boolean>(false);
  const [showGame, setShowGame] = useState<boolean>(false);
  const [dataUnlocked, setDataUnlocked] = useState<boolean>(false);
  const [showUnlockAnimation, setShowUnlockAnimation] = useState<boolean>(false);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const handleCardClick = () => {
    if (isProcessing) return; // Prevent clicks during processing

    if (dataUnlocked) {
      setOpen(true);
    } else {
      setShowGame(true);
    }
  };

  const handleGameComplete = () => {
    setIsProcessing(true);
    setShowUnlockAnimation(true);
    setTimeout(() => {
      setDataUnlocked(true);
      setShowGame(false);
      setTimeout(() => {
        setOpen(true);
        setShowUnlockAnimation(false);
        setIsProcessing(false);
      }, 1000);
    }, 2000);
  };

  // Prevent interactions during processing
  const preventInteraction = (e: React.MouseEvent) => {
    if (isProcessing) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <>
      {/* Overlay to prevent interactions during processing */}
      {isProcessing && (
        <div
          className="fixed inset-0 z-40 bg-transparent cursor-wait"
          style={{ pointerEvents: "all" }}
        />
      )}

      <div
        className={cn(
          "cursor-pointer w-full shrink-0 p-6 rounded-xl border border-cyan-500/30 relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 backdrop-blur-lg hover:scale-[101%] transition-all duration-300 overflow-hidden shadow-2xl shadow-cyan-500/10",
          {
            "animate-pulse border-green-500/60 shadow-green-500/20": showUnlockAnimation,
            "cursor-wait pointer-events-none": isProcessing,
          }
        )}
        onClick={handleCardClick}
        onMouseDown={preventInteraction}
        onMouseUp={preventInteraction}
        style={{ pointerEvents: isProcessing ? "none" : "auto" }}
      >
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <CyberpunkGrid className="opacity-30" />
        </div>

        {showUnlockAnimation && (
          <div className="absolute inset-0 bg-green-500/10 rounded-xl animate-pulse"></div>
        )}

        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="circuit" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ffff" />
                <stop offset="50%" stopColor="#0099cc" />
                <stop offset="100%" stopColor="#006699" />
              </linearGradient>
            </defs>
            <path
              d="M20,20 L80,20 L80,60 L140,60 L140,100 L200,100 L200,140 L260,140 L260,180 L320,180"
              stroke="url(#circuit)"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="80" cy="20" r="3" fill="#00ffff" />
            <circle cx="140" cy="60" r="3" fill="#00ffff" />
            <circle cx="200" cy="100" r="3" fill="#00ffff" />
            <circle cx="260" cy="140" r="3" fill="#00ffff" />
          </svg>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 rounded-xl" />

        <div className="relative z-10">
          <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden border border-cyan-500/30 mb-6 relative">
            {dataUnlocked ? (
              <div className="w-full h-full relative">
                <img
                  src={data.image}
                  alt={data.name}
                  className={cn("w-full h-full object-cover z-20 transition-all duration-1000", {
                    "animate-pulse": showUnlockAnimation,
                  })}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.nextElementSibling?.classList.remove("hidden");
                  }}
                />

                <div className="absolute inset-0 bg-black opacity-50" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-cyan-500/10" />

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-cyan-900 border-t-2 border-cyan-500/30">
                  <div className="font-mono flex justify-center items-center gap-3">
                    <LockOpen size={24} className="text-green-400" />
                    <p className="text-sm opacity-70">DATA UNLOCKED</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-gray-900 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-pulse" />

                <div className="text-center text-cyan-400 relative z-10">
                  <Lock size={48} className="mx-auto mb-3 text-red-400 animate-pulse" />
                  <div className="font-mono">
                    <p className="text-lg font-bold tracking-wider">CLASSIFIED</p>
                    <p className="text-sm opacity-70 mt-1">ACCESS DENIED</p>
                  </div>
                </div>
                <div className="absolute bottom-4 w-full left-1/2 transform -translate-x-1/2 space-y-2">
                  <Crosshair className="mx-auto text-cyan-200 animate-spin" size={16} />
                  <p className="text-[10px] opacity-70 text-cyan-200 text-center font-mono animate-pulse">
                    click, play and win the game to unlock
                  </p>
                </div>
              </div>
            )}

            <div className="absolute top-3 right-3 flex items-center gap-2">
              <div
                className={cn("w-2 h-2 rounded-full animate-pulse", {
                  "bg-green-400": dataUnlocked,
                  "bg-red-400": !dataUnlocked,
                  "bg-yellow-400 animate-bounce": showUnlockAnimation,
                })}
              />
              <span
                className={cn("text-xs font-mono transition-all duration-500", {
                  "text-green-400": dataUnlocked,
                  "text-red-400": !dataUnlocked,
                  "text-yellow-400": showUnlockAnimation,
                })}
              >
                {showUnlockAnimation ? "UNLOCKING..." : dataUnlocked ? "ONLINE" : "LOCKED"}
              </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="text-center">
            <h4
              className={cn(
                "text-xl font-bold mb-2 text-cyan-400 font-mono tracking-wide transition-all duration-500",
                {
                  "text-yellow-400 animate-pulse": showUnlockAnimation,
                }
              )}
            >
              {showUnlockAnimation
                ? "DECRYPTING..."
                : dataUnlocked
                ? data.name
                : "DATA UNAVAILABLE"}
            </h4>
            <p
              className={cn("mb-4 text-blue-300 font-mono text-sm transition-all duration-500", {
                "text-yellow-300 animate-pulse": showUnlockAnimation,
              })}
            >
              {showUnlockAnimation
                ? "PROCESSING..."
                : dataUnlocked
                ? `ID: ${data.nrp}`
                : "AUTHORIZATION REQUIRED"}
            </p>

            {!dataUnlocked && !showUnlockAnimation && (
              <div className="flex items-center justify-center space-x-2 text-orange-400">
                <Target size={16} />
                <span className="text-sm font-mono uppercase tracking-wide">
                  Security Breach Required
                </span>
              </div>
            )}

            {showUnlockAnimation && (
              <div className="flex items-center justify-center space-x-2 text-yellow-400 animate-bounce">
                <LockOpen size={16} />
                <span className="text-sm font-mono uppercase tracking-wide">Access Granted</span>
              </div>
            )}
          </div>
        </div>

        <div className="absolute inset-0 rounded-xl border border-cyan-500/50 opacity-0 hover:opacity-100 transition-opacity duration-300" />

        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50" />
      </div>

      {showGame && !isProcessing && (
        <SpaceShooter onComplete={handleGameComplete} onClose={() => setShowGame(false)} />
      )}

      {open && dataUnlocked && !isProcessing && <MemberDialog open={open} onOpenChange={setOpen} />}
    </>
  );
}

interface MemberDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function MemberDialog({ open, onOpenChange }: MemberDialogProps) {
  const [showContent, setShowContent] = useState(false);
  const [animateElements, setAnimateElements] = useState({
    image: false,
    name: false,
    details: false,
    socials: false,
  });

  useEffect(() => {
    if (open) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      // Start animation sequence
      setTimeout(() => setShowContent(true), 100);
      setTimeout(() => setAnimateElements((prev) => ({ ...prev, image: true })), 300);
      setTimeout(() => setAnimateElements((prev) => ({ ...prev, name: true })), 600);
      setTimeout(() => setAnimateElements((prev) => ({ ...prev, details: true })), 900);
      setTimeout(() => setAnimateElements((prev) => ({ ...prev, socials: true })), 1200);

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [open]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onOpenChange(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [open, onOpenChange]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-500"
        onClick={() => onOpenChange(false)}
      />

      <div
        className={cn(
          "relative w-full max-w-lg max-h-[95vh] bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden flex flex-col transition-all duration-500",
          {
            "opacity-100 scale-100": showContent,
            "opacity-0 scale-95": !showContent,
          }
        )}
      >
        <div className="absolute inset-0 rounded-xl overflow-hidden">
          <CyberpunkGrid className="opacity-20" />
        </div>

        <div className="relative z-10 bg-black/50 border-b border-cyan-500/30 p-4 flex-shrink-0">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 font-mono text-sm uppercase tracking-wide">
                Data Retrieved
              </span>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="relative z-10 flex-1 overflow-y-auto">
          <div className="p-8">
            <div
              className={cn(
                "w-full aspect-[4/5] rounded-lg overflow-hidden mb-6 relative border border-cyan-500/30 bg-gradient-to-br from-slate-800 to-gray-900 transition-all duration-700",
                {
                  "opacity-100 translate-y-0": animateElements.image,
                  "opacity-0 translate-y-4": !animateElements.image,
                }
              )}
            >
              <div className="w-full h-full relative">
                <img
                  src={data.image}
                  alt={data.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.nextElementSibling?.classList.remove("hidden");
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-cyan-500/10" />

                <div className="absolute inset-0 bg-black opacity-50" />
              </div>
            </div>

            <div
              className={cn("text-center mb-6 transition-all duration-700", {
                "opacity-100 translate-y-0": animateElements.name,
                "opacity-0 translate-y-4": !animateElements.name,
              })}
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-2 font-mono tracking-wide">
                {data.name}
              </h2>
              <p className="text-lg text-blue-300 font-mono">ID: {data.nrp}</p>
            </div>

            <div
              className={cn("border-t border-cyan-500/30 pt-6 transition-all duration-700", {
                "opacity-100 translate-y-0": animateElements.details,
                "opacity-0 translate-y-4": !animateElements.details,
              })}
            >
              <div className="space-y-4 text-white">
                <div
                  className="flex items-center space-x-3 bg-slate-800/30 p-3 rounded border border-cyan-500/20 animate-fadeInUp"
                  style={{ animationDelay: "0.1s" }}
                >
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-cyan-300 font-mono text-sm uppercase tracking-wide min-w-[80px]">
                    Origin:
                  </span>
                  <span className="font-mono">{data.origin}</span>
                </div>
                <div
                  className="flex items-center space-x-3 bg-slate-800/30 p-3 rounded border border-cyan-500/20 animate-fadeInUp"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <span className="text-blue-300 font-mono text-sm uppercase tracking-wide min-w-[80px]">
                    Hobby:
                  </span>
                  <span className="font-mono">{data.hobby}</span>
                </div>
                <div
                  className="flex items-center space-x-3 bg-slate-800/30 p-3 rounded border border-cyan-500/20 animate-fadeInUp"
                  style={{ animationDelay: "0.3s" }}
                >
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
                  <span className="text-teal-300 font-mono text-sm uppercase tracking-wide min-w-[80px]">
                    Intel:
                  </span>
                  <span className="font-mono">{data.funfact}</span>
                </div>
              </div>
            </div>

            <div
              className={cn("mt-6 text-center transition-all duration-700", {
                "opacity-100 translate-y-0": animateElements.details,
                "opacity-0 translate-y-4": !animateElements.details,
              })}
            >
              <div className="inline-flex items-center space-x-2 text-green-400 bg-green-400/10 px-4 py-2 rounded border border-green-400/30 animate-pulse">
                <Unlock size={20} />
                <span className="text-sm font-mono uppercase tracking-wide">Access Granted</span>
              </div>
            </div>

            {/* Social Media Section */}
            <div
              className={cn("mt-8 border-t border-cyan-500/30 pt-6 transition-all duration-700", {
                "opacity-100 translate-y-0": animateElements.socials,
                "opacity-0 translate-y-4": !animateElements.socials,
              })}
            >
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-cyan-400 mb-2 font-mono tracking-wide">
                  SOCIAL NETWORKS
                </h3>
                <p className="text-xs text-gray-400 font-mono">
                  Connect with me on these platforms
                </p>
              </div>

              <div className="flex justify-center space-x-4">
                <a
                  href={`https://instagram.com/${data.socials.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 bg-pink-500/20 border border-pink-500/50 rounded-lg hover:bg-pink-500/30 transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={20} className="text-pink-400 group-hover:text-pink-300" />
                </a>

                <a
                  href={`https://linkedin.com/in/${data.socials.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 bg-blue-500/20 border border-blue-500/50 rounded-lg hover:bg-blue-500/30 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} className="text-blue-400 group-hover:text-blue-300" />
                </a>

                <a
                  href={`https://github.com/${data.socials.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 bg-gray-500/20 border border-gray-500/50 rounded-lg hover:bg-gray-500/30 transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} className="text-gray-400 group-hover:text-gray-300" />
                </a>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-400 font-mono">
                  @{data.socials.instagram} • All platforms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
