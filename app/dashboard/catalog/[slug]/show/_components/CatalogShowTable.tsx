'use client';
import React from 'react';
import Link from 'next/link';
import { MovieCatalog } from '@prisma/client';
import { MdOutlineEditCalendar } from 'react-icons/md';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { deleteCatalog } from '@/lib/actions/deleteCatalog';
import { toast } from '@/components/ui/use-toast';
import DeleteDialog from '@/components/DeleteDialog/DeleteDialog';

function CatalogShowTable({ data }: { data: MovieCatalog | null }) {
  const onHandleDelete = async () => {
    const res = await deleteCatalog(data?.id);
    toast({ title: res.msg, variant: 'success' });
  };

  return (
    <Table className='!width-[800px]'>
      <TableBody className='width-[800px] [&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-neutral-50 shadow-md border'>
        <TableRow>
          <TableCell>
            <div className='flex flex-row justify-between items-center'>
              <span className='flex-[1] font-semibold'>Name:</span>
              <span className='flex-[4]'>{data?.name}</span>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className='flex flex-row justify-between items-center'>
              <span className='flex-[1] font-semibold'>Slug:</span>
              <span className='flex-[4]'>{data?.slug}</span>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className='flex flex-row justify-between items-center'>
              <span className='flex-[1] font-semibold'>Pagination:</span>
              <span className='flex-[4]'>{data?.per_page}</span>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className='flex flex-row justify-between items-center'>
              <span className='flex-[1] font-semibold'>Value:</span>
              <span className='flex-[4]'>{data?.value}</span>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className='flex flex-row justify-between items-center'>
              <span className='flex-[1] font-semibold'>Seo title:</span>
              <span className='flex-[4]'>{data?.seo_title}</span>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className='flex flex-row justify-between items-center'>
              <span className='flex-[1] font-semibold'>SEO description:</span>
              <span className='flex-[4]'>{data?.seo_description}</span>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className='flex flex-row justify-between items-center'>
              <span className='flex-[1] font-semibold'>SEO keyword:</span>
              <span className='flex-[4]'>{data?.seo_keyword}</span>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className='flex flex-row justify-between items-center'>
              <span className='flex-[1] font-semibold'>Created:</span>
              <span className='flex-[4]'>
                {data?.created_at?.toLocaleString()}
              </span>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className='flex flex-row justify-between items-center'>
              <span className='flex-[1] font-semibold'>Updated:</span>
              <span className='flex-[4]'>
                {data?.updated_at?.toLocaleString()}
              </span>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <div className='flex flex-row justify-between items-center'>
              <span className='flex-[1] font-semibold'>Action:</span>
              <div className='flex flex-row gap-3 flex-[4] text-indigo-600'>
                <Link
                  href={`/dashboard/catalog/${data?.id}/edit`}
                  className='flex gap-1 items-center'
                >
                  <MdOutlineEditCalendar /> Sửa
                </Link>
                <DeleteDialog action={onHandleDelete} />
              </div>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default CatalogShowTable;
