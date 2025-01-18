import React, { Fragment } from 'react'
import Header from '@/app/Component/Header'
import Footer from '@/app/Component/Footer'
import ChatBox from '@/app/Component/ChatBox'

const WebLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <ChatBox />
      <div>
        {children}
      </div>
      <Footer />
    </Fragment>
  )
}

export default WebLayout