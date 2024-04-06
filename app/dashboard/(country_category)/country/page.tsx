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
import CountryOrCategoryList from '@/dashboard/(country_category)/_components/CountryOrCategoryList';

function CountryPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, isLoading } = useSWR(
    `/api/country?page=${page}&limit=${limit}`,
    fetcher
  );

  return (
    <main className='space-y-4 px-5'>
      <PageHeader
        title='Countries'
        description={
          !isLoading ? (
            `Hiển thị từ ${data?.pagination.from} đến ${data?.pagination.to} trong tổng số ${data?.pagination.totalItems} bản ghi.`
          ) : (
            <Skeleton className='w-[300px] h-[25px]' />
          )
        }
      >
        <RefreshButton className=' text-rose-600 items-end text-sm cursor-pointer hover:underline'>
          Thiết lập lại
        </RefreshButton>
      </PageHeader>
      <Link href='/dashboard/country/create'>
        <Button variant='destructive' size='sm'>
          + Thêm country
        </Button>
      </Link>

      <CountryOrCategoryList datas={data?.countries} isLoading={isLoading} />

      <CustomPagination
        page={page}
        setPage={setPage}
        totalPages={data?.pagination?.totalPages}
        itemPerPage={limit.toString()}
        setItemPerPage={setLimit}
      />
    </main>
  );
}

export default CountryPage;
