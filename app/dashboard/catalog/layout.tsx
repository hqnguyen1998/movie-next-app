import React from 'react';

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: 'Catalogs',
};

function CatalogLayout({ children }: Props) {
  return <div className='p-5'>{children}</div>;
}

export default CatalogLayout;
