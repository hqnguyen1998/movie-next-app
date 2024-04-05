import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import MovieListItem from './movie-list-item';
import { Prisma } from '@prisma/client';

type Props = {
  movies?: [Prisma.MovieGetPayload<{ include: { categories: true } }>];
  isLoading?: boolean;
};

function MovieLists({ movies, isLoading }: Props) {
  return (
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
          {isLoading
            ? Array.from({ length: 5 }).map((_value, i) => <Loading key={i} />)
            : movies?.map((movie) => (
                <MovieListItem key={movie.id} movie={movie} />
              ))}
        </TableBody>
      </Table>
      <ScrollBar orientation='horizontal' />
    </ScrollArea>
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
