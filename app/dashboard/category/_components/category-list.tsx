'use client';
import React, { useState } from 'react';
import useSWR from 'swr';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Skeleton } from '@/components/ui/skeleton';
import CustomPagination from '@/components/Pagination';
import { fetcher } from '@/lib/fetcher';
import CategoryItem from './category-item';

export const dynamic = 'force-dynamic';

function CategoryList() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useSWR(
    `/api/category?page=${page}&limit=10`,
    fetcher
  );

  return (
    <React.Fragment>
      <ScrollArea className='mb-5'>
        <Table className='bg-white rounded-md'>
          <TableHeader>
            <TableRow>
              <TableHead className='text-black font-semibold'>Tên</TableHead>
              <TableHead className='text-black font-semibold'>
                Đường dẫn tĩnh
              </TableHead>
              <TableHead className='text-black font-semibold'>
                Hành động
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              Array.from({ length: 5 }).map((_value, i) => <Loading key={i} />)
            ) : (
              <CategoryItem categories={data.categories} />
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
    </React.Fragment>
  );
}

function Loading() {
  return (
    <TableRow>
      <TableCell>
        <Skeleton className='w-full h-[40px] mb-2' />
      </TableCell>
      <TableCell>
        <Skeleton className='w-full h-[40px] mb-2' />
      </TableCell>
      <TableCell>
        <Skeleton className='w-full h-[40px] mb-2' />
      </TableCell>
    </TableRow>
  );
}

export default CategoryList;
