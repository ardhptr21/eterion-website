"use client";

import Container from "@/components/commons/Container";
import Noise from "@/components/effects/Noise";

const VisionMission = () => {
  return (
    <section className="relative pb-32 overflow-hidden">
      <Container className="relative z-10 mx-auto px-8">
        <div className="mb-24">
          <div className="flex flex-col items-start w-full">
            <div className="w-full mb-8">
              <h2 className="text-6xl font-bold text-white mb-4 text-left font-nexa">Vision</h2>
            </div>

            <div className="w-full mx-auto">
              <div className="relative bg-gradient-to-br from-accent/30 via-transparent to-transparent backdrop-blur-sm border border-[#B6EADB]/30 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
                <Noise />
                <div className="absolute inset-0 overflow-hidden">
                  <div className="w-[800px] h-[100px] absolute -left-40 top-1/4 bg-gradient-to-r from-cyan-400/35 via-blue-500/25 to-transparent blur-xl transform rotate-10 mix-blend-screen"></div>
                </div>
                <div className="relative z-10">
                  <p className="text-white text-3xl leading-relaxed text-justify font-nexa">
                    Menjadi angkatan yang <span className="font-bold">teguh, berintegritas,</span>{" "}
                    dan menjadi perintisan <span className="font-bold">peradaban menuju</span> masa
                    depan yang berkelanjutan dan bermartabat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-end w-full">
            <div className={`w-full mb-8 md:mb-12 lg:mb-8`}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-right font-nexa">
                Mission
              </h2>
            </div>

            <div className={`w-full mx-auto`}>
              <div className="relative bg-gradient-to-br from-purple-900/10 via-transparent to-transparent backdrop-blur-sm border border-[#B6EADB]/30 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
                <Noise />
                <div className="absolute inset-0 overflow-hidden">
                  <div className="w-[600px] sm:w-[700px] md:w-[800px] h-[80px] sm:h-[90px] md:h-[100px] absolute -right-20 sm:-right-30 md:-right-40 top-1/4 bg-gradient-to-l from-cyan-400/35 via-blue-500/25 to-transparent blur-[30px] sm:blur-[35px] md:blur-[40px] transform -rotate-10 mix-blend-screen"></div>
                </div>
                <div className="relative z-10">
                  <div className="space-y-4 sm:space-y-6 text-white">
                    <div className="flex items-center space-x-4 sm:space-x-6">
                      <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      <p className="leading-relaxed text-justify text-3xl font-nexa">
                        Membangun keluarga yang <span className="font-bold">solid</span> dan{" "}
                        <span className="font-bold">
                          saling mendukung dengan nilai kekeluargaan
                        </span>{" "}
                        yang kolaboratif sebagai fondasi utama.
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 sm:space-x-6">
                      <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      <p className="leading-relaxed text-justify text-3xl font-nexa">
                        Menumbuhkan karakter yang <span className="font-bold">kuat</span> dan{" "}
                        <span className="font-bold">berprinsip</span> dalam menghadapi tantangan
                        dunia kerja yang dinamis dan kompetitif.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default VisionMission;
