import { Box, Menu } from '@mui/material';
import { MouseEvent, ReactElement, useState } from 'react';
import { ProfileToolsItemMenu } from './ProfileToolsItemMenu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import classNames from 'classnames';

export const ProfileToolItem = (): ReactElement => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        className={classNames(
          'cursor-pointer bg-white p-2 rounded-lg h-full aspect-square',
          'flex items-center justify-center'
        )}
        onClick={handleClick}
      >
        <AccountCircleOutlinedIcon className="text-blue-700 w-[60px] h-[60px]"/>
      </Box>

      <Menu
        id="user-info"
        onClose={handleClose}
        onClick={handleClose}
        anchorEl={anchorEl}
        open={!!anchorEl}
      >
        <ProfileToolsItemMenu/>
      </Menu>
    </>
  );
};
