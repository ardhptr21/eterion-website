"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Jofanka Al-Kautsar Pangestu Abady",
  nrp: "5027241107",
  image: "107.jpg",
  funfact: "Suka otomotif, ngedit video, sama suka kalkulus (kecuali trigonometri)",
  hobby: "Motoran",
  origin: "Indramayu",
};

export default function NRP107() {
  const [open, setOpen] = useState(false);

  return (
    <>
    {/* efek glowing border */}
    <style> @import url('https://fonts.cdnfonts.com/css/open-sauce-one'); </style>
    <div className="relative group w-full shrink-0">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-25 group-hover:opacity-100 group-hover:scale-[1.06] transition duration-300 ease-in-out"
      style={{ zIndex: 0 }}></div> 
      <div
        className="cursor-pointer w-fqull shrink-0 p-10 rounded-xl border-0 relative bg-gradient-to-tl from-slate-900 to-[#202026] backdrop-blur-lg duration-300 ease-in-out hover:scale-[1.04]"
        onClick={() => setOpen(true)}
      >
        {/* <Noise /> */}
        <div style={{fontFamily:"'Open Sauce Two', sans-serif"}} className="aspect-[4/5] bg-white rounded-xl z-10 relative overflow-hidden border-slate-600 border-1">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10">
          <h4 className="text-center text-white text-xl font-bold tracking-[1.2] pb-1 ">{data.name}</h4>
          <h6 className="text-center tracking-[1.2]">{data.nrp}</h6>
        </div>
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
        <div style={{fontFamily:"'Open Sauce Two', sans-serif"}} className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          <div className="absolute z-[-10] w-full max-w-lg h-[95vh] bg-gradient-to-br from-cyan-400 to-blue-500 scale-[1.01] blur rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10"></div>
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-gradient-to-tl from-slate-900 to-[#141420] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-10">
            <Dialog.Title className="sr-only ">{data.name}</Dialog.Title>

            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
              <Image
                src={`/images/members/${data.image}`}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="mb-1 text-center text-white text-[22px] font-bold tracking-wide drop-shadow-[0_0_0px_rgba(255,255,255,0.7)]">{data.name}</h2>
            <p className="text-lg text-white/70 text-center tracking-wide">{data.nrp}</p>

            <hr className="my-6 border-t border-white/20" />

            <div className="space-y-[0.5] text-white font-nexa text-base text-justify tracking-[0.3]">
              <p >
                <strong>Asal</strong> 
              </p>
              <p className="mb-4">
              {data.origin}
              </p>
              <p>
                <strong>Hobi</strong> 
              </p>
              <p className="mb-4">
              {data.hobby}
              </p>
              <p>
                <strong>Funfact</strong>  
              </p>
              <p className="mb-4 ">{data.funfact}</p>
            </div>

            <hr className="my-6 border-t border-white/20" />

            <h2 className="font-nexa text-white font-bold tracking-[0.3]">About Me</h2>
            <p className="font-nexa text-justify tracking-[0.3]">Merupakan seorang sinematografi, mempunyai hasil karya di Instagram @jofanska_jo. Klik link di bawah untuk melihat hasil karya saya.</p>
            
            {/* Tombol */}

            <div className="flex flex-col gap-6 max-w-sm mx-auto relative z-10 p-4 pt-10">
              <a
                href="https://www.instagram.com/jofanska_jo/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 rounded-2xl backdrop-blur-xl border-2 border-fuchsia-500/30 bg-gradient-to-br from-purple-900/40 via-black-900/60 to-black/80 shadow-2xl hover:shadow-fuchsia-500/30 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-fuchsia-400/60 overflow-hidden flex items-center justify-center"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-fuchsia-400/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                ></div>

                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/10 via-fuchsia-400/20 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>

                <div className="relative z-10 flex items-center gap-4 w-full">
                  <div
                    className="p-3 rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-fuchsia-600/10 backdrop-blur-sm group-hover:from-fuchsia-400/40 group-hover:to-fuchsia-500/20 transition-all duration-300"
                  >
                    <svg
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-7 h-7 text-fuchsia-400 group-hover:text-fuchsia-300 transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
                    >
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
                      <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" />
                    </svg>
                  </div>
                  <div className="flex-1 text-left">
                    <p
                      className="text-fuchsia-400 font-nexa font-bold text-lg group-hover:text-fuchsia-300 transition-colors duration-300 drop-shadow-sm"
                    >
                      Instagram
                    </p>
                    <p
                      className="font-nexa text-fuchsia-300/60 text-sm group-hover:text-fuchsia-200/80 transition-colors duration-300"
                    >
                      @jofanska_jo
                    </p>
                  </div>
                  <div
                    className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-5 h-5 text-fuchsia-400"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>


          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
