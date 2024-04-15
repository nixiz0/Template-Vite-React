import React from 'react'
import { Helmet } from 'react-helmet'

import '../css-style/home.css'


function Home() {
  return (
    <>
      <Helmet>
        <meta name="description" content="Lorem Ipsum ipsum ipsum" />
        <meta name="keywords" content="Lorem Ipsum" />
        <title>Home Page</title>
      </Helmet>
      <div>Home</div>
    </>
  )
}

export default Home