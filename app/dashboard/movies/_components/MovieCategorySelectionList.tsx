import React from 'react';
import { MovieCategory } from '@prisma/client';
import { Label } from '@/components/ui/label';
import MovieCategorySelectionItem from './MovieCategorySelectionItem';

type Props = {
  categories: [MovieCategory];
};

function MovieCategorySelectionList({ categories }: Props) {
  return (
    <div className='space-y-2'>
      <Label>Thể loại</Label>
      <div className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
        {categories &&
          categories.map((category) => (
            <MovieCategorySelectionItem key={category.id} category={category} />
          ))}
      </div>
    </div>
  );
}

export default MovieCategorySelectionList;
