import React from 'react';
import Link from 'next/link';
import CategoryList from './_components/category-list';
import CategoryHeader from './_components/category-header';
import RefreshButton from '../movies/_components/refresh-button';
import { Button } from '@/components/ui/button';

async function CategoryPage() {
  return (
    <div>
      <CategoryHeader title='Categories'>
        <RefreshButton>
          <span className='text-red-500 cursor-pointer text-sm mr-3'>
            Làm mới
          </span>
        </RefreshButton>
        <Link href='/dashboard/category/create'>
          <Button variant='destructive' size='sm'>
            + Thêm category
          </Button>
        </Link>
      </CategoryHeader>

      <CategoryList />
    </div>
  );
}

export default CategoryPage;
