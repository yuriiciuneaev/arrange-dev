import React from 'react'
import Link from 'next/link'
import tw from "tailwind-styled-components"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

type PPProps = {
  $pageNumber: number;
};

type PNProps = {
  $pageNumber: number;
  $pageCount: number;
};

function Pagination({
  totalCount,
  offset,
  limit,
  updateOffset
}: {
  totalCount: number;
  offset: number;
  limit: number;
  updateOffset: (newOffset) => void;
}) {
  const offsetLimit = offset + limit
  const isOverTotalCount = offsetLimit > totalCount ? true : false;

  const pageCount = totalCount % limit > 0 ? Math.floor(totalCount/limit) + 1 : totalCount / limit;
  const pageNumber = Math.floor(offset / limit) + 1;

  return (
    <Wrapper>
      <MobileWrapper>
        <Link href="#" passHref>
          <PreviousLink
            $pageNumber={pageNumber}
            onClick={() => updateOffset((pageNumber - 2) * limit)}  
          >
            Previous
          </PreviousLink>
        </Link>
        <Link href="#" passHref>
          <NextLink
            $pageNumber={pageNumber}
            $pageCount={pageCount}
            onClick={() => updateOffset(pageNumber * limit)}
          >
            Next
          </NextLink>
        </Link>
      </MobileWrapper>
      <DesktopWrapper>
        <div>
          <TableInfo>
            Showing <FontMedium>{offset + 1}</FontMedium> to{' '}
            {isOverTotalCount && (
            <FontMedium>{totalCount}</FontMedium>
            )}
            {!isOverTotalCount && (
            <FontMedium>{offset + limit}</FontMedium>
            )}
            {' '}of{' '}
            <FontMedium>{totalCount}</FontMedium> results            
          </TableInfo>
        </div>
        <div>
          <TablePaginate aria-label="Pagination">
            <Link href="#" passHref>
              <PaginatePreviousLink
                $pageNumber={pageNumber}
                onClick={() => updateOffset((pageNumber - 2) * limit)}  
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </PaginatePreviousLink>
            </Link>

            {Array(pageCount).fill(null).map((_, i) => {
              if(pageNumber == (i + 1)){
                return (
                  <Link href="#" passHref>
                    <PaginateCurrentBtn aria-current="page">
                      { ++i }
                    </PaginateCurrentBtn>
                  </Link>
                )
              } else {
                return (
                  <Link href="#" passHref>
                    <PaginateDefaultBtn onClick={() => updateOffset((i - 1) * limit)}>
                      { ++i }
                    </PaginateDefaultBtn>
                  </Link>
                )
              }              
            })}

            <Link href="#" passHref>
              <PaginateNextLink 
                $pageNumber={pageNumber}
                $pageCount={pageCount}
                onClick={() => updateOffset(pageNumber * limit)}
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </PaginateNextLink>
            </Link>
          </TablePaginate>
        </div>
      </DesktopWrapper>
    </Wrapper>
  )
}

export default Pagination

const Wrapper = tw.div`
  bg-white px-4 py-3 flex items-center justify-between sm:px-6
`

const MobileWrapper = tw.div`
  flex-1 flex justify-between sm:hidden
`

const DesktopWrapper = tw.div`
  hidden sm:flex-1 sm:flex sm:items-center sm:justify-between
`

const TableInfo = tw.p`
  text-sm text-gray-700
`

const TablePaginate = tw.nav`
  relative z-0 inline-flex rounded-md shadow-sm -space-x-px
`

const PreviousLink = tw.a<PPProps>`
  relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50
  ${(p) => (p.$pageNumber === 1 ? "pointer-events-none opacity-50" : "")}
`

const NextLink = tw.a<PNProps>`
  ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50
  ${(p) => (p.$pageNumber === p.$pageCount ? "pointer-events-none opacity-50" : "")}
`

const FontMedium = tw.span`
  font-medium
`

const PaginateLink = tw.a`
  relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50
`

const PaginatePreviousLink = tw(PaginateLink)<PPProps>`  
  rounded-l-md ${(p) => (p.$pageNumber === 1 ? "pointer-events-none opacity-50" : "")}
`

const PaginateNextLink = tw(PaginateLink)<PNProps>`
  rounded-r-md ${(p) => (p.$pageNumber === p.$pageCount ? "pointer-events-none opacity-50" : "")}
`

const PaginateNumBtn = tw.a`
  relative inline-flex items-center px-4 py-2 border text-sm font-medium
`

const PaginateDefaultBtn = tw(PaginateNumBtn)`
  bg-white border-gray-300 text-gray-500 hover:bg-gray-50
`

const PaginateCurrentBtn = tw(PaginateNumBtn)`
  pointer-events-none z-10 bg-indigo-50 border-indigo-500 text-indigo-600
`
