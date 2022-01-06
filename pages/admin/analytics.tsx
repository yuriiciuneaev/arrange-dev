import React from 'react'
import Layout from '../../components/admin/Layout';
import PageHeader from '../../components/admin/sections/PageHeader';

function analytics() {
  return (
    <Layout handle="analytics">
      <PageHeader title="Last 30 days" hasSearchSort={false} />
      <p>analytics</p>
    </Layout>
  )
}

export default analytics
