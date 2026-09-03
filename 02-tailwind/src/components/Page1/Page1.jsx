import React from 'react'
import Navbar from './Navbar'
import Trending from './Trending'
import MusicBar from './MusicBar'
import Main from './Main'

const Page1 = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      {/* <Trending/> */}
      <MusicBar/>   
    </div>
  )
}

export default Page1