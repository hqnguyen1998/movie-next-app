'use server';
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: number } }
) {
  try {
    const catalog = await prisma.movieCatalog.findUnique({
      where: { id: Number(params.slug) },
    });

    if (!catalog) {
      return NextResponse.json(
        { error: true, msg: 'Catalog does not found!', catalog: null },
        { status: 404 }
      );
    }

    return NextResponse.json({ catalog }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: true, msg: 'Catalog Error Fetching...', catalog: null },
      { status: 500 }
    );
  }
}
