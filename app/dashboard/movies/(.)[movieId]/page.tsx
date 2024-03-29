import React from 'react';
import MovieForm from '@/components/MovieForm/MovieForm';
import { updateMovie } from '@/lib/actions/updateMovie';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

async function MovieProfilePage({
  params: { movieId },
}: {
  params: { movieId: string };
}) {
  const movie = await prisma.movie.findUnique({
    where: {
      slug: movieId,
    },
    include: {
      category: true,
    },
  });

  if (!movie) {
    return notFound();
  }

  return <MovieForm movie={movie} action={updateMovie} />;
}

export default MovieProfilePage;
