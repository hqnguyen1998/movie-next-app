import React, { Suspense } from 'react';
import PageHeader from '@/dashboard/_components/page-header';
import { Skeleton } from '@/components/ui/skeleton';

function DashboardCatalogShowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PageHeader
        title='Catalogs'
        description='Xem lại catalog.'
        isBack='Quay lại danh sách catalogs'
      />
      <Suspense fallback={<Skeleton className='w-full h-[500px]' />}>
        {children}
      </Suspense>
    </div>
  );
}

export default DashboardCatalogShowLayout;
