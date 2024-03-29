import React, { Suspense } from 'react';
import { prisma } from '@/lib/prisma';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import CategoryItem from './category-item';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../components/ui/select';

export const dynamic = 'force-dynamic';

async function CategoryList() {
  const categories = await prisma.movieCategory.findMany({
    take: 1,
    skip: 2,
  });
  return (
    <div>
      <ScrollArea>
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
            <Suspense fallback={<h1>Loading...</h1>}>
              <CategoryItem categories={categories} />
            </Suspense>
          </TableBody>
        </Table>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>

      <div className='flex flex-row justify-between mx-1 my-3'>
        <Select>
          <SelectTrigger className='w-[75px]'>
            <SelectValue placeholder='Items' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='light'>10</SelectItem>
            <SelectItem value='dark'>20</SelectItem>
            <SelectItem value='system'>30</SelectItem>
          </SelectContent>
        </Select>
        <div className='flex flex-row gap-2'>
          <div>{'<'}</div>
          <div>1</div>
          <div>{'>'}</div>
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
