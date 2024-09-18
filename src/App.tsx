import  { useState } from 'react';
import ModelViewer from './components/ModelViewer';
import ModalComponent from './components/ModalComponent';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='app'>
      <ModelViewer url="/models/holograma_CAI.glb" onModelClick={openModal} />
      <ModalComponent isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
}