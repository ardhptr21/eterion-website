import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import Container from "../commons/Container";
import Noise from "../effects/Noise";

export default function Footer() {
  return (
    <Container as="footer" className="z-50">
      <div className="bg-[#140c2c] px-6 md:px-28 py-16 md:py-20 rounded-t-3xl md:rounded-t-[80px] border-2 border-accent border-b-0 relative overflow-hidden">
        <Noise strength={15} />
        <div className="relative z-10 flex flex-col md:flex-row justify-between gap-12 md:gap-0">
          <div className="flex-1">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
              <h5 className="text-2xl md:text-4xl font-black font-nexa text-accent text-center md:text-left">
                Eternal bonds, guided by Orion
              </h5>
              <div className="h-1 bg-accent w-40 rounded-xl hidden md:block"></div>
            </div>
            <div className="mt-10 space-y-5 text-center md:text-left">
              <h6 className="font-nexa text-lg md:text-xl">Follow us on</h6>
              <a
                href="https://instagram.com/24it.its"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center md:justify-start items-center gap-2 text-lg md:text-xl font-nexa font-bold"
              >
                <p>Instagram</p>
                <FaInstagram size={26} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center space-y-2">
            <Image
              src="/images/logo-eterion.png"
              alt="Eterion Logo"
              width={478 / 5}
              height={443 / 5}
              className="w-20 md:w-28"
            />
            <h6 className="font-nexa text-lg md:text-xl font-bold">ETERION</h6>
            <p className="font-nexa text-sm text-center md:text-base">
              © ITS Information Technology | est. 2024
            </p>
          </div>
        </div>

        <div className="bg-radial -top-20 right-20 from-white via-[#3A1D95] to-transparent size-80 blur-3xl absolute z-0"></div>
        <div className="bg-radial -bottom-40 left-40 from-yellow-500/80 via-[#3A1D95] to-transparent size-80 blur-3xl absolute z-0"></div>
      </div>
    </Container>
  );
}
