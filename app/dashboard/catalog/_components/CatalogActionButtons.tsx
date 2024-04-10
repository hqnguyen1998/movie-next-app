'use client';
import React from 'react';
import Link from 'next/link';
import { AiOutlineLink, AiOutlineEye } from 'react-icons/ai';
import { MdOutlineEditCalendar } from 'react-icons/md';
import { IoTrashOutline } from 'react-icons/io5';

type Props = {
  catalog_slug: number | null;
};

function CatalogActionButtons({ catalog_slug }: Props) {
  return (
    <div className='flex flex-row gap-4 text-indigo-600 text-sm font-light'>
      <Link
        href='/danh-sach/[slug]'
        as={`/danh-sach/${catalog_slug}`}
        target='_blank'
        className='flex flex-row items-center gap-1'
      >
        <AiOutlineLink /> View
      </Link>
      <Link
        href='/dashboard/catalog/[slug]/show'
        as={`/dashboard/catalog/${catalog_slug}/show`}
        className='flex flex-row items-center gap-1'
      >
        <AiOutlineEye />
        Xem lại
      </Link>
      <Link
        href='/dashboard/catalog/[slug]/edit'
        as={`/dashboard/catalog/${catalog_slug}/edit`}
        className='flex flex-row items-center gap-1'
      >
        <MdOutlineEditCalendar /> Sửa
      </Link>
      <div className='flex flex-row items-center gap-1'>
        <IoTrashOutline />
        Xoá
      </div>
    </div>
  );
}

export default CatalogActionButtons;
