import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';

export default function ModelViewer({ url, onModelClick }: { url: string, onModelClick: () => void }) {
  return (
    <Canvas style={{ background: 'skyblue' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model url={url} onClick={onModelClick} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}