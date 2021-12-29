import React from 'react'
import tw from "tailwind-styled-components"

import ActivityTitle from '../../snippets/activities/ActivityTitle'
import BookingDetails from '../../snippets/activities/BookingDetails'
import ActivityDescription from '../../snippets/activities/ActivityDescription'
import MeetingDays from '../../snippets/activities/MeetingDays'

function ActivityInfo({
  activity
}: {
  activity: any;
}) {
  return (
    <Container>
      <ActivityTitle title={activity.name}/>
      <BookingDetails price={activity.price} reviews={activity.reviews} meetings={activity.meetings}/>
      <ActivityDescription description={activity.description}/>
      <MeetingDays title={activity.name} meetings={activity.meetings}/>
    </Container>
  )
}

export default ActivityInfo

const Container = tw.div`
  max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:max-w-7xl lg:pt-12 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8
`
