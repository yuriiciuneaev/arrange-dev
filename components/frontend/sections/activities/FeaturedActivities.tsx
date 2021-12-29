import React from 'react'
import { FilterIcon, SearchIcon } from '@heroicons/react/solid'

const courses = [
  {
    id: 1,
    name: 'Grundkursus København',
    href: process.env.NEXT_PUBLIC_BASE_URL + 'activities',
    price: '2.395 kr.',
    imageSrc: process.env.NEXT_PUBLIC_BASE_URL + 'images/01_01.png',
    imageAlt: 'Grundkursus København',
  },
  {
    id: 2,
    name: 'Bootcamp for par',
    href: '#',
    price: '2.995 kr.',
    imageSrc: process.env.NEXT_PUBLIC_BASE_URL + 'images/02.png',
    imageAlt: 'Bootcamp for par',
  },
  {
    id: 3,
    name: 'Hjemmestudie',
    href: '#',
    price: '995 kr.',
    imageSrc: process.env.NEXT_PUBLIC_BASE_URL + 'images/03.png',
    imageAlt: 'Hjemmestudie',
  }
]

function FeaturedActivities() {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto mt-1 flex rounded-md shadow-sm lg:max-w-7xl lg:px-8">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-black" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
            placeholder="Søg efter kurser"
          />
        </div>
        <button
          type="button"
          className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <FilterIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          <span>Filter</span>
        </button>
      </div>
      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-20 sm:grid-cols-1 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {courses.map((course) => (
            <a key={course.id} href={course.href} className="group">
              <div className="relative w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={course.imageSrc}
                  alt={course.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{course.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{course.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedActivities
