'use client';
import React, { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { MdOutlineKeyboardDoubleArrowLeft } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import CategoryHeader from '../../_components/category-header';

function EditCategoryLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <div>
      <CategoryHeader title='Categories'>
        <p className='font-light'>Sửa category.</p>
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

export default EditCategoryLayout;
