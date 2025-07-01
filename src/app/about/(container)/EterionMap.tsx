"use client"
import { useState, useEffect } from "react"
import Container from "@/components/commons/Container"
import Noise from "@/components/effects/Noise"
import membersData from "@/statics/members.json"

export default function EterionMap() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  // Count members by city/region
  const membersByCity = membersData.reduce(
    (acc, member) => {
      if (member.kota) {
        const city = member.kota.toLowerCase()
        acc[city] = (acc[city] || 0) + 1
      }
      return acc
    },
    {} as Record<string, number>,
  )

  // Define major cities with their positions
  const cityPositions = [
    { name: "Jakarta", count: membersByCity["jakarta"] || 0, x: "28%", y: "72%" },
    { name: "Surabaya", count: membersByCity["surabaya"] || 0, x: "58%", y: "75%" },
    { name: "Bandung", count: membersByCity["bandung"] || 0, x: "26%", y: "70%" },
    { name: "Semarang", count: membersByCity["semarang"] || 0, x: "42%", y: "72%" },
    { name: "Malang", count: membersByCity["malang"] || 0, x: "56%", y: "78%" },
    { name: "Medan", count: membersByCity["medan"] || 0, x: "18%", y: "35%" },
    { name: "Makassar", count: membersByCity["makassar"] || 0, x: "68%", y: "82%" },
    { name: "Bali", count: membersByCity["bali"] || 0, x: "62%", y: "78%" },
    { name: "Kediri", count: membersByCity["kediri"] || 0, x: "54%", y: "76%" },
    { name: "Gresik", count: membersByCity["gresik"] || 0, x: "57%", y: "73%" },
    { name: "Sidoarjo", count: membersByCity["sidoarjo"] || 0, x: "57%", y: "74%" },
    { name: "Tangerang", count: membersByCity["tangerang"] || 0, x: "27%", y: "73%" },
    { name: "Bekasi", count: membersByCity["bekasi"] || 0, x: "29%", y: "72%" },
    { name: "Bogor", count: membersByCity["bogor"] || 0, x: "28%", y: "71%" },
    { name: "Yogyakarta", count: membersByCity["yogyakarta"] || 0, x: "44%", y: "76%" },
    { name: "Solo", count: membersByCity["surakarta"] || 0, x: "46%", y: "74%" },
    { name: "Denpasar", count: membersByCity["denpasar"] || 0, x: "62%", y: "78%" },
    { name: "Palembang", count: membersByCity["palembang"] || 0, x: "22%", y: "65%" },
    { name: "Banjarmasin", count: membersByCity["banjarmasin"] || 0, x: "62%", y: "65%" },
    { name: "Samarinda", count: membersByCity["samarinda"] || 0, x: "68%", y: "55%" },
  ]

  // Alternative map URLs to try
  const mapUrls = [
    "/placeholder.svg?height=400&width=800&text=Indonesia+Map",
    "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson",
    "data:image/svg+xml,%3Csvg viewBox='0 0 800 400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='800' height='400' fill='%23334155'/%3E%3Ctext x='400' y='200' textAnchor='middle' fill='%23B6EADB' fontSize='24' fontFamily='Arial'%3EIndonesia Map%3C/text%3E%3C/svg%3E",
  ]

  const [currentMapUrl, setCurrentMapUrl] = useState(0)

  useEffect(() => {
    // Reset states when URL changes
    setImageLoaded(false)
    setImageError(false)
  }, [currentMapUrl])

  const handleImageError = () => {
    setImageError(true)
    // Try next URL if available
    if (currentMapUrl < mapUrls.length - 1) {
      setCurrentMapUrl((prev) => prev + 1)
    }
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background decorative elements */}
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

      <Container className="relative z-10">
        {/* Map Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-4 font-nexa">Eterion Map</h2>
        </div>

        {/* Map Container */}
        <div className="relative bg-gradient-to-br from-gray-900/50 via-blue-900/30 to-purple-900/20 backdrop-blur-sm border border-accent/30 rounded-2xl p-8 mb-16 overflow-hidden">
          <Noise />

          {/* Indonesia Map */}
          <div className="relative w-full h-96 mx-auto bg-gradient-to-br from-blue-900/20 to-purple-900/10 rounded-xl overflow-hidden">
            {/* Stylized SVG Map as fallback */}
            <svg viewBox="0 0 800 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="islandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(178, 229, 252, 0.8)" />
                  <stop offset="100%" stopColor="rgba(178, 229, 252, 0.4)" />
                </linearGradient>
              </defs>

              {/* Background */}
              <rect width="800" height="400" fill="rgba(15, 23, 42, 0.3)" />

              {/* Sumatra */}
              <path
                d="M80 80 Q90 60 110 70 Q130 80 140 100 Q135 120 125 140 Q115 160 105 180 Q95 200 85 220 Q75 200 70 180 Q65 160 70 140 Q75 120 80 100 Z"
                fill="url(#islandGradient)"
                stroke="rgba(178, 229, 252, 0.8)"
                strokeWidth="2"
              />

              {/* Java */}
              <path
                d="M180 220 Q200 210 240 215 Q280 220 320 225 Q360 230 400 235 Q440 240 480 245 Q520 250 540 260 Q530 270 520 275 Q480 270 440 265 Q400 260 360 255 Q320 250 280 245 Q240 240 200 235 Q180 230 180 220 Z"
                fill="url(#islandGradient)"
                stroke="rgba(178, 229, 252, 0.9)"
                strokeWidth="2"
              />

              {/* Kalimantan */}
              <path
                d="M300 120 Q340 110 380 120 Q420 130 450 150 Q470 170 480 200 Q475 230 465 250 Q455 270 440 280 Q420 275 400 270 Q380 265 360 255 Q340 245 320 235 Q300 225 285 210 Q275 195 270 180 Q275 165 280 150 Q285 135 300 120 Z"
                fill="url(#islandGradient)"
                stroke="rgba(178, 229, 252, 0.8)"
                strokeWidth="2"
              />

              {/* Sulawesi */}
              <path
                d="M520 180 Q540 170 555 185 Q570 200 575 220 Q580 240 575 260 Q570 280 560 295 Q550 310 535 315 Q520 310 510 295 Q505 280 510 265 Q515 250 520 235 Q525 220 530 205 Q525 190 520 180 Z"
                fill="url(#islandGradient)"
                stroke="rgba(178, 229, 252, 0.8)"
                strokeWidth="2"
              />

              {/* Papua */}
              <path
                d="M600 200 Q640 190 680 200 Q720 210 750 230 Q760 250 755 270 Q750 290 740 305 Q730 320 715 325 Q700 320 685 315 Q670 310 655 300 Q640 290 625 275 Q610 260 605 245 Q600 230 605 215 Q600 200 600 200 Z"
                fill="url(#islandGradient)"
                stroke="rgba(178, 229, 252, 0.8)"
                strokeWidth="2"
              />

              {/* Bali & Nusa Tenggara */}
              <path
                d="M540 260 Q560 255 580 260 Q600 265 615 270 Q610 280 605 285 Q590 280 575 275 Q560 270 545 265 Q540 260 540 260 Z"
                fill="url(#islandGradient)"
                stroke="rgba(178, 229, 252, 0.9)"
                strokeWidth="2"
              />

              {/* Title */}
              <text
                x="400"
                y="50"
                textAnchor="middle"
                fill="rgba(178, 229, 252, 0.6)"
                fontSize="24"
                fontFamily="Arial, sans-serif"
              >
                Indonesia
              </text>
            </svg>

            {/* Location Markers */}
            {cityPositions.map(
              (city, index) =>
                city.count > 0 && (
                  <div
                    key={index}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                    style={{
                      left: city.x,
                      top: city.y,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div className="relative animate-bounce" style={{ animationDuration: "2s" }}>
                      <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-dark font-bold text-sm font-nexa shadow-lg border-2 border-white/50 hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-accent/50">
                        {city.count}
                      </div>

                      {/* Pulse effect */}
                      <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-20"></div>

                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-dark/95 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap font-nexa shadow-lg border border-accent/30 backdrop-blur-sm z-50">
                        <div className="font-semibold">{city.name}</div>
                        <div className="text-accent text-xs">{city.count} members</div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-dark/95"></div>
                      </div>
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>

        {/* Footer Section */}
        <div className="relative bg-gradient-to-r from-primary/40 via-purple-900/30 to-primary/40 backdrop-blur-sm border border-accent/30 rounded-2xl p-8 overflow-hidden">
          <Noise />
          <div className="flex flex-col md:flex-row items-center justify-between relative z-10 gap-6">
            <div className="flex flex-col text-center md:text-left">
              <p className="text-white text-2xl font-nexa mb-2">Eternal bonds, guided by Orion</p>
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <span className="text-accent font-nexa">Follow us</span>
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <div
                    className="w-2 h-2 bg-accent rounded-full animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                </div>
              </div>
            </div>

            {/* Eterion Logo */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/80 to-accent/40 flex items-center justify-center relative overflow-hidden">
                <Noise />
                <div className="text-dark text-xl font-bold font-nexa relative z-10">E</div>
                <div className="absolute inset-2 border-2 border-white/30 rounded-full"></div>
              </div>
              <div className="text-center md:text-right">
                <p className="text-white text-xl font-bold font-nexa">ETERION</p>
                <p className="text-accent text-sm font-nexa">2024</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
