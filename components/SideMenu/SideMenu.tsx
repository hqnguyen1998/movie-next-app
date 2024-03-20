'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

// Icons
import { MdDashboard } from 'react-icons/md';
import { FaRegUser, FaCommentAlt } from 'react-icons/fa';
import { FaFilm } from 'react-icons/fa6';

const menus = [
  {
    title: 'Dashboard',
    link: '/dashboard',
    icon: <MdDashboard className='mr-2 h-5 w-5' />,
  },
  {
    title: 'Users',
    link: '/dashboard/users',
    icon: <FaRegUser className='mr-2 h-5 w-5' />,
  },
  {
    title: 'Movies',
    link: '/dashboard/movies',
    icon: <FaFilm className='mr-2 h-5 w-5' />,
  },
  {
    title: 'Comments',
    link: '/dashboard/comments',
    icon: <FaCommentAlt className='mr-2 h-5 w-5' />,
  },
];

function SideMenu() {
  const pathname = usePathname();

  return (
    <aside className='w-0 h-screen bg-slate-900 transition-all ease-in-out duration-500 lg:w-[265px]'>
      <div className='flex items-center justify-center py-3 px-6 border-b-2 border-b-gray-800'>
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

      <div className='h-full hidden flex-col gap-2 px-2 py-4 lg:flex'>
        {menus.map((menu) => (
          <Link
            key={menu.title}
            href={menu.link}
            className={`text-white ${
              pathname === menu.link &&
              'bg-red-700 rounded-sm hover:bg-red-800 hover:bg-opacity-100 hover:text-white'
            }   hover:bg-red-300 hover:bg-opacity-20 hover:text-red-400 hover:rounded-sm`}
          >
            <Button
              variant='ghost'
              size='lg'
              className='font-light capitalize hover:bg-transparent hover:text-inherit '
            >
              {menu.icon} {menu.title}
            </Button>
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default SideMenu;
