import { Box, Container, Typography } from '@mui/material';
import classNames from 'classnames';
import { ReactElement } from 'react';
import { appConfig } from '@app/config';
import { NavBarItem } from '@layouts/components';
import { useLocation } from 'react-router-dom';

const layoutsMenu = appConfig.menu;

export const Navbar = (): ReactElement => {
  const location = useLocation();

  const handleTransformation = (pathname: string, path: string) => {
    return pathname.split('/')[1] === path.split('/')[1];
  };

  return (
    <Box className={classNames(
      'w-[271px] px-2 pt-5',
      'bg-gradient-to-t from-[#024AB5] from-10% via-[#316EC9] via-50% to-[#70A9FF] to-90%'
    )}>
      <Container
        className="flex items-center justify-center bg-white h-[108px] rounded-lg mb-8"
        >
        <Box className="w-[50px]">
          <img src="/authLogo.png"/>
        </Box>
        <Typography className="text-black pl-2 font-bold text-lg">Analytix</Typography>
      </Container>
      {layoutsMenu.map((items) =>
        handleTransformation(location.pathname, items.path) &&
          <NavBarItem
            key={items.path}
            {...items}
          />
      )}
    </Box>
  );
};
