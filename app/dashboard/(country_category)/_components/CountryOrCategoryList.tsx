import React from 'react';
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
import CountryOrCategoryListItem from './CountryOrCategoryListItem';
import { MovieCategory, MovieCountry } from '@prisma/client';

export const dynamic = 'force-dynamic';

type Props = {
  datas: [MovieCategory] | [MovieCountry];
  isLoading?: boolean;
};

function CountryOrCategoryList({ datas, isLoading }: Props) {
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
            {isLoading
              ? Array.from({ length: 5 }).map((_value, i) => (
                  <Loading key={i} />
                ))
              : datas.map((data) => (
                  <CountryOrCategoryListItem key={data.id} data={data} />
                ))}
          </TableBody>
        </Table>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
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

export default CountryOrCategoryList;
