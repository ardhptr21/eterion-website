import SectionHeaderRight from "@/components/commons/SectionHeaderRight";
import CircleGradient from "@/components/commons/CircleGradient";
import Container from "../commons/Container";

export default function SectionHeader() {
  const headerContainerStyle: React.CSSProperties = {
    display: "grid",
    justifyItems: "end",
    alignItems: "center",
    padding: "2rem",
    position: "relative",
    margin: "2rem 0",
  };

  return (
    <div className="mt-10">
      <div
        className="absolute w-full md:w-[60%] h-[100px] bg-gradient-to-t from-[#0B068E] to-[#a9ac12] opacity-90 blur-xl -z-10"
        style={{
          borderRadius: "60% 40% 60% 40% / 60% 60% 40% 40%",
          right: "-70px",
          top: "50px",
        }}
      />

      <div className="mb-12 space-y-5 md:space-y-10 text-center md:text-right">
        <h2 className="text-3xl md:text-6xl font-bold text-white font-nexa">Our Philosophy</h2>
        <p className="text-xl md:text-2xl text-blue-200 font-nexa">The Way Behind Eterion</p>
      </div>
    </div>
  );
}
