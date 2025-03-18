// types.ts or similar
export interface SubmenuItem {
  title: string;
  link: string;
}

export interface NavItem {
  title: string;
  link?: string;
  submenu?: SubmenuItem[] | null;
  submenuOpen?: boolean;  // Add submenuOpen for toggling the menu
}
