import React, { useState } from 'react';
import './ImageWithSkeleton.css'; // Importamos el CSS para el efecto de carga

const ImageWithSkeleton = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="image-container">
      {!loaded && <div className="skeleton" />} {/* Mostrar skeleton mientras la imagen carga */}
      <img
        src={src}
        alt={alt}
        className={`image ${loaded ? 'loaded' : 'loading'}`} 
        onLoad={() => setLoaded(true)} // Cambia el estado una vez que la imagen se cargue
      />
    </div>
  );
};

export default ImageWithSkeleton;
