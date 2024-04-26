import { ElementType } from 'react';

export interface LayoutsMenuSections {
  icon: ElementType;
  permissions: string[];
  path: string;
  title: string;
}

export interface HeaderItemType {
  title: string;
}

export interface NavigateToolItems {
  icon: ElementType;
  path: string;
  name: string;
}
