'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { DropDownMenuType } from '@/types/types';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';

import SubDropDownMenu from './SubDropDownMenu';

function DropDownMenuItem({ menu }: { menu: DropDownMenuType }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <React.Fragment>
      <li key={menu.title} className='w-full text-gray-800 text-sm'>
        <Link
          href={menu.link}
          className={`${
            menu.link === pathname && 'bg-gray-50 text-red-500'
          } flex flex-row py-3 px-6 hover:bg-gray-50 hover:text-red-500`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className='w-full flex flex-row justify-between'>
            <div className='flex flex-row'>
              {menu.icon} {menu.title}
            </div>

            {menu.subMenu && !isOpen && <MdOutlineKeyboardArrowLeft />}
            {menu.subMenu && isOpen && <MdOutlineKeyboardArrowDown />}
          </div>
        </Link>

        {isOpen &&
          menu.subMenu?.data.map((data) => (
            <SubDropDownMenu key={data.title} data={data} pathname={pathname} />
          ))}
      </li>
    </React.Fragment>
  );
}

export default DropDownMenuItem;
