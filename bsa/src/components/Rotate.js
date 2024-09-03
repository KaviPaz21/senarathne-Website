import React, { useRef } from 'react';
import { Canvas, useFrame,extend } from '@react-three/fiber';
import { } from '@react-three/fiber';
import { Text3D } from '@react-three/drei';

const RotatingLetterB = () => {
  const letterRef = useRef();

  useFrame(() => {
    letterRef.current.rotation.y += 0.01;
  });

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Text3D
        ref={letterRef}
        
        size={1}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.05}
        bevelSize={0.05}
        bevelOffset={0}
        bevelSegments={5}
      >
        B
        <meshNormalMaterial />
      </Text3D>
    </Canvas>
  );
};

export default RotatingLetterB;
