import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor='black' />
      <pointLight intensity={5} />
      
      {/* Updated spotlight with angle, penumbra, and target */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.3}  // How wide the spotlight is
        penumbra={1}  // Softness of the edge
        intensity={1}  // Brightness of the light
        castShadow
        shadow-mapSize={1024}
      />
      
      <primitive
        object={computer.scene}
        scale={[1, 1, 1]}  // Adjust scale
        position={[-5, -5.25, -1.5]}  // Adjust position
        rotation={[-0.01, -0.2, -0.1]} 
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <div className="absolute inset-0 z-10"> {/* Adjusted z-index */}
      <Canvas 
        frameloop='demand'
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
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
