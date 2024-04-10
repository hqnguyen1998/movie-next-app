'use server';
import React from 'react';
import { prisma } from '@/lib/prisma';
import CatalogShowTable from './_components/CatalogShowTable';

async function DashboardCatalogShowPage({
  params,
}: {
  params: { slug: number };
}) {
  const data = await prisma.movieCatalog.findUnique({
    where: { id: Number(params.slug) },
  });

  return <CatalogShowTable data={data} />;
}

export default DashboardCatalogShowPage;
