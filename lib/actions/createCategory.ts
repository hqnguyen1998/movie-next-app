'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const createCategory = async (formData: FormData) => {
  const data = Object.fromEntries(formData);
  // console.log(data);
  await prisma.movieCategory.create({
    data: {
      name: data.name.toString(),
      slug: data.slug.toString(),
    },
  });

  revalidatePath('/dashboard/category');
};
