import Noise from "../effects/Noise";

export default function InfoOverlay({ name, orang }: { name: string; orang: number }) {
  return (
    <div className="relative w-52 rounded-xl border bg-accent p-4 text-black font-nexa pl-6 shadow-lg backdrop-blur-sm">
      <Noise />
      <h3 className="mb-2 text-base font-bold">{name}</h3>
      <p className="flex items-center gap-2 text-sm">{orang} Orang</p>
    </div>
  );
}
