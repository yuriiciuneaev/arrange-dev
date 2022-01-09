import tw from "tailwind-styled-components"

import Layout         from '../../components/frontend/Layout';
import PageHeader       from '../../components/frontend/sections/activities/PageHeader'
import ActivityImage  from '../../components/frontend/sections/activities/ActivityImage'
import ActivityInfo   from '../../components/frontend/sections/activities/ActivityInfo'
import Reviews        from '../../components/frontend/sections/activities/Reviews'
import Faq            from '../../components/frontend/sections/activities/Faq'
import PreFooter      from '../../components/frontend/sections/activities/PreFooter'

import { activity } from '../../data/frontend/activity'
import { faqs } from '../../data/frontend/faqs'

export default function Activity() {
  return (
    <Layout>
      <Container>
        <PageHeader />
        <ActivityImage images={activity.images} />
        <ActivityInfo activity={activity}/>
        <Reviews reviews={activity.reviews}/>
        <Faq faqs={faqs}/>
        <PreFooter />
      </Container>
    </Layout>
  )
}

const Container = tw.div`
  pt-10 sm:pt-16 font-inter
`
