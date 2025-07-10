import Container from "@/components/commons/Container";
import Noise from "@/components/effects/Noise";

export default function Statistic() {
  return (
    <Container as="section" className="mt-16 sm:mt-20 md:mt-24 lg:mt-32 mb-12 sm:mb-16 md:mb-20">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 justify-center items-center py-8 sm:py-12 md:py-16 lg:py-20 px-4">
        <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 relative w-full sm:w-auto">
          <p className="text-center font-nexa text-lg sm:text-xl md:text-2xl text-accent">Our Beginning</p>
          <div className="relative rounded-2xl sm:rounded-3xl md:rounded-4xl py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 border-2 border-accent flex items-center justify-center text-center font-nexa font-bold w-full sm:w-auto min-w-[200px] overflow-hidden">
            <Noise />
            <p className="text-lg sm:text-xl md:text-2xl p-2 sm:p-3 md:p-4 relative z-10 text-white">2 Agustus 2024</p>
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-primary/20 rounded-2xl sm:rounded-3xl md:rounded-4xl opacity-50"></div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 w-full sm:w-auto">
          <p className="text-center font-nexa text-lg sm:text-xl md:text-2xl text-accent">Our Members</p>
          <div className="relative rounded-2xl sm:rounded-3xl md:rounded-4xl py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-10 border-2 border-accent flex items-center justify-center text-center font-nexa font-bold overflow-hidden w-full sm:w-auto min-w-[200px]">
            <Noise />
            <p className="text-lg sm:text-xl md:text-2xl p-2 sm:p-3 md:p-4 relative z-10 text-white">120 People</p>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/20 rounded-2xl sm:rounded-3xl md:rounded-4xl opacity-50"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
