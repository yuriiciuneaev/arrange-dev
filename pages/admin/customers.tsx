import React from 'react'
import Layout from '../../components/admin/Layout';
import PageHeader from '../../components/admin/sections/PageHeader';
import CustomersTable from '../../components/admin/sections/customers/CustomersTable';
import Pagination from '../../components/admin/snippets/Pagination';

function customers() {
  return (
    <Layout handle="customers">
      <PageHeader title="Customers" hasSearchSort={true} />
      <CustomersTable />
      <Pagination />
    </Layout>
  )
}

export default customers
