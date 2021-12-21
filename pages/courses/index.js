import { Fragment, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { Dialog, Popover, RadioGroup, Tab, Transition, Listbox, Disclosure  } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon, XIcon } from '@heroicons/react/outline'
import { StarIcon, ArrowLeftIcon, CheckIcon, ChevronDownIcon, ChatAltIcon, TagIcon, UserCircleIcon } from '@heroicons/react/solid'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP']
const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        { name: 'Sleep', href: '#' },
        { name: 'Swimwear', href: '#' },
        { name: 'Underwear', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Basic Tees', href: '#' },
        { name: 'Artwork Tees', href: '#' },
        { name: 'Bottoms', href: '#' },
        { name: 'Underwear', href: '#' },
        { name: 'Accessories', href: '#' },
      ],
      brands: [
        { name: 'Full Nelson', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Significant Other', href: '#' },
      ],
    },
    {
      name: 'Men',
      featured: [
        { name: 'Casual', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Outdoor', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Artwork Tees', href: '#' },
        { name: 'Pants', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Basic Tees', href: '#' },
      ],
      brands: [
        { name: 'Significant Other', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Full Nelson', href: '#' },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}
const product = {
  name: 'The Basic Course in Copenhagen at Smertefri Fødsel™',
  price: '2.395 kr',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: '/courses/01_01.png',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    }
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'Et grundkursus hos Smertefri Fødsel™ er til dig, der trin for trin vil træne dig op til en aktiv fødsel, hvor dit eget koncentrerede fødselsarbejde er i fokus i stedet for smerte og panik. Fokus ligger på handlingsanvisende og håndgribelige fødeteknikker, en unik viden indsamlet fra mere end 40.000 kursister siden Smertefri Fødsels startede i 2012, som, du ikke kan læse dig til i bøgerne eller opnå indsigt i noget andet sted. Resultatet er, at du kan opnå en fødsel, hvor du er med til at styre dit smertesignal i stedet for, at det løber afsted med dig.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = {
  href: '#',
  average: '4,89',
  totalCount: 117,
  featured: [
    {
      id: 1,
      title: 'This is the best white t-shirt out there',
      rating: 5,
      content: `
        <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
      `,
      author: 'Mark Edwards',
      avatarSrc:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      date: 'nov 2021',
    },
    {
      id: 2,
      title: 'Adds the perfect variety to my wardrobe',
      rating: 4,
      content: `
        <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
      `,
      author: 'Blake Reid',
      avatarSrc:
        'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
      date: 'nov 2021',
    },
    {
      id: 3,
      title: 'All good things come in 6-Packs',
      rating: 5,
      content: `
        <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
      `,
      author: 'Ben Russel',
      avatarSrc:
        'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      date: 'nov 2021',
    },
  ],
}
const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
]

const people = [
  { id: 1, name: 'Start: 10. januar  -  End: 31. januar', online: true },
]

const meetings = [
  {
    meeting_day: '10. Jan, 2022',
    time: '12:00 - 14:00',
    teacher: 'Anja Bay',
    title: 'Modul 1: 3 FIKSPUNKTER, LABORO & SMERTENS PYSKOLOGI',
    description: 'Laboro er blevet kaldt naturens svar på anæstesi til både ordinære, storm- & koblede veer. Kombinationsafspænding leder op til dine tre fikspunkter, der flytter både din smertetærskel & udholdenhed markant...',
  },
  {
    meeting_day: '17. Jan, 2022',
    time: '12:00 - 14:00',
    teacher: 'Anja Bay',
    title: 'Modul 2: PRESSETEKNIK, FOREBYG BRISTNINGER & SMERTENS PSYKOLOGI',
    description: `Pres og giv slip-teknikken
    Bækkenet er ikke en statisk størrelse, og det samme gør sig gældende for bækkenbunden. Jo mere du ved og har øvet at slippe muskulært samt mentaltrænet til pressefasen, desto mere vinder du troen på...`,
  },
  {
    meeting_day: '24. Jan, 2022',
    time: '12:00 - 14:00',
    teacher: 'Anja Bay',
    title: 'Modul 3: DIN, PARTNEREN & JORDEMODERENS ROLLE',
    description: 'På modul 3 kommer I sammen, alle andre moduler er kun for dig, der skal føde. Og nu bliver det interessant. For der kommer et punkt i fødslen, hvor h*n skal tage over og være klædt på til at finde fødelingoet frem - cirka halvvejs. Derfor skal h*n (eller de) med. Alle øvrige hjælpere er også velkomne!...',
  },
  {
    meeting_day: '31. Jan, 2022',
    time: '12:00 - 14:00',
    teacher: 'Anja Bay',
    title: 'Modul 4: PANIKHÅNDTERING & BOBLER',
    description: `Ønskeliste
    Ønskelisten er det vigtigste teoretiske og kommunikerende redskab på kurset. Uden viden og indsigt mister du indflydelse og andre kommer til at tage beslutningerne for dig...`,
  },
]

const faqs = [
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer:
      "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Booking() {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])

  const [selected, setSelected] = useState(people[0])

  const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
      {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
    </GoogleMap>
  ))

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                    Create an account
                  </a>
                </div>
                <div className="flow-root">
                  <a href="/login" className="-m-2 p-2 block font-medium text-gray-900">
                    Sign in
                  </a>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="h-16 flex items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:items-center">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                        alt=""
                      />
                    </a>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Mega menus */}
                    <Popover.Group className="ml-8">
                      <div className="h-full flex justify-center space-x-8">
                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex-1 flex items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 bg-white p-2 rounded-md text-gray-400"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Search */}
                    <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <SearchIcon className="w-6 h-6" aria-hidden="true" />
                    </a>
                  </div>

                  {/* Logo (lg-) */}
                  <a href="#" className="lg:hidden">
                    <span className="sr-only">Workflow</span>
                    <img
                      src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                      alt=""
                      className="h-8 w-auto"
                    />
                  </a>

                  <div className="flex-1 flex items-center justify-end">
                    <div className="flex items-center lg:ml-8">
                      <div className="flex space-x-8">
                        <div className="hidden lg:flex">
                          <a href="#" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Search</span>
                            <SearchIcon className="w-6 h-6" aria-hidden="true" />
                          </a>
                        </div>

                        <div className="flex">
                          <a href="/login" className="-m-2 p-2 text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Account</span>
                            <UserIcon className="w-6 h-6" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-10 sm:pt-16 font-inter">
        <div className="mt-2 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <a href={product.href} aria-current="page" className="flex items-center mr-auto text-2xl font-semibold text-black">
            <ArrowLeftIcon
              className='text-black h-4 w-4 2xl:-ml-7 mt-0'
              aria-hidden="true"
            />
            <span className="font-inter pl-3">Course in Copenhagen</span>
          </a>
          <a href="#" aria-current="page" className="flex items-center ml-auto font-inter text-md font-semibold text-black mt-5 lg:mt-0">
            <div className="flex items-center">
              <StarIcon
                key="5"
                className='text-green-400 h-4 w-4 mt-1'
                aria-hidden="true"
              />
            </div>
            <p className="text-gray-600 pl-1"> <span className="text-black">4,89</span> (3.467 reviews) - Copenhagen, Denmark</p>
          </a>
        </div>

        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-436 lg:rounded-l-md lg:rounded-r-none rounded-md overflow-hidden lg:mr-0.5 mb-1">
              <Image
                src={product.images[0].src}
                alt={product.images[0].alt}
                layout="fill"
                className="w-full h-full object-center object-cover"
              />

            </div>
            <div className="lg:rounded-r-md lg:rounded-l-none rounded-md overflow-hidden lg:ml-0.5 mb-1">
              <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `436px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
          </div>
        </div>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:max-w-7xl lg:pt-12 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 flex border-b border-gray-200 lg:mr-20 pb-6">
            <div className="flex flex-col font-inter">
              <h1 className="text-xl font-semibold tracking-tight text-black sm:text-xl">{product.name}</h1>
              <div className="text-[#222222] text-base font-medium">
                <span>4 meeting days</span>
                <span className="px-2">&middot;</span>
                <span>12 attendes pr course</span>
              </div>
            </div>
            
            <div className="ml-auto">
              <Image
                src="/courses/logo_course_01.png"
                width={50}
                height={50}
                className=""
              />
            </div>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3 ">
            <div className="px-8 pt-8 pb-2 border border-[#eeeeee] border-solid rounded-xl shadow-[0_0_15px_rgba(119,119,119,0.25)]">
              <h2 className="sr-only">Product information</h2>
              <div className="flex flex-row items-center pb-4">
                <p className="font-inter font-bold text-xl text-black">{product.price}</p>

                {/* Reviews */}
                <div className="ml-auto">
                  <h3 className="sr-only">Reviews</h3>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <StarIcon
                        key="5"
                        className='text-green-400 h-4 w-4 mt-1'
                        aria-hidden="true"
                      />
                    </div>
                    <p className="not-sr-only font-inter text-sm font-semibold ">{reviews.average}</p>
                    <a href={reviews.href} className="ml-3 font-inter font-semibold text-xs text-gray-500">
                      ({reviews.totalCount} reviews)
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      {/* <Listbox.Label className="block text-sm font-medium text-gray-700">Assigned to</Listbox.Label> */}
                      <div className="mt-1 relative">
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
                            {people.map((person) => (
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
                      </div>
                    </>
                  )}
                </Listbox>
              </div>
              
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
            </div>
          </div>

          <div className="py-10  lg:col-start-1 lg:col-span-2 border-b border-gray-200 lg:pr-0 lg:mr-20">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="font-inter text-sm font-medium text-black">{product.description}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 lg:pr-8">
            <div className="flex flex-col font-inter pt-10 pb-8">
              <h1 className="text-xl font-semibold tracking-tight text-black sm:text-xl">
                4 meeting days for {product.name}
              </h1>
              <div className="text-[#999999] text-base">
                <span>10. januar - 31. januar, 2022</span>
              </div>
            </div>
            {/* Feeds */}
            <div className="flow-root">              
              <ul role="list" className="-mb-8">
                {meetings.map((activityItem, activityItemIdx) => (
                  <li key={activityItem.id}>
                    <div className="relative pb-9">
                      {activityItemIdx !== meetings.length - 1 ? ( 
                        <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                      ) : null}
                      <div className="relative flex items-start space-x-3">
                          <div className="relative">
                            <div className="flex justify-center items-center h-10 w-10 rounded-full bg-black text-xs text-white">
                              {++activityItemIdx}
                            </div>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-semibold text-sm">
                              {activityItem.meeting_day} {activityItem.time}
                            </div>
                            <p className="text-sm text-gray-500">
                              {activityItem.teacher}
                            </p>                            
                            <div className="mt-5 text-sm font-semibold text-black">
                              <p>{activityItem.title}</p>
                            </div>
                            <div className="mt-5 mb-2 text-sm text-gray-700">
                              <p>{activityItem.description}</p>
                            </div>
                            <a href="#" className="underline font-bold text-sm">See more</a>
                          </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto pt-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
          <section aria-labelledby="reviews-heading" className="border-t border-b border-gray-200 py-10 ">
            <div className="flex items-center ml-auto font-inter text-md font-semibold text-black mt-5 mb-8 lg:mt-0">
              <div className="flex items-center">
                <StarIcon
                  key="5"
                  className='text-green-400 h-5 w-5'
                  aria-hidden="true"
                />
              </div>
              
              <h2 id="reviews-heading" className="not-sr-only pl-2 font-semibold text-xl text-gray-500">
                <span className="text-black">4,89</span> (3.467 reviews)
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {reviews.featured.map((review) => (
                <div key={review.id} className="flex flex-col">
                  <div className="order-2 sm:mt-0">
                    <h3 className="sr-only text-sm font-medium text-gray-900">{review.title}</h3>
                    <p className="sr-only">{review.rating} out of 5 stars</p>

                    <div
                      className="mt-3 mb-1 space-y-6 font-medium text-sm text-[#717171]"
                      dangerouslySetInnerHTML={{ __html: review.content }}
                    />
                  </div>

                  <div className="order-1 flex flex-row items-center">
                    <img src={review.avatarSrc} alt={`${review.author}.`} className="h-12 w-12 rounded-full" />

                    <div className="pl-3">
                      <p className="text-sm font-bold text-black">{review.author}</p>
                      <p className="text-sm font-normal text-gray-400">{review.date}</p>
                    </div>
                  </div>
                  <div className="order-3">
                    <a href="#" className="underline font-bold text-sm">See more</a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
        
        <div className="max-w-2xl mx-auto py-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8  ">
          <div className="">
            <h2 className="text-xl font-semibold text-black">Frequently asked questions</h2>
            <dl className="mt-2 space-y-1 pb-10 border-b border-gray-200">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt className="text-sm">
                        <Disclosure.Button className="text-left w-full flex items-center text-gray-500">
                          <span className="font-medium text-black">{faq.question}</span>
                          <span className="ml-6 h-7 flex items-center">
                            <ChevronDownIcon
                              className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                              aria-hidden="true"
                            />
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-sm text-gray-500">{faq.answer}</p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>

        <div className="max-w-2xl mx-auto pb-12 px-4 sm:pb-12 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-16">
          <h2 className="text-xl font-semibold text-black">Things you need to know</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
            <div>
              <h4 className="font-bold">Cancellation policy</h4>
              <p className="my-2 text-gray-500">Din tilmelding er bindende, så snart du har meldt dig til. Ved afmelding mere end 30 dage før starttidspunktet, får du refunderet 100 % af det fulde beløb. Ved mindre end 30 dage, men mere end 14 dage før starttidspunktet, får du refunderet 50 % af det fulde beløb.</p>
              <a href="#" className="underline font-bold text-sm">See more</a>
            </div>
            <div>
              <h4 className="font-bold">Covid-19</h4>
              <p className="my-2 text-gray-500">Hvis myndighedernes retningslinjer gør fysisk fremmøde utilrådeligt, så gennemføres undervisningen online på det planlagte tidspunkt. Der gives ikke refusion, hvis undervisning gennemføres online.</p>
              <a href="#" className="underline font-bold text-sm">See more</a>
            </div>
          </div>
        </div>        
      </main>

      <footer aria-labelledby="footer-heading" className="bg-white border-t border-gray-200">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" sr-only py-20 grid grid-cols-2 gap-8 sm:gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
            <div className="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
              
            </div>
            <div className="grid grid-cols-1 gap-y-10 lg:col-span-2 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
              
            </div>
          </div>

          <div className="border-t border-gray-100 py-10 sm:flex sm:items-center sm:justify-between">
            <div className="flex items-center justify-center text-sm text-gray-500">
              <p>Shipping to Canada ($CAD)</p>
              <p className="ml-3 border-l border-gray-200 pl-3">English</p>
            </div>
            <p className="mt-6 text-sm text-gray-500 text-center sm:mt-0">&copy; 2021 Clothing Company, Ltd.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
