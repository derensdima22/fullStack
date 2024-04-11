import { Box } from '@mui/material';
import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';
import { Profile } from '@modules/manager/components';

const ManagerModule = (): ReactElement => {
  return (
    <Box className="flex h-full flex-col flex-1">
      <Profile/>
      <Outlet/>
    </Box>
  );
};

export default ManagerModule;
