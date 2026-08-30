import React from 'react'

export const HotelCards = () => {
  return (
    <div className='hotelCards'>
        <div className="left">
            <img src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D" alt="" />
        </div>
        <div className="right">
            <div className="top">
                <h4>Hotel Nabero</h4>
                <p>0.4km from main city</p>
                <p>Free Cancelation</p>
            </div>
            <div className="center">
                <div className="leftD">
                    <p>Comfort Room</p>
                    <p>1k king size bed</p>
                </div>
                <div className="rightD">
                    <p>$180</p>
                    <p>3 nights, 2 guests</p>
                </div>
            </div>
            <div className="bottom">
                <p>#Hot Deal</p>
                <button>See booking options</button>
            </div>
        </div>
    </div>
  )
}
