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
    actors: data.actors.toString().split(','),
    directors: data.directors.toString().split(','),
  };

  await prisma.movie.update({
    where: {
      slug: data.slug.toString(),
    },
    data: newData,
  });

  revalidatePath('/dashboard/movies');
  redirect('/dashboard/movies');
};
