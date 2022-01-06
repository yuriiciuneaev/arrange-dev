import Image from 'next/image'
import tw from "tailwind-styled-components"

import BookingSummary from '../../components/frontend/sections/checkout/BookingSummary'
import RegConfirmationForm from '../../components/frontend/sections/checkout/RegConfirmationForm'

export default function Thankyou() {
  return (
    <Container>
      <ImageWrapper>
        <TopImage
          src="/images/bg_thankyou.jpeg"
          layout="fill"
          objectFit='contain'
        />
      </ImageWrapper>

      <LeftBgScreen aria-hidden="true" />
      <RightBgScreen aria-hidden="true" />
      
      <Sections>
        <h1 className="sr-only">Booking information</h1>
        <BookingSummary />
        <RegConfirmationForm />
      </Sections>
    </Container>
  )
}

const Container = tw.div`
  relative font-inter
`

const ImageWrapper = tw.div`
  absolute w-3/6 min-h-[100vh] z-0 lg:z-10
`

const TopImage = tw(Image)`
  object-top gradient-mask-img-laptop xl:gradient-mask-img-desktop
`

const LeftBgScreen = tw.div`
  hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white
`

const RightBgScreen = tw.div`
  hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-gray-50
`

const Sections = tw.div`
  relative grid grid-cols-1 gap-x-16 mx-auto lg:px-8 lg:pt-14 lg:grid-cols-2 xl:gap-x-40
`
