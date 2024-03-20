'use client';
import React from 'react';
import SideMenu from '@/components/SideMenu/SideMenu';

type Props = {
  children: React.ReactNode;
  header: React.ReactNode;
};

function DashboardLayout({ children, header }: Props) {
  return (
    <div className='flex flex-row bg-slate-950 text-white overflow-hidden'>
      <SideMenu />

      <div className='w-full h-full'>
        {header}
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
