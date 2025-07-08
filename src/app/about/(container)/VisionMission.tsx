"use client";

import Container from "@/components/commons/Container";
import Noise from "@/components/effects/Noise";

const VisionMission = () => {
  return (
    <section className="relative pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-90 right-13 w-2 h-2 bg-white rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-white rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-50 right-1/5 w-2 h-2 bg-white rounded-full animate-pulse opacity-20"></div>
        <div className="absolute top-50 left-10 w-2 h-2 bg-white rounded-full animate-pulse opacity-20"></div>
        <img
          className="absolute z-30 w-5 h-5 top-100 right-5 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="absolute z-30 w-7 h-7 top-110 right-15 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="absolute z-30 w-5 h-5 top-110 left-1/10 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="absolute z-30 w-5 h-5 top-20 left-1/3 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="absolute z-30 w-7 h-7 bottom-120 right-1/3 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="absolute z-30 w-5 h-5 bottom-30 left-5 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="absolute z-30 w-6 h-6 bottom-15 left-15 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="absolute z-30 w-4 h-4 bottom-120 left-1/4 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="absolute z-30 w-5 h-5 bottom-50 right-5 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
        <img
          className="absolute z-30 w-7 h-7 bottom-10 right-15 opacity-20 animate-pulse mix-blend-screen"
          src="/images/zodiac/star.png"
          alt="Star"
          style={{ animationDelay: "6s" }}
        />
      </div>
      <Container className="relative z-10 mx-auto px-8">
        <div className="mb-24">
          <div className="flex flex-col items-start w-full pt-18">
            <div className="w-full mb-8 relative">
              <h2 className="relative z-10 inline-block text-6xl font-bold text-white mb-15 text-left font-nexa">
                Vision
              </h2>
              <div
                className="absolute w-[60%] h-[100px] bg-gradient-to-t from-[#0B068E] to-[#534b5f] opacity-90 blur-xl -z-10"
                style={{
                  borderRadius: "60% 40% 60% 40% / 60% 60% 40% 40%",
                  left: "-250px",
                  top: "-20px",
                }}
              />
            </div>

            <div className="w-full mx-auto mb-16">
              <div className="relative bg-gradient-to-br from-accent/30 via-transparent to-transparent backdrop-blur-sm border border-[#B6EADB]/30 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
                <Noise />
                <div className="absolute inset-0 overflow-hidden">
                  <div className="w-[800px] h-[100px] absolute -left-40 top-1/4 bg-gradient-to-r from-cyan-400/35 via-blue-500/25 to-transparent blur-xl transform rotate-10 mix-blend-screen"></div>
                </div>
                <div className="relative z-10">
                  <p className="text-white text-3xl leading-relaxed text-justify font-nexa">
                    Menjadi angkatan yang{" "}
                    <span className="font-bold">teguh, berintegritas,</span> dan
                    menjadi perintisan{" "}
                    <span className="font-bold">peradaban menuju</span> masa
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
              <h2 className="relative z-10 inline-block text-6xl font-bold text-white mb-15 text-right font-nexa">
                Mission
              </h2>
              <div
                className="absolute w-[60%] h-[100px] bg-gradient-to-t from-[#0B068E] to-[#534b5f] opacity-90 blur-xl -z-10"
                style={{
                  borderRadius: "60% 40% 60% 40% / 60% 60% 40% 40%",
                  right: "-250px",
                  top: "-20px",
                }}
              />
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
                        Membangun keluarga yang{" "}
                        <span className="font-bold">solid</span> dan{" "}
                        <span className="font-bold">
                          saling mendukung dengan nilai kekeluargaan
                        </span>{" "}
                        yang kolaboratif sebagai fondasi utama.
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 sm:space-x-6">
                      <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      <p className="leading-relaxed text-justify text-3xl font-nexa">
                        Menumbuhkan karakter yang{" "}
                        <span className="font-bold">kuat</span> dan{" "}
                        <span className="font-bold">berprinsip</span> dalam
                        menghadapi tantangan dunia kerja yang dinamis dan
                        kompetitif.
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
