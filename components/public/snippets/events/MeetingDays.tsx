import React from 'react'
import Link from 'next/link'
import tw from "tailwind-styled-components"

interface Meeting {
  id: number;
  meeting_day: string;
  time: string;
  teacher: string;
  title: string;
  description: string;
}

function MeetingDays({
  title,
  meetings
}: {
  title: string;
  meetings: Array<Meeting>
}) {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          4 meeting days for {title}
        </Title>
        <SubTitle>
          <span>10. januar - 31. januar, 2022</span>
        </SubTitle>
      </TitleWrapper>
      {/* Feeds */}
      <ContentWrapper>
        <Items role="list">
          {meetings.map((activityItem, activityItemIdx) => (
            <li key={activityItem.id}>
              <ItemWrapper>
                {activityItemIdx !== meetings.length - 1 ? (
                  <VerticalLine aria-hidden="true" />
                ) : null}
                <Item>
                  <ItemIdxWrapper>
                    <ItemIdx>
                      {++activityItemIdx}
                    </ItemIdx>
                  </ItemIdxWrapper>
                  <ItemDetails>
                    <ItemDayTime>
                      {activityItem.meeting_day} {activityItem.time}
                    </ItemDayTime>
                    <ItemTeacher>
                      {activityItem.teacher}
                    </ItemTeacher>                            
                    <ItemTitle>
                      <p>{activityItem.title}</p>
                    </ItemTitle>
                    <ItemDescription>
                      <p>{activityItem.description}</p>
                    </ItemDescription>
                    <Link href="#" passHref>
                      <ItemLink>See more</ItemLink>
                    </Link>
                  </ItemDetails>
                </Item>
              </ItemWrapper>
            </li>
          ))}
        </Items>
      </ContentWrapper>
    </Wrapper>
  )
}

export default MeetingDays

const Wrapper = tw.div`
  lg:col-span-2 lg:pr-8
`

const TitleWrapper = tw.div`
  flex flex-col font-inter pt-10 pb-8
`

const Title = tw.h1`
  text-xl font-semibold tracking-tight text-black sm:text-xl
`

const SubTitle = tw.div`
  text-[#999999] text-base
`

const ContentWrapper = tw.div`
  flow-root
`

const Items = tw.ul`
  -mb-8
`

const ItemWrapper = tw.div`
  relative pb-9
`

const VerticalLine = tw.span`
  absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200
`

const Item = tw.div`
  relative flex items-start space-x-3
`

const ItemIdxWrapper = tw.div`
  relative
`

const ItemIdx = tw.div`
  flex justify-center items-center h-10 w-10 rounded-full bg-black text-xs text-white
`

const ItemDetails = tw.div`
  min-w-0 flex-1
`

const ItemDayTime = tw.div`
  font-semibold text-sm
`

const ItemTeacher = tw.p`
  text-sm text-gray-500
`

const ItemTitle = tw.div`
  mt-5 text-sm font-semibold text-black
`

const ItemDescription = tw.div`
  mt-5 mb-2 text-sm text-gray-700
`

const ItemLink = tw.a`
  underline font-bold text-sm
`
