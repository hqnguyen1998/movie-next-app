import React from 'react';
import PageHeader from '@/dashboard/_components/page-header';

function EditMovieLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <PageHeader title='Movies' description='Sửa movie' isBack />
      {children}
    </section>
  );
}

export default EditMovieLayout;
