import { Avatar, Box, Button } from '@mui/material';
import { ReactElement, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ModalFormProfile, ModalWrapper, ProfileHeader, ProfileInfo } from '@core/components';
import { ProfileType } from '@core/types';

export const Profile = (props: ProfileType): ReactElement => {
  const { user, onClick, status, isLoadState } = props;
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  const handleOpen = () => setModalIsOpen(true);
  const handleClose = () => setModalIsOpen(false);

  useEffect(() => {
    if (isLoadState) {
      setModalIsOpen(false);
    }
  }, [isLoadState]);

  return (
    <Box className="pt-8 relative">
      <Box className="w-full bg-white rounded-lg p-5 relative">
        <ProfileHeader/>
        <Box className="flex justify-between px-[150px]">
          <ProfileInfo user={user} status={status}/>
          <Box className="flex items-end pb-[80px] ">
          </Box>
        </Box>
        <Box className="absolute top-[50px] right-[100px] flex flex-col items-center gap-[100px]">
          <Avatar
            alt="avatar"
            src="/avatar.png"
            className=" w-[282px] h-[282px]"
          />
          <Button
            onClick={handleOpen}
            variant="contained"
            className={classNames(
              'w-[128px] rounded-2xl',
              'bg-gradient-to-l from-[#024AB5] from-10% via-[#316EC9] via-50% to-[#70A9FF] to-90%'
            )}
          >
            Edit
          </Button>
        </Box>
      </Box>
      <ModalWrapper
        open={modalIsOpen}
        onClose={handleClose}
        header="Edit"
      >
        <ModalFormProfile
          mode="edit"
          user={user}
          onClick={onClick}
          status={status}
        />
      </ModalWrapper>
    </Box>
  );
};
