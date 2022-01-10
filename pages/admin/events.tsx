import Layout from '../../components/backend/Layout';
import PageHeader from '../../components/backend/sections/PageHeader';
import EventsTable from '../../components/backend/sections/events/EventsTable';
import Pagination from '../../components/backend/snippets/Pagination';

export default function Events() {
  return (
    <Layout handle="events">
      <PageHeader title="Events" hasSearchSort={true}/>
      <EventsTable />
      <Pagination />
    </Layout>
  )
}
