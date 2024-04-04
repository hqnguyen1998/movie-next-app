'use server';
import React from 'react';
import { prisma } from '@/lib/prisma';
import CategoryCheckBox from './CategoryCheckBox';

async function CategoryOptionLists() {
  const categories = await prisma.movieCategory.findMany();

  return (
    <div className='flex flex-row items-center flex-wrap w-full space-x-2'>
      {categories &&
        categories.map((category) => (
          <div key={category.id} className='space-x-1 flex items-center'>
            <CategoryCheckBox category={category} />
          </div>
        ))}
    </div>
  );
}

export default CategoryOptionLists;
