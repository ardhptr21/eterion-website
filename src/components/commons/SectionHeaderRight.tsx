export default function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-right">
      <h2 className="font-nexa-bold text-4xl font-bold text-white m-0 [text-shadow:0px_2px_4px_rgba(0,0,0,0.2)]">{title}</h2>
      <p className="font-nexa-light text-lg font-normal text-[#e0e0e0] opacity-90 mt-2 tracking-[0.5px]">{subtitle}</p>
    </div>
  );
}