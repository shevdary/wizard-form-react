import React, { useState, useRef, useEffect, useCallback } from 'react';
// store
import { useDispatch } from 'react-redux';
import { updateUser } from 'store/user';
// utils
import ReactCrop from 'react-image-crop';
import { drawImage } from './helpers/drawImage';
// styled
import {
  Article,
  Canvas,
  CropButton,
  CropImageText,
  CropImageWrapper,
  ReactCropPreview,
} from './styled';
import 'react-image-crop/dist/ReactCrop.css';
import Modal from '../Modal';

const CropImage = ({ src, setIsCropImage, isCropImage }) => {
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);

  const dispatch = useDispatch();

  const [completedCrop, setCompletedCrop] = useState(null);
  const [cropImage, setCropImage] = useState({
    unit: '%',
    width: 25,
    height: 25,
    aspect: 16 / 16,
  });

  const onCropChange = (crops) => {
    setCropImage(crops);
  };

  const onImageLoaded = useCallback((img) => {
    imgRef.current = img;
  }, []);

  const onLoadToStore = (e, cropAvatar) => {
    if (!cropAvatar || !previewCanvasRef.current) return;

    const avatar = previewCanvasRef.current.toDataURL('image/jpeg');

    dispatch(updateUser({ avatar }));
    setIsCropImage(!isCropImage);
  };

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) return;

    drawImage(imgRef, previewCanvasRef, completedCrop);
  }, [imgRef, previewCanvasRef, completedCrop]);

  return (
    <>
      {isCropImage && (
        <CropImageWrapper className="Crop-image">
          <Modal shown={isCropImage} close={setIsCropImage}>
            <Article name="section">
              <ReactCrop
                src={src}
                crop={cropImage}
                onChange={onCropChange}
                onImageLoaded={onImageLoaded}
                onComplete={setCompletedCrop}
              />
              <ReactCropPreview>
                <Canvas
                  ref={previewCanvasRef}
                  style={{
                    width: Math.round(
                      `${completedCrop && completedCrop.width}`
                    ),
                    height: Math.round(
                      `${completedCrop && completedCrop.height}`
                    ),
                  }}
                />
              </ReactCropPreview>
            </Article>
            <CropImageText>Select an area for your profile photo</CropImageText>
            <CropButton
              type="button"
              onClick={(e) => onLoadToStore(e, completedCrop)}
            >
              Crop
            </CropButton>
          </Modal>
        </CropImageWrapper>
      )}
    </>
  );
};

export default CropImage;
