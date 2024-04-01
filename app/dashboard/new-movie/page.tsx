'use client';
import React from 'react';
import { newMovie } from '@/lib/actions/createNewMovie';
import MovieForm from '@/components/MovieForm/MovieForm';

function Page() {
  return (
    <div className='p-5 '>
      <h1 className='text-xl'>Thêm phim mới</h1>
      <div>
        <MovieForm action={newMovie} />
      </div>
    </div>
  );
}

export default Page;
