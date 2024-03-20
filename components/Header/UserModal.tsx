import React from 'react';
import { Button } from '@/components/ui/button';

function UserModal() {
  return (
    <div className='flex flex-col gap-2'>
      <Button
        variant='ghost'
        className='font-light text-sm hover:bg-red-700 hover:text-white'
      >
        Profile
      </Button>

      <Button
        variant='ghost'
        className='font-light text-sm hover:bg-red-700 hover:text-white'
      >
        Settings
      </Button>

      <div className='border-b-[1px] border-b-gray-800' />

      <Button
        variant='ghost'
        className='font-light text-sm hover:bg-red-700 hover:text-white'
      >
        Sign out
      </Button>
    </div>
  );
}

export default UserModal;
