import React, { Suspense } from 'react';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MovieInfoTab from '@/components/MovieForm/MovieInfoTab';
import MovieExtraInfoTab from '@/components/MovieForm/MovieExtraInfoTab';
import CategoryOptionLists from '@/components/MovieForm/CategoryOptionLists';
import { Button } from '@/components/ui/button';
import EditMovieForm from './_component/EditFormWrapper';

export const dynamic = 'force-dynamic';

async function MovieProfilePage({
  params: { movieId },
}: {
  params: { movieId: string };
}) {
  const movie = await prisma.movie.findUnique({
    where: {
      slug: movieId,
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

          <TabsContent
            value='phan-loai'
            className='bg-white px-4 py-2 space-y-2'
          >
            <MovieExtraInfoTab>
              <CategoryOptionLists />
            </MovieExtraInfoTab>
          </TabsContent>

          <Button type='submit' variant='success' className='mt-2'>
            Lưu và Quay lại
          </Button>
        </Tabs>
      </EditMovieForm>
    )
  );
}

export default MovieProfilePage;
