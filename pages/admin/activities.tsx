import Layout from '../../components/admin/Layout';
import PageHeader from '../../components/admin/sections/PageHeader';
import ActivitiesTable from '../../components/admin/sections/activities/ActivitiesTable';
import Pagination from '../../components/admin/snippets/Pagination';

export default function Activities() {
  return (
    <Layout handle="activities">
      <PageHeader title="Activities" hasSearchSort={true}/>
      <ActivitiesTable />
      <Pagination />
    </Layout>
  )
}
