import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import Container from "../commons/Container";
import Noise from "../effects/Noise";

export default function Footer() {
  return (
    <Container as="footer" className="z-50">
      <div className="bg-[#140c2c] px-28 py-20 rounded-t-[80px] border-2 border-accent border-b-0 relative overflow-hidden">
        <Noise strength={15} />
        <div className="relative z-10 flex justify-between">
          <div>
            <div className="flex items-center gap-10">
              <h5 className="text-4xl font-black font-nexa text-accent">
                Eternal bonds, guided by Orion
              </h5>
              <div className="h-1 bg-accent w-40 rounded-xl"></div>
            </div>
            <div className="mt-10 space-y-5">
              <h6 className="font-nexa text-xl">Follow us on</h6>
              <a
                href="https://instagram.com/24it.its"
                target="_blank"
                className="flex items-center gap-2 text-xl font-nexa font-bold"
              >
                <p>Instagram</p>
                <FaInstagram size={30} />
              </a>
            </div>
          </div>
          <div>
            <div className="space-y-2 flex flex-col items-center justify-center">
              <Image
                src="/images/logo-eterion.png"
                alt="Eterion Logo"
                width={478 / 5}
                height={443 / 5}
                className="w-28"
              />
              <h6 className="font-nexa text-xl font-bold">ETERION</h6>
              <p className="font-nexa">© ITS Information Technology | est. 2024</p>
            </div>
          </div>
        </div>
        <div className="bg-radial -top-20 right-20 from-white via-[#3A1D95] to-transparent size-80 blur-3xl absolute"></div>
        <div className="bg-radial -bottom-40 left-40 from-yellow-500/80 via-[#3A1D95] to-transparent size-80 blur-3xl absolute"></div>
      </div>
    </Container>
  );
}
