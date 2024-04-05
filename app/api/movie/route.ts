import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getPagination } from '@/lib/paginationHelpers';

export async function GET(req: NextRequest) {
  const currentPage = Number(req.nextUrl.searchParams.get('page')) || 1;
  const itemPerPage = Number(req.nextUrl.searchParams.get('limit')) || 10;

  try {
    const totalMovies = await prisma.movie.count();
    const movies = await prisma.movie.findMany({
      include: {
        categories: true,
      },
      take: itemPerPage,
      skip: (currentPage - 1) * itemPerPage,
    });

    return NextResponse.json(
      {
        status: 'success',
        ok: true,
        pagination: getPagination({
          currentPage: currentPage,
          totalItems: totalMovies,
          totalItemsPerPage: itemPerPage,
        }),
        movies,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: 'error', ok: false, msg: 'Error Fetching' },
      { status: 200 }
    );
  }
}
