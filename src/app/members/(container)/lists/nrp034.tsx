"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const LeafIllustration = ({ className }: { className?: string }) => (
  <svg className={className} width="120" height="120" viewBox="0 0 159 159" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M158.5 1C158.5 35.6667 121 113.5 1 158.5" stroke="#F47920" strokeOpacity="0.4" strokeWidth="4"/>
    <path d="M118.5 1C118.5 29.1667 90.5 88.5 1 129.5" stroke="#F47920" strokeOpacity="0.4" strokeWidth="4"/>
  </svg>
);

const AbstractShape = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#F47920" d="M47.9,-65.9C61.8,-55.8,72.7,-41.1,79.5,-24.8C86.3,-8.5,89.1,9.4,83.8,25.3C78.5,41.2,65.1,55.1,49.8,65.9C34.5,76.7,17.2,84.4,-1.1,85.6C-19.5,86.8,-39,81.5,-53.8,70.1C-68.6,58.7,-78.7,41.1,-82.9,22.7C-87.1,4.3,-85.4,-14.9,-77.2,-30.9C-69,-46.9,-54.3,-59.7,-39.2,-69.3C-24.1,-78.9,-8.6,-85.3,7.4,-86.6C23.4,-87.9,46.8,-84.1,47.9,-65.9Z" transform="translate(100 100)" />
    </svg>
);

const MusicNoteIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 17.5C17 19.9853 14.9853 22 12.5 22C10.0147 22 8 19.9853 8 17.5C8 15.0147 10.0147 13 12.5 13C14.9853 13 17 15.0147 17 17.5Z" fill="#F47920" fillOpacity="0.7"/>
        <path d="M16 17.5V4.75C16 3.07623 14.8346 2.00284 13.2809 2.2985C10.239 2.88099 8.5 4 8.5 7" stroke="#F47920" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

const MieAyamIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2,9 C2,7.5 3.5,7 4,7 L20,7 C20.5,7 22,7.5 22,9 L21,14 L3,14 L2,9 Z" fill="#F47920" />
        <path d="M4.5,18 C2.5,18 3,16 3,14 L21,14 C21,16 21.5,18 19.5,18 L4.5,18 Z" fill="#F47920" fillOpacity="0.7"/>
        <path d="M18,3 L15.5,7.5 M20.5,5 L18,7.5" stroke="#F47920" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M7,9.5 C7,11 8,12 10,12 C12,12 13,11 13,9.5" stroke="#FFF9F0" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M11,10.5 C11,12 12,13 14,13 C16,13 17,12 17,10.5" stroke="#FFF9F0" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.8"/>
        <circle cx="8" cy="11" r="1.5" fill="#FFF9F0" fillOpacity="0.7"/>
    </svg>
);

const WavyBorder = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 15" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,15 Q2.5,0 5,15 Q7.5,0 10,15 Q12.5,0 15,15 Q17.5,0 20,15 Q22.5,0 25,15 Q27.5,0 30,15 Q32.5,0 35,15 Q37.5,0 40,15 Q42.5,0 45,15 Q47.5,0 50,15 Q52.5,0 55,15 Q57.5,0 60,15 Q62.5,0 65,15 Q67.5,0 70,15 Q72.5,0 75,15 Q77.5,0 80,15 Q82.5,0 85,15 Q87.5,0 90,15 Q92.5,0 95,15 Q97.5,0 100,15 L100,20 L0,20 Z" fill="#F47920" fillOpacity="0.2"/>
    </svg>
);


const data = {
  name: "Aditya Reza Daffansyah",
  nrp: "5027241034",
  image: "034.jpg",
  funfact: "Coding no, mie ayam lesgoo",
  hobby: ["Music", "Culinary"],
  origin: "Surakarta",
};

export default function NRP034() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-6 rounded-2xl border border-gray-200/90 relative bg-[#FFF9F0] shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden"
        onClick={() => setOpen(true)}
      >
        <LeafIllustration className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/4 w-32 h-32 opacity-50 group-hover:opacity-60 transition-opacity duration-300 z-0" />
        <LeafIllustration className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-32 h-32 opacity-50 group-hover:opacity-60 transition-opacity duration-300 transform scale-y-[-1] scale-x-[-1] z-0" />
        <AbstractShape className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-28 h-28 opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-0" />
        <AbstractShape className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-24 h-24 opacity-20 group-hover:opacity-30 transition-opacity duration-500 z-0 transform -scale-x-100" />
        
        <div className="aspect-[4/5] bg-gray-100 rounded-xl overflow-hidden relative z-10 shadow-sm">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="mt-5 z-10 relative">
          <h4 className="text-xl font-nexa font-bold text-[#3E3E3E]">{data.name}</h4>
          <h6 className="font-nexa text-[#666]">{data.nrp}</h6>
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
  const zoetisOrange = "#F47920";

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content 
            className="w-full max-w-lg max-h-[95vh] bg-[#FFF9F0] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none flex flex-col"
          >
            <div className="p-8 pb-0 shrink-0">
                <Dialog.Title style={{position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0'}}>
                    {`Detail Profil ${data.name}`}
                </Dialog.Title>

                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
                  <Image
                    src={`/images/members/${data.image}`}
                    alt={data.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-3xl font-bold font-nexa text-[#3E3E3E] mb-1">{data.name}</h2>
                <p className="text-lg font-nexa text-gray-500">{data.nrp}</p>

                <hr className="my-6 border-t" style={{ borderColor: zoetisOrange, opacity: 0.5 }} />

                <div className="space-y-4 text-gray-800 font-nexa text-base">
                    <div className="bg-white/60 p-4 rounded-lg backdrop-blur-sm">
                        <strong className="block mb-1 text-sm text-gray-500">Asal:</strong>
                        <p className="font-medium text-lg text-gray-900">{data.origin}</p>
                    </div>
                  
                    <div className="bg-white/60 p-4 rounded-lg backdrop-blur-sm">
                        <strong className="block mb-2 text-sm text-gray-500">Hobi:</strong>
                        <div className="space-y-3">
                        {data.hobby.map((item) => (
                            <div key={item} className="flex items-center gap-3">
                            {item === "Music" && <MusicNoteIcon className="w-7 h-7 shrink-0 opacity-80"/>}
                            {item === "Culinary" && <MieAyamIcon className="w-7 h-7 shrink-0 opacity-80"/>}
                            <span className="font-medium text-lg text-gray-900">{item}</span>
                            </div>
                        ))}
                        </div>
                    </div>

                    <div className="bg-white/60 p-4 rounded-lg backdrop-blur-sm">
                        <strong className="block mb-1 text-sm text-gray-500">Funfact:</strong>
                        <p className="italic text-gray-700">{data.funfact}</p>
                    </div>
                </div>
            </div>
            
            <div className="w-full h-8 mt-auto shrink-0">
                <WavyBorder className="w-full h-full" />
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}