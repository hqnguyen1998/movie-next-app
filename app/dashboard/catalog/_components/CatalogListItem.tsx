import React from 'react';
import { MovieCatalog } from '@prisma/client';
import { TableCell, TableRow } from '@/components/ui/table';
import CatalogActionButtons from './CatalogActionButtons';

type Props = {
  data: MovieCatalog;
};

function CatalogListItem({ data }: Props) {
  return (
    <TableRow>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.slug}</TableCell>
      <TableCell className='hidden md:table-cell'>{data.per_page}</TableCell>
      <TableCell className='hidden md:table-cell'>{data.value}</TableCell>
      <TableCell className='hidden lg:table-cell'>{data.seo_title}</TableCell>
      <TableCell className='hidden lg:table-cell '>
        {data.seo_description}
      </TableCell>
      <TableCell className='hidden lg:table-cell'>{data.seo_keyword}</TableCell>
      <TableCell className='hidden md:table-cell'>
        <CatalogActionButtons catalog_slug={data.id} />
      </TableCell>
    </TableRow>
  );
}

export default CatalogListItem;
