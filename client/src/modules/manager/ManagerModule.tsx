import { Box } from '@mui/material';
import React, { ReactElement, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useAuth } from '@modules/auth/hooks';
import { isBoolean } from 'lodash';

const ManagerModule = (): ReactElement => {
  const { user } = useAuth();
  const { id } = useParams<'id'>();

  return (
    <Box className="flex h-full flex-col flex-1">
      <Outlet/>
    </Box>
  );
};

export default ManagerModule;
