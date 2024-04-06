'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useMovieContext } from '@/lib/context/context';
import { MovieCategory } from '@prisma/client';

function MovieCategorySelectionItem({ category }: { category: MovieCategory }) {
  const { movie, setMovie } = useMovieContext();

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovie({
      ...movie,
      categories:
        movie.categories.filter((cat) => cat.slug === category.slug).length > 0
          ? movie?.categories?.filter((cat) => cat.slug !== category.slug)
          : [...movie.categories, category],
    });
  };

  return (
    <div className='flex flex-row items-center space-x-1'>
      <Input
        type='checkbox'
        name='category'
        id={category.slug}
        value={category.slug}
        className='size-4'
        onChange={onHandleChange}
        defaultChecked={
          movie.categories.filter((cat) => cat.id === category.id).length > 0
            ? true
            : false
        }
      />
      <Label htmlFor={category.slug}>{category.name}</Label>
    </div>
  );
}

export default MovieCategorySelectionItem;
