import Container from "@/components/commons/Container";
import Noise from "@/components/effects/Noise";
import { FaUsers, FaCalendarAlt } from "react-icons/fa";

export default function Statistic() {
  return (
    <Container as="section" className="mt-32 mb-20">
      <div className="flex flex-col sm:flex-row gap-10 justify-center items-center py-20">
        <div className="flex flex-col items-center gap-5 relative group transition-transform duration-500 hover:scale-105">
          <div className="flex items-center gap-2 mb-2">
            <FaCalendarAlt className="text-accent text-3xl drop-shadow" />
            <p className="text-center font-nexa text-2xl">Our Beginning</p>
          </div>
          <div className="relative rounded-4xl py-5 px-10 border-2 border-accent flex items-center justify-center text-center font-nexa font-bold shadow-xl bg-white/10 backdrop-blur-md group-hover:bg-white/20 transition-colors duration-500">
            <Noise />
            <p className="text-2xl p-4">2 Agustus 2024</p>
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-primary/20 rounded-4xl opacity-50 pointer-events-none"></div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5 relative group transition-transform duration-500 hover:scale-105">
          <div className="flex items-center gap-2 mb-2">
            <FaUsers className="text-accent text-3xl drop-shadow" />
            <p className="text-center font-nexa text-2xl">Our Members</p>
          </div>
          <div className="relative rounded-4xl py-5 px-10 border-2 border-accent flex items-center justify-center text-center font-nexa font-bold shadow-xl bg-white/10 backdrop-blur-md group-hover:bg-white/20 transition-colors duration-500 overflow-hidden">
            <Noise />
            <p className="text-2xl p-4">120 People</p>
            <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-primary/20 rounded-4xl opacity-50 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
