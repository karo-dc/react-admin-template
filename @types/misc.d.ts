import { ReactNode } from "react";

export interface ISidebarItem {
  href: string;
  icon?: ReactNode;
  info?: ReactNode;
  children?: ISidebarItem[];
  title: string;
}
