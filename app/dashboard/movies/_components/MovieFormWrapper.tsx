'use client';
import React, { FormEvent } from 'react';
import { Movie } from '@prisma/client';
import { useMovieContext } from '@/lib/context/context';
import { movieContextDefaultValues } from '@/lib/context/MovieContext';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import MovieInfoTab from '@/dashboard/movies/_components/MovieInfoTab';
import MovieCategorizeTab from '@/dashboard/movies/_components/MovieCategorizeTab';
import MovieExtraInfoTab from '@/dashboard/movies/_components/MovieExtraInfoTab';

type Props = {
  movie?: Movie;
  action?: (e: FormEvent<HTMLFormElement>) => void;
  isNewMoviePage?: boolean;
};

function MovieFormWrapper({ movie, action, isNewMoviePage }: Props) {
  const { setMovie } = useMovieContext();

  React.useEffect(() => {
    if (movie) setMovie(movie);

    if (isNewMoviePage) {
      setMovie(movieContextDefaultValues.movie);
    }
  }, [movie, setMovie, isNewMoviePage]);

  return (
    <form onSubmit={action} className='flex flex-col gap-5 mt-5'>
      <Tabs defaultValue='#thong-tin-phim'>
        <TabsList>
          <TabsTrigger value='#thong-tin-phim'>Thông tin phim</TabsTrigger>
          <TabsTrigger value='#phan-loai'>Phân loại</TabsTrigger>
          <TabsTrigger value='#khac'>Khác</TabsTrigger>
        </TabsList>
        <TabsContent
          value='#thong-tin-phim'
          className='bg-white px-4 py-2 space-y-2'
        >
          <MovieInfoTab />
        </TabsContent>

        <TabsContent
          value='#phan-loai'
          className='bg-white px-4 py-2 space-y-2'
        >
          <MovieCategorizeTab />
        </TabsContent>

        <TabsContent value='#khac' className='bg-white px-4 py-2 space-y-2'>
          <MovieExtraInfoTab
            is_copyright={movie?.is_copyright}
            chieurap={movie?.chieurap}
            is_recommended={movie?.is_recommended}
            is_sensitive_content={movie?.is_sensitive_content}
          />
        </TabsContent>

        <Button type='submit' variant='success' className='mt-2'>
          Lưu và Quay lại
        </Button>
      </Tabs>
    </form>
  );
}

export default MovieFormWrapper;
