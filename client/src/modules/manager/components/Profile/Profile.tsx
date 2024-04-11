import { Avatar, Box, Button } from '@mui/material';
import { ReactElement } from 'react';
import { ProfileHeader, ProfileInfo } from '@modules/manager/components';
import classNames from 'classnames';

export const Profile = (): ReactElement => {
  return (
    <Box className="pt-8 relative">
      <Box className="w-full bg-white rounded-lg p-5 relative">
        <ProfileHeader/>
        <Box className="flex justify-between px-[150px]">
          <ProfileInfo/>
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
    </Box>
  );
};
