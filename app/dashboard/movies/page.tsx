'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { Button } from '@/components/ui/button';
import MovieLists from '@/dashboard/movies/_components/movie-lists';
import RefreshButton from '@/dashboard/movies/_components/refresh-button';
import PageHeader from '@/dashboard/_components/page-header';
import CustomPagination from '@/components/Pagination';
import { Skeleton } from '@/components/ui/skeleton';

export const dynamic = 'force-dynamic';

function MoviesPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const { data, isLoading } = useSWR(
    `/api/movie?page=${page}&limit=${limit}`,
    fetcher
  );

  return (
    <div className='space-y-3'>
      <PageHeader
        title='Movies'
        description={
          !isLoading ? (
            `Hiển thị từ ${data?.pagination.from} đến ${data?.pagination.to} trong tổng số ${data?.pagination.totalItems} bản ghi.`
          ) : (
            <Skeleton className='w-[300px] h-[25px]' />
          )
        }
      >
        <RefreshButton>
          <span className='text-sm text-red-500 cursor-pointer hover:underline'>
            Làm mới
          </span>
        </RefreshButton>
      </PageHeader>
      <Link href='/dashboard/new-movie'>
        <Button variant='destructive'>+ Thêm movie</Button>
      </Link>
      <MovieLists movies={data?.movies} isLoading={isLoading} />
      <section>
        <CustomPagination
          page={page}
          setPage={setPage}
          totalPages={data?.pagination?.totalPages}
          itemPerPage={limit.toString()}
          setItemPerPage={setLimit}
        />
      </section>
    </div>
  );
}

export default MoviesPage;
