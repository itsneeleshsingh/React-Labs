import React from 'react'

export const HotelCards = (props) => {
  return (
    <div className='hotelCards'>
        <div className="left">
            <img src={props.image} alt="" />
        </div>
        <div className="right">
            <div className="top">
                <h4>{props.name}</h4>
                <p>{props.distance}</p>
                <p>{props.cancelation}</p>
            </div>
            <div className="center">
                <div className="leftD">
                    <p>{props.roomType}</p>
                    <p>{props.bed}</p>
                </div>
                <div className="rightD">
                    <p>${props.price}</p>
                    <p>{props.nights}</p>
                </div>
            </div>
            <div className="bottom">
                <p>{props.deal}</p>
                <button>See booking options</button>
            </div>
        </div>
    </div>
  )
}
