import { useGLTF } from '@react-three/drei';

export default function Model({ url, onClick }: { url: string, onClick: () => void }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} onClick={onClick} />;
}