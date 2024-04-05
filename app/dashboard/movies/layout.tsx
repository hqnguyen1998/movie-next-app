import { Metadata } from 'next';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'Movies',
};

function MovieLayout({ children }: Props) {
  return (
    <main className='p-5'>
      <div>{children}</div>
    </main>
  );
}

export default MovieLayout;
