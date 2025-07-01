'use client'

import React, { useEffect, useRef, useState } from 'react'

const VisionMission = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundColor: '#0E0D1B' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 lg:mb-24">
          <div className="flex flex-col items-start w-full">
            <div
              className={`w-full mb-8 md:mb-12 lg:mb-8 transform transition-all duration-1000 ease-out ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-full opacity-0'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-left -ml-4 sm:-ml-6 md:-ml-8 lg:-ml-16" style={{ fontFamily: 'Nexa Heavy, sans-serif' }}>
                Vision
              </h2>
            </div>

            <div
              className={`w-full lg:max-w-vision-mission-container mx-auto transform transition-all duration-1000 ease-out ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-full opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}
            >
              <div className="relative bg-gradient-to-br from-blue-900/30 via-transparent to-transparent backdrop-blur-sm border border-[#B6EADB]/30 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="w-[600px] sm:w-[700px] md:w-[800px] h-[80px] sm:h-[90px] md:h-[100px] absolute -left-20 sm:-left-30 md:-left-40 top-1/4 bg-gradient-to-r from-cyan-400/35 via-blue-500/25 to-transparent blur-[30px] sm:blur-[35px] md:blur-[40px] transform rotate-10 mix-blend-screen"></div>
                </div>
                <div className="relative z-10">
                  <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed text-justify" style={{ fontFamily: 'Nexa Extra Light, sans-serif' }}>
                    Menjadi angkatan yang <span className="text-white" style={{ fontFamily: 'Nexa Heavy, sans-serif' }}>teguh</span>, <span className="text-white" style={{ fontFamily: 'Nexa Heavy, sans-serif' }}>berintegritas</span>, dan
                    menjadi <span className="text-white" style={{ fontFamily: 'Nexa Heavy, sans-serif' }}>perintisan peradaban</span> menuju masa depan
                    yang berkelanjutan dan bermartabat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-end w-full">
            <div
              className={`w-full mb-8 md:mb-12 lg:mb-8 transform transition-all duration-1000 ease-out ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : 'translate-x-full opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 text-right -mr-4 sm:-mr-6 md:-mr-8 lg:-mr-16" style={{ fontFamily: 'Nexa Heavy, sans-serif' }}>
                Mission
              </h2>
            </div>

            <div
              className={`w-full lg:max-w-vision-mission-container mx-auto transform transition-all duration-1000 ease-out ${
                isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-full opacity-0'
              }`}
              style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}
            >
              <div className="relative bg-gradient-to-br from-blue-900/30 via-transparent to-transparent backdrop-blur-sm border border-[#B6EADB]/30 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="w-[600px] sm:w-[700px] md:w-[800px] h-[80px] sm:h-[90px] md:h-[100px] absolute -right-20 sm:-right-30 md:-right-40 top-1/4 bg-gradient-to-l from-cyan-400/35 via-blue-500/25 to-transparent blur-[30px] sm:blur-[35px] md:blur-[40px] transform -rotate-10 mix-blend-screen"></div>
                </div>
                <div className="relative z-10">
                  <div className="space-y-4 sm:space-y-6 text-white">
                    <div className="flex items-center space-x-4 sm:space-x-6">
                      <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      <p className="leading-relaxed text-justify text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" style={{ fontFamily: 'Nexa Extra Light, sans-serif' }}>
                        Membangun keluarga yang <span className="text-white" style={{ fontFamily: 'Nexa Heavy, sans-serif' }}>solid</span> dan <span className="text-white" style={{ fontFamily: 'Nexa Heavy, sans-serif' }}>saling mendukung</span> dengan nilai kekeluargaan yang
                        kolaboratif sebagai fondasi utama.
                      </p>
                    </div>
                    <div className="flex items-center space-x-4 sm:space-x-6">
                      <div className="flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                      <p className="leading-relaxed text-justify text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl" style={{ fontFamily: 'Nexa Extra Light, sans-serif' }}>
                        Menumbuhkan karakter yang <span className="text-white" style={{ fontFamily: 'Nexa Heavy, sans-serif' }}>kuat</span> dan <span className="text-white" style={{ fontFamily: 'Nexa Heavy, sans-serif' }}> berprinsip </span>
                        dalam menghadapi tantangan dunia kerja yang
                        dinamis dan kompetitif.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission;