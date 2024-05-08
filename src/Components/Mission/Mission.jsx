import React from 'react'
import './Mission.css'
import missionDog from '../../Assets/images/missionDog.jpg'
import missionCats from '../../Assets/images/missionCats.jpg'

const Mission = () => {
  return (
    <div className='mission'>
        <h1 className='mission-headline'>Furry Friends Refuge &#40; Vision & Mission &#41;</h1>
        <div className='vision-wrapper'>
            <div className='vision-details'>
                <h1>The Better Future</h1>
                <p>At our animal shelter, we envision a
                    future where every furry friend finds their
                    forever home, where wagging tails and gentle
                    purrs fill the air with joy.</p>
                <p>Our dream is a community
                    where compassion knows no bounds, where abandoned animals
                    are welcomed with open arms and provided the love and care
                    they deserve. </p>
            </div>
            <div className="vision-image">
                  <img src={missionDog} alt="" />
            </div>
        </div>
        <div className='mission-wrapper'>
              <div className='mission-details'>
                <h1>How to Achieve</h1>
                <p><span>Education and Outreach:</span> Implement educational programs
                    to raise awareness about responsible pet ownership,
                    including spaying and neutering, vaccination, and proper care.</p>
                <p><span>Community Partnerships:</span> Forge partnerships with local veterinarians,
                    businesses, and organizations to expand access to affordable veterinary
                    care and resources for pet owners.</p>
                
            </div>
              <div className="mission-image">
                  <img src={missionCats} alt="" />
              </div>
        </div>
    </div>
  )
}

export default Mission
