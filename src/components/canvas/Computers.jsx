import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      {/* Ambient Hemisphere Light */}
      <hemisphereLight intensity={5} groundColor='black' />

      {/* Point Light for Direct Illumination */}
      <pointLight intensity={5} />

       {/* Directional Light for Shadows */}
       <directionalLight 
        intensity={0.5} 
        position={[0, 10, 5]} 
        castShadow 
        shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024} 
      />

      <primitive
        object={computer.scene}
        scale={[0.8, 0.8, 0.8]}  // Adjust scale
        position={[0, -4.1, -1.5]}  // Adjust position
        rotation={[-0.01, -0.2, -0.1]} 
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <div className="absolute inset-0"> {/* Adjusted z-index */}
      <Canvas 
        frameloop='demand'
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        // camera={{ position: [30, 5, 10], fov: 40 }} 
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
