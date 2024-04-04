'use server';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const deleteCategory = async (id: number) => {
  await prisma.movieCategory.delete({
    where: {
      id: id,
    },
  });

  revalidatePath('/dashboard/category');
};
