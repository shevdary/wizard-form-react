import React, { useState } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { update } from 'redux/user/reducers';
// styled
import { AvatarLabel } from 'components/AccountForm/styled';
import { HiddenField } from './styled';

export const Avatar = ({ input, type }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const onFileChange = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(image);
    if (image && image.size / 1024 < 100) {
      reader.onload = () => {
        dispatch(update({ avatar: reader.result }));
      };
      setError('');
    }

    if (image && image.size / 1024 > 100) {
      setError('File must be less than 1Mb');
    }
  };

  return (
    <AvatarLabel htmlFor="addAvatar">
      <HiddenField
        name={input.name}
        type={type}
        onChange={onFileChange}
        id="addAvatar"
        multiple
      />
      <p>{error}</p>
      <i>+ addAvatar</i>
    </AvatarLabel>
  );
};
