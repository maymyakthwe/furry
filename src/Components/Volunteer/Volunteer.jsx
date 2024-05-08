import React from 'react'
import './Volunteer.css'

const Volunteer = () => {
  return (
    <div className='volunteer'>
        <div className="volunteer-wrapper">
          <div>
          <h1>Join Our Community</h1>
          <p>Each volunteer hour is a pledge to compassion,
            every small task a building block towards a world
            where kindness reigns. Join us at the shelter, where
            simple acts of love give animals a second chance at life.</p>
          </div>
          <form action="" className='volunteer-form'>
            <div className="volunteer-infos">
              <input type="text" placeholder='Enter Your Name' />
              <input type="email" placeholder='Enter Your Email' />
            </div>
            <button>Register As a Volunteer</button>
          </form>
        </div>   
    </div>
  )
}

export default Volunteer
