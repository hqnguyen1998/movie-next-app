import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getPagination } from '@/lib/paginationHelpers';

export const GET = async (req: NextRequest) => {
  const currentPage = Number(req.nextUrl.searchParams.get('page')) || 1;
  const itemPerPage = Number(req.nextUrl.searchParams.get('limit')) || 10;

  const totalCategories = await prisma.movieCountry.count();
  const countries = await prisma.movieCountry.findMany({
    take: itemPerPage,
    skip: (currentPage - 1) * itemPerPage,
  });

  if (!countries) throw new Error('Fetching countries error!');

  return NextResponse.json(
    {
      status: 'success',
      ok: true,
      pagination: getPagination({
        totalItems: totalCategories,
        totalItemsPerPage: itemPerPage,
        currentPage: currentPage,
      }),
      countries,
    },
    { status: 200 }
  );
};
