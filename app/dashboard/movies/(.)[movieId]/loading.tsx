import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

function Loading() {
  return (
    <div className='space-y-2'>
      <Skeleton className='w-full h-10' />
      <Skeleton className='w-full h-10' />
      <Skeleton className='w-full h-10' />
      <Skeleton className='w-full h-10' />
      <Skeleton className='w-full h-10' />
      <Skeleton className='w-full h-10' />
    </div>
  );
}

export default Loading;
