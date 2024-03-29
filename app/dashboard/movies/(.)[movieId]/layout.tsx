'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

export const dynamic = 'force-dynamic';

function SingleMovieLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent className='w-full h-[500px] lg:min-w-[800px]'>
        <DialogHeader>
          <DialogTitle>Bạn đang chỉnh sửa?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea>{children}</ScrollArea>
      </DialogContent>
    </Dialog>
  );
}

export default SingleMovieLayout;
