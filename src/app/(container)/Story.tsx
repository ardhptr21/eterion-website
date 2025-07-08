"use client";

import Container from "@/components/commons/Container";
import ARView from "@/components/layouts/Story/StorySection";
import { useEffect } from "react";

export default function Story() {
  // Starfield effect
  useEffect(() => {
    const canvas = document.getElementById("starfield-story") as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    
    // Create stars
    const stars = Array.from({ length: 1500 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.1,
      opacity: Math.random() * 0.8 + 0.2,
      twinkle: Math.random() * 0.02 + 0.01
    }));
    
    let animationId: number;
    let time = 0;
    
    const animate = () => {
      time += 0.01;
      
      // Clear canvas completely untuk efek bersih
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars dengan efek neon/xenon
      stars.forEach(star => {
        // Update position
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
        
        // Enhanced twinkling untuk efek neon
        const twinkleIntensity = star.opacity + Math.sin(time * star.twinkle) * 0.5;
        const brightness = Math.max(0.4, Math.min(1, twinkleIntensity));
        
        // Pilih warna neon/xenon berdasarkan posisi
        const colorVariant = Math.floor((star.x + star.y) / 150) % 4;
        let starColor;
        
        switch(colorVariant) {
          case 0:
            starColor = `rgba(0, 255, 255, ${brightness})`; // Cyan neon
            break;
          case 1:
            starColor = `rgba(255, 255, 255, ${brightness})`; // White xenon
            break;
          case 2:
            starColor = `rgba(150, 220, 255, ${brightness})`; // Light blue neon
            break;
          default:
            starColor = `rgba(200, 240, 255, ${brightness})`; // Pale blue xenon
        }
        
        // Core star dengan brightness tinggi
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = starColor;
        ctx.fill();
        
        // Tambah sparkle hanya untuk bintang terang
        if (brightness > 0.8 && star.size > 1.2) {
          ctx.strokeStyle = starColor;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          
          // Horizontal sparkle
          ctx.moveTo(star.x - star.size * 2.5, star.y);
          ctx.lineTo(star.x + star.size * 2.5, star.y);
          
          // Vertical sparkle
          ctx.moveTo(star.x, star.y - star.size * 2.5);
          ctx.lineTo(star.x, star.y + star.size * 2.5);
          
          ctx.stroke();
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle resize
    const handleResize = () => {
      setCanvasSize();
      // Redistribute stars
      stars.forEach(star => {
        star.x = Math.random() * canvas.width;
        star.y = Math.random() * canvas.height;
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="h-[120vh]">
      <div className="w-full h-[110vh] relative">
        <Container className="flex justify-start relative z-10">
          <div
            className="absolute w-[60%] h-[100px] bg-gradient-to-t from-[#0B068E] to-[#310E61] opacity-90 blur-xl -z-10"
            style={{
              // clipPath: 'ellipse(60% 40% at 50% 50%)',
              borderRadius: "60% 40% 60% 40% / 60% 60% 40% 40%",
              left: "-70px",
              top: "-20px",
            }}
          />
          <h1 className="text-5xl font-bold font-nexa">Our Story</h1>
        </Container>
        <div className="w-full -top-10 h-full">
          <ARView imageval="/images/background.png" />
        </div>
        <img
          className="absolute w-4 h-4 right-1/2 top-25 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="absolute w-3 h-3 bottom-20 left-15 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="absolute w-5 h-5 bottom-10 right-20 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="absolute w-3 h-3 top-30 left-25 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="absolute w-3 h-3 bottom-5 left-1/2 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="absolute w-3 h-3 bottom-5 left-30 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="absolute w-3 h-3 bottom-5 left-50 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="absolute w-3 h-4 bottom-2 right-1/2 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="constellation-image bottom-20 left-10 relative w-[250px] brightness-150 contrast-125 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] mix-blend-screen animate-pulse filter opacity-60"
          src="/images/zodiac/aries.svg"
          alt="Aries"
          style={{
            filter:
              "brightness(1.5) contrast(1.25) drop-shadow(0 0 20px rgba(255,255,255,0.8)) drop-shadow(0 0 40px rgba(0,255,255,0.4))",
            animationDelay: "1.5s",
          }}
        />
        <div className="w-50 h-20 absolute -bottom-25 left-1/2 bg-gradient-to-r from-transparent via-purple-400/25 to-transparent blur-xl transform rotate-12 mix-blend-screen" />
        <div className="w-80 h-20 absolute bottom-2 -right-13 bg-gradient-to-r from-transparent via-blue-400/25 to-transparent blur-xl transform rotate-90 mix-blend-screen" />
        {/* <StorySection /> */}
        {/* jangan dihapus dulu yang masih dicomment */}

        {/* Starfield Background - bintang-bintang kecil yang banyak */}
        <div className="absolute inset-0 pointer-events-none">
          <canvas 
            id="starfield-story" 
            className="absolute inset-0 w-full h-full opacity-40"
            style={{
              mixBlendMode: "screen",
              zIndex: 0
            }}
          ></canvas>
        </div>
      </div>
    </section>
  );
}
