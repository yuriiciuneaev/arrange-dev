import React from 'react'
import SearchSort from '../snippets/SearchSort'

function PageHeader({
  title,
  hasSearchSort,
}: {
  title: string;
  hasSearchSort: boolean
}) {
  return (
    <>
      <div className="flex flex-row items-center py-5 gap-3">
        <div className="max-w-7xl flex-auto">
          <h1 className=" font-semibold text-lg leading-tight text-gray-900">{title}</h1>
        </div>        
        {hasSearchSort && <SearchSort />}
      </div>
    </>
  )
}

export default PageHeader
