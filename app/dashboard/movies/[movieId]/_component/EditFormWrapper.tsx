'use client';
import React, { FormEvent } from 'react';
import { useMovieContext } from '@/lib/context/context';
import { Movie } from '@prisma/client';
import { updateMovie } from '@/lib/actions/updateMovie';
import { useToast } from '@/components/ui/use-toast';

function EditMovieForm({
  children,
  currentMovie,
}: {
  children: React.ReactNode;
  currentMovie: Movie;
}) {
  const { toast } = useToast();
  const { movie, setMovie } = useMovieContext();

  React.useEffect(() => {
    setMovie(currentMovie);
  }, [setMovie, currentMovie]);

  const onHandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateMovie({ currentMovieId: currentMovie.id, movie: movie });

    toast({ title: 'Cập nhật phim thành công!' });
  };

  return (
    <form onSubmit={onHandleSubmit} className='flex flex-col gap-5 mt-5'>
      {children}
    </form>
  );
}

export default EditMovieForm;
