import { LayoutsMenuSections } from '@layouts/types';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import { ProfilePermissions } from '@modules/profile/types';

export const profileMenu: LayoutsMenuSections[] = [
  {
    icon: PersonOutlineOutlinedIcon,
    permissions: [ProfilePermissions.read],
    path: '/profile',
    title: 'Profile',
  },
  {
    icon: GroupOutlinedIcon,
    permissions: [ProfilePermissions.read],
    path: '/profile/managers',
    title: 'Managers',
  },
  {
    icon: StoreOutlinedIcon,
    permissions: [ProfilePermissions.read],
    path: '/profile/brand',
    title: 'Brand',
  },
  {
    icon: StorefrontOutlinedIcon,
    permissions: [ProfilePermissions.read],
    path: '/profile/affiliate',
    title: 'Affiliate',
  },
];
