import React from 'react';
import { prisma } from '@/lib/prisma';
import CategoryForm from './_components/form';

type Props = {
  params: {
    id: string;
  };
};

async function EditCategoryPage({ params }: Props) {
  const category = await prisma.movieCategory.findUnique({
    where: {
      id: params.id,
    },
  });
  return <CategoryForm category={category} />;
}

export default EditCategoryPage;
