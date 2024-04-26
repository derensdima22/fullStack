import React, { ReactElement } from 'react';
import { Box, Modal, Typography } from '@mui/material';
import classNames from 'classnames';
import { ModalWrapperProps } from '@core/types';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 472,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '8px',
};

export const ModalWrapper = ({
  children: ModalComponent,
  className,
  open,
  onClose,
  header,
  ...modalProps
}: ModalWrapperProps): ReactElement => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      {...modalProps}
      className={classNames(className, 'flex overflow-y-auto py-8')}
    >
      <Box sx={style}>
        <Box className="w-full border-b-2 p-6">
          <Typography className="text-8 font-medium">{header}</Typography>
        </Box>
        <Box className="w-full p-6">
          {ModalComponent}
        </Box>
      </Box>
    </Modal>
  );
};
