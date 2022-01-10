import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import tw from "tailwind-styled-components"

interface Featured {
  id: number;
  title: string;
  rating: number;
  content: string;
  author: string;
  avatarSrc: string;
  date: string;
}

interface Reviews {
  href: string;
  average: string;
  totalCount: number;
  featured: Array<Featured>
}

function Reviews({
  reviews
}: {
  reviews: Reviews;
}) {
  return (
    <Wrapper>
      <Borders aria-labelledby="reviews-heading">
        <TitleWrapper>
          <div>
            <Star
              key="5"
              aria-hidden="true"
            />
          </div>
          <Title id="reviews-heading">
            <BlackText>4,89</BlackText> (3.467 reviews)
          </Title>
        </TitleWrapper>
        <ContentWrapper>
          {reviews.featured.map((review) => (
            <Review key={review.id}>
              <ReviewDetails>
                <ReviewTitle>{review.title}</ReviewTitle>
                <ReviewRating>{review.rating} out of 5 stars</ReviewRating>
                <ReviewContent
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
              </ReviewDetails>
              <AuthorInfo>
                <AuthorPhoto src={review.avatarSrc} alt={`${review.author}.`} width={48} height={48}/>
                <div>
                  <ReviewAuthor>{review.author}</ReviewAuthor>
                  <ReviewDate>{review.date}</ReviewDate>
                </div>
              </AuthorInfo>
              <ReviewLink>
                <Link href="#" passHref>
                  <LinkText>See more</LinkText>
                </Link>
              </ReviewLink>
            </Review>
          ))}
        </ContentWrapper>
      </Borders>
    </Wrapper>
  )
}

export default Reviews

const Wrapper  = tw.div`
  max-w-2xl mx-auto pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8
`

const Borders = tw.div`
  border-t border-b border-gray-200 py-10
`

const TitleWrapper = tw.div`
  flex items-center ml-auto font-inter text-md font-semibold text-black mt-5 mb-8 lg:mt-0
`

const Star = tw(StarIcon)`
  text-green-400 h-5 w-5
`

const Title = tw.h2`
  not-sr-only pl-2 font-semibold text-xl text-gray-500
`

const BlackText = tw.span`
  text-black
`

const ContentWrapper = tw.span`
  grid grid-cols-1 lg:grid-cols-2 gap-10
`

const Review = tw.div`
  flex flex-col
`

const ReviewDetails = tw.div`
  order-2 sm:mt-0
`

const ReviewTitle = tw.h3`
  sr-only text-sm font-medium text-gray-900 mt-4
`

const ReviewRating = tw.p`
  sr-only
`

const ReviewContent = tw.div`
  mt-3 mb-1 space-y-6 font-medium text-sm text-[#717171]
`

const AuthorInfo = tw.div`
  order-1 flex flex-row items-center gap-3
`

const AuthorPhoto = tw(Image)`
  rounded-full
`

const ReviewAuthor = tw.p`
  text-sm font-bold text-black
`

const ReviewDate = tw.p`
  text-sm font-normal text-gray-400
`

const ReviewLink = tw.div`
  order-3
` 

const LinkText = tw.a`
  underline font-bold text-sm
`
