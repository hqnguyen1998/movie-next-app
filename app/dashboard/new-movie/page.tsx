import React from 'react';
import PageHeader from '@/dashboard/_components/page-header';
import MovieFormWrapper from '@/dashboard/movies/_components/MovieFormWrapper';

function CreateNewMoviePage() {
  return (
    <main className='p-5 '>
      <PageHeader
        title='Movies'
        description='Thêm phim mới.'
        isBack='Quay lại danh sách movies.'
      />

      <MovieFormWrapper isNewMoviePage />
    </main>
  );
}

export default CreateNewMoviePage;
