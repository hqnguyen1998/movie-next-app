'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const updateMovie = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  const newData = {
    ...data,
    chieurap: data.chieurap === 'true' ? true : false,
    year: Number(data.year),
    actors: data.actors.split(','),
    directors: data.directors.split(','),
  };

  await prisma.movie.update({
    where: {
      slug: data.slug,
    },
    data: newData,
  });

  revalidatePath('/dashboard/movies');
  redirect('/dashboard/movies');
};
