import Image from "next/image";
import Noise from "../effects/Noise";

interface Props {
  name: string;
  ig: string;
  image: string;
}

export default function MemberCard({ name, ig, image }: Props) {
  return (
    <div className="min-w-xs max-w-xs md:min-w-sm md:max-w-sm shrink-0 p-10 rounded-xl border-2 border-accent relative bg-[#140c2c]/80 backdrop-blur-lg">
      <Noise />
      <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
        <Image
          src={`/images/members/${image}`}
          alt={name}
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-5 z-10">
        <h4 className="text-xl md:text-3xl font-nexa font-bold">{name}</h4>
        <h6 className="font-nexa">{ig}</h6>
      </div>
      <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-amber-300/20 via-60% to-accent/50 rounded-xl pointer-events-none"></div>
    </div>
  );
}
