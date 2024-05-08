import React from 'react'
import './Offers.css'
import adopt from '../../Assets/images/adopt.jpg'
import donate from '../../Assets/images/donate.jpg'
import find from '../../Assets/images/find.jpg'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-wrapper">
            <div className="offers-details">
                <div className="offers-details-wrapper">
                    <img src={adopt} alt="" className="offers-image" />
                    <p>Need A Little Furry Companion? Your Care and Affection are the Only Investment Needed.</p>
                    <button>Adopt Now</button>
                </div>
            </div>
            <div className="offers-details">
                <div className="offers-details-wrapper">
                    <img src={donate} alt="" className="offers-image" />
                    <p>Your Generosity Today is the Promise of a Better Tomorrow.</p>
                    <button>Donate Now</button>
                </div>
            </div>
            <div className="offers-details">
                <div className="offers-details-wrapper">
                    <img src={find} alt="" className="offers-image" />
                    <p>60% of Our Rescued Animals are Lost Pets. Check Out if One is Yours</p>
                    <button>Find Your Pet</button>
                </div>
            </div>
        </div>
        <p className='offers-thankyou-note'>With sincere gratitude, we acknowledge your generous gift. Thank you for believing in our mission.</p>
        <p className='check-how'>Your donation will be put to excellent use. <span><a href="/donation">Check How</a></span></p>
    </div>
  )
}

export default Offers
