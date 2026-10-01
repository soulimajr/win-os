'use client';
import { Canvas } from '@react-three/fiber';
import { Sparkles, Stars } from '@react-three/drei';

function GalacticDust() {
  return (
    <>
      {/* Deep background moving stars (slow drift) */}
      <Stars radius={50} depth={50} count={2500} factor={3} saturation={0} fade speed={1} />
      
      {/* Cyan dust floating around */}
      <Sparkles 
        count={300} 
        scale={12} 
        size={1.5} 
        speed={0.4} 
        opacity={0.5} 
        color="#0cc0df" 
      />
      
      {/* Gold dust floating around */}
      <Sparkles 
        count={300} 
        scale={12} 
        size={1.5} 
        speed={0.4} 
        opacity={0.5} 
        color="#e5b842" 
      />
    </>
  );
}

export default function Core3D() {
  return (
    <div style={{ 
      width: '100vw', 
      height: '100vh', 
      position: 'absolute', 
      top: 0, 
      left: 0, 
      zIndex: 5, // Behind text, above solid background
      pointerEvents: 'none', 
      opacity: 0.8 // slight transparency so it blends with the dark UI
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={['#0f172a', 5, 15]} /> {/* Fade particles into the dark background */}
        <GalacticDust />
      </Canvas>
    </div>
  );
}
