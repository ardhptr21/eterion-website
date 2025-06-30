"use client";

import MemberCard from "@/components/cards/MemberCard";
import members from "@/statics/members.json";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

export default function Faces() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true,
      duration: 0,
      skipSnaps: false,
    },
    [
      AutoScroll({
        stopOnInteraction: false,
        stopOnFocusIn: true,
        startDelay: 0,
        speed: 7,
      }),
    ]
  );

  return (
    <section className="py-20 relative">
      <div className="flex justify-end">
        <h1 className="text-5xl font-bold font-nexa">Faces of Eterion</h1>
      </div>
      <div className="overflow-hidden mt-10 cursor-grab" ref={emblaRef}>
        <div className="flex gap-5 px-5">
          {members.map((member) => (
            <MemberCard
              key={member.nama}
              name={member.nama}
              ig={member.ig || ""}
              image={String(member.nrp).slice(7, 10) + ".jpg"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
