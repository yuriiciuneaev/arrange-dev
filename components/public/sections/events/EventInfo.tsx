import React from 'react'
import tw from "tailwind-styled-components"

import EventTitle from '../../snippets/events/EventTitle'
import BookingDetails from '../../snippets/events/BookingDetails'
import EventDescription from '../../snippets/events/EventDescription'
import MeetingDays from '../../snippets/events/MeetingDays'

function EventInfo({
  event
}: {
  event: any;
}) {
  return (
    <Container>
      <EventTitle title={event.name}/>
      <BookingDetails price={event.price} reviews={event.reviews} meetings={event.meetings}/>
      <EventDescription description={event.description}/>
      <MeetingDays title={event.name} meetings={event.meetings}/>
    </Container>
  )
}

export default EventInfo

const Container = tw.div`
  max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:max-w-7xl lg:pt-12 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8
`
