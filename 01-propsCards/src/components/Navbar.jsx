import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="left">
            <h2>Tripster</h2>
            <ul>
                <li>Proprties</li>
                <li>Attractions</li>
                <li>Popular</li>
            </ul>
        </div>
        
        <div className="right">
            <button className='signUp'>Sign Up</button>
            <button className='logIn'>Log in</button>
        </div>
    </div>
  )
}

export default Navbar