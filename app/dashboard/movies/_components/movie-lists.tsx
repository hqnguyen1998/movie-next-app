'use client';
import React, { useState } from 'react';
import useSWR from 'swr';
import MovieTable from './movie-table';
import { fetcher } from '@/lib/fetcher';
import { Skeleton } from '@/components/ui/skeleton';
import CustomPagination from '@/components/Pagination';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export const dynamic = 'force-dynamic';

function MovieLists() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useSWR(
    `/api/movie?page=${page}&limit=10`,
    fetcher
  );

  return (
    <div className='flex flex-col space-y-5'>
      <ScrollArea>
        <Table className='bg-white rounded-md'>
          <TableHeader>
            <TableRow>
              <TableHead className='text-black'>Thông tin</TableHead>
              <TableHead className='text-black'>Ảnh Thumb</TableHead>
              <TableHead className='text-black hidden md:table-cell'>
                Thể Loại
              </TableHead>
              <TableHead className='text-black'>Cập nhật lúc</TableHead>
              <TableHead className='text-black'>Lượt xem</TableHead>
              <TableHead className='text-black hidden lg:table-cell'>
                Hành động
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              Array.from({ length: 5 }).map((_value, i) => <Loading key={i} />)
            ) : (
              <MovieTable movies={data.movies} />
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>

      <CustomPagination
        page={page}
        setPage={setPage}
        totalPages={data?.pagination?.totalPages}
      />
    </div>
  );
}

function Loading() {
  return (
    <TableRow>
      <TableCell>
        <Skeleton className='w-full h-[70px]' />
      </TableCell>
      <TableCell>
        <Skeleton className='w-full h-[70px]' />
      </TableCell>
      <TableCell>
        <Skeleton className='w-full h-[70px]' />
      </TableCell>
      <TableCell>
        <Skeleton className='w-full h-[70px]' />
      </TableCell>
      <TableCell>
        <Skeleton className='w-full h-[70px]' />
      </TableCell>
      <TableCell>
        <Skeleton className='w-full h-[70px]' />
      </TableCell>
    </TableRow>
  );
}

export default MovieLists;
