'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import CustomPagination from '@/components/Pagination';
import PageHeader from '@/dashboard/_components/page-header';
import RefreshButton from '@/dashboard/movies/_components/refresh-button';
import CatalogListWrapper from './_components/CatalogListWrapper';

export const dynamic = 'force-dynamic';

function DashboardCatalogPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, isLoading } = useSWR(
    `/api/catalog?page=${page}&limit=${limit}`,
    fetcher
  );

  console.log(data);

  return (
    <div className='space-y-2'>
      {isLoading ? (
        <Skeleton className='w-[500px] h-[35px] mb-2' />
      ) : (
        <PageHeader
          title='Catalogs'
          description={
            <p>
              Hiển thị từ {data?.pagination.from} đến {data?.pagination.to}{' '}
              trong tổng số {data?.pagination.totalItems} bản ghi.{' '}
              <RefreshButton className='cursor-pointer text-rose-500 hover:underline'>
                Thiết lập lại
              </RefreshButton>
            </p>
          }
        />
      )}
      <Link href='/dashboard/catalog/create'>
        <Button className='bg-indigo-500'>+ Thêm catalog</Button>
      </Link>

      {isLoading ? (
        <Skeleton className='w-full h-[800px]' />
      ) : (
        <CatalogListWrapper datas={data?.catalogs} />
      )}

      {isLoading ? (
        <Skeleton className='w-full h-[50px]' />
      ) : (
        <CustomPagination
          page={page}
          setPage={setPage}
          totalPages={data?.pagination?.totalPages}
          itemPerPage={limit.toString()}
          setItemPerPage={setLimit}
        />
      )}
    </div>
  );
}

export default DashboardCatalogPage;
