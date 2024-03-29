'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Dialog } from '@/components/ui/dialog';

export const dynamic = 'force-dynamic';

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  const router = useRouter();
  const onHandleOpenChange = () => {
    router.back();
  };

  return (
    <Dialog open onOpenChange={onHandleOpenChange}>
      {children}
    </Dialog>
  );
}

export default Layout;
