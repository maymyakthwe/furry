import React from 'react'
import './ServiceDonate.css'
import serviceDonate from '../../Assets/images/serviceDonate.jpg'

const ServiceDonate = () => {
  return (
    <div className='service-donate'>
        <img src={serviceDonate} alt="" className='service-donate-img'/>
        <div className="service-donate-info">
          <div>
            <h1>Paws for a Cause: Support Your Local Animal Shelter by Donating Today!</h1>
            <p>Every little bit helps when it comes to supporting our furry friends in need. 
              By donating to your local animal shelter, you're not just providing food, 
              shelter, and medical care for homeless pets, but you're also giving them 
              a second chance at finding a loving forever home. </p>
          </div>
        <button><i className="fa-solid fa-heart icon"></i> Donate Now</button>
        </div>
    </div>
  )
}

export default ServiceDonate
