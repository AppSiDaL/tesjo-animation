import { useState } from 'react';
import ModelViewer from './components/ModelViewer';
import ModalComponent from './components/ModalComponent';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickPosition, setClickPosition] = useState<[number, number, number] | null>(null);

  const openModal = (position: [number, number, number]) => {
    setClickPosition(position);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setClickPosition(null);
  };

  return (
    <div className='app'>
      <ModelViewer url="/models/MAPA_TESJO.glb" onModelClick={openModal} />
      <ModalComponent isOpen={isModalOpen} onRequestClose={closeModal} clickPosition={clickPosition} />
    </div>
  );
}