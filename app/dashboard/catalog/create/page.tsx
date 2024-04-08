import React from 'react';
import PageHeader from '@/dashboard/_components/page-header';
import CatalogFormWrapper from '../_components/CatalogFormWrapper';

function DashboardCatalogCreatePage() {
  return (
    <div>
      <PageHeader
        title='Catalogs'
        description='Thêm catalog'
        isBack='Quay lại danh sách catalogs'
      />

      <CatalogFormWrapper />
    </div>
  );
}

export default DashboardCatalogCreatePage;
