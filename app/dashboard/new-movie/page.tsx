import React from 'react';
import NewMovieForm from './_components/NewMovieForm';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import MovieInfoTab from '@/components/MovieForm/MovieInfoTab';
import MovieExtraInfoTab from '@/components/MovieForm/MovieExtraInfoTab';
import { Button } from '@/components/ui/button';
import CategoryOptionLists from '@/components/MovieForm/CategoryOptionLists';

function Page() {
  return (
    <div className='p-5 '>
      <h1 className='text-xl'>Thêm phim mới</h1>
      <NewMovieForm>
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
      </NewMovieForm>
    </div>
  );
}

export default Page;
