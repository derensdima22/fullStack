import { Box, Container, Typography } from '@mui/material';
import classNames from 'classnames';
import { ReactElement } from 'react';
import { appConfig } from '@app/config';
import { NavBarItem } from '@layouts/components';

const layoutsMenu = appConfig.menu;

export const Navbar = (): ReactElement => {
  return (
    <Box className={classNames(
      'w-[271px] px-2 pt-5',
      'bg-gradient-to-t from-[#024AB5] from-10% via-[#316EC9] via-50% to-[#70A9FF] to-90%'
    )}>
      <Container
        className="flex items-center justify-center bg-white h-[108px] rounded-lg mb-5"
        >
        <Box className="w-[50px]">
          <img src="/authLogo.png"/>
        </Box>
        <Typography className="text-black pl-2 font-bold text-lg">Analytix</Typography>
      </Container>
      {layoutsMenu.map((items) =>
        <NavBarItem
          key={items.path}
          {...items}
        />
      )}
    </Box>
  );
};
