'use client';
import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import PageHeader from '@/dashboard/_components/page-header';

function CreateCategoryLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <div>
      <PageHeader
        title='Categories'
        description='Thêm category.'
        isBack='Quay lại danh sách categories.'
      />
      {children}
    </div>
  );
}

export default CreateCategoryLayout;
