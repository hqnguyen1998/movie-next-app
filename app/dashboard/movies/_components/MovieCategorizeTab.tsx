'use client';
import React from 'react';
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useMovieContext } from '@/lib/context/context';
import { Skeleton } from '@/components/ui/skeleton';
import MovieCategorySelectionList from './MovieCategorySelectionList';

function MovieCategorizeTab() {
  const { movie, setMovie } = useMovieContext();

  const { data, isLoading } = useSWR('/api/category', fetcher);

  return (
    <div className='space-y-5'>
      <div className='space-y-2'>
        <Label>
          Định dạng <span className='text-red-700'>*</span>
        </Label>
        <RadioGroup
          name='type'
          defaultValue={movie.type}
          onValueChange={(value: string) => setMovie({ ...movie, type: value })}
        >
          <div className='space-x-1 flex items-center'>
            <RadioGroupItem value='single' id='phim-le' />
            <Label htmlFor='phim-le'>Phim Lẻ</Label>
          </div>
          <div className='space-x-1 flex items-center'>
            <RadioGroupItem value='series' id='phim-bo' />
            <Label htmlFor='phim-bo'>Phim Bộ</Label>
          </div>
        </RadioGroup>
      </div>

      <div className='space-y-2'>
        <Label htmlFor='status'>
          Tình trạng <span className='text-red-700'>*</span>
        </Label>
        <RadioGroup
          defaultValue='completed'
          name='status'
          value={movie.status}
          onValueChange={(value: string) =>
            setMovie({ ...movie, status: value })
          }
        >
          <div className='space-x-1 flex items-center'>
            <RadioGroupItem value='incoming' />
            <Label>Sắp chiếu</Label>
          </div>
          <div className='space-x-1 flex items-center'>
            <RadioGroupItem value='ongoing' />
            <Label>Đang chiếu</Label>
          </div>
          <div className='space-x-1 flex items-center'>
            <RadioGroupItem value='completed' />
            <Label>Hoàn thành</Label>
          </div>
        </RadioGroup>
      </div>

      {isLoading ? (
        <Skeleton className='w-full h-[100px]' />
      ) : (
        <MovieCategorySelectionList categories={data.categories} />
      )}
    </div>
  );
}

export default MovieCategorizeTab;
