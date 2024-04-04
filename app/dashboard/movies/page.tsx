import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import MovieLists from './_components/movie-lists';
import RefreshButton from './_components/refresh-button';

function MoviesPage() {
  return (
    <div className='space-y-3'>
      <div className='flex flex-row items-baseline mb-5'>
        <h1 className='text-3xl font-light mr-3'>Movies</h1>
        <RefreshButton>
          <span className='text-red-500 cursor-pointer'>Làm mới</span>
        </RefreshButton>
      </div>
      <Link href='/dashboard/new-movie'>
        <Button variant='destructive'>+ Thêm movie</Button>
      </Link>
      <MovieLists />
    </div>
  );
}

export default MoviesPage;
