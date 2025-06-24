import Image from "next/image";
import Container from "../commons/Container";
import Noise from "../effects/Noise";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <Container as="nav" className="z-50">
      <div className="bg-[#140c2c] px-28 py-8 rounded-b-[80px] border-2 border-accent border-t-0 relative overflow-hidden">
        <Noise strength={15} />
        <div className="relative z-10 flex justify-between items-center w-full">
          <div className="space-y-2 flex flex-col items-center justify-center">
            <Image
              src="/images/logo-eterion.png"
              alt="Eterion Logo"
              width={478 / 5}
              height={443 / 5}
              className="w-24"
            />
            <h6 className="font-nexa text-xl font-bold">ETERION</h6>
          </div>
          <div className="flex items-center gap-16">
            <NavLink label="Home" to="/" />
            <NavLink label="About Us" to="/about" />
            <NavLink label="Members" to="/members" />
            <NavLink label="Fun Corner" to="/fun-corner" />
          </div>
        </div>
        <div className="bg-radial -bottom-14 left-8 from-white via-[#3A1D95] to-transparent size-60 blur-3xl absolute"></div>
        <div className="bg-radial -top-40 right-40 from-yellow-300/55 via-[#3A1D95] to-transparent size-80 blur-3xl absolute"></div>
        <div className="bg-gradient-to-b left-1/2 -bottom-32 from-transparent to-[#3A1D95] w-96 rounded-full h-52 blur-3xl absolute"></div>
      </div>
    </Container>
  );
}
