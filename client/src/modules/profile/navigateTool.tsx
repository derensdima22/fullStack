import { NavigateToolItems } from '@layouts/types';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

export const navigateTool : NavigateToolItems[] = [
  {
    icon: PersonOutlineOutlinedIcon,
    path: '/manager',
    name: 'Manager',
  },
  {
    icon: StoreOutlinedIcon,
    path: '/brand',
    name: 'Brand',
  },
  {
    icon: StorefrontOutlinedIcon,
    path: '/affiliate',
    name: 'Affiliate',
  },
];
