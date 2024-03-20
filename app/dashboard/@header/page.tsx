import React from 'react';
import Image from 'next/image';
import { auth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import UserModal from '@/components/Header/UserModal';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { IoMdNotifications } from 'react-icons/io';

async function Header() {
  const session = await auth();

  return (
    <header className='w-full h-[67px] bg-slate-900 flex flex-row items-center justify-between px-3'>
      <span className='text-white font-light text-sm'>Dashboard</span>

      <div className='flex flex-row items-center'>
        <Button variant='default'>
          <IoMdNotifications className='h-5 w-5 hover:text-rose-600' />
        </Button>

        <Popover>
          <PopoverTrigger className='flex flex-row gap-3 items-center justify-between border-l-2 border-l-gray-800 pl-3 cursor-pointer'>
            {session?.user?.image && (
              <Image
                src={session?.user?.image}
                width={50}
                height={50}
                alt='avatar'
                className='rounded-full w-9 h-9'
              />
            )}

            <div className='flex flex-col gap-1 text-white'>
              <span className='font-medium text-sm'>{session?.user?.name}</span>
              <span className='text-xs'>
                {session?.user?.isAdmin && 'Admin'}
              </span>
            </div>
          </PopoverTrigger>

          <PopoverContent className='w-[200px] bg-slate-700 text-white outline-none border-none drop-shadow-md'>
            <UserModal />
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}

export default Header;
