import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const movie = await prisma.movie.findUnique({
      where: {
        slug: params.slug,
      },
      include: {
        categories: true,
        countries: true,
      },
    });

    if (!movie) {
      return NextResponse.json(
        { status: false, msg: 'Không tìm thấy phim', movie: null },
        { status: 404 }
      );
    }

    return NextResponse.json({ status: true, msg: '', movie }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: 'Fetching Error' }, { status: 500 });
  }
}
