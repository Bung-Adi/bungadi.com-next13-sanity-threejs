"use client"
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Sta = () => {
  const earth = useGLTF("./bungadi3d/logo.gltf")

  return (
    <mesh castShadow receiveShadow>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <primitive object={earth.scene} scale={2.5} position-y={-3} rotation-y={0} />
    </mesh>
  );
};

const LogoBigCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Sta />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default LogoBigCanvas;