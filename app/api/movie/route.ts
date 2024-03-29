import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const movies = await prisma.movie.findMany({
      include: {
        category: true,
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
