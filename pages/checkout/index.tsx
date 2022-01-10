import tw from "tailwind-styled-components"

import CustomerDetailsForm from '../../components/public/sections/checkout/CustomerDetailsForm'
import BookingSummary from '../../components/public/sections/checkout/BookingSummary'

export default function Checkout() {
  return (
    <Container>
      {/* Background color split screen for large screens */}
      <LeftBgScreen aria-hidden="true" />
      <RightBgScreen aria-hidden="true" />

      <Sections className="">
        <h1 className="sr-only">Booking information</h1>
        <BookingSummary />
        <CustomerDetailsForm />
      </Sections>
    </Container>
  )
}

const Container = tw.div`
  bg-white font-inter
`

const LeftBgScreen = tw.div`
  hidden lg:block fixed top-0 left-0 w-1/2 h-full bg-white
`

const RightBgScreen = tw.div`
  hidden lg:block fixed top-0 right-0 w-1/2 h-full bg-gray-50
`

const Sections = tw.div`
  relative grid grid-cols-1 gap-x-16 max-w-7xl mx-auto lg:px-8 lg:pt-14 lg:grid-cols-2 xl:gap-x-40
`
