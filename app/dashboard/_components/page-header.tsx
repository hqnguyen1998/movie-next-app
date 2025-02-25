'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';

type Props = {
  title?: string;
  description?: string | React.ReactNode;
  children?: React.ReactNode;
  isBack?: boolean | string;
};

function PageHeader({ title, description, children, isBack }: Props) {
  const router = useRouter();
  return (
    <section className='flex flex-col space-y-2 mb-3 md:space-x-4 md:flex-row md:items-end'>
      <h1 className='text-3xl'>{title}</h1>
      <div>
        <div className='text-sm'>{description}</div>
        {isBack && (
          <div
            className='flex flex-row text-xs font-light text-indigo-600 underline cursor-pointer'
            onClick={() => router.back()}
          >
            <MdOutlineKeyboardDoubleArrowLeft />
            {typeof isBack === 'boolean' ? 'Quay lại' : isBack}
          </div>
        )}
      </div>

      {children}
    </section>
  );
}

export default PageHeader;
