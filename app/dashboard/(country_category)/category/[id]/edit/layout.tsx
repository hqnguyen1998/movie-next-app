import React, { ReactNode, Suspense } from 'react';
import PageHeader from '@/dashboard/_components/page-header';
import { Skeleton } from '@/components/ui/skeleton';

function EditCategoryLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <PageHeader
        title='Categories'
        description='Sửa category.'
        isBack='Quay lại danh sách categories'
      />
      <Suspense fallback={<Skeleton className='w-full h-[500px]' />}>
        {children}
      </Suspense>
    </div>
  );
}

export default EditCategoryLayout;
