import React, { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import { Transition, Listbox } from '@headlessui/react'
import { StarIcon, CheckIcon, ChevronDownIcon } from '@heroicons/react/solid'
import tw from "tailwind-styled-components"
import Link from 'next/link'

interface Meeting {
  id: number;
  meeting_day: string;
  time: string;
  teacher: string;
  title: string;
  description: string;
}

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

const durations = [
  { id: 1, name: 'Start: 10. januar  -  End: 31. januar', online: true },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function BookingDetails({
  price,
  reviews,
  meetings,
}: {
  price: string;
  reviews: Reviews;
  meetings: Array<Meeting>;
}) {
  const router = useRouter()
  const [selected, setSelected] = useState(durations[0])

  return (
    <Wrapper>
      <Borders>
        <h2 className="sr-only">Activity information</h2>
        <PriceWrapper>
          <Price>{price}</Price>

          {/* Reviews */}
          <ReviewDetails>
            <div>
              <Star key="5" aria-hidden="true"/>
            </div>
            <ReviewAverage>{reviews.average}</ReviewAverage>
            <Link href={reviews.href} passHref>
              <ReviewLink>
                ({reviews.totalCount} reviews)
              </ReviewLink>
            </Link>
          </ReviewDetails>
        </PriceWrapper>
        
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              {/* <Listbox.Label className="block text-sm font-medium text-gray-700">Assigned to</Listbox.Label> */}
              <ListboxWrapper>
                <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-4 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <div className="flex items-center">
                    <span
                      aria-label={selected.online ? 'Online' : 'Offline'}
                      className={classNames(
                        selected.online ? 'bg-green-500' : 'bg-gray-200',
                        'flex-shrink-0 inline-block h-4 w-4 rounded-full'
                      )}
                    />
                    <span className="ml-3 block truncate">{selected.name}</span>
                  </div>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDownIcon className="h-8 w-8 text-[#666666]" aria-hidden="true" />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {durations.map((person) => (
                      <Listbox.Option
                        key={person.id}
                        className={({ active }) =>
                          classNames(
                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                            'cursor-default select-none relative py-2 pl-3 pr-9'
                          )
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center">
                              <span
                                className={classNames(
                                  person.online ? 'bg-green-400' : 'bg-gray-200',
                                  'flex-shrink-0 inline-block h-2 w-2 rounded-full'
                                )}
                                aria-hidden="true"
                              />
                              <span
                                className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                              >
                                {person.name}
                                <span className="sr-only"> is {person.online ? 'online' : 'offline'}</span>
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </ListboxWrapper>
            </>
          )}
        </Listbox>
        
        <div className="flex flex-col">
          <div className=" overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden border-0">
                <table className="min-w-full">
                  <thead className="bg-white">
                    <tr>
                      <th
                        scope="col"
                        className="pt-4 pb-1 font-bold text-left text-tiny text-black uppercase tracking-wider"
                      >
                        Meeting Days
                      </th>
                      <th
                        scope="col"
                        className="pt-4 pb-1 font-bold text-left text-tiny text-black uppercase tracking-wider"
                      >
                        Time
                      </th>
                      <th
                        scope="col"
                        className="pt-4 pb-1 font-bold text-left text-tiny text-black uppercase tracking-wider"
                      >
                        Teacher
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {meetings.map((meeting, meetingIndex) => (
                      <tr className='bg-white border-0'>
                        <td className="py-2 whitespace-nowrap text-sm text-black">{meeting.meeting_day}</td>
                        <td className="py-2 whitespace-nowrap text-sm text-black">{meeting.time}</td>
                        <td className="py-2 whitespace-nowrap text-sm text-black">{meeting.teacher}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <form className="mt-3.5">
          <button
            // type="submit"
            type="button"
            className="mt-3.5 w-full bg-black border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={() => router.push('/checkout')}
          >
            Book a spot
          </button>
        </form>
        <p className="text-center text-xs p-5">
          By making this by making this purchase you agree to our <a href="#" className="text-blue-400 underline">terms</a> and <a href="#" className="text-blue-400 underline">privacy</a>
        </p>
      </Borders>
    </Wrapper>
  )
}

export default BookingDetails

const Wrapper = tw.div`
  mt-4 lg:mt-0 lg:row-span-3
`

const Borders = tw.div`
  px-8 pt-8 pb-2 border border-[#eeeeee] border-solid rounded-xl shadow-[0_0_15px_rgba(119,119,119,0.25)]
`

const PriceWrapper = tw.div`
  flex flex-row items-center pb-4
`

const Price = tw.p`
  font-inter font-bold text-xl text-black
`

const ReviewDetails = tw.div`
  ml-auto flex items-center
`

const Star = tw(StarIcon)`
  text-green-400 h-4 w-4 mt-0.5
`

const ReviewAverage = tw.p`
  not-sr-only font-inter text-sm font-semibold 
`

const ReviewLink = tw.a`
  ml-3 font-inter font-semibold text-xs text-gray-500
`

const ListboxWrapper = tw.div`
  mt-1 relative
`
