import React from 'react';
import Modal from '../../../core/components/ui/Modal.jsx';

export default function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    <Modal isOpen={!!image} onClose={onClose}>
      <img src={image.url} alt={image.title} className="w-full h-auto rounded" />
      <p className="text-gray-800 mt-4">{image.title}</p>
    </Modal>
  );
}