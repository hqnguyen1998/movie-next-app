'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath, unstable_noStore as noStore } from 'next/cache';
import { movieContextType } from '@/lib/context/MovieContext';

type Props = {
  currentMovieId: number;
  movie: movieContextType['movie'];
};

export const updateMovie = async ({ currentMovieId, movie }: Props) => {
  noStore();

  await prisma.movie.update({
    where: {
      id: currentMovieId,
    },
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
        set: [],
        connect: movie.categories.map((cat) => ({ id: cat.id })),
      },
    },
    include: {
      categories: true,
    },
  });

  revalidatePath('/dashboard/movies');
};
