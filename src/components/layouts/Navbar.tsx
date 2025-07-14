"use client";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Container from "../commons/Container";
import Noise from "../effects/Noise";
import NavLink from "./NavLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container as="nav" className="z-20 absolute top-0 left-0 w-full">
      <div className="bg-[#140c2c] px-6 md:px-28 py-5 md:py-8 rounded-b-3xl md:rounded-b-[80px] border-2 border-accent border-t-0 relative overflow-hidden">
        <Noise strength={15} />

        <div className="relative z-50 flex justify-between items-center w-full">
          <div className="flex items-center gap-3 md:flex-col md:items-center md:space-y-2">
            <Image
              src="/images/logo-eterion.png"
              alt="Eterion Logo"
              width={478 / 5}
              height={443 / 5}
              className="w-12 md:w-24"
            />
            <h6 className="font-nexa text-lg md:text-xl font-bold">ETERION</h6>
          </div>

          <div className="hidden md:flex items-center gap-16">
            <NavLink label="Home" to="/" />
            <NavLink label="About Us" to="/about" />
            <NavLink label="Members" to="/members" />
            <NavLink label="Fun Corner" to="/fun-corner" />
          </div>

          <button
            className="md:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="text-white" /> : <Menu className="text-white" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-6 flex flex-col items-center gap-6 z-[60] relative">
            <NavLink label="Home" to="/" />
            <NavLink label="About Us" to="/about" />
            <NavLink label="Members" to="/members" />
            <NavLink label="Fun Corner" to="/fun-corner" />
          </div>
        )}

        <div className="bg-radial -bottom-14 left-8 from-white via-[#3A1D95] to-transparent size-60 blur-3xl absolute z-0"></div>
        <div className="bg-radial -top-40 right-40 from-yellow-300/55 via-[#3A1D95] to-transparent size-80 blur-3xl absolute z-0"></div>
        <div className="bg-gradient-to-b left-1/2 -bottom-32 from-transparent to-[#3A1D95] w-96 rounded-full h-52 blur-3xl absolute z-0"></div>
      </div>
    </Container>
  );
}
