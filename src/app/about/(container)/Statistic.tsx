import Container from "@/components/commons/Container";
import Noise from "@/components/effects/Noise";

export default function Statistic() {
  return (
    <Container as="section" className="md:mt-32 mb-20 px-5">
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 justify-center items-center py-16 md:py-20">
        <div className="flex flex-col items-center gap-5 relative w-full max-w-xs">
          <p className="text-center font-nexa text-xl sm:text-2xl">Our Beginning</p>
          <div className="relative rounded-4xl py-5 px-6 sm:px-10 border-2 border-accent flex items-center justify-center text-center font-nexa font-bold overflow-hidden w-full">
            <Noise />
            <p className="text-xl sm:text-2xl p-4">2 Agustus 2024</p>
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-primary/20 rounded-4xl opacity-50"></div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 relative w-full max-w-xs">
          <p className="text-center font-nexa text-xl sm:text-2xl">Our Members</p>
          <div className="relative rounded-4xl py-5 px-6 sm:px-10 border-2 border-accent flex items-center justify-center text-center font-nexa font-bold overflow-hidden w-full">
            <Noise />
            <p className="text-xl sm:text-2xl p-4">120 People</p>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/20 rounded-4xl opacity-50"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
