import React from 'react';

const downloadImageAsPng = async (imgUrl, fileName) => {
  const corsProxy = 'https://cors-anywhere.herokuapp.com/';
  const proxiedImgUrl = corsProxy + imgUrl;  // Use CORS proxy

  try {
    const response = await fetch(proxiedImgUrl);
    const blob = await response.blob();

    const img = document.createElement('img');
    img.crossOrigin = 'anonymous';  // Important for CORS
    img.src = URL.createObjectURL(blob);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      // Convert the canvas to a PNG Blob
      canvas.toBlob((pngBlob) => {
        const a = document.createElement('a');
        const url = URL.createObjectURL(pngBlob);
        a.href = url;
        a.download = fileName.endsWith('.png') ? fileName : `${fileName}.png`;
        document.body.appendChild(a);
        a.click();

        // Clean up
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }, 'image/png');
    };
  } catch (error) {
    console.error('Error downloading the image:', error);
  }
};

const ImageDownloader = ({ imgUrl, fileName }) => {
  return (
    <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => downloadImageAsPng(imgUrl, fileName)}>
      Descargar
    </button>
  );
};

export default ImageDownloader;
