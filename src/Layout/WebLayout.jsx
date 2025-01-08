import React, { Fragment } from 'react'
import Header from '@/Component/Common/Header'
import Footer from '@/Component/Common/Footer'

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