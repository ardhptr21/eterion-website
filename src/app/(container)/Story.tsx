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
      </div>
    </section>
  );
}
