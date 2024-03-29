'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';

// Icons
import {
  IoPlayCircleOutline,
  IoHomeOutline,
  IoPricetagsOutline,
} from 'react-icons/io5';
import { MdSettings, MdOutlineCategory } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';
import { CiBoxList } from 'react-icons/ci';
import { AiOutlineGlobal } from 'react-icons/ai';

let menus = [
  {
    title: 'Bảng điều khiển',
    link: '/dashboard',
    icon: <IoHomeOutline className='mr-2 h-5 w-5' />,
  },
  {
    title: 'Quản lý phim',
    link: '/dashboard/movies',
    icon: <IoPlayCircleOutline className='mr-2 h-5 w-5' />,
  },
  {
    title: 'Phân loại',
    link: '#',
    icon: <CiBoxList className='mr-2 h-5 w-5' />,
    isOpen: false,
    subMenu: [
      {
        title: 'Thể loại',
        link: '/dashboard/category',
        icon: <MdOutlineCategory className='mr-2 h-5 w-5' />,
      },
      {
        title: 'Tags',
        link: '/dashboard/tags',
        icon: <IoPricetagsOutline className='mr-2 h-5 w-5' />,
      },
      {
        title: 'Quốc gia',
        link: '/dashboard/country',
        icon: <AiOutlineGlobal className='mr-2 h-5 w-5' />,
      },
    ],
  },
  {
    title: 'Quản lý thành viên',
    link: '/dashboard/users',
    icon: <FaRegUser className='mr-2 h-5 w-5' />,
  },
  {
    title: 'Cài đặt',
    link: '/dashboard/settings',
    icon: <MdSettings className='mr-2 h-5 w-5' />,
  },
];

function SideBar() {
  const pathname = usePathname();

  return (
    <aside className='w-0 h-screen transition-all ease-in-out duration-500 lg:w-[265px]'>
      <div className='flex items-center justify-center py-3 px-6 '>
        <Link href='/dashboard'>
          <Image
            src='/logo-full.png'
            width={200}
            height={50}
            alt='logo full'
            className='object-cover'
            priority
          />
        </Link>
      </div>
      <Separator />

      <ul className='hidden flex-col items-start gap-1 lg:flex'>
        {menus.map((menu) => (
          <li key={menu.title} className='w-full text-gray-800 text-sm'>
            <Link
              href={menu.link}
              className={`${
                menu.link === pathname && 'bg-gray-50 text-red-500'
              } flex flex-row py-3 px-6 hover:bg-gray-50 hover:text-red-500`}
            >
              {menu.icon} {menu.title}
            </Link>
            <ul className='px-[40px] flex flex-col gap-1'>
              {menu.subMenu?.map((sub) => (
                <li key={sub.title} className='w-full'>
                  <Link
                    href={sub.link}
                    className={`${
                      sub.link === pathname && 'bg-gray-50 text-red-500'
                    } flex flex-row p-2 hover:bg-gray-50 hover:text-red-500`}
                  >
                    {sub.icon} {sub.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBar;
