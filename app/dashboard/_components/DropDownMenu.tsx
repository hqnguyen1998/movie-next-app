import React from 'react';
import { cn } from '@/lib/utils';
import { DropDownMenuType } from '@/types/types';
import DropDownMenuItem from './DropDownMenuItem';

function DropDownMenu({ menus }: { menus: DropDownMenuType[] }) {
  return (
    <ul className={cn('hidden lg:flex flex-col items-start gap-1')}>
      {menus.map((menu) => (
        <DropDownMenuItem key={menu.title} menu={menu} />
      ))}
    </ul>
  );
}

export default DropDownMenu;
