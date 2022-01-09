import React from 'react'
import Layout from '../../components/admin/Layout';
import PageHeader from '../../components/admin/sections/PageHeader';
import CustomersTable from '../../components/admin/sections/customers/CustomersTable';

function customers() {
  return (
    <Layout handle="customers">
      <PageHeader title="Customers" hasSearchSort={true} />
      <CustomersTable />
    </Layout>
  )
}

export default customers
