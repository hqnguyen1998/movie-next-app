'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { deleteCategory } from '@/lib/actions/deleteCategory';
import { TableCell, TableRow } from '@/components/ui/table';
import { useToast } from '@/components/ui/use-toast';
import { IoCreateOutline, IoEyeOutline } from 'react-icons/io5';
import { MovieCategory, MovieCountry } from '@prisma/client';
import DeleteDialog from '@/components/DeleteDialog/DeleteDialog';

type Props = {
  data: MovieCategory | MovieCountry;
};

const CountryOrCategoryListItem = ({ data }: Props) => {
  const router = useRouter();
  const { toast } = useToast();

  const onHandleDelete = async () => {
    await deleteCategory(data.id);

    toast({
      title: `Xoá thành công category: ${data.name}`,
      variant: 'destructive',
    });
  };

  return (
    <TableRow key={data.id}>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.slug}</TableCell>
      <TableCell className='text-indigo-600 flex flex-row gap-4 items-center'>
        <div
          onClick={() => router.push(`/dashboard/category/${data.id}/show`)}
          className='flex flex-row gap-1 items-center cursor-pointer'
        >
          <IoEyeOutline /> <span>View</span>
        </div>
        <div
          onClick={() => router.push(`/dashboard/category/${data.id}/edit`)}
          className='flex flex-row gap-1 items-center cursor-pointer'
        >
          <IoCreateOutline /> <span>Sửa</span>
        </div>
        <DeleteDialog action={onHandleDelete} />
      </TableCell>
    </TableRow>
  );
};

export default CountryOrCategoryListItem;
