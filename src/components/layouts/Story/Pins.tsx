// import { useState } from 'react'

// jangan dihapus dulu yang masih dicomment

import { Html, Sphere } from "@react-three/drei";
// import { useThree } from "@react-three/fiber";

const pinPositions: {
  id: number;
  position: [number, number, number];
  color: string;
  image: string;
  tanggal: string;
  tempat: string;
}[] = [
  {
    id: 1,
    position: [Math.cos(1) * 11, -Math.sin(1) * 7, 0.5],
    color: "purple",
    image: "/images/documentations/1.jpg",
    tanggal: "13 Desember 2024",
    tempat: "Tower 2 ITS",
  },
  {
    id: 10,
    position: [Math.cos(30) * 3, Math.sin(30) * 0, 0.5],
    color: "purple",
    image: "/images/documentations/10.jpg",
    tanggal: "11 Juni 2025",
    tempat: "GOR Pertamina ITS",
  },
  {
    id: 5,
    position: [-Math.cos(45) * 6, Math.sin(45) * 7, 0.5],
    color: "#07B2FC",
    image: "/images/documentations/3.jpg",
    tanggal: "24 November 2024",
    tempat: "Lapangan Basket ITS",
  },
  {
    id: 7,
    position: [Math.cos(60) * 7, Math.sin(60) * 10, 0.5],
    color: "#07B2FC",
    image: "/images/documentations/4.jpg",
    tanggal: "16 November 2024",
    tempat: "Lapangan Basket ITS",
  },
  {
    id: 9,
    position: [Math.cos(80) * 14, Math.sin(80) * 3, 0.5],
    color: "#07B2FC",
    image: "/images/documentations/5.jpg",
    tanggal: "13 Agustus 2024",
    tempat: "Hall Robotika ITS",
  },
  {
    id: 4,
    position: [Math.cos(95) * 2, Math.sin(95) * 12, 0.5],
    color: "purple",
    image: "/images/documentations/8.jpg",
    tanggal: "24 Mei 2025",
    tempat: "Tower 2 ITS",
  },
  {
    id: 3,
    position: [Math.cos(120) * 8, Math.sin(120) * 13, 0.5],
    color: "#07B2FC",
    image: "/images/documentations/7.jpg",
    tanggal: "2 Agustus 2024",
    tempat: "Tower 2 ITS",
  },
  {
    id: 6,
    position: [Math.cos(135) * 7, Math.sin(135) * 11, 0.5],
    color: "purple",
    image: "/images/documentations/6.jpg",
    tanggal: "12 Agustus 2024",
    tempat: "Taman Harmoni Keputih",
  },
  {
    id: 11,
    position: [Math.cos(150) * 4, Math.sin(150) * 6, 0.5],
    color: "#07B2FC",
    image: "/images/documentations/9.jpg",
    tanggal: "11 November 2024",
    tempat: "Taman Makam Pahlawan Surabaya",
  },
  {
    id: 2,
    position: [Math.cos(170) * 7, Math.sin(170) * 5, 0.5],
    color: "purple",
    image: "/images/documentations/2.jpg",
    tanggal: "1 Desember 2024",
    tempat: "Perpustakaan ITS",
  },
  {
    id: 8,
    position: [Math.cos(180) * 7, Math.sin(180) * 8, 0.5],
    color: "purple",
    image: "/images/documentations/11.jpg",
    tanggal: "25-26 Juni 2025",
    tempat: "Villa Primavera Batu",
  },
];

type PinsProps = {
  selectedPinId: number | null;
  setSelectedPinId: (id: number | null) => void;
};

const Pins = ({ selectedPinId, setSelectedPinId }: PinsProps) => {
  // const { size } = useThree()

  return (
    <>
      {pinPositions.map((pin) => (
        <group key={pin.id} position={pin.position} onClick={() => setSelectedPinId(pin.id)}>
          <Sphere args={[0.15, 30, 30]}>
            <meshStandardMaterial color={pin.color} emissive={pin.color} emissiveIntensity={1} />
          </Sphere>
          <mesh position={[0, 0, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.02, 0.02, 1, 16]} />
            <meshStandardMaterial color={pin.color} emissive={pin.color} emissiveIntensity={0.5} />
          </mesh>

          {selectedPinId === pin.id && (
            <Html position={[0, 0, pin.position[2] - 3.7]} center distanceFactor={10}>
              <div
                style={{
                  width: 400,
                  backgroundColor: "rgba(26, 26, 46, 0.4)",
                  color: "#fff",
                  borderRadius: 1,
                  padding: 10,
                  textAlign: "right",
                  fontFamily: "nexa",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  backdropFilter: "blur(1px)",
                  WebkitBackdropFilter: "blur(1px)",
                  border: "1px solid white",
                  zIndex: 52,
                  position: "relative",
                }}
              >
                <div className="bg-radial -top-4 -right-4 from-white via-[#3A1D95] to-transparent -z-1 size-30 blur-2xl absolute"></div>
                <img
                  src={pin.image}
                  alt="popup"
                  style={{
                    width: "100%",
                    borderRadius: 8,
                    marginBottom: 10,
                    zIndex: 52,
                  }}
                />
                <div>
                  <div className="bg-radial bottom-6 left-2 from-white via-[#3A1D95] to-transparent -z-1 size-30 blur-2xl absolute"></div>
                  <strong style={{ fontSize: 18, fontWeight: "bold" }}>{pin.tanggal}</strong>
                  <br />
                  <span style={{ fontSize: 12 }}>{pin.tempat}</span>
                </div>
              </div>
            </Html>
          )}
        </group>
      ))}
    </>
  );
};

export default Pins;

// jangan dihapus dulu yang masih dicomment

// import { useState } from 'react'
// import { Html, Sphere } from '@react-three/drei'
// import { useThree } from '@react-three/fiber'
// import { animated, useSpring } from '@react-spring/three'

// // Data awal
// const initialPins = [
//   { id: 1, position: [Math.cos(1) * 11, -Math.sin(1) * 7, 0.5], color: 'purple', image: '/images/documentations/1.jpg', tanggal: "13 Desember 2024", tempat: "Tower 2 ITS" },
//   { id: 2, position: [Math.cos(30) * 3, Math.sin(30) * 0, 0.5], color: 'purple', image: '/images/documentations/10.jpg', tanggal: "11 Juni 2025", tempat: "GOR Pertamina ITS" },
//   { id: 3, position: [-Math.cos(45) * 6, Math.sin(45) * 7, 0.5], color: '#07B2FC', image: '/images/documentations/3.jpg', tanggal: "24 November 2024", tempat: "Lapangan Basket ITS" },
//   { id: 4, position: [Math.cos(60) * 7, Math.sin(60) * 10, 0.5], color: '#07B2FC', image: '/images/documentations/4.jpg', tanggal: "16 November 2024", tempat: "Lapangan Basket ITS" },
//   { id: 5, position: [Math.cos(80) * 14, Math.sin(80) * 3, 0.5], color: '#07B2FC', image: '/images/documentations/5.jpg', tanggal: "13 Agustus 2024", tempat: "Hall Robotika ITS" },
//   { id: 6, position: [Math.cos(95) * 2, Math.sin(95) * 12, 0.5], color: 'purple', image: '/images/documentations/8.jpg', tanggal: "24 Mei 2025", tempat: "Tower 2 ITS" },
//   { id: 7, position: [Math.cos(120) * 8, Math.sin(120) * 13, 0.5], color: '#07B2FC', image: '/images/documentations/7.jpg', tanggal: "2 Agustus 2024", tempat: "Tower 2 ITS" },
//   { id: 8, position: [Math.cos(135) * 7, Math.sin(135) * 11, 0.5], color: 'purple', image: '/images/documentations/6.jpg', tanggal: "12 Agustus 2024", tempat: "Taman Harmoni Keputih" },
//   { id: 9, position: [Math.cos(150) * 4, Math.sin(150) * 6, 0.5], color: '#07B2FC', image: '/images/documentations/9.jpg', tanggal: "11 November 2024", tempat: "Taman Makam Pahlawan Surabaya" },
//   { id: 10, position: [Math.cos(170) * 7, Math.sin(170) * 5, 0.5], color: 'purple', image: '/images/documentations/2.jpg', tanggal: "1 Desember 2024", tempat: "Perpustakaan ITS" },
//   { id: 11, position: [Math.cos(180) * 7, Math.sin(180) * 8, 0.5], color: 'purple', image: '/images/documentations/11.jpg', tanggal: "25-26 Juni 2025", tempat: "Villa Primavera Batu" },
// ]

// type PinsProps = {
//   selectedPinId: number | null
//   setSelectedPinId: (id: number | null) => void
// }

// const Pins = ({ selectedPinId, setSelectedPinId }: PinsProps) => {
//   const { size } = useThree()
//   const [pins, setPins] = useState(initialPins)

//   // Saat pin diklik
//   const animateRotation = (clickedId: number) => {
//     const clickedIndex = pins.findIndex(pin => pin.id === clickedId)
//     const rotated = [...pins.slice(clickedIndex), ...pins.slice(0, clickedIndex)]

//     // Ganti posisi sesuai rotasi
//     const newPins = pins.map((pin) => {
//       const targetIndex = rotated.findIndex(p => p.id === pin.id)
//       return {
//         ...pin,
//         position: initialPins[targetIndex].position
//       }
//     })

//     setPins(newPins)
//     setSelectedPinId(clickedId)
//   }

//   return (
//     <>
//       {pins.map((pin) => {
//         // Gunakan useSpring agar posisi smooth
//         const spring = useSpring({
//           position: pin.position as [number, number, number], // pastikan bertipe tuple
//           config: { mass: 1, tension: 170, friction: 26 }
//         })

//         return (
//           <animated.group key={pin.id} {...spring} onClick={() => animateRotation(pin.id)}>
//             {/* Sphere */}
//             <Sphere args={[0.15, 30, 30]}>
//               <meshStandardMaterial color={pin.color} emissive={pin.color} emissiveIntensity={1} />
//             </Sphere>

//             {/* Stick */}
//             <mesh position={[0, 0, -0.5]} rotation={[Math.PI / 2, 0, 0]}>
//               <cylinderGeometry args={[0.02, 0.02, 1, 16]} />
//               <meshStandardMaterial color={pin.color} emissive={pin.color} emissiveIntensity={0.5} />
//             </mesh>

//             {/* Popup */}
//             {selectedPinId === pin.id && (
//               <Html position={[0, 0, pin.position[2] - 3.7]} center distanceFactor={10}>
//                 <div style={{
//                   width: 400,
//                   backgroundColor: 'rgba(26, 26, 46, 0.4)',
//                   color: '#fff',
//                   borderRadius: 1,
//                   padding: 10,
//                   textAlign: 'right',
//                   fontFamily: 'nexa',
//                   boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//                   backdropFilter: 'blur(1px)',
//                   WebkitBackdropFilter: 'blur(1px)',
//                   border: '1px solid white',
//                   position: 'relative'
//                 }}>
//                   <div className="bg-radial -top-4 -right-4 from-white via-[#3A1D95] to-transparent -z-1 size-30 blur-2xl absolute"></div>
//                   <img
//                     src={pin.image}
//                     alt="popup"
//                     style={{
//                       width: '100%',
//                       borderRadius: 8,
//                       marginBottom: 10,
//                       zIndex: 3
//                     }}
//                   />
//                   <div>
//                     <div className="bg-radial bottom-6 left-2 from-white via-[#3A1D95] to-transparent -z-1 size-30 blur-2xl absolute"></div>
//                     <strong style={{ fontSize: 18, fontWeight: 'bold' }}>{pin.tanggal}</strong><br />
//                     <span style={{ fontSize: 12 }}>{pin.tempat}</span>
//                   </div>
//                 </div>
//               </Html>
//             )}
//           </animated.group>
//         )
//       })}
//     </>
//   )
// }

// export default Pins

// import { useRef } from 'react'
// import { Html, Sphere } from '@react-three/drei'
// import { useThree, useFrame } from '@react-three/fiber'
// import * as THREE from 'three'

// const pinPositions: {
//   id: number
//   position: [number, number, number]
//   color: string
//   image: string
//   tanggal: string
//   tempat: string
// }[] = [
//   { id: 1, position: [Math.cos(0) * 5, Math.sin(0) * 5, 0.5], color: '#06b6d4', image: '/images/background.png', tanggal: "25-26 Juni 2025", tempat: "Villa Primavera" },
//   { id: 2, position: [Math.cos(30) * 5, Math.sin(30) * 5, 0.5], color: '#06b6d4', image: '/images/background.png', tanggal: "25-26 Juni 2025", tempat: "Villa Primavera"},
//   { id: 3, position: [Math.cos(60) * 5, Math.sin(60) * 5, 0.5], color: 'purple', image: '/images/background.png', tanggal: "25-26 Juni 2025", tempat: "Villa Primavera"},
// ]

// type PinsProps = {
//   selectedPinId: number | null
//   setSelectedPinId: (id: number | null) => void
// }

// const Pins = ({ selectedPinId, setSelectedPinId }: PinsProps) => {
//   const { size } = useThree()
//   const groupRef = useRef<THREE.Group>(null)
//   const speed = 0.01

//   // Rotasi otomatis seluruh grup
//   useFrame(() => {
//     if (groupRef.current) {
//       groupRef.current.rotation.z += 0.005
//     }
//   })

//   return (
//     <group ref={groupRef}>
//       {pinPositions.map((pin) => (
//         <group key={pin.id} position={pin.position} onClick={() => setSelectedPinId(pin.id)}>
//           {/* Sphere */}
//           <Sphere args={[0.1, 32, 32]}>
//             <meshStandardMaterial color={pin.color} />
//           </Sphere>

//           {/* Stick */}
//           <mesh position={[0, 0, -0.3]} rotation={[Math.PI / 2, 0, 0]}>
//             <cylinderGeometry args={[0.02, 0.02, 0.5, 16]} />
//             <meshStandardMaterial color={pin.color} />
//           </mesh>

//           {/* Popup jika dipilih */}
//           {selectedPinId === pin.id && (
//             <Html position={[0, 0.2, 0]} center distanceFactor={10}>
//               <div style={{
//                 width: 300,
//                 background: '#1a1a2e',
//                 color: '#fff',
//                 borderRadius: 10,
//                 padding: 10,
//                 textAlign: 'right',
//                 fontFamily: 'sans-serif',
//                 boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
//               }}>
//                 <img
//                   src={pin.image}
//                   alt="popup"
//                   style={{
//                     width: '100%',
//                     borderRadius: 8,
//                     marginBottom: 10
//                   }}
//                 />
//                 <div style={{ fontSize: 14 }}>
//                   <strong>{pin.tanggal}</strong><br />
//                   {pin.tempat}
//                 </div>
//               </div>
//             </Html>
//           )}
//         </group>
//       ))}
//     </group>
//   )
// }

// export default Pins

// import { useRef, useState } from 'react'
// import { Html, Sphere } from '@react-three/drei'
// import { useThree } from '@react-three/fiber'
// import * as THREE from 'three'

// const pinPositions: {
//   id: number
//   position: [number, number, number]
//   color: string
//   image: string
//   tanggal: string
//   tempat: string
// }[] = [
//   { id: 1, position: [Math.cos(1) * 11, -Math.sin(1) * 7, 0.5], color: 'red', image: '/images/background.png', tanggal: "25-26 Juni 2025", tempat: "Villa Primavera" },
//   { id: 2, position: [Math.cos(30) * 3, Math.sin(30) * 0, 0.5], color: 'orange', image: '/images/background.png', tanggal: "25-26 Juni 2025", tempat: "Villa Primavera"},
//   { id: 3, position: [-Math.cos(45) * 3, Math.sin(45) * 7, 0.5], color: 'purple', image: '/images/background.png', tanggal: "25-26 Juni 2025", tempat: "Villa Primavera"},
//   { id: 4, position: [Math.cos(60) * 7, Math.sin(60) * 10, 0.5], color: 'yellow', image: '/images/background.png', tanggal: "25-26 Juni 2025", tempat: "Villa Primavera"},
//   { id: 5, position: [Math.cos(80) * 14, Math.sin(80) * 3, 0.5], color: 'green', image: '/images/background.png', tanggal: "25-26 Juni 2025", tempat: "Villa Primavera"},
//   { id: 6, position: [Math.cos(95) * 2, Math.sin(95) * 12, 0.5], color: 'white', image: '/images/background.png', tanggal: "25-26 Juni 2025", tempat: "Villa Primavera"},
//   { id: 7, position: [Math.cos(120) * 8, Math.sin(120) * 13, 0.5], color: 'grey', image: '/images/background.png', tanggal: "25-26 Juni 2025", tempat: "Villa Primavera"},
//   { id: 8, position: [Math.cos(135) * 7, Math.sin(135) * 11, 0.5], color: 'blue', image: '/images/background.png', tanggal: "25-26 Juni 2025", tempat: "Villa Primavera"},
//   { id: 9, position: [Math.cos(150) * 4, Math.sin(150) * 6, 0.5], color: 'pink', image: '/images/background.png', tanggal: "25-26 Juni 2025", tempat: "Villa Primavera"},
//   { id: 10, position: [Math.cos(170) * 7, Math.sin(170) * 5, 0.5], color: 'aqua', image: '/images/background.png', tanggal: "25-26 Juni 2025", tempat: "Villa Primavera"},
//   { id: 11, position: [Math.cos(180) * 7, Math.sin(180) * 8, 0.5], color: '#06b6d4', image: '/images/background.png', tanggal: "25-26 Juni 2025", tempat: "Villa Primavera"},
// ]

// type PinsProps = {
//   selectedPinId: number | null
//   setSelectedPinId: (id: number | null) => void
// }

// const Pins = ({ selectedPinId, setSelectedPinId }: PinsProps) => {
//   const groupRef = useRef<THREE.Group>(null)
//   const isDragging = useRef(false)
//   const lastX = useRef(0)
//   const rotationY = useRef(0)

//   const handlePointerDown = (e: React.PointerEvent) => {
//     isDragging.current = true
//     lastX.current = e.clientX
//   }

//   const handlePointerMove = (e: React.PointerEvent) => {
//     if (!isDragging.current) return
//     const deltaX = e.clientX - lastX.current
//     lastX.current = e.clientX

//     // Ubah ke rotasi Y — skala sesuai kebutuhan
//     rotationY.current += deltaX * 0.005
//     if (groupRef.current) {
//       groupRef.current.rotation.y = rotationY.current
//     }
//   }

//   const handlePointerUp = () => {
//     isDragging.current = false
//   }

//   return (
//     <group
//       ref={groupRef}
//       onPointerDown={handlePointerDown}
//       onPointerMove={handlePointerMove}
//       onPointerUp={handlePointerUp}
//       onPointerLeave={handlePointerUp}
//     >
//       {pinPositions.map((pin) => (
//         <group key={pin.id} position={pin.position} onClick={() => setSelectedPinId(pin.id)}>
//           <Sphere args={[0.1, 32, 32]}>
//             <meshStandardMaterial color={pin.color} />
//           </Sphere>

//           <mesh position={[0, 0, -0.3]} rotation={[Math.PI / 2, 0, 0]}>
//             <cylinderGeometry args={[0.02, 0.02, 0.5, 16]} />
//             <meshStandardMaterial color={pin.color} />
//           </mesh>

//           {selectedPinId === pin.id && (
//             <Html position={[0, 0.2, 0]} center distanceFactor={10}>
//               <div style={{
//                 width: 300,
//                 background: '#1a1a2e',
//                 color: '#fff',
//                 borderRadius: 10,
//                 padding: 10,
//                 textAlign: 'right',
//                 fontFamily: 'sans-serif',
//                 boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
//               }}>
//                 <img
//                   src={pin.image}
//                   alt="popup"
//                   style={{
//                     width: '100%',
//                     borderRadius: 8,
//                     marginBottom: 10
//                   }}
//                 />
//                 <div style={{ fontSize: 14 }}>
//                   <strong>{pin.tanggal}</strong><br />
//                   {pin.tempat}
//                 </div>
//               </div>
//             </Html>
//           )}
//         </group>
//       ))}
//     </group>
//   )
// }

// export default Pins
