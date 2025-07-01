import Image from "next/image";
export default function Statistic() {
  return (
    <section>
      <div className="flex gap-6 justify-center py-20">
        <div>
          <p className="text-center font-extralight font-nexa">Our Beginning</p>
          <div className="relative m-1 rounded-4xl border-2 border-accent flex items-center justify-center text-center font-nexa font-bold">
            <div className="bg-radial from-white to-transparent size-20 blur-xl absolute -z-10"></div>
            <div className="bg-radial -top-4 right-4 from-primary to-transparent size-40 blur-xl absolute -z-10"></div>
            <div className="bg-radial  -right-6 from-yellow-500 to-transparent size-10 blur-2xl absolute -z-10"></div>
            <p className="text-2xl p-4 m-4">2024</p>
          </div>
        </div>
        <div>
          <p className="text-center font-extralight font-nexa">Our Members</p>
          <div className="relative m-1 rounded-4xl border-2 border-accent flex items-center justify-center text-center font-nexa font-bold">
            <div className="bg-radial from-white to-transparent size-20 blur-xl absolute -z-10"></div>
            <div className="bg-radial -top-4 right-4 from-primary to-transparent size-40 blur-xl absolute -z-10"></div>
            <div className="bg-radial  -right-6 from-yellow-500 to-transparent size-10 blur-2xl absolute -z-10"></div>
            <p className="text-2xl p-4 m-4">116 People</p>
          </div>
        </div>
      </div>
    </section>
  );
}
