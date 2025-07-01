import Image from 'next/image';
export default function Statistic() {
  return (
    <section>
      <div className="flex gap-6 justify-center py-20">
        <div>
          <p className="text-center font-extralight font-nexa">Our Beginning</p>
          <div className="relative m-1 rounded-4xl border-2 border-accent flex items-center justify-center text-center font-nexa font-bold">
            <p className="text-2xl p-4 m-4">2 Agustus 2024</p>
          </div>
          <div className="bg-radial from-white via-[#3A1D95] to-transparent size-80 blur-3xl absolute"></div>
        </div>
        <div>
          <p className="text-center font-extralight font-nexa">Our Members</p>
          <div className="relative m-1 rounded-4xl border-2 border-accent flex items-center justify-center text-center font-nexa font-bold">
            <p className="text-2xl p-4 m-4">120 People</p>
          </div>
          <div className="bg-radial from-white via-[#3A1D95] to-transparent size-80 blur-3xl absolute"></div>
        </div>
      </div>
    </section>
  );
}
