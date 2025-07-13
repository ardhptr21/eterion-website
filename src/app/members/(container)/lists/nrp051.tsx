"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";

const data = {
  name: "Reza Aziz Simatupang",
  nrp: "5027241051",
  image: "051.jpg",
  funfact: "kalo nulis pake tangan kanan",
  hobby: "tidur",
  origin: "Sidoarjo",
  linkedin: "https://www.linkedin.com/in/reza-aziz-simatupang/"
};

export default function NRP051() {
  const [open, setOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const linkedinRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    const linkedin = linkedinRef.current;
    
    if (!card || !glow || !linkedin) return;

    linkedin.style.opacity = '0';

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * -10;
      
      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.05)
      `;
      
      glow.style.opacity = '1';
      glow.style.left = `${x}px`;
      glow.style.top = `${y}px`;
    };

    const handleMouseEnter = () => {
      card.style.transform = 'perspective(1000px) rotateY(360deg) scale(1.2)';
      
      linkedin.style.opacity = '1';
      
      setTimeout(() => {
        if (card) {
          card.style.transform = 'perspective(1000px) rotateY(0deg) scale(1.05)';
        }
      }, 300);
    };

    const handleMouseLeave = () => {
      card.style.transform = '';
      glow.style.opacity = '0';
      
      linkedin.style.opacity = '0';
      linkedin.style.backgroundColor = 'transparent';
      linkedin.style.transform = 'scale(1)';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
    
    linkedin.addEventListener('mouseenter', () => {
      linkedin.style.backgroundColor = '#a855f7';
      linkedin.style.transform = 'scale(1.2)';
    });
    
    linkedin.addEventListener('mouseleave', () => {
      linkedin.style.backgroundColor = 'transparent';
      linkedin.style.transform = 'scale(1)';
    });

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="relative">
        <div 
          ref={glowRef}
          className="absolute w-[400px] h-[400px] bg-accent rounded-full opacity-0 
                    pointer-events-none blur-[150px] z-0 transition-opacity duration-300"
          style={{ transform: 'translate(-50%, -50%)' }}
        />
        
        <div
          ref={cardRef}
          className="group cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative 
                    bg-[#140c2c]/80 backdrop-blur-lg
                    transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          onClick={() => setOpen(true)}
        >
          <Noise />
          <div className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden">
            <Image
              src={`/images/members/${data.image}`}
              alt={data.name}
              fill
              className="object-cover w-full h-full"
            />
          </div>
          <div className="mt-5 z-10">
            <h4 className="text-xl font-nexa font-bold text-white">{data.name}</h4>
            <h6 className="font-nexa text-white/70">{data.nrp}</h6>
          </div>
          <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-amber-300/20 via-60% to-accent/50 rounded-xl pointer-events-none" />
          
          <a
            ref={linkedinRef}
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 z-20 p-3 rounded-full transition-all duration-500 opacity-0"
            onClick={(e) => e.stopPropagation()}
          >
            <FaLinkedin className="text-2xl text-white" />
          </a>
        </div>
      </div>

      <MemberDialog open={open} onOpenChange={setOpen} />
    </>
  );
}

function MemberDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-primary rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10">
            <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold font-nexa text-white mb-1">{data.name}</h2>
            <p className="text-lg font-nexa text-white/70">{data.nrp}</p>

            <hr className="my-6 border-t border-white/20" />

            <div className="space-y-2 text-white font-nexa text-base mb-8">
              <p>
                <strong>Asal:</strong> {data.origin}
              </p>
              <p>
                <strong>Hobi:</strong> {data.hobby}
              </p>
              <p>
                <strong>Funfact:</strong> {data.funfact}
              </p>
            </div>
            
            <a 
              href={data.linkedin} 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-full 
                        transition-all duration-300 hover:scale-110 hover:bg-purple-600 hover:shadow-[0_0_40px_10px_rgba(168,85,247,0.5)]
                        active:scale-95"
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn Profile</span>
            </a>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}