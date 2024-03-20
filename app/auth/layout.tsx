import Image from 'next/image';
import React from 'react';
import { Toaster } from '@/components/ui/toaster';

type Props = {
  children: React.ReactNode;
};

function AuthLayout({ children }: Props) {
  return (
    <div className='bg-[url("/section.jpg")] bg-center-center bg-cover bg-no-repeat min-h-screen flex items-center justify-center'>
      <div className='bg-gray-800 w-[500px] h-full flex flex-col items-center p-10'>
        <Image
          src='/logo-full.png'
          width={220}
          height={50}
          alt='logo'
          className='mb-10'
        />
        {children}
      </div>
      <Toaster />
    </div>
  );
}

export default AuthLayout;
