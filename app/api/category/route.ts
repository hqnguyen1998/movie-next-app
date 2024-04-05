import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getPagination } from '@/lib/paginationHelpers';

export const GET = async (req: NextRequest) => {
  const currentPage = Number(req.nextUrl.searchParams.get('page')) || 1;
  const itemPerPage = Number(req.nextUrl.searchParams.get('limit')) || 10;

  const totalCategories = await prisma.movieCategory.count();
  const categories = await prisma.movieCategory.findMany({
    take: itemPerPage,
    skip: (currentPage - 1) * itemPerPage,
  });

  if (!categories) throw new Error('Fetching categories error!');

  return NextResponse.json(
    {
      status: 'success',
      ok: true,
      pagination: getPagination({
        totalItems: totalCategories,
        totalItemsPerPage: itemPerPage,
        currentPage: currentPage,
      }),
      categories,
    },
    { status: 200 }
  );
};
