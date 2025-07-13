"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Evan Christian Nainggolan",
  nrp: "5027241026",
  image: "026.jpg",
  funfact: "Ga demen makan manis, mantan obesitas",
  hobby: "Voli, gym, voli, gym, voli, gym, voli, gym...",
  origin: "Palembang",
};

export default function NRP026() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="
  cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-accent relative
  bg-gradient-to-br from-orange-500 via-red-500 to-yellow-400/80 backdrop-blur-lg
  shadow-lg shadow-orange-500/20
  transition-all duration-300 ease-in-out
  hover:scale-[1.04]
  hover:shadow-2xl hover:shadow-yellow-400/40
  hover:border-yellow-400
  hover:ring-4 hover:ring-orange-400/30
  hover:outline-none
"
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
          <h4 className="text-xl font-nexa font-bold">{data.name}</h4>
          <h6 className="font-nexa">{data.nrp}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-amber-300/20 via-60% to-accent/50 rounded-xl pointer-events-none" />
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
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-gradient-to-br from-orange-500 via-red-500 to-yellow-400/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10">
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
            <div className="flex flex-col items-center gap-2 mt-8">
              <span className="text-lg font-bold tracking-wide text-white mb-2">
                CONNECT WITH ME
              </span>
              <div className="flex gap-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/evan_chrstiann/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-200 group-hover:scale-110"
                  >
                    <rect width="24" height="24" rx="6" fill="#E1306C" />
                    <path
                      d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 1 0 12 8.5Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <circle cx="17" cy="7" r="1" fill="white" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/evan-christian-a53685323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-200 group-hover:scale-110"
                  >
                    <rect width="24" height="24" rx="6" fill="#0077B5" />
                    <path
                      d="M8 10V16M8 8V8.01M12 16V13.5C12 12.67 12.67 12 13.5 12C14.33 12 15 12.67 15 13.5V16"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
              <div className="mt-6 aspect-video w-full rounded-xl shadow-lg border-2 border-black">
                {/* TikTok Embed */}
                <div className="mt-6 flex justify-center">
                  <blockquote
                    className="tiktok-embed"
                    cite="https://www.tiktok.com/@baim.omg/video/7483759332392176914"
                    data-video-id="7483759332392176914"
                    style={{ maxWidth: "605px", minWidth: "325px" }}
                  >
                    <section>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        title="@baim.omg"
                        href="https://www.tiktok.com/@baim.omg?refer=embed"
                      >
                        @baim.omg
                      </a>{" "}
                      rendang lenyap dalam 15 menit willie salim parodi fandubb{" "}
                      <a
                        title="williesalim"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.tiktok.com/tag/williesalim?refer=embed"
                      >
                        #williesalim
                      </a>
                    </section>
                  </blockquote>
                  <script src="https://www.tiktok.com/embed.js" async></script>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
