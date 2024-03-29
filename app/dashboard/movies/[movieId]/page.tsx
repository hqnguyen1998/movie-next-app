import React from 'react';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { updateMovie } from '@/lib/actions/updateMovie';
import MovieForm from '@/components/MovieForm/MovieForm';

export const dynamic = 'force-dynamic';

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
