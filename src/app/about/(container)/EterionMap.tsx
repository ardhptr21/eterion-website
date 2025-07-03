"use client";
import Container from "@/components/commons/Container";
import InteractiveMap from "@/components/map/InteractiveMap";

export default function EterionMap() {
  return (
    <Container as="section" className="relative w-full p-4 shadow-2xl backdrop-blur-lg">
      <div className="relative px-2 pb-4 sm:px-4">
        <div>
          <h2 className="relative text-6xl font-bold text-white mb-32">Eterion Map</h2>
          <div
            className="absolute w-[60%] h-[100px] bg-gradient-to-t from-[#0B068E] to-accent opacity-90 blur-xl -z-10"
            style={{
              borderRadius: "60% 40% 60% 40% / 60% 60% 40% 40%",
              left: "-70px",
              top: "-20px",
            }}
          />
        </div>
        <div className="mt-5">
          <InteractiveMap />
        </div>
      </div>
    </Container>
  );
}
