import React from 'react';
import Image from 'next/image';
import UserModal from '@/components/Header/UserModal';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { IoMdNotifications } from 'react-icons/io';

function Header() {
  return (
    <header className='w-full h-[67px] bg-slate-900 flex flex-row items-center justify-between px-3'>
      <span className='text-white font-light text-sm'>Dashboard</span>

      <div className='flex flex-row items-center'>
        <Button variant='default'>
          <IoMdNotifications className='h-5 w-5 hover:text-rose-600' />
        </Button>

        <Popover>
          <PopoverTrigger className='flex flex-row gap-3 items-center justify-between border-l-2 border-l-gray-800 pl-3 cursor-pointer'>
            <Image
              src='/avatar.jpg'
              width={50}
              height={50}
              alt='avatar'
              className='rounded-full w-9 h-9'
            />

            <div className='flex flex-col gap-1 text-white'>
              <span className='font-medium text-sm'>Huy Nguyen</span>
              <span className='text-xs'>Administrator</span>
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
