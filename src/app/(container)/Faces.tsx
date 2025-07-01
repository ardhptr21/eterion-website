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
        speed: 2,
      }),
    ]
  );

  return (
    <section className="py-20 relative">
      <div className="flex pr-20 pb-20 justify-end">
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
      <div className="flex justify-center mt-6">
        <button
          onClick={() => {
            const nextSection = document.querySelector("section:nth-of-type(4)");
            nextSection?.scrollIntoView({ behavior: "smooth" });
          }}
          data-style="Filled"
          className="mt-[58px] mb-16 w-40 h-6 p-5 bg-gradient-to-t from-[#56C5FE] to-neutral-200 rounded-[15px] shadow-[1px_1px_10px_0px_rgba(255,255,255,1.00)] inline-flex justify-center items-center gap-2.5 overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
        >
          <div
            className={`justify-center text-gray-950 text-l font-bold font-nexa`}
          >
            Find Out More
          </div>
        </button>
      </div>
    </section>
  );
}
