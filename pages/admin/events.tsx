import Layout from '../../components/backend/Layout';
import PageHeader from '../../components/backend/sections/PageHeader';
import EventsTable from '../../components/backend/sections/events/EventsTable';
import Pagination from '../../components/backend/snippets/Pagination';
import { useRef, useState } from 'react';

export default function Events() {
  const [totalCount, setTotalCount] = useState(0);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(50);

  const eref = useRef<any>()
  const handleClick = e => {
    eref.current.setFromOutside('Call from Parent')
  }

  return (
    <Layout handle="events">
      <PageHeader title="Events" hasSearchSort={true} />
      <EventsTable
        getTotalCount={(newTotalCount) => setTotalCount(newTotalCount)}
        offset={offset}
        limit={limit}
        ref={eref}
      />
      <Pagination totalCount={totalCount} offset={offset} limit={limit} updateOffset={(newOffset) => setOffset(newOffset)}/>
      <button className="sr-only" onClick={handleClick}>Click ~ </button>
    </Layout>
  )
}
