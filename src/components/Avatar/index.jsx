import React, { useState } from 'react';
import PropTypes from 'prop-types';
// store
import { useDispatch } from 'react-redux';
import { updateUser } from 'store/user/actions';
// styled
import { AvatarLabel, SpanError } from 'components/Forms/Account/styled';
import { HiddenField } from './styled';

const Avatar = ({ input: { value, ...inputProps } }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const onFileChange = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(image);
    if (image && image.size / 1024 < 1000) {
      reader.onload = () => {
        dispatch(updateUser({ avatar: reader.result }));
      };
      setError(null);
    }

    if (image && image.size / 1024 > 1000) {
      setError('Image must be less than 1Mb');
    }
  };

  return (
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
  );
};

Avatar.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
};

export default Avatar;
