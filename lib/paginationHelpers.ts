type PaginationType = {
  totalItems: number;
  totalItemsPerPage: number;
  currentPage: number;
};

export const getPagination = ({
  totalItems,
  totalItemsPerPage,
  currentPage,
}: PaginationType) => {
  return {
    totalItems: totalItems,
    totalItemsPerPage: totalItemsPerPage,
    currentPage: currentPage,
    totalPages: Math.ceil(totalItems / totalItemsPerPage),
    from: (currentPage - 1) * totalItemsPerPage + 1,
    to: totalItemsPerPage * currentPage,
  };
};
