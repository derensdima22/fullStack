import { Box } from '@mui/material';
import React, { ReactElement } from 'react';
import { HeaderItem } from '@layouts/components';
import { HeaderTraySection } from '@layouts/components';

export const Header = (): ReactElement => {
  return (
    <Box className="flex justify-between gap-5">
      <Box className="flex justify-between gap-5">
        <HeaderItem title="Strona"/>
        <HeaderItem title="Inni"/>
        <HeaderItem title="Indesky"/>
        <HeaderItem title="Poczta"/>
      </Box>
      <HeaderTraySection/>
    </Box>
  );
};
