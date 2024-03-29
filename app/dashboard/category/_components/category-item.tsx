'use client';
import React from 'react';
import Link from 'next/link';
import { MovieCategory } from '@prisma/client';
import { deleteCategory } from '@/lib/actions/deleteCategory';
import { TableCell, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { MdEdit } from 'react-icons/md';
import { FaTrash } from 'react-icons/fa';

function CategoryItem({ categories }: { categories: [MovieCategory] }) {
  const { toast } = useToast();

  const onHandleDelete = async (id: string, name: string) => {
    await deleteCategory(id);

    toast({
      title: `Xoá thành công category: ${name}`,
      variant: 'destructive',
    });
  };

  return categories.map((category) => (
    <TableRow key={category.id}>
      <TableCell>{category.name}</TableCell>
      <TableCell>{category.slug}</TableCell>
      <TableCell>
        <Link href={`/dashboard/category/${category.id}/edit`} scroll={false}>
          <Button
            size='icon'
            className='size-6 text-white mr-1 bg-green-500 hover:bg-green-600'
          >
            <MdEdit />
          </Button>
        </Link>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              size='icon'
              className='size-6 text-white bg-red-500 hover:bg-red-600'
            >
              <FaTrash />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <div>
              <h1 className='mb-2'>
                Bạn có chắc chắn muốn xoá?{' '}
                <span className='text-red-700'>{category.name}</span>
              </h1>

              <Button
                variant='destructive'
                onClick={() => onHandleDelete(category.id, category.name)}
              >
                Đồng ý
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </TableCell>
    </TableRow>
  ));
}

export default CategoryItem;
