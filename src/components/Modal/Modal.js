import React from 'react';
import { Colors } from '../../styles/theme/Theme.styles'

// components
import Modal from 'react-modal';
import Button from '../Button/Button'

// styles
import Zoom from 'react-reveal/Zoom';
import { StyledModal } from './Modal.styles'

const MyModal = ({ children, isOpen, closeModal }) => {

  return (
    <Modal
    ariaHideApp={false}
    isOpen={isOpen}
    onRequestClose={closeModal}
    >
      <Zoom>
        <StyledModal>
          <h2>Modal</h2>
          { children }
          <Button
            classes="close-btn"
            onClick={closeModal}
            color={Colors['gray']}
          >
            Close
          </Button>
        </StyledModal>
      </Zoom>
    </Modal>
  ) 
}


export default MyModal;