import React, { useState } from 'react';
import PropsTypes from 'prop-types';
// assets
import deleteIcon from 'assets/icon/delete.svg';
import editIcon from 'assets/icon/edit.svg';
import confirmDel from 'assets/icon/confirmDelete.svg';
import avatar from 'assets/icon/avatar.svg';
// utils
import { lastUserUpdate } from 'utils/updateTime';
import moment from 'moment';
// styled
import { ButtonTransparent } from 'components/Popup/styled';
import { UserAvatarImage } from 'components/Forms/Account/styled';
import { ConfirmButton, FlexCol, FlexTable, Section } from './styled';

const TableRow = ({ user, handleDelete, handleEdit, count }) => {
  const [itemSlide, setItemSlide] = useState(false);

  const handleConfirm = () => {
    setItemSlide(!itemSlide);
  };

  return (
    <Section count={count} className={`body  ${itemSlide ? 'slide' : 'hide'}`}>
      <FlexTable color="#e7f0ff" height="95px">
        <FlexCol className="avatar">
          <UserAvatarImage className="avatar" size="40px" left="15px">
            <img src={user.avatar || avatar} alt="avatarUser" />
          </UserAvatarImage>
          <div className="flex-right">
            <p>{`${user.firstName}  ${user.lastName}`}</p>
            <sub>{user.username}</sub>
          </div>
        </FlexCol>
        <FlexCol>{user.company}</FlexCol>
        <FlexCol minWidth="275px">{user.phones[0] || user.email}</FlexCol>
        <FlexCol className="childDisplay">
          <p>
            {user.updatedAt
              ? lastUserUpdate(user.updatedAt, moment.now())
              : 'non changes'}
          </p>
          <div className="flex-button">
            <ButtonTransparent onClick={() => handleEdit(user.id)}>
              <img src={editIcon} alt="editIcon" />
            </ButtonTransparent>
            <ButtonTransparent onClick={handleConfirm}>
              <img src={deleteIcon} alt="deleteIcon" />
            </ButtonTransparent>
          </div>
        </FlexCol>
      </FlexTable>
      <ConfirmButton onClick={() => handleDelete(user.id)} delete>
        <img src={confirmDel} alt="confirm" />
        delete
      </ConfirmButton>
    </Section>
  );
};

TableRow.propTypes = {
  user: PropsTypes.object.isRequired,
  handleDelete: PropsTypes.func.isRequired,
  handleEdit: PropsTypes.func.isRequired,
};

export default TableRow;
