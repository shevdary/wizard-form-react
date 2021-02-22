import React, { useState } from 'react';
import PropTypes from 'prop-types';
// components
import CropImage from 'components/CropImage';
// styled
import { AvatarLabel, SpanError } from 'components/Forms/Account/styled';
import { HiddenField } from './styled';

const Avatar = ({ input: { value, ...inputProps } }) => {
  const [avatarSrc, setAvatarSrc] = useState(null);
  const [error, setError] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);

  const onFileChange = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(image);
    if (image && image.size / 1024 < 1000) {
      reader.onload = () => {
        setAvatarSrc(reader.result);
      };
      setIsShowModal(true);
      setError(null);
    }

    if (image && image.size / 1024 > 1000) {
      setError('Image must be less than 1Mb');
    }
  };

  return (
    <>
      <AvatarLabel htmlFor="addAvatar">
        <HiddenField
          {...inputProps}
          type="file"
          onChange={onFileChange}
          accept="image/*"
          id="addAvatar"
          multiple
        />
        <SpanError>{error}</SpanError>
        <i>+ addAvatar</i>
      </AvatarLabel>
      <CropImage
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
