// DropDownMenu Types
export interface DropDownMenuType {
  title: string;
  icon: React.ReactNode;
  link: string;
  subMenu?: {
    isOpen: boolean;
    data: SubMenuType[];
  };
}

export interface SubMenuType {
  title: string;
  link: string;
  icon: React.ReactNode;
}
