import React from 'react'
import Image from 'next/image'
import tw from "tailwind-styled-components"

const course = 
  {
    id: 1,
    name: 'The Basic Course in Copenhagen at Smertefri Fødsel™',
    href: '#',
    price: '2.395 kr',
    tax_price: '598.75 kr',
    duration: '10. januar - 31. januar',
    imageSrc: '/images/01_01.png',
    imageAlt: '',
  }

function BookingSummary() {
  return (
    <Section aria-labelledby="summary-heading">
      <Wrapper>
        <TitleWrapper id="summary-heading">              
          <Image
            src="/images/logo_course_01.png"
            width={28}
            height={28}
          />
          <Title>Smertefri Fødsel™</Title>
        </TitleWrapper>
        <SubTitle className=" ">Pay Smertefri Fødsel™</SubTitle>
        <Price>{course.price}</Price>
        <TaxInfo>including {course.tax_price} in tax</TaxInfo>
        <Booking>
          <ImageWrapper>
            <ActivityImage src={course.imageSrc} alt={course.imageAlt} layout="fill" />
          </ImageWrapper>
          <ActivityTitleWrapper>
            <ActivityTitle>{course.name}<ActivityDuration>({course.duration})</ActivityDuration></ActivityTitle>                
          </ActivityTitleWrapper>
          <ActivityPriceWrapper>
            <ActivityPrice>{course.price}</ActivityPrice>
            <ActivityTaxInfo>including {course.tax_price} in tax</ActivityTaxInfo>
          </ActivityPriceWrapper>
        </Booking>
        <Creator>
          Powered by <CreatorName>Arrange</CreatorName>
        </Creator>
      </Wrapper>
    </Section>
  )
}

export default BookingSummary

const Section = tw.section`
  bg-gray-50 pt-16 pb-10 px-4 sm:px-6 lg:px-0 lg:pb-16 lg:bg-transparent lg:row-start-1 lg:col-start-2
`

const Wrapper = tw.div`
  max-w-lg m-auto lg:m-0 lg:mr-auto lg:max-w-33
`

const TitleWrapper = tw.h4`
  text-sm font-medium text-gray-900 flex flex-row items-center lg:pt-14
`

const Title = tw.span`
  pl-3
`

const SubTitle = tw.p`
  mt-8 font-medium text-base text-[#777777]
`

const Price = tw.p`
  text-4xl font-semibold
`

const TaxInfo = tw.p`
  text-xs font-normal text-black
`

const Booking = tw.div`
  flex items-start py-8 space-x-4
`

const ImageWrapper = tw.div`
  flex-none relative w-12 h-12
`

const ActivityImage = tw(Image)`
  rounded-md object-center object-cover
`

const ActivityTitleWrapper = tw.div`
  flex-auto space-y-1 text-gray-500
`

const ActivityTitle = tw.h3`
  text-sm text-black
`

const ActivityDuration = tw.span`
  pl-2 text-xs text-gray-500
`

const ActivityPriceWrapper = tw.div`
  flex-none text-sm font-semibold
`

const ActivityPrice = tw.p`
  text-right
`

const ActivityTaxInfo = tw.p`
  text-xs font-normal text-black
`

const Creator = tw.p`
  mt-8 text-xs text-gray-500 font-normal
`

const CreatorName = tw.span`
  font-bold text-[#5b5b5b]
`
