import React from 'react'
import Navbar from './components/Navbar.jsx'
import SearchBar from './components/SearchBar.jsx'
import SideBar from './components/SideBar.jsx'
import { HotelCards } from './components/HotelCards.jsx'

const App = () => {

  const hotelData = [
    {
      id: 1,
      name: 'Hotel Nabero',
      distance: '0.4km from main city',
      cancelation: 'Free Cancelation',
      roomType: 'Comfort Room',
      bed: '1k king size bed',
      price: 180,
      nights: '3 nights, 2 guests',
      deal: '#Hot Deal',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 2,
      name: 'Harbor Light Hotel',
      distance: '1.1km from beach',
      cancelation: 'Free Cancelation',
      roomType: 'Sea View Suite',
      bed: 'King bed',
      price: 220,
      nights: '2 nights, 2 guests',
      deal: '#Popular',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 3,
      name: 'Cove Residence',
      distance: '0.8km from center',
      cancelation: 'Free Breakfast',
      roomType: 'Deluxe Room',
      bed: 'Queen size bed',
      price: 195,
      nights: '4 nights, 2 guests',
      deal: '#Best Value',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 4,
      name: 'Sunset Bay Inn',
      distance: '2.3km from station',
      cancelation: 'Free Cancelation',
      roomType: 'Garden Room',
      bed: 'Twin beds',
      price: 160,
      nights: '3 nights, 2 guests',
      deal: '#Hot Deal',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 5,
      name: 'Royal Vista',
      distance: '0.6km from plaza',
      cancelation: 'Free Cancelation',
      roomType: 'Executive Room',
      bed: 'King bed',
      price: 240,
      nights: '5 nights, 2 guests',
      deal: '#Luxury',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 6,
      name: 'Lakeview Stay',
      distance: '1.4km from lake',
      cancelation: 'Free Breakfast',
      roomType: 'Standard Room',
      bed: 'Double bed',
      price: 175,
      nights: '3 nights, 2 guests',
      deal: '#Weekend',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 7,
      name: 'Old Town Hotel',
      distance: '0.9km from museum',
      cancelation: 'Free Cancelation',
      roomType: 'Classic Room',
      bed: 'Queen bed',
      price: 205,
      nights: '4 nights, 2 guests',
      deal: '#Hot Deal',
      image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 8,
      name: 'Greenfield Lodge',
      distance: '3.0km from city',
      cancelation: 'Free Cancelation',
      roomType: 'Family Suite',
      bed: '2 Queen beds',
      price: 260,
      nights: '2 nights, 4 guests',
      deal: '#Family',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 9,
      name: 'Urban Nest',
      distance: '0.5km from market',
      cancelation: 'Free Cancelation',
      roomType: 'Studio Room',
      bed: 'Queen size bed',
      price: 170,
      nights: '3 nights, 2 guests',
      deal: '#Smart Pick',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 10,
      name: 'Diamond Peak',
      distance: '1.8km from summit',
      cancelation: 'Free Breakfast',
      roomType: 'Mountain View',
      bed: 'King bed',
      price: 280,
      nights: '6 nights, 2 guests',
      deal: '#Premium',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80'
    }
  ]

  return (
    <div>
      <Navbar/>
      <div className='hotelView'>
        <SideBar/>
        <div>
          <SearchBar/>
          <div className="hotcardView">
            {hotelData.map((ele) => {
              return <HotelCards name={ele.name} distance={ele.distance} cancelation={ele.cancelation}
              image={ele.image} roomType={ele.roomType} bed={ele.bed} price={ele.price}
              nights={ele.nights} deal={ele.deal} /> 
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App