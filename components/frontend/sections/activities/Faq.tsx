import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import tw from "tailwind-styled-components"

interface Faq {
  question: string;
  answer: string;
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Faq({
  faqs
}: {
  faqs: Array<Faq>;
}) {
  return (
    <Wrapper>
      <Title>Frequently asked questions</Title>
      <Items>
        {faqs.map((faq) => (
          <Disclosure as="div" key={faq.question} className="pt-6">
            {({ open }) => (
              <>
                <Item>
                  <Disclosure.Button>
                    <FaqButton>
                      <FaqQuestion>{faq.question}</FaqQuestion>
                      <DownIconWrapper>
                        <ChevronDownIcon
                          className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                          aria-hidden="true"
                        />
                      </DownIconWrapper>
                    </FaqButton>
                  </Disclosure.Button>
                </Item>
                <Disclosure.Panel as="dd">
                  <FaqPanel>
                    <FaqAnswer>{faq.answer}</FaqAnswer>
                  </FaqPanel>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </Items>
    </Wrapper>
  )
}

export default Faq

const Wrapper = tw.div`
  max-w-2xl mx-auto py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8
`

const Title = tw.h2`
  text-xl font-semibold text-black
`

const Items = tw.dl`
  mt-2 space-y-1 pb-10 border-b border-gray-200
`

const Item = tw.dt`
  text-sm
`

const FaqButton = tw.div`
  text-left w-full flex items-center text-gray-500
`

const FaqQuestion = tw.span`
  font-medium text-black
`

const DownIconWrapper = tw.span`
  ml-6 h-7 flex items-center
`

const FaqPanel = tw.div`
  mt-2 pr-12
`

const FaqAnswer = tw.p`
  text-sm text-gray-500
`
