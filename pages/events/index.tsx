import tw from "tailwind-styled-components"

import Layout         from '../../components/public/Layout';
import PageHeader       from '../../components/public/sections/events/PageHeader'
import EventImage  from '../../components/public/sections/events/EventImage'
import EventInfo   from '../../components/public/sections/events/EventInfo'
import Reviews        from '../../components/public/sections/events/Reviews'
import Faq            from '../../components/public/sections/events/Faq'
import PreFooter      from '../../components/public/sections/events/PreFooter'

import { event } from '../../data/public/event'
import { faqs } from '../../data/public/faqs'

export default function Event() {
  return (
    <Layout>
      <Container>
        <PageHeader />
        <EventImage images={event.images} />
        <EventInfo event={event}/>
        <Reviews reviews={event.reviews}/>
        <Faq faqs={faqs}/>
        <PreFooter />
      </Container>
    </Layout>
  )
}

const Container = tw.div`
  pt-10 sm:pt-16 font-inter
`
