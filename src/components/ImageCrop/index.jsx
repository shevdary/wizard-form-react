import React, { useState, useRef, useEffect } from 'react';
import PropType from 'prop-types';
// store
import { useDispatch } from 'react-redux';
import { updateUser } from 'store/user';
// components
import Modal from 'components/Modal';
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

const ImageCrop = ({ src, isShowModal, setIsShowModal }) => {
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

  const onImageLoaded = (img) => (imgRef.current = img);

  const onLoadToStore = (e, cropAvatar) => {
    if (!cropAvatar || !previewCanvasRef.current) return;

    const avatar = previewCanvasRef.current.toDataURL('image/jpeg');

    dispatch(updateUser({ avatar }));
    setIsShowModal(false);
  };

  const onClick = (e) => {
    if (e.target.className.includes('crop-wrapper')) {
      setIsShowModal(false);
    }
  };

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) return;
    drawImage(imgRef, previewCanvasRef, completedCrop);
  }, [imgRef, previewCanvasRef, completedCrop]);

  return (
    <>
      {isShowModal && (
        <CropImageWrapper onClick={onClick} className="crop-wrapper">
          <Modal shown={isShowModal} close={setIsShowModal}>
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

ImageCrop.propTypes = {
  src: PropType.string,
  isShowModal: PropType.bool.isRequired,
  setIsShowModal: PropType.func.isRequired,
};

export default ImageCrop;
