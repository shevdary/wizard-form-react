import React from 'react';
// assets
import closeIcon from 'assets/icon/delete.svg';
// styled
import { CloseButton, Section } from '../CropImage/styled';

const Modal = ({ children, shown, close }) => (
  <>
    {shown && (
      <Section className="modal-backdrop">
        {children}

        <CloseButton type="button" onClick={() => close(false)}>
          <img src={closeIcon} alt="" />
        </CloseButton>
      </Section>
    )}
  </>
);

export default Modal;
