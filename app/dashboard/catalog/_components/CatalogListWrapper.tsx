import React from 'react';
import { MovieCatalog } from '@prisma/client';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import CatalogListItem from './CatalogListItem';
import { Catalog_Row_Data } from '@/lib/table_data';
import { cn } from '@/lib/utils';

type Props = {
  datas: [MovieCatalog];
};

function CatalogListWrapper({ datas }: Props) {
  return (
    <React.Fragment>
      <ScrollArea className='mb-5'>
        <Table className='bg-white rounded-md'>
          <TableHeader>
            <TableRow>
              {Catalog_Row_Data.map((row) => (
                <TableHead
                  key={row.name}
                  className={cn(
                    'text-black font-semibold hidden',
                    row.className
                  )}
                >
                  {row.name}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {datas.map((data) => (
              <CatalogListItem key={data.id} data={data} />
            ))}
          </TableBody>
        </Table>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
    </React.Fragment>
  );
}

export default CatalogListWrapper;
