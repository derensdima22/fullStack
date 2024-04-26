import { appConfig } from '@app/config';
import { ElementPermissions } from '@modules/auth/guards';
import { useAuth } from '@modules/auth/hooks';
import { ProfilePermissions } from '@modules/profile/types';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ExitToApp from '@mui/icons-material/ExitToApp';
import { Box, Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { ReactElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const ProfileToolsItemMenu = (): ReactElement => {
  const auth = useAuth();
  const navigate = useNavigate();

  const exitHandler = (): void => {
    auth.logout().then(() => navigate('/auth'));
  };

  return (
    <Box className="max-w-96 min-w-60 w-full">
      <Box>
        <MenuList dense className="p-0">
          <ElementPermissions permissions={[ProfilePermissions.read]}>
            <MenuItem component={Link} to="/profile">
              <ListItemIcon className="min-w-fit p-2 text-blue-700">
                <AccountCircle/>
              </ListItemIcon>
              <ListItemText className="uppercase font-bold">
                profile
              </ListItemText>
            </MenuItem>

            <Divider className="m-0"/>

            {appConfig.navigateTool.map(({ icon: Icon, name, path }) =>
              <MenuItem key={path} component={Link} to={path}>
                <ListItemIcon className="min-w-fit p-2 text-blue-700">
                  <Icon/>
                </ListItemIcon>
                <ListItemText className="uppercase font-bold">
                  {name}
                </ListItemText>
              </MenuItem>
            )}

            <Divider className="m-0"/>
          </ElementPermissions>

          <MenuItem color="error" className="text-red-500" onClick={exitHandler}>
            <ListItemIcon className="text-red-500 min-w-fit p-2">
              <ExitToApp/>
            </ListItemIcon>
            <ListItemText className="uppercase font-bold">
              Exit
            </ListItemText>
          </MenuItem>
        </MenuList>
      </Box>
    </Box>
  );
};
