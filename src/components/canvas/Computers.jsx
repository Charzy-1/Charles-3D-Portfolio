import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = () => {
const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <primitive
         object={computer.scene}
         scale={[1, 1, 1]}  // Try increasing if too small
         position={[0, -1.5, 0]}  // Adjust this to bring the model into view
         rotation={[-0.01, -0.2, -0.1]}  // Adjust rotation if needed
       />
    </mesh>
  )
}

const ComputersCanvas = () => {
  
    return (
      <Canvas 
        frameloop='demand'
        shadows
        camera={{ position: [20, 3, 5], fov:25 }}
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
    )
  }

export default Computers