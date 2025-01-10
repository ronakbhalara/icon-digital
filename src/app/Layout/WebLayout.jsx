import React, { Fragment } from 'react'
import Header from '@/app/Component/Header'
import Footer from '@/app/Component/Footer'

const WebLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div>
        {children}
      </div>
      <Footer />
    </Fragment>
  )
}

export default WebLayout