"use client";

import Container from "@/components/commons/Container";
import Noise from "@/components/effects/Noise";

const VisionMission = () => {
  return (
    <section className="relative mt-10 pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0"></div>

      <Container className="relative z-10 mx-auto px-4 sm:px-8">
        <div className="mb-20">
          <div className="flex flex-col items-start w-full pt-14 sm:pt-20">
            <div className="w-full mb-8 relative">
              <h2 className="relative z-10 inline-block text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 sm:mb-10 text-left font-nexa">
                Vision
              </h2>
              <div
                className="absolute w-full md:w-[80%] sm:w-[60%] h-10 bg-gradient-to-t from-[#0B068E] to-[#534b5f] opacity-90 blur-xl -z-10"
                style={{
                  borderRadius: "60% 40% 60% 40% / 60% 60% 40% 40%",
                  left: "-120px",
                  top: "0px",
                }}
              />
            </div>

            <div className="w-full mx-auto mb-12">
              <div className="relative bg-gradient-to-br from-accent/30 via-transparent to-transparent backdrop-blur-sm border border-[#B6EADB]/30 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
                <Noise />
                <div className="absolute inset-0 overflow-hidden">
                  <div className="w-[500px] sm:w-[700px] md:w-[800px] h-24 absolute -left-32 top-1/4 bg-gradient-to-r from-cyan-400/35 via-blue-500/25 to-transparent blur-xl rotate-10 mix-blend-screen"></div>
                </div>
                <div className="relative z-10">
                  <p className="text-white text-xl sm:text-2xl lg:text-3xl leading-relaxed text-justify font-nexa">
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
            <div className="w-full mb-8 relative flex justify-end">
              <h2 className="relative z-10 inline-block text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 sm:mb-10 text-right font-nexa">
                Mission
              </h2>
              <div
                className="absolute w-full md:w-[80%] sm:w-[60%] h-10 bg-gradient-to-t from-[#0B068E] to-[#534b5f] opacity-90 blur-xl -z-10"
                style={{
                  borderRadius: "60% 40% 60% 40% / 60% 60% 40% 40%",
                  right: "-120px",
                  top: "0px",
                }}
              />
            </div>

            <div className="w-full mx-auto">
              <div className="relative bg-gradient-to-br from-purple-900/10 via-transparent to-transparent backdrop-blur-sm border border-[#B6EADB]/30 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
                <Noise />
                <div className="absolute inset-0 overflow-hidden">
                  <div className="w-[500px] sm:w-[700px] md:w-[800px] h-20 absolute -right-20 sm:-right-28 md:-right-40 top-1/4 bg-gradient-to-l from-cyan-400/35 via-blue-500/25 to-transparent blur-2xl rotate-[-10deg] mix-blend-screen"></div>
                </div>
                <div className="relative z-10">
                  <div className="space-y-5 text-white">
                    <div className="flex items-start space-x-4 sm:space-x-6">
                      <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-2 sm:mt-2.5"></div>
                      <p className="leading-relaxed text-justify text-xl sm:text-2xl lg:text-3xl font-nexa">
                        Membangun keluarga yang <span className="font-bold">solid</span> dan{" "}
                        <span className="font-bold">
                          saling mendukung dengan nilai kekeluargaan
                        </span>{" "}
                        yang kolaboratif sebagai fondasi utama.
                      </p>
                    </div>
                    <div className="flex items-start space-x-4 sm:space-x-6">
                      <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full mt-2 sm:mt-2.5"></div>
                      <p className="leading-relaxed text-justify text-xl sm:text-2xl lg:text-3xl font-nexa">
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
