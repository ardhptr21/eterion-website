"use client";

import MemberCard from "@/components/cards/MemberCard";
import Container from "@/components/commons/Container";
import members from "@/statics/members.json";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useRef } from "react";

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
        stopOnFocusIn: false,
        startDelay: 0,
        speed: 1.5,
      }),
    ]
  );

  // Mobile auto-scroll ref
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mobileContainer = mobileScrollRef.current;
    if (!mobileContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame
    const maxScroll = mobileContainer.scrollWidth - mobileContainer.clientWidth;

    const autoScroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      
      mobileContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll after a delay
    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(autoScroll);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section id="faces" className="py-8 sm:py-12 md:py-16 lg:py-20 relative">
      <Container className="flex justify-center sm:justify-end">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-nexa text-center sm:text-right">
          Faces of Eterion
        </h1>
      </Container>
      
      {/* Mobile Auto-Scroll Layout */}
      <div className="block sm:hidden mt-8">
        <div 
          ref={mobileScrollRef}
          className="overflow-x-auto px-4 pb-4 mobile-auto-scroll"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="flex gap-3 min-w-max">
            {/* Duplicate members for seamless infinite scroll */}
            {[...members, ...members].map((member, index) => (
              <div key={`${member.nama}-${index}`} className="w-28 h-36 flex-shrink-0">
                <MemberCard
                  name={member.nama}
                  ig={member.ig || ""}
                  image={String(member.nrp).slice(7, 10) + ".jpg"}
                  nrp={String(member.nrp)}
                  funfact={member.funfact || ""}
                  kota={member.kota || ""}
                  hobi={member.hobi || ""}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-4 px-4">
          <p className="text-accent text-sm">Auto-scrolling through all members</p>
        </div>
      </div>
      
      {/* Desktop Carousel Layout */}
      <div className="hidden sm:block overflow-hidden mt-12 md:mt-16 lg:mt-20" ref={emblaRef}>
        <div className="flex gap-3 sm:gap-4 md:gap-5 px-3 sm:px-4 md:px-5">
          {members.map((member) => (
            <MemberCard
              key={member.nama}
              name={member.nama}
              ig={member.ig || ""}
              image={String(member.nrp).slice(7, 10) + ".jpg"}
              nrp={String(member.nrp)}
              funfact={member.funfact || ""}
              kota={member.kota || ""}
              hobi={member.hobi || ""}
            />
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-4 sm:mt-6">
        <button 
          onClick={() => window.location.href = '/members'}
          className="mt-8 sm:mt-12 md:mt-16 lg:mt-[58px] mb-8 sm:mb-12 md:mb-16 w-32 sm:w-36 md:w-40 h-10 sm:h-12 md:h-14 p-3 sm:p-4 md:p-5 bg-gradient-to-t from-[#56C5FE] to-neutral-200 rounded-[15px] shadow-[1px_1px_10px_0px_rgba(255,255,255,1.00)] inline-flex justify-center items-center gap-2.5 overflow-hidden hover:opacity-90 transition-opacity cursor-pointer touch-manipulation"
        >
          <div className="justify-center text-gray-950 text-xs sm:text-sm md:text-base lg:text-lg font-bold font-nexa">
            Find Out More
          </div>
        </button>
      </div>
    </section>
  );
}
