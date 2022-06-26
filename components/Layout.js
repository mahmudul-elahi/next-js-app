import React from 'react'
import Navigation from './Navigation.js'

function Layout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  )
}

export default Layout
