import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Field } from 'redux-form';
import { addUserData } from 'redux/user/reducers';
// styled
import { AvatarLabel } from '../AccountForm/styled';
import { HiddenField } from './styled';

export const Avatar = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  const onFileChange = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(image);
    if (image && image.size / 1024 < 100) {
      reader.onload = () => {
        dispatch(addUserData({ avatar: reader.result }));
      };
      setError('');
    }

    if (image && image.size / 1024 > 100) {
      setError('File must be less than 1Mb');
    }
  };

  const renderFileInput = ({ input, type }) => (
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

  return <Field name="image" type="file" component={renderFileInput} />;
};
