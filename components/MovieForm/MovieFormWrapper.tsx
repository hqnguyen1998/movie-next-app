'use client';
import React, { FormEvent } from 'react';
import { useMovieContext } from '@/lib/context/context';
import { newMovie } from '@/lib/actions/createNewMovie';
import { movieContextDefaultValues } from '@/lib/context/MovieContext';

function MovieFormWrapper({ children }: { children: React.ReactNode }) {
  const { movie, setMovie } = useMovieContext();

  React.useEffect(() => {
    setMovie(movieContextDefaultValues.movie);
  }, [setMovie]);

  const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    newMovie({ movie: movie });
    setMovie(movieContextDefaultValues.movie);
  };

  return (
    <form onSubmit={onHandleSubmit} className='flex flex-col gap-5 mt-5'>
      {children}
    </form>
  );
}

export default MovieFormWrapper;
