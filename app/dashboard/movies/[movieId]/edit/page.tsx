'use client';
import React, { FormEvent } from 'react';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { Skeleton } from '@/components/ui/skeleton';
import MovieFormWrapper from '@/dashboard/movies/_components/MovieFormWrapper';
import { useMovieContext } from '@/lib/context/context';
import { updateMovie } from '@/lib/actions/updateMovie';
import { toast } from '@/components/ui/use-toast';

export const dynamic = 'force-dynamic';

function EditMoviePage({
  params: { movieId },
}: {
  params: { movieId: string };
}) {
  const { movie } = useMovieContext();
  const { isLoading, data } = useSWR(`/api/movie/${movieId}`, fetcher);

  if (isLoading) {
    return (
      <div className='space-y-3'>
        <div className='flex flex-row gap-3'>
          <Skeleton className='w-[100px] h-[35px]' />
          <Skeleton className='w-[100px] h-[35px]' />
          <Skeleton className='w-[100px] h-[35px]' />
        </div>
        <Skeleton className='w-full h-[800px]' />
      </div>
    );
  }

  const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateMovie({ currentMovieId: data?.movie.id, movie: movie });

    toast({ title: 'Cập nhật phim thành công!' });
  };

  return <MovieFormWrapper movie={data?.movie} action={onHandleSubmit} />;
}

export default EditMoviePage;
