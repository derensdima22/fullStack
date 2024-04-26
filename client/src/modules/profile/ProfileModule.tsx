import { Box } from '@mui/material';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

const ProfileModule = (): ReactElement => {
  return (
    <Box className="flex h-full flex-col flex-1">
      <Outlet/>
    </Box>
  );
};

export default ProfileModule;
