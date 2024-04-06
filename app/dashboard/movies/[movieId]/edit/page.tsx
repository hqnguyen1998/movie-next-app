import React from 'react';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MovieInfoTab from '@/components/MovieForm/MovieInfoTab';
import MovieExtraInfoTab from '@/components/MovieForm/MovieExtraInfoTab';
import ExtraTab from '../_component/MovieExtraInfoTab';
import CategoryOptionLists from '@/components/MovieForm/CategoryOptionLists';
import EditMovieForm from '../_component/EditFormWrapper';

export const dynamic = 'force-dynamic';

async function EditMoviePage({
  params: { movieId },
}: {
  params: { movieId: number };
}) {
  const movie = await prisma.movie.findUnique({
    where: {
      id: Number(movieId),
    },
    include: {
      categories: true,
    },
  });

  if (!movie) {
    return notFound();
  }

  return (
    movie && (
      <EditMovieForm currentMovie={movie}>
        <Tabs defaultValue='#thong-tin-phim'>
          <TabsList>
            <TabsTrigger value='#thong-tin-phim'>Thông tin phim</TabsTrigger>
            <TabsTrigger value='#phan-loai'>Phân loại</TabsTrigger>
            <TabsTrigger value='#khac'>Khác</TabsTrigger>
          </TabsList>
          <TabsContent
            value='#thong-tin-phim'
            className='bg-white px-4 py-2 space-y-2'
          >
            <MovieInfoTab />
          </TabsContent>

          <TabsContent
            value='#phan-loai'
            className='bg-white px-4 py-2 space-y-2'
          >
            <MovieExtraInfoTab>
              <CategoryOptionLists />
            </MovieExtraInfoTab>
          </TabsContent>

          <TabsContent
            value='#khac'
            className='bg-white px-4 py-2 space-y-5 flex flex-col'
          >
            <ExtraTab
              is_copyright={movie.is_copyright}
              chieurap={movie.chieurap}
              is_recommended={movie.chieurap}
              is_sensitive_content={movie.is_sensitive_content}
            />
          </TabsContent>

          <Button type='submit' variant='success' className='mt-2'>
            Lưu và Quay lại
          </Button>
        </Tabs>
      </EditMovieForm>
    )
  );
}

export default EditMoviePage;
