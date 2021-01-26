import React, { useState } from 'react';
import { Field } from 'redux-form';
import { useDispatch } from 'react-redux';
import { addUserData } from '../../redux/user/reducers';
// styled
import { AvatarLabel } from '../AccountForm/styled';

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
    <div>
      <input
        name={input.name}
        type={type}
        onChange={onFileChange}
        id="addAvatar"
        multiple
      />
      <p>{error}</p>
    </div>
  );

  return (
    <AvatarLabel htmlFor="addAvatar">
      <Field name="image" type="file" component={renderFileInput} />
      <i>+ addAvatar</i>
    </AvatarLabel>
  );
};
