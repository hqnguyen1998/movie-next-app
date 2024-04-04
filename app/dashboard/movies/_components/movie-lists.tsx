'use client';
import React, { useState } from 'react';
import useSWR from 'swr';
import MovieTable from './movie-table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { fetcher } from '@/lib/fetcher';
import { Skeleton } from '@/components/ui/skeleton';

function MovieLists() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useSWR(
    `/api/movie?page=${page}&limit=1`,
    fetcher
  );

  if (isLoading) {
    return <Loading />;
  }

  console.log(data);

  const onHandlePrevious = () => {
    setPage(page <= 1 ? 1 : page - 1);
  };

  const onHandleNext = () => {
    setPage(page >= data.pagination.totalPages ? page : page + 1);
  };

  return (
    <div className='flex flex-col space-y-5'>
      <MovieTable movies={data.movies} />

      <Pagination>
        <PaginationContent>
          <PaginationItem className='cursor-pointer'>
            <PaginationPrevious onClick={onHandlePrevious} />
          </PaginationItem>
          {page > 1 && (
            <PaginationItem onClick={() => setPage(page - 1)}>
              <PaginationLink>{page - 1}</PaginationLink>
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationLink isActive>{page}</PaginationLink>
          </PaginationItem>
          {page < data.pagination.totalPages && (
            <PaginationItem onClick={() => setPage(page + 1)}>
              <PaginationLink>{page + 1}</PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem className='cursor-pointer'>
            <PaginationNext onClick={onHandleNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

function Loading() {
  return (
    <div>
      <Skeleton className='w-full h-[100px] mb-2' />
      <Skeleton className='w-full h-[100px] mb-2' />
      <Skeleton className='w-full h-[100px] mb-2' />
      <Skeleton className='w-full h-[100px] mb-2' />
      <Skeleton className='w-full h-[100px] mb-2' />
    </div>
  );
}

export default MovieLists;
