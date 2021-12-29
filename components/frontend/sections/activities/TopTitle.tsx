import React from 'react'
import Link from 'next/link'
import { StarIcon, ArrowLeftIcon } from '@heroicons/react/solid'
import tw from "tailwind-styled-components"

function TopTitle() {
  return (
    <Wrapper>
      <Link href="#" passHref>
        <TitleLink aria-current="page">
          <ALeftIcon
            aria-hidden="true"
          />
          <span>Course in Copenhagen</span>
        </TitleLink>
      </Link>
      <Link href="#" passHref>
        <ReviewLink aria-current="page">
          <div>
            <Star
              key="5"
              aria-hidden="true"
            />
          </div>
          <p>
            <BlackText>4,89</BlackText>
            <span> (3.467 reviews) - Copenhagen, Denmark</span>
          </p>
        </ReviewLink>
      </Link>
    </Wrapper>
  )
}

export default TopTitle

const Wrapper  = tw.div`
  mt-2 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 font-inter
`

const TitleLink = tw.a`
  flex items-center mr-auto text-2xl font-semibold text-black
`

const ReviewLink = tw.a`
  flex items-center ml-auto font-inter text-md font-semibold text-gray-600 mt-5 lg:mt-0
`

const ALeftIcon = tw(ArrowLeftIcon)`
  text-black h-4 w-4 2xl:-ml-7 mt-0 mr-3
`

const BlackText = tw.span`
  text-black
`

const Star = tw(StarIcon)`
  text-green-400 h-4 w-4 mt-1 mr-1
`
