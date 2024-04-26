import { Box } from '@mui/material';
import React, { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

const BrandModule = (): ReactElement => {
  return (
    <Box className="flex h-full flex-col flex-1">
      Użytkownicy
      <Outlet/>
    </Box>
  );
};

export default BrandModule;
