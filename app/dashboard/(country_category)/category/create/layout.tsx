import React, { ReactNode } from 'react';
import PageHeader from '@/dashboard/_components/page-header';

function CreateCategoryLayout({ children }: { children: ReactNode }) {
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
