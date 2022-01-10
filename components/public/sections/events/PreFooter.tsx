import React from 'react'
import Link from 'next/link'
import tw from "tailwind-styled-components"

function PreFooter() {
  return (
    <Wrapper>
      <Title>Things you need to know</Title>
      <ContentWrapper>
        <div>
          <ItemTitle>Cancellation policy</ItemTitle>
          <ItemText>
            Din tilmelding er bindende, så snart du har meldt dig til. Ved afmelding mere end 30 dage før starttidspunktet, får du refunderet 100 % af det fulde beløb. Ved mindre end 30 dage, men mere end 14 dage før starttidspunktet, får du refunderet 50 % af det fulde beløb.
          </ItemText>
          <Link href="#" passHref>
            <LinkText>See more</LinkText>
          </Link>
        </div>
        <div>
          <ItemTitle>Covid-19</ItemTitle>
          <ItemText>
            Hvis myndighedernes retningslinjer gør fysisk fremmøde utilrådeligt, så gennemføres undervisningen online på det planlagte tidspunkt. Der gives ikke refusion, hvis undervisning gennemføres online.
          </ItemText>
          <Link href="#" passHref>
            <LinkText>See more</LinkText>
          </Link>
        </div>
      </ContentWrapper>
    </Wrapper>
  )
}

export default PreFooter

const Wrapper = tw.div`
  max-w-2xl mx-auto pb-12 px-4 sm:pb-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-16
`

const Title = tw.h2`
  text-xl font-semibold text-black
`

const ContentWrapper = tw.div`
  mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm
`

const ItemTitle = tw.h4`
  font-bold
`

const ItemText = tw.p`
  my-2 text-gray-500
`

const LinkText = tw.a`
  underline font-bold text-sm
`
