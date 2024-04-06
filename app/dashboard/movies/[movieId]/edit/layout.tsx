import React from 'react';
import PageHeader from '@/dashboard/_components/page-header';

function EditMovieLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <PageHeader
        title='Movies'
        description='Sửa movie'
        isBack='Quay lại danh sách movies.'
      />
      {children}
    </main>
  );
}

export default EditMovieLayout;
