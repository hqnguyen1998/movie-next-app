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

type Props = {
  params: {
    userId: String;
  };
};

function UserModifyPage({ params: { userId } }: Props) {
  const router = useRouter();
  console.log(userId);

  const onHandleOpenChange = () => {
    router.back();
  };

  return (
    <Dialog open onOpenChange={onHandleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User ID: {userId}</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default UserModifyPage;
