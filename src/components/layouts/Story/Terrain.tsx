// jangan dihapus dulu filenya ini kalo mau bikin line orbit manual tapi lama progress

import { useMemo } from 'react'
import { Line } from '@react-three/drei'

const lerpColor = (a: string, b: string, t: number): string => {
  const ah = parseInt(a.replace('#', ''), 16)
  const bh = parseInt(b.replace('#', ''), 16)

  const ar = (ah >> 16) & 0xff, ag = (ah >> 8) & 0xff, ab = ah & 0xff
  const br = (bh >> 16) & 0xff, bg = (bh >> 8) & 0xff, bb = bh & 0xff

  const rr = Math.round(ar + t * (br - ar))
  const rg = Math.round(ag + t * (bg - ag))
  const rb = Math.round(ab + t * (bb - ab))

  return `rgb(${rr}, ${rg}, ${rb})`
}

const gradientSegments = [
  { from: '#1e3a8a', to: '#7e22ce', range: [0, 10] }, 
  { from: '#7e22ce', to: '#c084fc', range: [11, 20] },
  { from: '#c084fc', to: '#f472b6', range: [21, 30] },
  { from: '#f472b6', to: '#2dd4bf', range: [31, 40] },
]

const getGradientColor = (layerIdx: number): string => {
  for (const segment of gradientSegments) {
    const [start, end] = segment.range
    if (layerIdx + 1 >= start && layerIdx + 1 <= end) {
      const t = (layerIdx + 1 - start) / (end - start)
      return lerpColor(segment.from, segment.to, t)
    }
  }
  return '#FFFFFF' 
}

function interpolateRadius(radius: number[], targetLength: number): number[] {
  const result: number[] = [];
  const originalLength = radius.length;

  for (let i = 0; i < targetLength; i++) {
    const t = (i / targetLength) * originalLength;
    const i0 = Math.floor(t) % originalLength;
    const i1 = (i0 + 1) % originalLength;
    const frac = t - Math.floor(t);
    const interpolated = radius[i0] * (1 - frac) + radius[i1] * frac;
    result.push(interpolated);
  }

  return result;
}


const Terrain = () => {
  const layers = useMemo(() => {
    const totalLayers = 60                 // 🔁 Lebih banyak layer
    const pointsPerCircle = 200
    const amplitude = 0.2
    const frequency = 0.1
    const radiusStep = 1               // ➿ Lebih rapat antar lingkaran

    const allCircles = []
    // const radius = [1, 1, 1, 1, -2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    // const radius = [4,1,-4,0,0,-6,0,-5,1,2,3,-6,1,2,-2]
    // const radius = [140.00, 134.32, 128.12, 121.41, 114.21, 106.57, 98.51, 90.06, 81.25, 72.12, 62.71, 53.05, 43.18, 33.15, 22.98, 15.58, 17.37, 30.97, 44.45, 57.75, 70.82, 83.61, 96.08, 108.16, 119.82, 131.00, 141.67, 151.78, 161.28, 170.16, 178.36, 185.85, 192.62, 198.62, 203.84, 208.26, 211.85, 214.61, 216.52, 217.57, 217.77, 217.11, 215.59, 213.22, 210.01, 205.97, 201.11, 195.46, 189.05, 181.88, 174.00, 165.87, 157.09, 147.68, 137.72, 127.45, 117.03, 106.19, 95.45, 84.81, 74.05, 63.47, 53.17, 43.08, 33.39, 24.05, 15.08, 11.63, 19.86, 28.97, 38.84, 48.73, 58.43, 67.90, 77.10, 86.00, 94.62, 102.87, 110.71, 118.11, 125.05, 131.50, 137.42, 142.81, 147.63, 151.87, 155.50, 158.53, 160.93, 162.69, 163.81, 164.29, 164.11, 163.29, 161.83, 159.72, 156.99, 153.64, 149.67, 145.12]
    // const radius = [
    //   40.12, 41.00, 42.09, 43.67, 45.22, 46.01, 46.32, 46.01, 45.18, 44.31,
    //   43.25, 41.77, 40.20, 38.42, 37.17, 36.49, 36.22, 36.49, 36.97, 37.65,
    //   38.68, 39.90, 40.81, 41.28, 41.76, 42.02, 42.36, 42.70, 43.03, 43.28,
    //   42.71, 41.67, 40.40, 38.94, 37.02, 35.49, 34.35, 33.91, 33.66, 33.94,
    //   34.41, 34.94, 35.52, 36.34, 37.70, 39.05, 39.98, 40.58, 40.95, 41.21,
    //   41.40, 41.73, 42.23, 42.90, 43.54, 44.11, 44.29, 43.90, 43.18, 42.11,
    //   40.75, 39.08, 37.44, 36.33, 35.63, 35.17, 34.95, 35.09, 35.45, 35.90,
    //   36.28, 36.68, 37.55, 38.73, 39.94, 40.85, 41.31, 41.68, 42.05, 42.31,
    //   42.56, 42.71, 42.20, 41.09, 39.57, 38.12, 36.73, 35.84, 35.56, 35.90,
    //   36.48, 36.91, 37.34, 37.96, 38.87, 39.78, 40.12, 40.36, 40.12, 40.12
    // ];
    const radius = [
      50,50.5,51,51.5,52,52.5,53,53.5,54,54.5,
      55,55,48.5,47.5,45.5,45.5,44,44,41,41,
      50,50,50,50,50,50,50,50,50,50,
      50,50,50,50,50,50,50,50,50,50,
      50,50,50,50,50,50,50,50,50,50,
      50,50,50,50,50,50,50,50,50,50,
      50,50,50,50,50,50,50,50,50,50,
      50,50,50,50,50,50,50,50,50,50,
      50,50,50,50,50,50,50,50,50,50,
      50,50,50,50,50,50,50,50,50,50,
      50,50,50,50,50,50,50,50,50,50,
      50,50,50,50,50,50,50,50,50,50,
      50,50,50,50,50,50,50,50,50,50,
      50,50,50,50,50,50,50,50,50,50,
      50,50,50,50,50,50,50,50,50,50,
      50,50,50,50,50,50,50,50,50,50,
      50,50,50,50,50,50,50,50,50,50,
      50,50,50,50,50,50,50,50,50,50,
      50,50,50,50,50,50,50,50,50,50,
      50,50,50,50,50,50,50,50,50,50,
    ]

    // const radius = [
    //   40.12, 41.00, 42.09, 43.67, 45.22, 46.01, 46.32, 46.01, 45.18, 44.31,
    //   43.25, 41.77, 40.20, 38.42, 37.17, 36.49, 36.22, 36.49, 36.97, 37.65,
    //   38.68, 39.90, 40.81, 41.28, 41.76, 42.02, 42.36, 42.70, 43.03, 43.28,
    //   42.71, 41.67, 40.40, 38.94, 37.02, 35.49, 34.35, 33.91, 33.66, 33.94,
    //   34.41, 34.94, 20.52, 22.34, 24.70, 28.05, 30.98, 55.58, 57.50, 50.1,
    //   49.40, 48.73, 46.23, 43.90, 40.54, 44.11, 44.29, 40, 41.18, 45.11,
    //   48.9, 49.08, 46.44, 43.33, 40.63, 37.17, 32.95, 28.09, 27.45, 28.90,
    //   30.28, 32.68, 34.55, 37.73, 38.94, 40.85, 43.31, 43.68, 44.05, 44.31,
    //   42.56, 42.71, 42.20, 41.09, 39.57, 38.12, 36.73, 35.84, 35.56, 35.90,
    //   36.48, 36.91, 37.34, 37.96, 38.87, 39.78, 40.12, 40.36, 40.12, 40.12
    // ];

    // const smoothRadius = interpolateRadius(radius, pointsPerCircle);
    

    for (let i = 20; i <= totalLayers; i++) {
      const baseRadius = i * radiusStep
      const points: [number, number, number][] = []

      for (let j = 0; j <= pointsPerCircle; j++) {
        const theta = (j / pointsPerCircle) * Math.PI * 2
        // const dynamicRadius = baseRadius + amplitude * Math.sin(frequency * theta + i)
        const dynamicRadius = baseRadius + radius[j % radius.length]
        // const dynamicRadius = 2

        const x = Math.cos(theta) * dynamicRadius
        const y = Math.sin(theta) * dynamicRadius
        const z = 0.5 * Math.sin(theta * 2 + i)
        points.push([x, y, z])
      }

      allCircles.push(points)
    }

    return allCircles
  }, [])

  return (
    <>
      return (
        <>
          {layers.map((circle, idx) => {
            const layerNumber = idx
            const isHighlight = layerNumber % 10 === 0
            const color = getGradientColor(idx)

            return (
              <Line
                key={idx}
                points={circle}
                color={color}
                lineWidth={isHighlight ? 0.8 : 0.4}
                transparent
                opacity={isHighlight ? 1 : 0.4}
              />
            )
          })}
        </>
      )

    </>
  )
}

export default Terrain
