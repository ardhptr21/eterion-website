// Enhanced 3D Terrain with real XYZ coordinates for constellation visualization

import { useMemo, useRef, useState } from "react";
import { Sphere, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const VolumetricTerrain = ({ color = "#7e22ce", opacity = 0.4 }: {
  color?: string;
  opacity?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Buat geometry 3D solid dengan volume nyata
  const geometry = useMemo(() => {
    const width = 200;
    const height = 200; 
    const depth = 80; // DEPTH/KETEBALAN yang nyata!
    const widthSegments = 60;
    const heightSegments = 60;
    const depthSegments = 20; // Segmen untuk ketebalan Z
    
    const geo = new THREE.BoxGeometry(width, height, depth, widthSegments, heightSegments, depthSegments);
    
    // Modifikasi vertices untuk membuat bentuk terrain bergelombang
    const vertices = geo.attributes.position.array as Float32Array;
    
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i];
      const y = vertices[i + 1];
      const z = vertices[i + 2];
      
      // Buat elevation berdasarkan jarak dari center
      const distance = Math.sqrt(x * x + y * y);
      const angle = Math.atan2(y, x);
      
      // Multiple wave layers untuk terrain yang kompleks
      const wave1 = Math.sin(distance * 0.02 + angle * 4) * 15;
      const wave2 = Math.cos(distance * 0.015 + angle * 6) * 10;  
      const wave3 = Math.sin(distance * 0.03 + angle * 2) * 8;
      const wave4 = Math.cos(angle * 8) * Math.sin(distance * 0.01) * 12;
      
      // Modifikasi Z coordinate untuk membuat hills/valleys
      vertices[i + 2] = z + wave1 + wave2 + wave3 + wave4;
    }
    
    geo.attributes.position.needsUpdate = true;
    geo.computeVertexNormals();
    return geo;
  }, []);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      // Rotasi kontinyu pada sumbu Y (horizontal rotation)
      meshRef.current.rotation.y = time * 0.2;
      // Rotasi lambat pada sumbu X (vertical tilt)
      meshRef.current.rotation.x = time * 0.1;
      // Rotasi sangat lambat pada sumbu Z (roll rotation)
      meshRef.current.rotation.z = time * 0.05;
      // Floating movement naik-turun
      meshRef.current.position.y = Math.sin(time * 0.12) * 3;
      // Movement maju-mundur untuk depth
      meshRef.current.position.z = Math.cos(time * 0.1) * 2;
    }
  });
  
  return (
    <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial 
        color={color}
        transparent 
        opacity={opacity}
        wireframe={true}
        emissive={color}
        emissiveIntensity={0.2}
        roughness={0.3}
        metalness={0.7}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
};

// Component untuk membuat struktur 3D berbentuk kristal/pilar yang SOLID
const Crystal3DPillars = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const pillars = useMemo(() => {
    const pillarData = [];
    const count = 24;
    
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 40 + Math.random() * 30;
      
      pillarData.push({
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          0
        ] as [number, number, number],
        height: 20 + Math.random() * 40,
        width: 2 + Math.random() * 3,
        color: ["#00ffff", "#7e22ce", "#f472b6", "#2dd4bf"][i % 4],
        rotation: Math.random() * Math.PI
      });
    }
    return pillarData;
  }, []);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Rotasi utama pada sumbu Y
      groupRef.current.rotation.y = time * 0.15;
      // Rotasi lambat pada sumbu Z
      groupRef.current.rotation.z = time * 0.03;
      // Animasi individual untuk setiap pillar
      groupRef.current.children.forEach((child, i) => {
        child.position.z = Math.sin(time * 0.8 + i) * 5;
        child.rotation.y = time * (0.2 + i * 0.05);
      });
    }
  });
  
  return (
    <group ref={groupRef}>
      {pillars.map((pillar, i) => (
        <mesh 
          key={`pillar-${i}`}
          position={pillar.position}
          rotation={[0, pillar.rotation, 0]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[pillar.width, pillar.width, pillar.height]} />
          <meshStandardMaterial 
            color={pillar.color}
            transparent
            opacity={0.8}
            emissive={pillar.color}
            emissiveIntensity={0.3}
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
      ))}
    </group>
  );
};

// Component untuk partikel bintang constellation
const ConstellationStars = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const stars = useMemo(() => {
    const starData = [];
    for (let i = 0; i < 50; i++) {
      const angle = (i / 50) * Math.PI * 2;
      const radius = 60 + Math.random() * 40;
      const height = (Math.random() - 0.5) * 30;
      
      starData.push({
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          height
        ] as [number, number, number],
        color: ["#00ffff", "#7e22ce", "#f472b6", "#2dd4bf", "#ffffff"][Math.floor(Math.random() * 5)],
        scale: 0.3 + Math.random() * 0.7
      });
    }
    return starData;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.z = time * 0.05;
      groupRef.current.children.forEach((child, i) => {
        const scale = stars[i].scale * (1 + Math.sin(time * 2 + i) * 0.3);
        child.scale.setScalar(scale);
      });
    }
  });

  return (
    <group ref={groupRef}>
      {stars.map((star, i) => (
        <Sphere key={i} position={star.position} args={[0.2, 8, 8]}>
          <meshBasicMaterial 
            color={star.color} 
            transparent 
            opacity={0.9}
          />
        </Sphere>
      ))}
    </group>
  );
};

// Component untuk animasi floating particles seperti di homepage
const FloatingSpaceParticles = () => {
  const particlesRef = useRef<THREE.Group>(null);
  
  const particles = useMemo(() => {
    const particleData = [];
    for (let i = 0; i < 100; i++) {
      particleData.push({
        position: [
          (Math.random() - 0.5) * 400,
          (Math.random() - 0.5) * 400,
          (Math.random() - 0.5) * 200
        ] as [number, number, number],
        velocity: [
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.01
        ] as [number, number, number],
        scale: Math.random() * 0.5 + 0.1,
        color: ["#00ffff", "#7e22ce", "#f472b6", "#2dd4bf", "#ffffff"][Math.floor(Math.random() * 5)],
        speed: Math.random() * 0.01 + 0.005
      });
    }
    return particleData;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (particlesRef.current) {
      particlesRef.current.children.forEach((child, i) => {
        // Floating movement
        child.position.x += particles[i].velocity[0];
        child.position.y += particles[i].velocity[1];
        child.position.z += particles[i].velocity[2];
        
        // Wrap around boundaries
        if (child.position.x > 200) child.position.x = -200;
        if (child.position.x < -200) child.position.x = 200;
        if (child.position.y > 200) child.position.y = -200;
        if (child.position.y < -200) child.position.y = 200;
        if (child.position.z > 100) child.position.z = -100;
        if (child.position.z < -100) child.position.z = 100;
        
        // Twinkling effect
        const twinkle = 0.5 + Math.sin(time * 3 + i) * 0.5;
        child.scale.setScalar(particles[i].scale * twinkle);
      });
    }
  });

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <Sphere key={`particle-${i}`} position={particle.position} args={[0.1, 6, 6]}>
          <meshBasicMaterial 
            color={particle.color} 
            transparent 
            opacity={0.8}
          />
        </Sphere>
      ))}
    </group>
  );
};

// Component untuk efek aurora/nebula bergerak
const MovingAurora = () => {
  const auroraRef = useRef<THREE.Group>(null);
  
  const auroras = useMemo(() => {
    const auroraData = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      auroraData.push({
        position: [
          Math.cos(angle) * 80,
          Math.sin(angle) * 80,
          (Math.random() - 0.5) * 60
        ] as [number, number, number],
        scale: [20 + Math.random() * 15, 5 + Math.random() * 10, 1],
        color: ["#00ffff", "#7e22ce", "#f472b6", "#2dd4bf"][i % 4],
        speed: 0.01 + Math.random() * 0.02
      });
    }
    return auroraData;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (auroraRef.current) {
      auroraRef.current.children.forEach((child, i) => {
        // Flowing aurora movement
        child.rotation.z = time * auroras[i].speed;
        child.position.y = auroras[i].position[1] + Math.sin(time * 0.5 + i) * 20;
        
        // Opacity animation
        const opacity = 0.1 + Math.sin(time * 0.8 + i) * 0.1;
        (child as THREE.Mesh).material = new THREE.MeshBasicMaterial({
          color: auroras[i].color,
          transparent: true,
          opacity: opacity,
          side: THREE.DoubleSide
        });
      });
    }
  });

  return (
    <group ref={auroraRef}>
      {auroras.map((aurora, i) => (
        <mesh 
          key={`aurora-${i}`}
          position={aurora.position}
          scale={aurora.scale as [number, number, number]}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial 
            color={aurora.color}
            transparent 
            opacity={0.15}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
};

// Component untuk shooting stars yang sesekali lewat
const ShootingStars = () => {
  const shootingRef = useRef<THREE.Group>(null);
  const [shootingStars, setShootingStars] = useState<Array<{
    start: [number, number, number];
    end: [number, number, number];
    progress: number;
    active: boolean;
  }>>([]);

  useFrame(() => {
    // Randomly create shooting stars
    if (Math.random() < 0.005) {
      const newStar = {
        start: [
          (Math.random() - 0.5) * 200,
          (Math.random() - 0.5) * 200,
          50 + Math.random() * 50
        ] as [number, number, number],
        end: [
          (Math.random() - 0.5) * 200,
          (Math.random() - 0.5) * 200,
          -50 - Math.random() * 50
        ] as [number, number, number],
        progress: 0,
        active: true
      };
      
      setShootingStars(prev => [...prev.filter(s => s.active), newStar]);
    }
    
    // Update shooting star positions
    setShootingStars(prev => 
      prev.map(star => ({
        ...star,
        progress: star.progress + 0.02,
        active: star.progress < 1
      })).filter(star => star.active)
    );
  });

  return (
    <group ref={shootingRef}>
      {shootingStars.map((star, i) => {
        const currentPos = [
          star.start[0] + (star.end[0] - star.start[0]) * star.progress,
          star.start[1] + (star.end[1] - star.start[1]) * star.progress,
          star.start[2] + (star.end[2] - star.start[2]) * star.progress
        ] as [number, number, number];
        
        return (
          <Sphere 
            key={`shooting-${i}`} 
            position={currentPos} 
            args={[0.3, 8, 8]}
          >
            <meshBasicMaterial 
              color="#ffffff" 
              transparent 
              opacity={1 - star.progress}
            />
          </Sphere>
        );
      })}
    </group>
  );
};

// Component untuk animated floating text dengan glow effect
const AnimatedFloatingText = () => {
  const textRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (textRef.current) {
      // Floating animation
      textRef.current.position.y = Math.sin(time * 0.5) * 2;
      textRef.current.position.z = 25 + Math.sin(time * 0.3) * 3;
      
      // Gentle rotation
      textRef.current.rotation.z = Math.sin(time * 0.2) * 0.05;
    }
  });

  return (
    <group ref={textRef}>
      {/* Main text */}
      <Text
        position={[0, 0, 0]}
        fontSize={4}
        color="#00ffff"
        anchorX="center"
        anchorY="middle"
      >
        ETERION
      </Text>
      
      {/* Glow effect text (behind) */}
      <Text
        position={[0, 0, -1]}
        fontSize={4.5}
        color="#00ffff"
        anchorX="center"
        anchorY="middle"
        material-transparent={true}
        material-opacity={0.3}
      >
        ETERION
      </Text>
      
      {/* Subtitle */}
      <Text
        position={[0, -3, 0]}
        fontSize={1.5}
        color="#7e22ce"
        anchorX="center"
        anchorY="middle"
      >
        Constellation Journey
      </Text>
    </group>
  );
};

// Component utama Terrain dengan VOLUME 3D seperti rumput dalam air
const Terrain = () => {
  return (
    <group>
      {/* Lighting untuk efek 3D dengan shadow */}
      <ambientLight intensity={0.4} color="#1a1a3a" />
      <directionalLight 
        position={[50, 50, 50]} 
        intensity={1.5} 
        color="#00ffff" 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[0, 0, 50]} intensity={2} color="#7e22ce" castShadow />
      <pointLight position={[50, -50, 20]} intensity={1} color="#f472b6" />
      <spotLight 
        position={[0, 0, 80]} 
        intensity={3} 
        color="#ffffff"
        angle={Math.PI / 6}
        penumbra={0.5}
        castShadow
      />
      
      {/* Fog untuk efek depth */}
      <fog attach="fog" args={["#0a0a0a", 50, 200]} />
      
      {/* Floating Space Particles seperti di homepage */}
      <FloatingSpaceParticles />
      
      {/* Moving Aurora/Nebula effects */}
      <MovingAurora />
      
      {/* Shooting Stars animation */}
      <ShootingStars />
      
      {/* Constellation Stars */}
      <ConstellationStars />
      
      {/* VOLUMETRIC TERRAIN SOLID - seperti rumput dalam air */}
      <VolumetricTerrain color="#7e22ce" opacity={0.3} />
      
      {/* Crystal 3D Pillars yang SOLID */}
      <Crystal3DPillars />
      
      {/* Multiple terrain layers dengan opacity berbeda untuk depth */}
      <group position={[0, 0, 20]} scale={[0.8, 0.8, 0.6]}>
        <VolumetricTerrain color="#f472b6" opacity={0.2} />
      </group>
      <group position={[0, 0, -15]} scale={[1.2, 1.2, 0.4]}>
        <VolumetricTerrain color="#2dd4bf" opacity={0.15} />
      </group>
      
      {/* Center Core dengan glow effect */}
      <Sphere position={[0, 0, 0]} args={[3, 32, 32]}>
        <meshStandardMaterial 
          color="#00ffff" 
          transparent 
          opacity={0.6}
          emissive="#00ffff"
          emissiveIntensity={0.3}
        />
      </Sphere>
      
      {/* Floating Text */}
      <AnimatedFloatingText />
    </group>
  );
};

export default Terrain;

