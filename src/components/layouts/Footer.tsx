import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import Container from "../commons/Container";
import Noise from "../effects/Noise";

export default function Footer() {
  return (
    <Container as="footer" className="z-50">
      <div className="footer-background px-4 sm:px-8 md:px-16 lg:px-28 py-8 sm:py-12 md:py-16 lg:py-20 rounded-t-[20px] sm:rounded-t-[40px] md:rounded-t-[60px] lg:rounded-t-[80px] border-2 border-accent border-b-0 relative overflow-hidden">
        <Noise strength={15} />
        <div className="relative z-10">
          {/* Mobile Layout */}
          <div className="block lg:hidden space-y-6 sm:space-y-8">
            {/* Logo Section */}
            <div className="text-center space-y-3 sm:space-y-4">
              <Image
                src="/images/logo-eterion.png"
                alt="Eterion Logo"
                width={96}
                height={89}
                className="mx-auto w-16 sm:w-20 h-auto"
              />
              <div>
                <h6 className="font-nexa text-lg sm:text-xl font-bold text-accent">ETERION</h6>
                <p className="font-nexa text-xs sm:text-sm text-foreground/80">© ITS Information Technology | est. 2024</p>
              </div>
            </div>
            
            {/* Tagline */}
            <div className="text-center space-y-3">
              <h5 className="text-base sm:text-lg md:text-xl font-black font-nexa text-accent text-center leading-tight">
                Eternal bonds, guided by Orion
              </h5>
              <div className="h-1 bg-accent w-20 sm:w-24 md:w-32 rounded-xl mx-auto"></div>
            </div>
            
            {/* Social Links */}
            <div className="text-center space-y-3">
              <h6 className="font-nexa text-sm sm:text-base text-foreground">Follow us on</h6>
              <a
                href="https://instagram.com/24it.its"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm sm:text-base font-nexa font-bold text-accent hover:text-white transition-all duration-300 px-3 sm:px-4 py-2 rounded-lg hover:bg-accent/10 touch-manipulation"
              >
                <FaInstagram size={20} className="sm:w-6 sm:h-6" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden lg:flex justify-between items-center">
            <div className="flex-1">
              <div className="flex items-center gap-6 lg:gap-8 xl:gap-10">
                <h5 className="text-xl lg:text-2xl xl:text-4xl font-black font-nexa text-accent leading-tight">
                  Eternal bonds, guided by Orion
                </h5>
                <div className="h-1 bg-accent w-24 lg:w-32 xl:w-40 rounded-xl flex-shrink-0"></div>
              </div>
              <div className="mt-6 lg:mt-8 xl:mt-10 space-y-3 lg:space-y-4 xl:space-y-5">
                <h6 className="font-nexa text-base lg:text-lg xl:text-xl text-foreground">Follow us on</h6>
                <a
                  href="https://instagram.com/24it.its"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-base lg:text-lg xl:text-xl font-nexa font-bold text-accent hover:text-white transition-all duration-300 w-fit px-3 lg:px-4 py-2 rounded-lg hover:bg-accent/10 hover:scale-105"
                >
                  <span>Instagram</span>
                  <FaInstagram size={24} className="lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
                </a>
              </div>
            </div>
            
            <div className="flex-shrink-0 ml-8">
              <div className="space-y-2 flex flex-col items-center justify-center">
                <Image
                  src="/images/logo-eterion.png"
                  alt="Eterion Logo"
                  width={478 / 5}
                  height={443 / 5}
                  className="w-20 lg:w-24 xl:w-28 h-auto"
                />
                <h6 className="font-nexa text-base lg:text-lg xl:text-xl font-bold text-accent">ETERION</h6>
                <p className="font-nexa text-xs lg:text-sm xl:text-base text-foreground/80 text-center">© ITS Information Technology | est. 2024</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Effects */}
        <div className="bg-radial -top-10 sm:-top-20 right-10 sm:right-20 from-white via-[#3A1D95] to-transparent size-40 sm:size-60 lg:size-80 blur-2xl sm:blur-3xl absolute"></div>
        <div className="bg-radial -bottom-20 sm:-bottom-40 left-20 sm:left-40 from-yellow-500/80 via-[#3A1D95] to-transparent size-40 sm:size-60 lg:size-80 blur-2xl sm:blur-3xl absolute"></div>
      </div>
    </Container>
  );
}
