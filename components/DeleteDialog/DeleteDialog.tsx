import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { IoTrashOutline } from 'react-icons/io5';
import { IoAlertCircleOutline } from 'react-icons/io5';

type Props = {
  action?: () => {};
};

function DeleteDialog({ action }: Props) {
  return (
    <Dialog>
      <DialogTrigger className='flex flex-row gap-1 items-center'>
        <IoTrashOutline /> Xoá
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='self-center text-amber-500'>
            <IoAlertCircleOutline size={100} />
          </DialogTitle>
          <DialogDescription className='flex flex-col items-center gap-3'>
            <span className='text-2xl text-gray-800'>Cảnh báo</span>
            Bạn chắc chắn muốn xoá bản ghi này chứ?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type='button' variant='ghost'>
              Huỷ bỏ
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant='destructive' onClick={action}>
              Xoá
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteDialog;
