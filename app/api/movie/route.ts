import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const currenPage = Number(req.nextUrl.searchParams.get('page')) || 1;
  const itemPerPage = Number(req.nextUrl.searchParams.get('limit')) || 10;

  try {
    const totalMovies = await prisma.movie.count();
    const movies = await prisma.movie.findMany({
      include: {
        categories: true,
      },
      take: itemPerPage,
      skip: (currenPage - 1) * itemPerPage,
    });

    return NextResponse.json(
      {
        status: 'success',
        ok: true,
        pagination: {
          totalItems: totalMovies,
          totalItemsPerPage: itemPerPage,
          currentPage: currenPage,
          totalPages: Math.ceil(totalMovies / itemPerPage),
        },
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
