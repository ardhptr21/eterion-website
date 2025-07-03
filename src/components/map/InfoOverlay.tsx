export default function InfoOverlay({
    name,
    orang,
}: {
    name: string;
    orang: number;
}) {
    return (
        <div className="w-52 rounded-4xl border bg-[#c6c5c7] p-4 text-black font-nexa pl-6 shadow-lg backdrop-blur-sm">
            <h3 className="mb-2 text-base font-bold">{name}</h3>
            <p className="flex items-center gap-2 text-sm">{orang} Orang</p>
        </div>
    );
}
