import React from 'react';
import { useHistory } from 'react-router-dom';
import PropsTypes from 'prop-types';
// redux
import { useDispatch } from 'react-redux';
import { setPassedTabs } from 'redux/tabs';
// Field
import { UserAvatarImage } from 'components/Forms/Account/styled';
// assets
import avatar from 'assets/icon/avatar.svg';
// styled
import {
  EditContainer,
  EditContainerWrapper,
  Col,
  UserContentWrapper,
} from './styled';
import Field from './Field';
import {
  arrayOfValues,
  arrayOfValuesByComma,
  dateChangeFormat,
  replacePassword,
} from './utils';
import LinkField from './Field/LinkField';
import ColTypeInfo from './Field/ColTypeInfo';

const UserInfo = ({ user }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const redirectToTab = (tab) => {
    dispatch(setPassedTabs(['account', 'profile', 'contact', 'capabilities']));
    history.push(`/edit-user/${tab}`);
  };

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
          <Col>
            <Field label="User name" value={user.username} />
            <Field label="Password" value={replacePassword(user.password)} />
          </Col>
        </EditContainer>
        <EditContainer className="personal">
          <ColTypeInfo
            label="Personal"
            onClick={() => redirectToTab('profile')}
          />
          <Col>
            <Field label="First name" value={user.firstName} />
            <Field label="Last name" value={user.lastName} />
            <Field label="Birth date" value={dateChangeFormat(user.birthday)} />
            <Field label="Email" value={user.email} />
            {user.address && (
              <Field label="Address" value={user.address.label} />
            )}
          </Col>
        </EditContainer>
        <EditContainer className="contacts">
          <ColTypeInfo
            label="Contacts"
            onClick={() => redirectToTab('contact')}
          />
          <Col>
            <Field label="Company" value={user.company} />
            {user.fax && <Field label="Fax" value={user.fax} />}
            {user.facebook && (
              <LinkField
                label="Facebook Link"
                value={user.facebook}
                textLink="facebook.com/"
              />
            )}
            {user.github && (
              <LinkField
                label="Github Link"
                value={user.github}
                textLink="github.com/"
              />
            )}
            {user.phones[0] &&
              user.phones.map((item, index) => (
                <Field label={`Phone #${index + 1} : `} value={item} />
              ))}
          </Col>
        </EditContainer>
        <EditContainer className="capabilities">
          <ColTypeInfo
            label="Capabilities"
            onClick={() => redirectToTab('capabilities')}
          />
          <Col>
            {user.skills && (
              <Field label="Skills" value={arrayOfValuesByComma(user.skills)} />
            )}
            {user.hobbies && (
              <Field label="Hobbies" value={arrayOfValues(user.hobbies)} />
            )}
          </Col>
        </EditContainer>
      </EditContainerWrapper>
    </UserContentWrapper>
  );
};

UserInfo.propTypes = {
  user: PropsTypes.object.isRequired,
};
export default UserInfo;
