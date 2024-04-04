'use server';
import { movieContextType } from '@/lib/context/MovieContext';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const newMovie = async ({
  movie,
}: {
  movie: movieContextType['movie'];
}) => {
  await prisma.movie.create({
    data: {
      name: movie.name,
      origin_name: movie.origin_name,
      slug: movie.slug,
      poster_url: movie.poster_url,
      thumb_url: movie.thumb_url,
      content: movie.content,
      year: Number(movie.year),
      trailer_url: movie.trailer_url,
      time: movie.time,
      episode_current: movie.episode_current,
      episode_total: movie.episode_total,
      lang: movie.lang,
      quality: movie.quality,
      type: movie.type,
      status: movie.status,
      categories: {
        connect: movie.categories,
      },
    },
  });

  revalidatePath('/dashboard/movies');
  redirect('/dashboard/movies');
};
