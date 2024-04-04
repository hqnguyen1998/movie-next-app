import React from 'react';
import Analytics from '@/components/Analytics/Analytics';
import { prisma } from '@/lib/prisma';

async function DashboardPage() {
  const totalMovies = (await prisma.movie.findMany()).length;

  return (
    <div className='min-h-full'>
      <Analytics totalMovies={totalMovies} />
    </div>
  );
}

export default DashboardPage;
