import React from 'react';
import { notFound } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import CategoryForm from './_components/form';

type Props = {
  params: {
    id: number;
  };
};

async function EditCategoryPage({ params }: Props) {
  const category = await prisma.movieCategory.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!category) return notFound();

  return <CategoryForm category={category} />;
}

export default EditCategoryPage;
