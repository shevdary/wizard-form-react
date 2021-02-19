import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
// store
import { useDispatch } from 'react-redux';
import { setPassedTabs } from 'store/tabs';
// assets
import avatar from 'assets/icon/avatar.svg';
// components
import { UserAvatarImage } from 'components/Forms/Account/styled';
import Field from './components/FieldWrapper';
import ColTypeInfo from './components/Tab';
// styled
import {
  EditContainer,
  EditContainerWrapper,
  Column,
  UserContentWrapper,
} from './styled';
// helpers
import { arrayOfValues, dateChangeFormat, encodePassword } from './helpers';

const UserProfile = ({ user }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();

  const redirectToTab = (tab) => {
    dispatch(setPassedTabs(['account', 'profile', 'contact', 'capabilities']));
    history.push(`/edit-user/${id}/${tab}`);
  };

  const hobbies =
    user.hobbies &&
    user.hobbies.map((item, index) => <p key={index}>{item}</p>);

  return (
    <UserContentWrapper>
      <UserAvatarImage className="avatar" size="170px" border>
        <img src={user.avatar || avatar} alt="userAvatar" />
      </UserAvatarImage>
      <EditContainerWrapper>
        <EditContainer className="account">
          <ColTypeInfo
            label=" Account"
            onClick={() => redirectToTab('account')}
          />
          <Column>
            <Field label="User name" value={user.username} />
            <Field label="Password" value={encodePassword(user.password)} />
          </Column>
        </EditContainer>
        <EditContainer className="personal">
          <ColTypeInfo
            label="Personal"
            onClick={() => redirectToTab('profile')}
          />
          <Column>
            <Field label="First name" value={user.firstName} />
            <Field label="Last name" value={user.lastName} />
            <Field label="Birth date" value={dateChangeFormat(user.birthday)} />
            <Field label="Email" value={user.email} />
            {user.address && (
              <Field label="Address" value={user.address.label} />
            )}
          </Column>
        </EditContainer>
        <EditContainer className="contacts">
          <ColTypeInfo
            label="Contacts"
            onClick={() => redirectToTab('contact')}
          />
          <Column>
            <Field label="Company" value={user.company} />
            {user.fax && <Field label="Fax" value={user.fax} />}
            {user.facebook && (
              <Field
                type="link"
                label="Facebook Link"
                value={user.facebook}
                textLink="facebook.com/"
              />
            )}
            {user.github && (
              <Field
                type="link"
                label="Github Link"
                value={user.github}
                textLink="github.com/"
              />
            )}
            {user.phones[0] &&
              user.phones.map((item, index) => (
                <Field label={`Phone #${index + 1} `} value={item} key={item} />
              ))}
          </Column>
        </EditContainer>
        <EditContainer className="capabilities">
          <ColTypeInfo
            label="Capabilities"
            onClick={() => redirectToTab('capabilities')}
          />
          <Column>
            {user.skills && (
              <Field
                label="Skills"
                value={arrayOfValues(user.skills).join(', ')}
              />
            )}
            {user.hobbies && <Field label="Hobbies" value={hobbies} />}
            {user.info && (
              <Field label="Additional information" value={user.info} />
            )}
          </Column>
        </EditContainer>
      </EditContainerWrapper>
    </UserContentWrapper>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    facebook: PropTypes.string,
    birthday: PropTypes.instanceOf(Date).isRequired,
    fax: PropTypes.string,
    github: PropTypes.string,
    info: PropTypes.string,
    phones: PropTypes.array,
    avatar: PropTypes.string,
    hobbies: PropTypes.array,
    address: PropTypes.object,
    skills: PropTypes.array,
  }).isRequired,
};

export default UserProfile;
