import React from 'react';

const OurStory = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-32 w-2 h-2 bg-white rounded-full animate-pulse opacity-80"></div>
        <div className="absolute top-40 left-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-32 right-20 w-2 h-2 bg-white rounded-full animate-pulse opacity-70"></div>
        <div className="absolute bottom-20 left-32 w-1 h-1 bg-white rounded-full animate-pulse opacity-50"></div>

        <div className="absolute top-32 left-1/3 w-1 h-1 bg-white rounded-full opacity-40"></div>
        <div className="absolute top-60 right-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-30"></div>
        <div className="absolute bottom-40 left-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-40"></div>
        <div className="absolute top-16 right-1/3 w-1 h-1 bg-white rounded-full opacity-35"></div>
        <div className="absolute bottom-60 right-1/2 w-0.5 h-0.5 bg-white rounded-full opacity-25"></div>

        <div className="absolute top-28 right-40 text-white opacity-40 text-xl">✦</div>
        <div className="absolute bottom-40 left-40 text-white opacity-30 text-lg">✦</div>
        <div className="absolute top-1/2 right-16 text-white opacity-35 text-sm">✦</div>
        <div className="absolute bottom-1/3 left-16 text-white opacity-25 text-lg">✦</div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-2 text-left text-white">Our Name & Story</h2>
          <p className="text-lg text-left text-blue-200">The Meaning of Eterion</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16 relative">
          <div className="rounded-full px-12 py-4 shadow-lg" style={{backgroundImage: "linear-gradient(90deg, #C1FFE7 0%, #B2E5FC 100%)"}}>
            <span className="text-2xl font-semibold text-gray-900">Eternal</span>
          </div>

          <div className="hidden sm:block relative">
            <div className="w-8 h-0.5 bg-blue-200 opacity-80"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 border-r-2 border-t-2 border-blue-200 opacity-80 rotate-45"></div>
          </div>

          <div className="rounded-full px-12 py-4 shadow-lg" style={{backgroundImage: "linear-gradient(90deg, #B2E5FC 0%, #F5FCFF 100%)"}}>
            <span className="text-2xl font-semibold text-gray-900">Orion</span>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl p-8 text-left border shadow-2xl" style={{background: "rgba(255,255,255,0.05)", backdropFilter: "blur(6px)", border: "1px solid rgba(178,229,252,0.3)"}}>
            <div className="absolute -top-2 -right-2 text-white opacity-60 text-2xl">✦</div>
            <div className="absolute -bottom-2 -left-2 text-white opacity-50 text-xl">✦</div>

            <p className="mb-4 text-white">
              <strong className="text-blue-200">ETERION</strong> merupakan nama angkatan <strong className="text-white">Teknologi Informasi 2024</strong> yang mengandung makna "keteguhan abadi sebagai penunjuk arah dalam menghadapi perubahan zaman."
            </p>
            <p className="text-white">
              Layaknya rasi bintang Orion yang bersinar abadi di langit malam dan menjadi panduan bagi para pelaut dan pengembara. <strong className="text-blue-200">Eterion</strong> hadir sebagai generasi pembaharu yang teguh, visioner, dan tak gentar menghadapi tantangan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
