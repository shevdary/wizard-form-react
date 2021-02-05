import React, { useState } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { update } from 'redux/user/actions';
// styled
import { AvatarLabel, SpanError } from 'components/Forms/Account/styled';
import { HiddenField } from './styled';

const Avatar = ({ input: { value: omitValue, ...inputProps }, type }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const onFileChange = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(image);
    if (image && image.size / 1024 < 1000) {
      reader.onload = () => {
        dispatch(update({ avatar: reader.result }));
      };
    }

    if (image && image.size / 1024 > 1000) {
      setError('File must be less than 1Mb');
    }
  };

  return (
    <AvatarLabel htmlFor="addAvatar">
      <HiddenField
        {...inputProps}
        type={type}
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
export default Avatar;
