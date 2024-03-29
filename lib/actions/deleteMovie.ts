'use server';

import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const deleteMovieById = async (id: string) => {
  await prisma.movie.delete({
    where: {
      id: id,
    },
  });

  revalidatePath('/dashboard/movies');
};
