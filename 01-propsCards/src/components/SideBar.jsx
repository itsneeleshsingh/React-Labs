import React from 'react'

const SideBar = () => {
  return (
    <aside className='sidebar'>
      <button className='backButton' aria-label='Go back'>←</button>

      <h1 className='sidebarTitle'>Your search</h1>

      <div className='searchField'>
        <label>Destination</label>
        <div className='inputRow'>
          <span className='fieldIcon'>◉</span>
          <span className='fieldValue'>Copenhagen, Denmark</span>
        </div>
      </div>

      <div className='searchField'>
        <label>Check-in</label>
        <div className='inputRow'>
          <span className='fieldIcon'>🗓</span>
          <span className='fieldValue'>Friday, 09 December 2022</span>
        </div>
      </div>

      <div className='searchField'>
        <label>Check-out date</label>
        <div className='inputRow'>
          <span className='fieldIcon'>🗓</span>
          <span className='fieldValue'>Monday, 12 December 2022</span>
        </div>
      </div>

      <div className='searchField'>
        <label>Guests</label>
        <div className='inputRow'>
          <span className='fieldIcon'>👤</span>
          <span className='fieldValue'>2 adults, 1 room</span>
        </div>
      </div>

      <button className='sidebarSearchButton'>Search</button>
    </aside>
  )
}

export default SideBar