"use client";

import Image from "next/image";
import Container from "../commons/Container";
import Noise from "../effects/Noise";
import NavLink from "./NavLink";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Container as="nav" className="z-20 absolute top-0 left-0 w-full">
      <div className="bg-[#140c2c] px-2 sm:px-4 md:px-8 lg:px-16 xl:px-28 py-2 sm:py-3 md:py-4 lg:py-6 rounded-b-[10px] sm:rounded-b-[20px] md:rounded-b-[40px] lg:rounded-b-[80px] border-2 border-accent border-t-0 relative overflow-hidden">
        <Noise strength={15} />
        <div className="relative z-10 flex justify-between items-center w-full">
          {/* Logo Section - Mobile Optimized */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Image
              src="/images/logo-eterion.png"
              alt="Eterion Logo"
              width={478 / 8}
              height={443 / 8}
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20"
            />
            <h6 className="font-nexa text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold whitespace-nowrap">ETERION</h6>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8 desktop-nav">
            <NavLink label="Home" to="/" />
            <NavLink label="About Us" to="#about" />
            <NavLink label="Members" to="/members" />
            <NavLink label="Fun Corner" to="/fun-corner" />
          </div>

          {/* Mobile Menu Button - Improved Touch Target */}
          <button
            className="lg:hidden mobile-menu-button flex flex-col justify-center items-center w-12 h-12 p-2 rounded-lg touch-manipulation bg-accent/10 border border-accent/30 hover:bg-accent/20 transition-all duration-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-accent transition-all duration-300 my-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-accent transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Sidebar - Slide from Right */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <div 
              className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={toggleMobileMenu}
            ></div>
            
            {/* Side Menu */}
            <div className="lg:hidden fixed top-0 right-0 h-full w-72 bg-[#140c2c]/95 backdrop-blur-xl border-l-2 border-accent/50 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out overflow-hidden">
              <Noise strength={10} />
              
              {/* Header */}
              <div className="relative z-10 p-6 border-b border-accent/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/images/logo-eterion.png"
                      alt="Eterion Logo"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                    <h6 className="font-nexa text-lg font-bold text-accent">ETERION</h6>
                  </div>
                  <button
                    onClick={toggleMobileMenu}
                    className="w-10 h-10 flex items-center justify-center bg-accent/20 hover:bg-accent/30 rounded-full transition-colors"
                  >
                    <span className="text-accent text-xl">×</span>
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="relative z-10 p-6 space-y-4">
                <div onClick={() => setIsMobileMenuOpen(false)} className="touch-manipulation">
                  <div className="flex items-center gap-4 p-4 hover:bg-accent/20 rounded-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-accent/30 group">
                    <span className="text-accent text-2xl group-hover:scale-110 transition-transform"></span>
                    <NavLink label="Home" to="/" />
                  </div>
                </div>
                <div onClick={() => setIsMobileMenuOpen(false)} className="touch-manipulation">
                  <div className="flex items-center gap-4 p-4 hover:bg-accent/20 rounded-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-accent/30 group">
                    <span className="text-accent text-2xl group-hover:scale-110 transition-transform"></span>
                    <NavLink label="About Us" to="/about" />
                  </div>
                </div>
                <div onClick={() => setIsMobileMenuOpen(false)} className="touch-manipulation">
                  <div className="flex items-center gap-4 p-4 hover:bg-accent/20 rounded-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-accent/30 group">
                    <span className="text-accent text-2xl group-hover:scale-110 transition-transform"></span>
                    <NavLink label="Members" to="/members" />
                  </div>
                </div>
                <div onClick={() => setIsMobileMenuOpen(false)} className="touch-manipulation">
                  <div className="flex items-center gap-4 p-4 hover:bg-accent/20 rounded-lg transition-all duration-300 cursor-pointer border border-transparent hover:border-accent/30 group">
                    <span className="text-accent text-2xl group-hover:scale-110 transition-transform"></span>
                    <NavLink label="Fun Corner" to="/fun-corner" />
                  </div>
                </div>
              </div>

              {/* Background Effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-8 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-32 left-8 w-16 h-16 bg-purple-400/20 rounded-full blur-lg"></div>
              </div>
            </div>
          </>
        )}
        {/* Responsive Background Effects */}
        <div className="bg-radial -bottom-8 sm:-bottom-14 left-4 sm:left-8 from-white via-[#3A1D95] to-transparent size-40 sm:size-60 blur-2xl sm:blur-3xl absolute"></div>
        <div className="bg-radial -top-20 sm:-top-40 right-20 sm:right-40 from-yellow-300/55 via-[#3A1D95] to-transparent size-40 sm:size-80 blur-2xl sm:blur-3xl absolute"></div>
        <div className="bg-gradient-to-b left-1/2 -bottom-16 sm:-bottom-32 from-transparent to-[#3A1D95] w-48 sm:w-96 rounded-full h-26 sm:h-52 blur-2xl sm:blur-3xl absolute"></div>
      </div>
    </Container>
  );
}
