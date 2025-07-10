import Container from "@/components/commons/Container";
import Noise from "@/components/effects/Noise";

const OurStory = () => {
  return (
    <section className="mb-12 sm:mb-16 md:mb-20 relative py-12 sm:py-16 md:py-20 bg-gradient-to-br min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-32 w-2 h-2 bg-white rounded-full animate-pulse opacity-80 hidden sm:block"></div>
        <div className="absolute top-40 left-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-60 hidden sm:block"></div>
        <div className="absolute bottom-32 right-20 w-2 h-2 bg-white rounded-full animate-pulse opacity-70 hidden md:block"></div>
        <div className="absolute bottom-20 left-32 w-1 h-1 bg-white rounded-full animate-pulse opacity-50 hidden md:block"></div>

        <div className="absolute top-32 left-1/3 w-1 h-1 bg-white rounded-full opacity-40 hidden lg:block"></div>
        <div className="absolute top-60 right-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-30 hidden lg:block"></div>
        <div className="absolute bottom-40 left-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-40 hidden lg:block"></div>
        <div className="absolute top-16 right-1/3 w-1 h-1 bg-white rounded-full opacity-35 hidden lg:block"></div>
        <div className="absolute bottom-60 right-1/2 w-0.5 h-0.5 bg-white rounded-full opacity-25 hidden lg:block"></div>

        <div className="absolute top-28 right-40 text-white opacity-40 text-xl hidden sm:block">✦</div>
        <div className="absolute bottom-40 left-40 text-white opacity-30 text-lg hidden sm:block">✦</div>
        <div className="absolute top-1/2 right-16 text-white opacity-35 text-sm hidden md:block">✦</div>
        <div className="absolute bottom-1/3 left-16 text-white opacity-25 text-lg hidden md:block">✦</div>
      </div>

      <div className="relative mx-auto">
        <div
          className="absolute w-[60%] h-[100px] bg-gradient-to-t from-[#0B068E] to-[#310E61] opacity-90 blur-xl -z-10 hidden sm:block"
          style={{
            borderRadius: "60% 40% 60% 40% / 60% 60% 40% 40%",
            left: "-70px",
            top: "-20px",
          }}
        />
        <Container className="mb-8 sm:mb-10 md:mb-12 space-y-6 sm:space-y-8 md:space-y-10 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-left text-white font-nexa">Our Name & Story</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-left text-blue-200 font-nexa">The Meaning of Eterion</p>
        </Container>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 sm:mb-16 relative px-4">
          <div
            className="rounded-full px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 shadow-lg"
            style={{ backgroundImage: "linear-gradient(90deg, #C1FFE7 0%, #B2E5FC 100%)" }}
          >
            <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 font-nexa">Eternal</span>
          </div>

          <div className="hidden sm:block relative">
            <div className="w-6 sm:w-8 h-0.5 bg-blue-200 opacity-80"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 border-r-2 border-t-2 border-blue-200 opacity-80 rotate-45"></div>
          </div>

          <div
            className="rounded-full px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 shadow-lg"
            style={{ backgroundImage: "linear-gradient(90deg, #B2E5FC 0%, #F5FCFF 100%)" }}
          >
            <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 font-nexa">Orion</span>
          </div>
        </div>

        <Container className="relative px-4">
          <div
            className="rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-14 text-left border shadow-2xl"
            style={{
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(6px)",
              border: "1px solid rgba(178,229,252,0.3)",
            }}
          >
            <Noise />
            <p className="mb-6 sm:mb-8 md:mb-10 text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-nexa leading-relaxed">
              <strong className="text-blue-200">ETERION</strong> merupakan nama angkatan{" "}
              <strong className="text-white">Teknologi Informasi 2024</strong> yang mengandung makna{" "}
              <span className="underline decoration-accent">
                keteguhan abadi sebagai penunjuk arah dalam menghadapi perubahan zaman
              </span>
              .
            </p>
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-nexa leading-relaxed">
              Layaknya rasi bintang Orion yang bersinar abadi di langit malam dan menjadi panduan
              bagi para pelaut dan pengembara. <strong className="text-blue-200">ETERION</strong>{" "}
              hadir sebagai generasi pembaharu yang teguh, visioner, dan tak gentar menghadapi
              tantangan.
            </p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default OurStory;
