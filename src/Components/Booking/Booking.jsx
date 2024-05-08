import React from 'react'
import './Booking.css'
import socks from '../../Assets/images/socks.jpg'
import baxter from '../../Assets/images/baxter.jpg'

const Booking = () => {
    return (
        <div className='booking'>
            <div className="booking-wrapper">
                <div className="booking-details">
                    <div>
                        <h1>Get Yourself A Playmate Animal</h1>
                        <p>With the donation amount of $50, we offer a
                        temporary playmate for you, your children and your pet.
                        You can either choose a playmate cat or a playmate dog.
                        Every playmate is guaranteed to be vetted, cleaned,
                        healthy and super-friendly.</p>
                    </div>
                    <button>Book Now</button>
                </div>
                <div className="playmate-wrapper">
                    <div className="playmate">
                        <div className="playmate-details">
                            <img src={baxter} alt="" />
                            <div>Baxter</div>
                        </div>
                        <div className="playmate-details">
                            <img src={socks} alt="" />
                            <div>Socks</div>
                        </div>
                    </div>
                    <button>See More Playmate</button>
                </div>
            </div>
        </div>
    )
}

export default Booking
