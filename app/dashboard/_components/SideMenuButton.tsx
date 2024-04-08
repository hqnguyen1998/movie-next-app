'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { AiOutlineMenu } from 'react-icons/ai';
import { useSideMenuContext } from '@/lib/context/context';

function SideMenuButton() {
  const { setOpen, isOpen } = useSideMenuContext();
  const onHandleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <Button
      size='icon'
      variant='outline'
      className='lg:hidden'
      onClick={onHandleClick}
    >
      <AiOutlineMenu />
    </Button>
  );
}

export default SideMenuButton;
