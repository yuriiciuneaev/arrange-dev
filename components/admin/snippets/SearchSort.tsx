import React from 'react'
import { SearchIcon, SortAscendingIcon, SortDescendingIcon } from '@heroicons/react/solid'

function SearchSort() {
  return (
    <>
      <div>
        <div className="mt-1 flex rounded-md shadow-sm">
          <div className="relative flex items-stretch flex-grow focus-within:z-10">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-none rounded-l-md pl-10 sm:text-sm border-gray-300"
              placeholder="Search for activities"
            />
          </div>
          <button
            type="button"
            className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <SortAscendingIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            <span>Sort</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default SearchSort