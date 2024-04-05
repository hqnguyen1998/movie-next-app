import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Props = {
  page: number;
  totalPages: number;
  setPage: (value: React.SetStateAction<number>) => void;
  itemPerPage: string;
  setItemPerPage: (value: React.SetStateAction<number>) => void;
};

function CustomPagination({
  page,
  totalPages,
  setPage,
  itemPerPage,
  setItemPerPage,
}: Props) {
  const onHandlePrevious = () => {
    setPage(page <= 1 ? 1 : page - 1);
  };

  const onHandleNext = () => {
    setPage(page >= totalPages ? page : page + 1);
  };

  const onHandleChange = (value: string) => {
    setItemPerPage(Number(value));
  };

  return (
    <section className='flex flex-row items-center justify-between'>
      <div className='w-full flex flex-row items-center space-x-2'>
        <Select defaultValue={itemPerPage} onValueChange={onHandleChange}>
          <SelectTrigger className='w-[75px]'>
            <SelectValue placeholder='Hiển thị bản ghi' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='10'>10</SelectItem>
            <SelectItem value='25'>25</SelectItem>
            <SelectItem value='50'>50</SelectItem>
            <SelectItem value='100'>100</SelectItem>
          </SelectContent>
        </Select>
        <span className='text-sm'>bản ghi trên một trang</span>
      </div>

      <Pagination className='justify-end'>
        <PaginationContent>
          <PaginationItem className='cursor-pointer'>
            <PaginationPrevious onClick={onHandlePrevious} />
          </PaginationItem>
          {page > 1 && (
            <PaginationItem onClick={() => setPage(page - 1)}>
              <PaginationLink>{page - 1}</PaginationLink>
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationLink isActive>{page}</PaginationLink>
          </PaginationItem>
          {page < totalPages && (
            <PaginationItem onClick={() => setPage(page + 1)}>
              <PaginationLink>{page + 1}</PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem className='cursor-pointer'>
            <PaginationNext onClick={onHandleNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
}

export default CustomPagination;
