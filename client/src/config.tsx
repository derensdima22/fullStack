import { LayoutsMenuSections } from '@layouts/types';
import { managerMenu } from '@modules/manager/managerMenu';
import { usersMenu } from '@modules/users/usersMenu';

interface AppConfigProps {
  menu: LayoutsMenuSections[];
}

export const appConfig: AppConfigProps = {
  menu: [
    managerMenu,
    usersMenu
  ]
};
