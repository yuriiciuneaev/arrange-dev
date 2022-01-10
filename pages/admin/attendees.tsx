import React from 'react'
import Layout from '../../components/backend/Layout';
import PageHeader from '../../components/backend/sections/PageHeader';
import AttendeesTable from '../../components/backend/sections/attendees/AttendeesTable';

function attendees() {
  return (
    <Layout handle="attendees">
      <PageHeader title="Attendees" hasSearchSort={true} />
      <AttendeesTable />
    </Layout>
  )
}

export default attendees
