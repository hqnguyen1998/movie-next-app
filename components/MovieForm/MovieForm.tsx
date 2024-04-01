'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { MovieWithCategory } from '../../app/dashboard/movies/_components/movie-table';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import { useMovieContext } from '@/lib/context/context';
import { usePathname } from 'next/navigation';
import { movieContextDefaultValues } from '@/lib/context/MovieContext';
import MovieInfoTab from './MovieInfoTab';
import MovieExtraInfoTab from './MovieExtraInfoTab';

function MovieForm({
  movie,
  action,
}: {
  movie?: MovieWithCategory;
  action?: (formData: FormData) => Promise<void>;
}) {
  const path = usePathname();
  const { movie: currentMovie, setMovie } = useMovieContext();

  React.useEffect(() => {
    if (path === '/dashboard/new-movie') {
      setMovie(movieContextDefaultValues.movie);
    }
    if (movie) {
      setMovie(movie);
    }
  }, [movie, setMovie, path]);

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(currentMovie);
  };

  return (
    <form onSubmit={onHandleSubmit} className='flex flex-col gap-5 mt-5'>
      <Tabs defaultValue='thong-tin-phim'>
        <TabsList>
          <TabsTrigger value='thong-tin-phim'>Thông tin phim</TabsTrigger>
          <TabsTrigger value='phan-loai'>Phân loại</TabsTrigger>
        </TabsList>
        <TabsContent
          value='thong-tin-phim'
          className='bg-white px-4 py-2 space-y-2'
        >
          <MovieInfoTab />
        </TabsContent>

        <TabsContent value='phan-loai' className='bg-white px-4 py-2 space-y-2'>
          <MovieExtraInfoTab />
        </TabsContent>

        <Button type='submit' variant='success' className='mt-2'>
          Lưu và Quay lại
        </Button>
      </Tabs>
    </form>
  );
}

export default MovieForm;
