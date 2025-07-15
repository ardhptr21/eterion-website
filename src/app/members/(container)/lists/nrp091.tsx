"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useEffect, useState } from "react";

const data = {
  name: "Muhammad Ardiansyah Tri Wibowo",
  nrp: "5027241091",
  image: "091.jpg",
  image2: "091_2.jpg",
  funfact: "Jadi budak desain coi, tapi ga lolos GEREX huhuhu",
  hobby: "Desain, Fotografi, Videografi",
  origin: "Surabaya (Lahir di Serui)",
};

const backgroundstyle = {
  backgroundImage: `
    linear-gradient(170deg,rgb(51, 123, 162) 40%, #2e5aff 100%)
  `,
};

export default function NRP091() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative hover:scale-[1.01] transition-transform duration-300 ease-in-out"
        style={backgroundstyle}
        onClick={() => setOpen(true)}
      >
        <Noise />
        <ImageSwitcherAuto images={[data.image, data.image2]} alt={data.name} />
        <div className="mt-5 z-10">
          <h4 className="text-xl font-nexa font-bold">{data.name}</h4>
            <hr className="my-1 border-t-2 border-white/80" />
          <h6 className="font-nexa">{data.nrp}</h6>
          {/* dibawahnya ditambahkan sosial media card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <a
              href="https://instagram.com/fatharisaputrapratama"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-2 flex items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Instagram icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 32 32">
                <path
                  fill="white"
                  d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z"
                ></path>
              </svg>
              <span className="text-white font-nexa">Instagram</span>
            </a>
            <a
              href="https://github.com/NekoFathari"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-2 flex items-center gap-2"
              aria-label="GitHub"
              onClick={(e) => e.stopPropagation()}
            >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 72 72">
              <path 
              fill="white"
              d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"></path>
              </svg>
              <span className="text-white font-nexa">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-ardiansyah-tri-wibowo-255983286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-2 flex items-center gap-2"
              aria-label="LinkedIn"
              onClick={(e) => e.stopPropagation()}
            >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                <path 
                fill="white"
                d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
              <span className="text-white font-nexa">Linkedin</span>
            </a>
          </div>
        </div>
      </div>
      <MemberDialog open={open} onOpenChange={setOpen} />
    </>
  );
}

// Auto-switching ImageSwitcher
function ImageSwitcherAuto({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (images.length < 2) return;
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300); // fade out duration
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden mb-6">
      <Image
        src={`/images/members/${images[index]}`}
        alt={alt}
        fill
        className="object-cover"
      />
    </div>
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

            <div className="space-y-2 text-white font-nexa text-base">
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
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
