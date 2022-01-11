import React from 'react'
import tw from "tailwind-styled-components"
import { gql, useQuery } from '@apollo/client'
// import { events } from '../../../../data/backend/events'

const AllEventsQuery = gql`
  query {
    events {
      id
      name
      spotCnt
      startDate
    }
  }
`

type TrProps = {
  $index: number;
};

function EventsTable() {

  const { data, loading, error } = useQuery(AllEventsQuery)
  if (error) return <p>Oops! SOmething went wrong {error}</p>;
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
                data.events.map((event, eventIdx) => (
                  <TR key={eventIdx} $index={eventIdx}>
                    <NameTD>{event.name}</NameTD>
                    <GrayTD>
                      {/* {event.teacher.name} */}
                      -
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

export default EventsTable

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
