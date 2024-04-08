import React from 'react';
import { Metadata } from 'next';
import SideBar from './_components/side-bar';
import Header from './_components/header';
import { MovieContextProvider } from '@/lib/context/MovieContext';
import { SideMenuContextProvider } from '@/lib/context/SideMenuContext';

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
    <main>
      <SideMenuContextProvider>
        <Header />

        <div className='flex flex-row'>
          <SideBar />

          <div className='flex-1'>
            <MovieContextProvider>{children}</MovieContextProvider>
          </div>
        </div>
      </SideMenuContextProvider>
    </main>
  );
}

export default DashboardLayout;
