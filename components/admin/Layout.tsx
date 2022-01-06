import React from 'react'
import tw from "tailwind-styled-components"

import Header from "./Header";
function Layout({ handle, children }) {
  return (
    <>
      <div className="min-h-full">
        <Header handle={handle}/>
        <main>
          <Wrapper>
            {children}
          </Wrapper>
        </main>
      </div>      
    </>
  )
}

export default Layout

const Wrapper = tw.div`
  max-w-7xl mx-auto sm:px-6 lg:px-8 pt-12
`
