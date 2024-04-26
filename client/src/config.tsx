import { LayoutsMenuSections, NavigateToolItems } from '@layouts/types';
import { managerMenu } from '@modules/manager/managerMenu';
import { navigateTool } from '@modules/profile/navigateTool';
import { brandMenu } from '@modules/brand/brandMenu';
import { JSXElementConstructor, lazy } from 'react';
import { profileMenu } from '@modules/profile/profileMenu';

interface AppConfigProps {
  menu: LayoutsMenuSections[];
  layout: {
    tray: JSXElementConstructor<unknown>[];
  };
  navigateTool: NavigateToolItems[];
}

export const appConfig: AppConfigProps = {
  menu: [
    ...managerMenu,
    ...profileMenu,
    brandMenu
  ],

  layout: {
    tray: [
      lazy(() => import('@modules/profile/components/ToolItem')),
    ],
  },

  navigateTool: navigateTool
};
