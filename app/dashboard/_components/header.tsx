import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { getServerSession } from 'next-auth/next';
import SideMenuButton from './SideMenuButton';

async function Header() {
  const session = await getServerSession();

  return (
    <header className='w-full h-[67px] flex flex-row items-center justify-between px-3'>
      <SideMenuButton />
      <div className='flex items-center justify-center'>
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
      <span className='hidden lg:block text-black font-light text-sm'>
        Dashboard
      </span>

      <div className='flex flex-row items-center'>
        <Popover>
          <PopoverTrigger className='flex flex-row gap-3 items-center justify-between pl-3 cursor-pointer'>
            {session?.user?.image && (
              <Image
                src={session?.user?.image}
                width={50}
                height={50}
                alt='avatar'
                className='rounded-full w-9 h-9'
              />
            )}

            <div className='flex flex-col gap-1'>
              <span className='font-medium text-sm'>{session?.user?.name}</span>
              <span className='text-xs'>{session?.user.role}</span>
            </div>
          </PopoverTrigger>

          <PopoverContent className='w-[200px]text-white outline-none border-none drop-shadow-md'>
            {/* <UserModal /> */}
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}

export default Header;
