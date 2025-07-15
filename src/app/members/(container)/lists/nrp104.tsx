"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";

const data = {
  name: "Afriza Tristan Calendra Rajasa",
  nrp: "5027241104",
  image: "104.jpg",
  funfact: "Ngalahin juara garpit fifa",
  hobby: "Belajar sisop",
  origin: "Malang",
};

export default function NRP104() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer w-full shrink-0 p-10 rounded-xl border-2 border-[#007acc] relative bg-[#1e1e1e]/80 backdrop-blur-lg"
        onClick={() => setOpen(true)}
      >
        <Noise />
        <div className="aspect-[4/5] bg-[#3c3c3c] rounded-xl z-10 relative overflow-hidden">
          <Image
            src={`/images/members/${data.image}`}
            alt={data.name}
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="mt-5 z-10">
          <h4 className="text-xl font-nexa font-bold text-[#d4d4d4]">{data.name}</h4>
          <h6 className="font-nexa text-[#9cdcfe]">{data.nrp}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-[#007acc]/20 via-60% to-[#252526]/60 rounded-xl pointer-events-none" />
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
          <Dialog.Content className="w-full max-w-lg max-h-[95vh] bg-[#252526] rounded-2xl shadow-2xl overflow-y-auto focus:outline-none p-0">
            {/* VSCode title bar look */}
            <div className="bg-[#1e1e1e] h-8 flex items-center px-4 rounded-t-2xl border-b border-[#333]">
              <span className="text-[#cccccc] text-sm font-nexa">{data.name}.json</span>
            </div>

            <div className="p-10">
              <Dialog.Title className="sr-only">{data.name}</Dialog.Title>

              <div className="w-full aspect-[4/5] rounded-xl overflow-hidden mb-6 relative">
                <Image
                  src={`/images/members/${data.image}`}
                  alt={data.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* JSON */}
            <div className="space-y-2 font-mono text-sm text-[#d4d4d4] bg-[#1e1e1e] p-4 rounded-lg">
              <pre className="overflow-x-auto">
                <code>
                  {"{\n  "}
                  <span className="text-[#9cdcfe]">"name"   </span>
                  {": "}
                  <span className="text-[#ce9178]">"{data.name}"</span>
                  {",\n  "}
                  <span className="text-[#9cdcfe]">"nrp"    </span>
                  {": "}
                  <span className="text-[#ce9178]">"{data.nrp}"</span>
                  {",\n  "}
                  <span className="text-[#9cdcfe]">"origin" </span>
                  {": "}
                  <span className="text-[#ce9178]">"{data.origin}"</span>
                  {",\n  "}
                  <span className="text-[#9cdcfe]">"hobby"  </span>
                  {": "}
                  <span className="text-[#ce9178]">"{data.hobby}"</span>
                  {",\n  "}
                  <span className="text-[#9cdcfe]">"funfact"</span>
                  {": "}
                  <span className="text-[#ce9178]">"{data.funfact}"</span>
                  {"\n}"}
                </code>
              </pre>
            </div>
            </div>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
