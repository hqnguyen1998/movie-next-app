import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const movie = await prisma.movie.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!movie) {
    return NextResponse.json({ movie: null }, { status: 404 });
  }

  try {
    return NextResponse.json({ movie }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: 'Fetching Error' }, { status: 500 });
  }
}
