import React from 'react'
import tw from "tailwind-styled-components"
import { gql, useQuery } from '@apollo/client'
// import { activities } from '../../../../data/admin/activities'

const AllActivitiesQuery = gql`
  query {
    activities {
      id
      name
      description
      # startDate
    }
  }
`

type TrProps = {
  $index: number;
};

function ActivitiesTable() {

  const { data, loading, error } = useQuery(AllActivitiesQuery)
  

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
                {data.activities.map((activity, activityIdx) => (
                  <TR key={activityIdx} $index={activityIdx}>
                    <NameTD>{activity.name}</NameTD>
                    <GrayTD>
                      {/* {activity.teacher.name} */}
                      -
                    </GrayTD>
                    <GrayTD>
                      {activity.spotCnt}
                      <span> available spots</span>
                    </GrayTD>
                    <GrayTD>
                      {activity.startDate}
                    </GrayTD>
                  </TR>
                ))}
              </tbody>
            </Table>
          </Borders>
        </Paddings>
      </Margins>
    </Wrapper>
  )
}

export default ActivitiesTable

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
