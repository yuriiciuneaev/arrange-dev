import React from 'react'
import tw from "tailwind-styled-components"

function EventDescription({
  description
}: {
  description: string;
}) {
  return (
    <Wrapper>
      <Text>{description}</Text>
    </Wrapper>
  )
}

export default EventDescription

const Wrapper = tw.div`
  py-10  lg:col-start-1 lg:col-span-2 border-b border-gray-200 lg:pr-0 lg:mr-20
`
const Text = tw.p`
  font-inter text-sm font-medium text-black
`
