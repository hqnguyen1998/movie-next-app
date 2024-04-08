import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getPagination } from '@/lib/paginationHelpers';

export async function GET(req: NextRequest) {
  const currentPage = Number(req.nextUrl.searchParams.get('page')) || 1;
  const itemPerPage = Number(req.nextUrl.searchParams.get('limit')) || 10;
  try {
    const totalCatalogs = await prisma.movieCatalog.count();
    const catalogs = await prisma.movieCatalog.findMany({
      take: itemPerPage,
      skip: (currentPage - 1) * itemPerPage,
    });

    return NextResponse.json(
      {
        status: 'success',
        ok: true,
        pagination: getPagination({
          currentPage: currentPage,
          totalItems: totalCatalogs,
          totalItemsPerPage: itemPerPage,
        }),
        catalogs,
      },
      { status: 200 }
    );
  } catch (error) {
    throw new Error('Fetching Error!');
  }
}
