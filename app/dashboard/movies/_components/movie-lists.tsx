import React from 'react';
import { prisma } from '@/lib/prisma';
import MovieTable from './movie-table';
import { unstable_noStore as noStore } from 'next/cache';

async function MovieLists() {
  noStore();
  const movies = await prisma.movie.findMany({
    include: {
      category: true,
    },
  });

  return <MovieTable movies={movies} />;
}

export default MovieLists;
