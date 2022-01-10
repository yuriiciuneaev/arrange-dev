import React from 'react'
import { SearchIcon, AdjustmentsIcon } from '@heroicons/react/solid'
import { courses } from '../../../../data/public/courses'

function FeaturedActivities() {
  return (
    <div className="font-inter">
      <div className="max-w-2xl mx-auto mt-1 flex rounded-md lg:max-w-7xl lg:px-8 gap-3">
        <div className="relative flex items-stretch flex-grow">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <SearchIcon className="h-6 w-6 text-black" aria-hidden="true" />
          </div>
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full rounded-md p-3 pl-16 font-inter text-md border-gray-300 placeholder:text-[#7D7D7D]"
            placeholder="Søg efter kurser"
          />
        </div>
        <button
          type="button"
          className="-ml-px relative inline-flex items-center space-x-2 px-2 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none"
        >
          <AdjustmentsIcon className="h-5 w-5 text-[#222222]" aria-hidden="true" />
          <span>Filter</span>
        </button>
      </div>
      <div className="max-w-2xl mx-auto py-4 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-20 sm:grid-cols-1 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {courses.map((course) => (
            <a key={course.id} href={course.href} className="group">
              <div className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={course.imageSrc}
                  alt={course.imageAlt}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 font-bold text-sm text-black font-inter">{course.name}</h3>
              <p className="mt-1 font-bold text-sm text-black">{course.price}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedActivities
