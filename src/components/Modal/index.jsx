import React from 'react';
import PropType from 'prop-types';
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

Modal.propTypes = {
  children: PropType.node.isRequired,
  shown: PropType.bool.isRequired,
  close: PropType.func.isRequired,
};
export default Modal;
