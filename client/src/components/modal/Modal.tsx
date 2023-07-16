import React, { useContext } from 'react';
import '../../sass/modal.scss';
import Modal from '@mui/material/Modal';
import { modalStyle } from '../../utilities/Constants';
import { BookingContext } from '../../contexts/BookingContext';
import { Box } from '@mui/material';

type ChildrenType = { children: React.ReactNode  };

const ModalContainer = ({ children }: ChildrenType) => {
  const { bookingState: { isOpenModal }, closeModal } = useContext(BookingContext);
  
  return (
        <Modal
          open={ isOpenModal }
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
            <Box sx={modalStyle}>
              { children }
            </Box>
        </Modal>
  )
}

export default ModalContainer;