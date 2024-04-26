import { LayoutsMenuSections } from '@layouts/types';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { ManagerPermissions } from '@modules/manager/types';

export const managerMenu: LayoutsMenuSections[] = [
  {
    icon: PersonOutlineOutlinedIcon,
    permissions: [ManagerPermissions.read],
    path: '/manager',
    title: 'Menedżer',
  },
  {
    icon: PersonOutlineOutlinedIcon,
    permissions: [ManagerPermissions.read],
    path: '/manager/users',
    title: 'Użytkownicy',
  },
  {
    icon: PersonOutlineOutlinedIcon,
    permissions: [ManagerPermissions.read],
    path: '/manager/channels',
    title: 'Oferuje',
  },
  {
    icon: PersonOutlineOutlinedIcon,
    permissions: [ManagerPermissions.read],
    path: '/manager/profile',
    title: 'Profil',
  },
  {
    icon: PersonOutlineOutlinedIcon,
    permissions: [ManagerPermissions.read],
    path: '/manager/balance',
    title: 'Balansować',
  },
];
