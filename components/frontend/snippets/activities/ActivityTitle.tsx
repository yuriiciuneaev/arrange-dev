import React from 'react'
import Image from 'next/image'
import tw from "tailwind-styled-components"

function ActivityTitle({
  title
}: {
  title: string;
}) {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>{title}</Title>
        <SubTitle>
          <span>4 meeting days</span>
          <Middot>&middot;</Middot>
          <span>12 attendes pr course</span>
        </SubTitle>
      </TitleWrapper>
      <LogoWrapper>
        <Image
          src="/images/logo_course_01.png"
          width={50}
          height={50}
        />
      </LogoWrapper>
    </Wrapper>
  )
}

export default ActivityTitle

const Wrapper = tw.div`
  lg:col-span-2 flex border-b border-gray-200 lg:mr-20 pb-6
`

const TitleWrapper = tw.div`
  flex flex-col font-inter
`

const Title = tw.h1`
  text-xl font-semibold tracking-tight text-black sm:text-xl
`

const SubTitle = tw.div`
  text-[#222222] text-base font-medium
`

const Middot = tw.span`
  px-2
`

const LogoWrapper = tw.div`
  ml-auto
`
