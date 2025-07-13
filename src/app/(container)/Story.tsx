"use client";

import Container from "@/components/commons/Container";
import ARView from "@/components/layouts/Story/StorySection";

export default function Story() {
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
        <div className="w-full h-full overflow-hidden">
          <ARView imageval="/images/background.png" />
        </div>

        <img
          className="absolute w-4 h-4 right-1/2 top-47 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="absolute w-3 h-3 right-[45%] top-37 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="absolute w-2 h-2 right-[45%] top-27 opacity-20 animate-pulse mix-blend-screen"
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
          className="constellation-image bottom-20 left-10 relative w-[250px] brightness-50 contrast-5 drop-shadow-[0_0_6px_rgba(255,255,255,0.2)] mix-blend-screen animate-pulse filter opacity-5"
          src="/images/zodiac/aries.svg"
          alt="Aries"
          style={{
            filter:
              "brightness(0.5) contrast(0.25) drop-shadow(0 0 10px rgba(255,255,255,0.8)) drop-shadow(0 0 20px rgba(0,255,255,0.4))",
            animationDelay: "5s",
          }}
        />

        <div className="w-40 h-40 absolute -bottom-15 left-10 bg-gradient-to-tl from-cyan-300/20 via-fuchsia-500/30 to-transparent blur-3xl rotate-6 mix-blend-screen" />
        <div className="w-40 h-40 absolute top-15 right-10 bg-gradient-to-tl from-cyan-300/20 via-blue-500/30 to-transparent blur-3xl rotate-6 mix-blend-screen" />
        <div className="w-[250px] h-[40px] absolute bottom-6 right-10 bg-green-400/25 blur-xl animate-pulse mix-blend-screen transform rotate-30" />
        <div className="w-[175px] h-[40px] absolute -bottom-12 right-8 bg-blue-800/25 blur-md animate-pulse mix-blend-screen transform rotate-30" />
        <div className="absolute top-[60%] left-[70%] w-1 h-1 bg-white rounded-full blur-[1px] opacity-60"></div>
        <div className="absolute top-[70%] left-[20%] w-2 h-2 bg-white rounded-full blur-[1px] opacity-60"></div>
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-white rounded-full blur-[5px] opacity-80"></div>
        <div className="absolute top-[23%] right-[10%] w-3 h-3 bg-white rounded-full blur-[4px] opacity-80"></div>
        <div className="absolute top-[28%] right-[8%] w-2 h-2 bg-white rounded-full blur-[3px] opacity-80"></div>
        <div className="absolute top-[31%] right-[12%] w-2 h-2 bg-white rounded-full blur-[2px] opacity-80"></div>
        <div className="absolute top-[29%] right-[15%] w-2 h-2 bg-white rounded-full blur-[1px] opacity-50"></div>

        {/* <StorySection /> */}
        {/* jangan dihapus dulu yang masih dicomment */}
      </div>
    </section>
  );
}
