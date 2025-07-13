// jangan dihapus dulu yang masih dicomment

// 'use client'

// import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
// import Terrain from './Terrain'



// const StorySection = () => {
//   return (
//     <div className="h-[100vh] w-full">
//       <Canvas camera={{ position: [10, -100, 60], fov: 75 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} />

//         <OrbitControls
//           enableZoom={true} // ✅ Aktifkan zoom
//           enableRotate={true}
//           enablePan={false} // opsional: nonaktifkan drag geser
//         />

//         <Terrain />
//         {/* <Pins /> */}
//       </Canvas>
//     </div>
//   )
// }

// export default StorySection
// "use client";

// import React from "react";
// import { useState, useRef } from 'react'
// import { Canvas, useFrame } from "@react-three/fiber";
// import Pins from './Pins'
// import { OrbitControls, useTexture } from "@react-three/drei";
// // import { Mesh } from 'three';



// type MyModelProps = {
//   imageval: string;
// };

// const MyModel: React.FC<MyModelProps> = ({ imageval }) => {
// const texture = useTexture(imageval);
// // const meshRef = useRef<Mesh>(null);

// // Tambahkan rotasi otomatis seperti orbit
// // useFrame((state, delta) => {
// //   if (meshRef.current) {
// //     // meshRef.current.rotation.y += delta * 0.5;
// //     meshRef.current.rotation.z = delta;
// //   }
// // });


//   return (
//     //  <mesh>
//     //   <sphereGeometry args={[5, 64, 64]} />
//     //   <meshStandardMaterial color="white" />
//     //   <Decal position={[0, 0, 5]} map={texture} />
//     // </mesh>
//     // <mesh>
//     //   {/* <planeGeometry args={[20, 20]} /> */}
//     //   <planeGeometry args={[20, 20, 100, 100]} />
//     //   <meshStandardMaterial 
//     //    map={texture}
//     //    bumpMap={texture}  
//     //    transparent={true}
//     //    bumpScale={1} 
//     //    alphaTest={0.1}         
//     //     />
//     //   </mesh>
//   // <mesh ref={meshRef} rotation={[0, 0, 0]} position={[0, 0, 0]}>
//   <mesh rotation={[0, 0, 0]} position={[0, 0, 0]}>
//     <planeGeometry args={[20, 20]} />
//     <meshStandardMaterial
//       map={texture}
//       transparent        
//       side={2}
//     />
//   </mesh>

//   );
// };

// type ARViewProps = {
//   imageval: string;
// };

// const ARView: React.FC<ARViewProps> = ({ imageval }) => {
//   const [selectedPinId, setSelectedPinId] = useState<number | null>(null)
//   return (
//     // <Canvas>
//     <Canvas 
//       shadows 
//       camera={{ position: [0, -50, 20], fov: 20 }}
//       onPointerMissed={() => setSelectedPinId(null)}
//     >
//       <ambientLight intensity={2} />
//       <directionalLight position={[50, 50, 90]} intensity={3} />
//       <pointLight position={[90, -90, 90]} intensity={5} />
//       <MyModel imageval={imageval} />
//       <OrbitControls
//         enableZoom={true}
//         enablePan={false}        
//         minDistance={10}   
//         maxDistance={40}   
//         enableRotate={true}
//       />
//       <Pins selectedPinId={selectedPinId} setSelectedPinId={setSelectedPinId} />
//     </Canvas>
//   );
// };

// export default ARView;

// jangan dihapus dulu yang masih dicomment

// "use client";

// import React, { useState, useRef } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import Pins from './Pins';
// import { OrbitControls, useTexture } from "@react-three/drei";
// import * as THREE from 'three';

// type MyModelProps = {
//   imageval: string;
// };

// const MyModel: React.FC<MyModelProps> = ({ imageval }) => {
//   const texture = useTexture(imageval);

//   return (
//     <mesh rotation={[0, 0, 0]} position={[0, 0, 0]}>
//       <planeGeometry args={[20, 20]} />
//       <meshStandardMaterial
//         map={texture}
//         transparent        
//         side={2}
//       />
//     </mesh>
//   );
// };

// const RotatingGroup: React.FC<{
//   imageval: string;
//   selectedPinId: number | null;
//   setSelectedPinId: (id: number | null) => void;
// }> = ({ imageval, selectedPinId, setSelectedPinId }) => {
//   const groupRef = useRef<THREE.Group>(null);

//   useFrame((_, delta) => {
//     if (groupRef.current) {
//       groupRef.current.rotation.z += delta * 0.06;      
//     }
//   });

//   return (
//     <group ref={groupRef}>
//       <MyModel imageval={imageval} />
//       <Pins selectedPinId={selectedPinId} setSelectedPinId={setSelectedPinId} />
//     </group>
//   );
// };

// type ARViewProps = {
//   imageval: string;
// };

// const ARView: React.FC<ARViewProps> = ({ imageval }) => {
//   const [selectedPinId, setSelectedPinId] = useState<number | null>(null);

//   return (    
//     <Canvas 
//       shadows 
//       camera={{ position: [0, -50, 25], fov: 25 }}
//       onPointerMissed={() => setSelectedPinId(null)}
//     >
//       <ambientLight intensity={2} />
//       <directionalLight position={[50, 50, 90]} intensity={3} />
//       <pointLight position={[90, -90, 90]} intensity={5} />      
//       <RotatingGroup
//         imageval={imageval}
//         selectedPinId={selectedPinId}
//         setSelectedPinId={setSelectedPinId}
//       />
//       <OrbitControls
//         enableZoom={true}
//         enablePan={false}        
//         minDistance={1}   
//         maxDistance={40}   
//         enableRotate={true}
//       />
//     </Canvas>
//   );
// };

// export default ARView;



"use client";

import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Pins from './Pins';
import { OrbitControls, useTexture } from "@react-three/drei";
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

type MyModelProps = {
  imageval: string;
};

const MyModel: React.FC<MyModelProps> = ({
  imageval,
}) => {  
  const texture = useTexture(imageval);
  const handlePointerOver = () => {
    document.body.style.cursor = 'grab';
  };

  const handlePointerOut = () => {
    document.body.style.cursor = 'default';
  };

  const handlePointerDown = () => {
    document.body.style.cursor = 'grabbing';
  };

  const handlePointerUp = () => {
    document.body.style.cursor = 'grab';
  };

  return (
    <mesh 
      rotation={[0, 0, 0]} 
      position={[0, 0, 0]} 
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}>

      <planeGeometry args={[20, 20]} />
      <meshStandardMaterial
        map={texture}
        transparent        
        side={2}
      />
    </mesh>
  );
};

const RotatingGroup: React.FC<{
  imageval: string;
  selectedPinId: number | null;
  setSelectedPinId: (id: number | null) => void;  
}> = ({ imageval, selectedPinId, setSelectedPinId }) => {

  const groupRef = useRef<THREE.Group>(null);
  const [isDragging, setIsDragging] = useState(false);
  // const [lastX, setLastX] = useState<number | null>(null);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const velocity = useRef({ x: 0, z: 0 });
  const damping = 0.95; 
  const scaleRef = useRef(1);
  
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    lastPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    lastPos.current = null;
  };

  // const handlePointerMove = (e: React.PointerEvent) => {
  //   if (!isDragging || lastX === null || !groupRef.current) return;
  //   const deltaX = e.clientX - lastX;
  //   groupRef.current.rotation.z += deltaX * 0.005;
  //   setLastX(e.clientX);
  // };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || lastPos.current === null || !groupRef.current) return;

    const deltaX = e.clientX - lastPos.current.x;
    const deltaY = e.clientY - lastPos.current.y;

    groupRef.current.rotation.z += deltaX * 0.005; 
    groupRef.current.rotation.x += deltaY * 0.005; 
    velocity.current.z = deltaX * 0.005;
    velocity.current.x = deltaY * 0.005;
    groupRef.current.rotation.x = Math.max(
      -Math.PI/4,
      Math.min(Math.PI / 10, groupRef.current.rotation.x)
    );

    lastPos.current = { x: e.clientX, y: e.clientY };
  };


  // useFrame((_, delta) => {
  useFrame((state) => {
    // if (groupRef.current) {
      // groupRef.current.rotation.z += delta * 0.01;      
    // }
    const t = state.clock.getElapsedTime();

    const scale = 1 + Math.sin(t * 2) * 0.02; 
    scaleRef.current = scale;
    if (groupRef.current) {
      groupRef.current.scale.set(scale, scale, scale);

      if (!isDragging) {
        groupRef.current.rotation.z += velocity.current.z;
        groupRef.current.rotation.x += velocity.current.x;

        groupRef.current.rotation.x = Math.max(
          -Math.PI / 4,
          Math.min(Math.PI / 10, groupRef.current.rotation.x)
        );

        velocity.current.z *= damping;
        velocity.current.x *= damping;

        if (Math.abs(velocity.current.z) < 0.0001) velocity.current.z = 0;
        if (Math.abs(velocity.current.x) < 0.0001) velocity.current.x = 0;
      }
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      <MyModel imageval={imageval}  />
      <Pins selectedPinId={selectedPinId} setSelectedPinId={setSelectedPinId} />
    </group>
  );
};

type ARViewProps = {
  imageval: string;
};

const CustomControls = ({ controlsRef }: { controlsRef: any }) => {
  const { gl, camera } = useThree();

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey && controlsRef.current) {
        e.preventDefault();
        const zoomSpeed = 0.7;
        const direction = e.deltaY > 0 ? 1 : -1;
        const target = controlsRef.current.target;
        const vec = camera.position.clone().sub(target);

        const distance = vec.length();
        const minDistance = 10;   
        const maxDistance = 80;  

        const newDistance = distance * (1 + direction * zoomSpeed * 0.1);

        if (newDistance >= minDistance && newDistance <= maxDistance) {
          vec.multiplyScalar(1 + direction * zoomSpeed * 0.1);
          camera.position.copy(vec.add(target));
        }
      }
    };

    gl.domElement.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      gl.domElement.removeEventListener("wheel", handleWheel);
    };
  }, [gl, camera, controlsRef]);

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={false}
      enablePan={false}
      enableRotate={false}
      minDistance={1}
      maxDistance={40}
    />
  );
};


const ARView: React.FC<ARViewProps> = ({ imageval }) => {
  const [selectedPinId, setSelectedPinId] = useState<number | null>(null);  
  const controlsRef = useRef<any>(null);

  return (   
    <>
    <Canvas 
      shadows 
      camera={{ position: [0, -50, 25], fov: 25 }}
      onPointerMissed={() => setSelectedPinId(null)}        
    >      
      <ambientLight intensity={2} />
      <directionalLight position={[50, 50, 90]} intensity={3} />
      <pointLight position={[90, -90, 90]} intensity={5} />      
      <RotatingGroup
        imageval={imageval}
        selectedPinId={selectedPinId}
        setSelectedPinId={setSelectedPinId}        
      />    
      <CustomControls controlsRef={controlsRef} />
    </Canvas>
    </>
  );
};

export default ARView;
