import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function Loading() {
  return (
    <div>
      <Skeleton className='w-full h-[100px] bg-slate-900 mb-2' />
      <Skeleton className='w-full h-[100px] bg-slate-900 mb-2' />
      <Skeleton className='w-full h-[100px] bg-slate-900 mb-2' />
      <Skeleton className='w-full h-[100px] bg-slate-900 mb-2' />
      <Skeleton className='w-full h-[100px] bg-slate-900 mb-2' />
    </div>
  );
}

export default Loading;
