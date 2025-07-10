"use client";

import Image from "next/image";
import { useState } from "react";
import Noise from "../effects/Noise";

interface Props {
  name: string;
  ig: string;
  image: string;
  nrp?: string;
  zodiac?: string;
  linkedin?: string;
  funfact?: string;
  kota?: string;
  hobi?: string;
}

export default function MemberCard({ name, ig, image, nrp,  funfact, kota, hobi }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Extract username dari IG (tanpa @)
  const igUsername = ig.replace('@', '');

  return (
    <>
      {/* Member Card */}
      <div 
        onClick={openModal}
        className="w-full h-full min-w-[100px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-sm max-w-sm shrink-0 p-1 sm:p-2 md:p-4 lg:p-6 xl:p-8 rounded-md sm:rounded-lg md:rounded-xl border border-accent/50 sm:border-2 sm:border-accent relative bg-[#140c2c]/80 backdrop-blur-lg member-card touch-manipulation cursor-pointer hover:border-accent hover:scale-105 transition-all duration-300"
      >
        <Noise />
        <div className="aspect-[4/5] bg-white rounded-md sm:rounded-lg md:rounded-xl z-10 relative overflow-hidden">
          <Image
            src={`/images/members/${image}`}
            alt={name}
            fill
            className="object-cover w-full h-full"
            sizes="(max-width: 480px) 100px, (max-width: 768px) 180px, (max-width: 1024px) 200px, 250px"
            loading="lazy"
          />
        </div>
        <div className="mt-1 sm:mt-2 md:mt-3 lg:mt-4 xl:mt-5 z-10 px-1">
          <h4 className="text-[10px] sm:text-xs md:text-sm lg:text-lg xl:text-xl font-nexa font-bold leading-tight line-clamp-2 text-center sm:text-left text-accent">{igUsername}</h4>
          <h6 className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-nexa text-foreground/60 line-clamp-1 text-center sm:text-left">{nrp || 'NRP'}</h6>
        </div>
        <div className="absolute -z-10 inset-0 bg-gradient-to-b from-transparent from-40% via-amber-300/20 via-60% to-accent/50 rounded-md sm:rounded-lg md:rounded-xl pointer-events-none"></div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 modal-backdrop" onClick={closeModal}>
          <div 
            className="bg-[#140c2c]/95 backdrop-blur-xl border-2 border-accent/50 rounded-2xl p-6 max-w-md w-full mx-4 relative overflow-hidden modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <Noise strength={10} />
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-accent/20 hover:bg-accent/30 rounded-full transition-all duration-200 z-10 modal-close"
            >
              <span className="text-accent text-lg font-bold">×</span>
            </button>

            {/* Modal Content */}
            <div className="relative z-10">
              {/* Profile Image */}
              <div className="w-32 h-40 mx-auto mb-6 bg-white rounded-xl overflow-hidden relative">
                <Image
                  src={`/images/members/${image}`}
                  alt={name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>

              {/* Member Info */}
              <div className="text-center space-y-4">
                <div>
                  <h2 className="text-xl font-bold font-nexa text-white">{name}</h2>
                  <p className="text-accent text-lg font-medium">@{igUsername}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {nrp && (
                    <div className="text-center">
                      <p className="text-foreground/50 text-xs">NRP</p>
                      <p className="text-foreground font-medium">{nrp}</p>
                    </div>
                  )}
                  {kota && (
                    <div className="text-center">
                      <p className="text-foreground/50 text-xs">Asal</p>
                      <p className="text-foreground font-medium">{kota}</p>
                    </div>
                  )}
                  {hobi && (
                    <div className="text-center">
                      <p className="text-foreground/50 text-xs">Hobi</p>
                      <p className="text-foreground font-medium line-clamp-2">{hobi}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-6">
                {ig && (
                  <a 
                    href={`https://instagram.com/${igUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-lg"></span>
                    <span className="font-medium">Instagram</span>
                  </a>
                )}
                
              </div>

              {/* Fun Fact or Quote */}
              <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/30">
                {funfact ? (
                  <div>
                    <p className="text-center text-foreground/60 text-xs mb-1">Fun Fact</p>
                    <p className="text-center text-foreground italic text-sm">{funfact}</p>
                  </div>
                ) : (
                  <p className="text-center text-foreground/80 italic">
                    Part of the ETERION constellation
                  </p>
                )}
              </div>
            </div>

            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-4 right-8 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-8 left-4 w-16 h-16 bg-purple-400/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
