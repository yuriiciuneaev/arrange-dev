import React, { forwardRef, useImperativeHandle } from 'react'
import tw from "tailwind-styled-components"
import { gql, useQuery } from '@apollo/client'

const AllEventsQuery = gql`
  query allEventsQuery($offset: Int, $limit: Int){
    events(offset: $offset, limit: $limit) {
      node {
        totalCount
        offset
        limit
      }
      edges {
        id
        name
        spotCnt
        startDate
        teacher {
          name
        }
        createdAt
        updatedAt
      }
    }
  }
`

type TrProps = {
  $index: number;
};

interface PageInfo {
  getTotalCount: (newTotalCount) => void;
  offset: number;
  limit: number;
}

function EventsTable(props: PageInfo, ref) {
  useImperativeHandle(ref, () => ({
    setFromOutside (msg) {
      // alert("ok!!")
    }
  }), [])

  const { data, loading, error, fetchMore } = useQuery(AllEventsQuery, {
    variables: {
      offset: props.offset,
      limit: props.limit
    },
  })
  
  if (!loading) {
    props.getTotalCount(data.events.node.totalCount)
  }

  if (error) return <p>Oops! Something went wrong {error}</p>;

  return (
    <Wrapper>
      <Margins>
        <Paddings>
          <Borders>
            <Table>
              <THead>
                <tr>
                  <TH scope="col">Name</TH>
                  <TH scope="col">TEACHER</TH>
                  <TH scope="col">SPOTS</TH>
                  <TH scope="col">START DATE</TH>
                </tr>
              </THead>
              <tbody>
              {loading ? (
                <LoadingText>Loading...</LoadingText>
              ) : (
                data.events.edges.map((event, eventIdx) => (
                  <TR key={eventIdx} $index={eventIdx}>
                    <NameTD>{event.name}</NameTD>
                    <GrayTD>
                      {event.teacher && event.teacher.name}
                    </GrayTD>
                    <GrayTD>
                      {event.spotCnt}
                      <span> available spots</span>
                    </GrayTD>
                    <GrayTD>
                      {event.startDate}
                    </GrayTD>
                  </TR>
                ))
              )}
              </tbody>
            </Table>
          </Borders>
        </Paddings>
      </Margins>
    </Wrapper>
  )
}

export default forwardRef(EventsTable)

const Wrapper = tw.div`
  flex flex-col
`

const Margins = tw.div`
  -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8
`

const Paddings = tw.div`
  py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8
`

const Borders = tw.div`
  shadow overflow-hidden border-b border-gray-200 sm:rounded-lg
`

const Table = tw.table`
  min-w-full divide-y divide-gray-200
`

const THead = tw.thead`
  bg-gray-50
`

const TH = tw.th`
  px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider
`

const LoadingText = tw.p`
  px-6 py-3 text-left text-xs text-gray-500
`

const TR = tw.tr<TrProps>`
  ${(p) => (p.$index % 2 === 0 ? "bg-white" : "bg-gray-50")}
`

const TD = tw.td`
  px-6 py-4 whitespace-nowrap text-sm
`

const NameTD = tw(TD)`
  font-medium text-gray-900
`

const GrayTD = tw(TD)`
  text-gray-500
`
