"use client";

import Noise from "@/components/effects/Noise";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { Cinzel_Decorative, Cormorant_Garamond } from "next/font/google";
import { Instagram, Linkedin, Github } from "lucide-react";

const cinzel = Cinzel_Decorative({
    subsets: ["latin"],
    weight: ["700"],
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["600"],
});

const data = {
    name: "Jonathan Zelig Sutopo",
    nrp: "5027241047",
    image: "047.jpg",
    hobby: "Calisthenics, read manhwa/manhua/manga, learn new things, and listening to music 24/7",
    funfact: "Used to talking in English for 60-80% of my everyday life",
    origin: "Surabaya",
    socials: {
        instagram: "https://www.instagram.com/zelebwr/",
        linkedin: "https://www.linkedin.com/in/jonathanzelig/",
        github: "https://github.com/zelebwr",
    }
};

function SocialsButton({ href, icon: Icon, children } : { href: string; icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center gap-3 w-full px-6 py-3 rounded-lg bg-slate-800/50 text-white/80 transition-all duration-300 ease-out overflow-hidden backdrop-blur-sm hover:text-white hover:shadow-[0_0_20px_0_rgba(102,231,183,0.5)]"
        >
            <Noise />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-sky-500/30 to-indigo-500/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <Icon className="relative z-10 h-5 w-5" />
            <span className={`relative z-10 font-semibold ${cormorant.className}`}>{children}</span>
        </a>
    )
}

function CornerSigil({ position }: { position: string }) {
    return (
        <div
            className={`absolute ${position} opacity-0 ease-in-out group-hover:opacity-100 transition-opacity duration-500`}
        >
            <Image
                src="/images/zodiac/capricorn.svg"
                alt="Capricorn Sigil"
                width={32}
                height={32}
                className="animate-spin"
                style={{ animationDuration: "20s" }}
            />
        </div>
    );
}

export default function NRP047() {
    const [open, setOpen] = useState(false);

    // This CSS is correct and does not need to change.
    const borderAnimation = `
        @keyframes rotate_border {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        .animated-border::before,
        .animated-border::after {
            content: '';
            position: absolute;
            z-index: -1;
            top: 50%;
            left: 50%;
            width: 200%;
            aspect-ratio: 1 / 1;
            animation: rotate_border linear infinite;
        }
        
        .animated-border::before {
            background: conic-gradient(
                from 90deg at 50% 50%,
                transparent 0%,
                #6ee7b7 20%,
                #67e8f9 30%,
                transparent 50%,
                transparent 100%
            );
            animation-duration: 8s;
        }

        .animated-border::after {
            background: conic-gradient(
                from 0deg at 50% 50%,
                transparent 0%,
                #818cf8 20%,
                #e879f9 30%,
                transparent 50%,
                transparent 100%
            );
            animation-duration: 12s;
        }
    `;

    return (
        <>
            <style>{borderAnimation}</style>
            <div
                className="group relative w-full cursor-pointer rounded-xl animated-border overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_0_40px_5px_rgba(102,231,182,0.5)]"
                onClick={() => setOpen(true)}
            >
                <div
                    className="relative z-10 m-0.5 rounded-[10px] p-10 backdrop-blur-lg"
                    style={{
                        backgroundImage: `
                                radial-gradient(circle at center, 
                                    rgba(15, 21, 40, 0.95) 5%,
                                    transparent 70%
                                ),
                                linear-gradient(to bottom,
                                    rgba(15, 21, 40, 0.95),
                                    rgba(47, 210, 134, 0.4),
                                    rgba(15, 21, 40, 0.95)
                                )
                            `,
                    }}
                >
                    <Noise />

                    <div className="absolute inset-0 flex items-center justify-center animate-pulse opacity-[0.3] mix-blend-soft-light transition-all duration-500 ease-in-out group-hover:opacity-[0.2] group-hover:mix-blend-normal">
                        <Image
                            src="/images/zodiac/capricorn.svg"
                            alt="Capricorn Zodiac"
                            width={500}
                            height={500}
                        />
                    </div>

                    <CornerSigil position="top-3 left-3" />
                    <CornerSigil position="top-3 right-3" />
                    <CornerSigil position="bottom-3 left-3" />
                    <CornerSigil position="bottom-3 right-3" />

                    <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-xl bg-black">
                        <Image
                            src={`/images/members/${data.image}`}
                            alt={data.name}
                            fill
                            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="relative z-10 mt-5 text-center">
                        <h4
                            className={`text-xl font-bold text-white tracking-wider ${cinzel.className}`}
                        >
                            {data.name}
                        </h4>
                        <h6
                            className={`text-lg text-slate-400 ${cormorant.className}`}
                        >
                            {data.nrp}
                        </h6>
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
                <Dialog.Overlay className="fixed inset-0 bg-slate-950/70 z-40 backdrop-blur-md" />
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div className="relative rounded-xl animated-border overflow-hidden shadow-[0_0_60px_5px_rgba(102,231,182,0.7)]">
                        <Dialog.Content
                            className="relative z-10 m-0.5 w-full max-w-lg max-h-[95vh] rounded-[10px] overflow-y-auto p-10"
                            style={{
                                backgroundImage: `
                                radial-gradient(circle at center, 
                                rgba(15, 21, 40, 0.95) 5%,
                                transparent 70%
                                ),
                                linear-gradient(to bottom,
                                rgba(15, 21, 40, 0.95),
                                rgba(47, 210, 134, 0.4),
                                rgba(15, 21, 40, 0.95)
                                )
                                `,
                            }}
                        >
                            <Noise />
                            <div className="absolute inset-0 flex items-center justify-center animate-[0.03] mix-blend-soft-light">
                                <Image
                                    src="/images/zodiac/capricorn.svg"
                                    alt="Capricorn Zodiac"
                                    width={500}
                                    height={500}
                                    className="opacity-30"
                                />
                            </div>

                            <Dialog.Title className="sr-only">
                                {data.name}
                            </Dialog.Title>

                            <div className="w-full aspect-square max-w-[300px] mx-auto rounded-full overflow-hidden mb-8 relative">
                                <Image
                                    src={`/images/members/${data.image}`}
                                    alt={data.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="text-center">
                                <h2
                                    className={`text-2xl font-bold text-white mb-1 tracking-widest ${cinzel.className}`}
                                >
                                    {data.name}
                                </h2>
                                <p
                                    className={`text-lg text-slate-300 ${cormorant.className}`}
                                >
                                    {data.nrp}
                                </p>
                            </div>

                            <div className="my-8 h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />

                            <div
                                className={`space-y-4 text-white/90 text-lg ${cormorant.className}`}
                            >
                                <p>
                                    <strong className="font-semibold text-slate-400">
                                        Asal:
                                    </strong>{" "}
                                    {data.origin}
                                </p>
                                <p>
                                    <strong className="font-semibold text-slate-400">
                                        Hobi:
                                    </strong>{" "}
                                    {data.hobby}
                                </p>
                                <p>
                                    <strong className="font-semibold text-slate-400">
                                        Funfact:
                                    </strong>{" "}
                                    {data.funfact}
                                </p>
                            </div>

                            <div className="my-8 h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-300/50 to-transparent" />

                            <div className="mt-8">
                                <h3 className={`text-center text-xl text-white mb-4 tracking-widest ${cinzel.className}`}>
                                    Get to Know Me
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <SocialsButton href={data.socials.instagram} icon={Instagram}>
                                        Instagram
                                    </SocialsButton>
                                    <SocialsButton href={data.socials.linkedin} icon={Linkedin}>
                                        LinkedIn
                                    </SocialsButton>
                                    <SocialsButton href={data.socials.github} icon={Github}>
                                        GitHub
                                    </SocialsButton>
                                </div>
                            </div>

                        </Dialog.Content>
                    </div>
                </div>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
