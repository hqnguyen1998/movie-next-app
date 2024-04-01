import React, { Suspense } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import MovieLists from './_components/movie-lists';
import RefreshButton from './_components/refresh-button';
import { Skeleton } from '@/components/ui/skeleton';

function MoviesPage() {
  return (
    <div>
      <div className='flex flex-row items-baseline mb-5'>
        <h1 className='text-3xl font-light mr-3'>Movies</h1>
        <RefreshButton>
          <span className='text-red-500 cursor-pointer'>Làm mới</span>
        </RefreshButton>
      </div>
      <Link href='/dashboard/new-movie'>
        <Button variant='destructive'>+ Thêm movie</Button>
      </Link>
      <Suspense fallback={<Loading />}>
        <MovieLists />
      </Suspense>
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

export default MoviesPage;
