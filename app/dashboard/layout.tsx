import React from 'react';
import SideBar from './_components/side-bar';
import Header from './_components/header';
import { Metadata } from 'next';
import { MovieContextProvider } from '@/lib/context/MovieContext';

export const metadata: Metadata = {
  title: {
    default: 'Admin Panel',
    template: '%s | AdminPanel',
  },
};

type Props = {
  children: React.ReactNode;
};

function DashboardLayout({ children }: Props) {
  return (
    <div className='bg-[#f1f4f8] flex flex-row gap-2 text-black overflow-hidden'>
      <SideBar />

      <div className='w-full h-full'>
        <Header />
        <MovieContextProvider>{children}</MovieContextProvider>
      </div>
    </div>
  );
}

export default DashboardLayout;
