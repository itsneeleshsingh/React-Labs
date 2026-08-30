import React from 'react'
import Navbar from './components/Navbar.jsx'
import SearchBar from './components/SearchBar.jsx'
import { HotelCards } from './components/HotelCards.jsx'

const App = () => {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <HotelCards/>
      <HotelCards/>
      <HotelCards/>
    </div>
  )
}

export default App