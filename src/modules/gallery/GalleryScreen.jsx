import React from 'react';
import ImageGrid from './components/ImageGrid.jsx';
import ImageModal from './components/ImageModal.jsx';
import FilterTags from './components/FilterTags.jsx';
import { useGallery } from './Gallery.provider.jsx';
import ErrorBoundary from '../../core/components/ErrorBoundary.jsx';
import Loader from '../../core/components/ui/Loader.jsx';

export default function GalleryScreen() {
  const { images, loading, error, selectedImage, setSelectedImage } = useGallery();

  if (loading) return <Loader />;
  if (error) return <div className="p-4 text-red-600">Error loading gallery: {error}</div>;

  return (
    <ErrorBoundary>
      <section className="py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Gallery</h1>
          <FilterTags />
          <ImageGrid images={images} onImageClick={setSelectedImage} />
          <ImageModal image={selectedImage} onClose={() => setSelectedImage(null)} />
        </div>
      </section>
    </ErrorBoundary>
  );
}