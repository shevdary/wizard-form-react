import React, { useState } from 'react';
import PropTypes from 'prop-types';
// components
import ImageCrop from 'components/ImageCrop';
// styled
import {
  AvatarLabel,
  ChangeSelectAvatar,
  SpanError,
} from 'components/Forms/Account/styled';
import { HiddenField } from './styled';

const Avatar = ({ input: { value, ...inputProps } }) => {
  const [avatarSrc, setAvatarSrc] = useState(null);
  const [errorSize, setErrorSize] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleFileChange = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();

    if (image && image.size / 1024 < 1000) {
      reader.readAsDataURL(image);

      reader.onload = () => {
        setAvatarSrc(reader.result);
      };
      setIsShowModal(!isShowModal);
      setErrorSize(null);
    }

    if (image && image.size / 1024 > 1000) {
      setErrorSize('Image must be less than 1Mb');
    }
  };
  const handleSelectedImage = () => setIsShowModal(true);

  return (
    <>
      <AvatarLabel htmlFor="addAvatar">
        <HiddenField
          {...inputProps}
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          id="addAvatar"
          multiple
        />
        <SpanError>{errorSize}</SpanError>
        <i>+ add Avatar</i>
        {avatarSrc && (
          <ChangeSelectAvatar type="button" onClick={handleSelectedImage}>
            change
          </ChangeSelectAvatar>
        )}
      </AvatarLabel>
      <ImageCrop
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        src={avatarSrc}
      />
    </>
  );
};

Avatar.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
};

export default Avatar;
