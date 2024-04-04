import React from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { movieContextDefaultValues } from '@/lib/context/MovieContext';
import { useMovieContext } from '@/lib/context/context';
import { MovieWithCategory } from '../../app/dashboard/movies/_components/movie-table';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/tabs';
import MovieInfoTab from './MovieInfoTab';
import MovieExtraInfoTab from './MovieExtraInfoTab';
import CategoryOptionLists from './CategoryOptionLists';
import MovieFormWrapper from './MovieFormWrapper';

function MovieForm({
  movie,
  action,
}: {
  movie?: MovieWithCategory;
  action?: (formData: FormData) => Promise<void>;
}) {
  // const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  // };

  return (
    <MovieFormWrapper>
      <Tabs defaultValue='thong-tin-phim'>
        <TabsList>
          <TabsTrigger value='thong-tin-phim'>Thông tin phim</TabsTrigger>
          <TabsTrigger value='phan-loai'>Phân loại</TabsTrigger>
        </TabsList>
        <TabsContent
          value='thong-tin-phim'
          className='bg-white px-4 py-2 space-y-2'
        >
          <MovieInfoTab />
        </TabsContent>

        <TabsContent value='phan-loai' className='bg-white px-4 py-2 space-y-2'>
          <MovieExtraInfoTab>
            <CategoryOptionLists />
          </MovieExtraInfoTab>
        </TabsContent>

        <Button type='submit' variant='success' className='mt-2'>
          Lưu và Quay lại
        </Button>
      </Tabs>
    </MovieFormWrapper>
  );
}

export default MovieForm;
