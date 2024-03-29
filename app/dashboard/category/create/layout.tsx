'use client';
import React, { ReactNode } from 'react';
import CategoryHeader from '../_components/category-header';
import { Button } from '@/components/ui/button';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import { useRouter } from 'next/navigation';

function CreateCategoryLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <div>
      <CategoryHeader title='Categories'>
        <p className='font-light'>Thêm category.</p>
        <Button
          onClick={() => router.back()}
          variant='link'
          size='default'
          className='text-rose-500'
        >
          <MdOutlineKeyboardDoubleArrowLeft />
          Quay lại danh sách categories
        </Button>
      </CategoryHeader>
      {children}
    </div>
  );
}

export default CreateCategoryLayout;
