import { appConfig } from '@app/config';
import { Box } from '@mui/material';
import { ReactElement } from 'react';

export const HeaderTraySection = (): ReactElement => {
  return (
    <Box className="flex gap-2 items-center w-max">
      {appConfig.layout.tray?.map((Component, index) => (
        <Component key={index}/>
      ))}
    </Box>
  );
};
