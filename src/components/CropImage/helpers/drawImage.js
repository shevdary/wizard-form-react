export const drawImage = (imgRef, previewCanvasRef, completedCrop) => {
  const image = imgRef.current;
  const canvas = previewCanvasRef.current;

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  const canvasContext = canvas.getContext('2d');
  const pixelRatio = window.devicePixelRatio;

  canvas.width = completedCrop.width * pixelRatio;
  canvas.height = completedCrop.height * pixelRatio;

  canvasContext.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  canvasContext.imageSmoothingQuality = 'high';

  return canvasContext.drawImage(
    image,
    completedCrop.x * scaleX,
    completedCrop.y * scaleY,
    completedCrop.width * scaleX,
    completedCrop.height * scaleY,
    0,
    0,
    completedCrop.width,
    completedCrop.height
  );
};
