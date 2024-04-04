import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const GET = async (req: NextRequest) => {
  const currenPage = Number(req.nextUrl.searchParams.get('page')) || 1;
  const itemPerPage = Number(req.nextUrl.searchParams.get('limit')) || 10;

  const totalCategories = await prisma.movieCategory.count();
  const categories = await prisma.movieCategory.findMany({
    take: itemPerPage,
    skip: (currenPage - 1) * itemPerPage,
  });

  if (!categories) throw new Error('Fetching categories error!');

  return NextResponse.json(
    {
      status: 'success',
      ok: true,
      pagination: {
        totalItems: totalCategories,
        totalItemsPerPage: itemPerPage,
        currentPage: currenPage,
        totalPages: Math.ceil(totalCategories / itemPerPage),
      },
      categories,
    },
    { status: 200 }
  );
};
