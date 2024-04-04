import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type Props = {
  page: number;
  totalPages: number;
  setPage: (value: React.SetStateAction<number>) => void;
};

function CustomPagination({ page, totalPages, setPage }: Props) {
  const onHandlePrevious = () => {
    setPage(page <= 1 ? 1 : page - 1);
  };

  const onHandleNext = () => {
    setPage(page >= totalPages ? page : page + 1);
  };

  return (
    <Pagination>
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
  );
}

export default CustomPagination;
