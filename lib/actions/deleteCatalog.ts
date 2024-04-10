'use server';
import { prisma } from '@/lib/prisma';

export const deleteCatalog = async (id: number | undefined) => {
  if (id !== undefined) {
    await prisma.movieCatalog.delete({
      where: {
        id: id,
      },
    });

    return {
      msg: `Xoá thành công CATALOG ID: ${id}`,
    };
  }

  return {
    msg: 'Xoá thất bại...',
  };
};
