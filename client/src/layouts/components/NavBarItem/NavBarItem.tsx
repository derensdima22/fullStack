import { LayoutsMenuSections } from '@layouts/types';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import classNames from 'classnames';
import React, { ReactElement, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const NavBarItem = (props: LayoutsMenuSections): ReactElement => {
  const { title, path, icon: Icon } = props;
  const navigate = useNavigate();
  const pathName = useLocation().pathname;

  const isActive = useMemo((): boolean => {
    return path === pathName;
  }, [path, pathName]);

  return (
  <ListItemButton
    className={classNames(
      'bg-white w-full my-1 rounded-lg p-1 pl-2',
      isActive ?'text-black' : 'text-gray'
    )}
    onClick={() => navigate(path)}
  >
    <ListItemIcon className={classNames(
      'py-1 px-2 mr-2 rounded min-w-5',
      isActive && 'bg-blue-800 '
    )}>
      <Icon fontSize="small"/>
    </ListItemIcon>
    <ListItemText primary={title}/>
  </ListItemButton>
  );
};
