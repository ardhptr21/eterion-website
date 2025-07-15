"use client";

import MemberCard from "@/components/cards/MemberCard";
import Container from "@/components/commons/Container";
import members from "@/statics/members.json";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";

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
        speed: 2,
      }),
    ]
  );

  return (
    <section className="py-20 relative">
      <Container className="flex justify-center md:justify-end">
        <h1 className="text-3xl md:text-5xl font-bold font-nexa text-center md:text-right">
          Faces of Eterion
        </h1>
      </Container>
      <div className="overflow-hidden mt-12 cursor-grab" ref={emblaRef}>
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
      <div className="flex justify-center mt-10 px-5">
        <Link
          href="/members"
          className="w-full max-w-xs h-12 px-6 bg-gradient-to-t from-[#56C5FE] to-neutral-200 rounded-[15px] shadow-[1px_1px_10px_0px_rgba(255,255,255,1.00)] flex justify-center items-center gap-2.5 hover:opacity-90 transition-opacity"
        >
          <div className="text-gray-950 text-base font-bold font-nexa">Find Out More</div>
        </Link>
      </div>
    </section>
  );
}
