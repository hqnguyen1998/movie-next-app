import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { unstable_noStore as noStore } from 'next/cache';

export const GET = async (req: Request) => {
  noStore();

  const categories = await prisma.movieCategory.findMany();

  if (!categories) throw new Error('Fetching categories error!');

  return NextResponse.json(
    {
      categories,
    },
    { status: 200 }
  );
};
