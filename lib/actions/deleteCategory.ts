'use server';
import { prisma } from '@/lib/prisma';

export const deleteCategory = async (id: number) => {
  await prisma.movieCategory.delete({
    where: {
      id: id,
    },
  });
};
