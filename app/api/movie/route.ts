import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { unstable_noStore as noStore } from 'next/cache';

export async function GET() {
  noStore();

  try {
    const movies = await prisma.movie.findMany({
      include: {
        categories: true,
      },
    });

    return NextResponse.json(
      { status: 'success', ok: true, movies },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: 'error', ok: false, msg: 'Error Fetching' },
      { status: 200 }
    );
  }
}
