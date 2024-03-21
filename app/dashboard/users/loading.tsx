import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function Loading() {
  return (
    <div className='w-full h-[300px]'>
      <div className='w-full h-[50px] bg-slate-800 flex flex-row items-center justify-between'>
        <Skeleton className='w-[100px] h-4' />
        <Skeleton className='w-[100px] h-4' />
        <Skeleton className='w-[100px] h-4' />
        <Skeleton className='w-[100px] h-4' />
      </div>
    </div>
  );
}

export default Loading;
