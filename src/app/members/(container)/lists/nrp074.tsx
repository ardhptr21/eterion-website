"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";

const data = {
  name: "Aslam Ahmad Usman",
  nrp: "5027241074",
  image: "074.jpg",
  funfact: "ga bisa duduk sila kelamaan",
  hobby: "nonton & baca",
  origin: "Bandung",
};

  export default function NRP074() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <div
      className="cursor-pointer w-full shrink-0 p-10 border-2 border-black relative bg-white text-black border-4 border-[#0000]"
      onClick={() => setOpen(true)}
      >
      <Head>
       <link
       href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap"
      rel="stylesheet"
       />
       </Head>

        <Noise />
        <div className="w-full aspect-[4/5] border-2 border-black overflow-hidden mb-6 relative">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10">
          <h4 className="text-xl font-latin font-bold text-[25px]">{data.name}</h4>
          <h6 className="font-latin">{data.nrp}</h6>
          <style jsx>{`
            .font-latin {
            font-family: 'Noto Serif', serif;
            }
          `}</style>
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
   const [hovered, setHovered] = useState(false);
   const [hoverName, setHoverName] = useState(false);
   const [hoverOrigin, setHoverOrigin] = useState(false);
   const [hoverHobby, setHoverHobby] = useState(false);
   const [hoverFunfact, setHoverFunfact] = useState(false);
  

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-white text-black border-2 border-black overflow-y-auto focus:outline-none p-10">
             <Head>
              <link
                href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap"
                rel="stylesheet"
              />
              <link
                href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP&display=swap"
                rel="stylesheet"
              />
            </Head>

            <div className="w-full aspect-[4/5] border-2 border-black overflow-hidden mb-6 relative">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

             <h2
             onMouseEnter={() => setHoverName(true)}
             onMouseLeave={() => setHoverName(false)}
             className={`text-3xl font-bold mb-1 transition-all duration-500 delay-500 ${
             hoverName ? "font-jp" : "font-latin"
             }`}
             >
             {hoverName ? "アスラム・アフマド・ウスマン" : data.name}
             <style jsx>{`
            .font-latin {
            font-family: 'Noto Serif', serif;
            }
            .font-jp {
            font-family: 'Noto Serif JP', serif;
            }
         `  }</style>
             </h2>

             <p className="text-lg font-serif text-black/70">{data.nrp}</p>
             <hr className="my-6 border-t border-black/20" />

             <div className="space-y-2 text-base transition-all duration-500 delay-500">
             <p
             onMouseEnter={() => setHoverOrigin(true)}
             onMouseLeave={() => setHoverOrigin(false)}
             className={hoverOrigin ? "font-jp" : "font-latin"}
             >
             <strong>{hoverOrigin ? "出身：" : "Asal:"}</strong> {hoverOrigin ? "バンドン" : data.origin}
             </p>

             <p
             onMouseEnter={() => setHoverHobby(true)}
             onMouseLeave={() => setHoverHobby(false)}
             className={hoverHobby ? "font-jp" : "font-latin"}
             >
             <strong>{hoverHobby ? "趣味：" : "Hobi:"}</strong> {hoverHobby ? "見ること・読むこと" : data.hobby}
            </p>

            <p
             onMouseEnter={() => setHoverFunfact(true)}
             onMouseLeave={() => setHoverFunfact(false)}
             className={hoverFunfact ? "font-jp" : "font-latin"}
            >
            <strong>{hoverFunfact ? "ファンファクト：" : "Funfact:"}</strong>{" "}
            {hoverFunfact ? "長くあぐらをかけない" : data.funfact}
            </p>
            <style jsx>{`
            .font-latin {
            font-family: 'Noto Serif', serif;
            }
            .font-jp {
            font-family: 'Noto Serif JP', serif;
            }
          `}</style>
          </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}