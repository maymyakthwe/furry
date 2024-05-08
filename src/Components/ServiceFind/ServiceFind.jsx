import React from 'react'
import './ServiceFind.css'
import { FaCheckCircle } from "react-icons/fa";

const ServiceFind = () => {
  return (
    <div className='service-find'>
      <h1>Lost your pet? Here is what you can do. </h1>
      <div className="service-find-link">
        <li><FaCheckCircle className='icon' /><p>Fill out a "lost pet" application form below and send it to us.</p></li>
        <li><FaCheckCircle className='icon' /><p>Talk to the authorized person and acquire information about recently rescued pets. Here is our service hotline number : <span>895-847-5323</span>.</p></li>
        <li><FaCheckCircle className='icon' /><p>Come visit our shelter in person. Our location is : <span> 123 Sesame Street, Wonderland, Neverland, NY 00000</span></p></li>
      </div>

      <div className="lost-pet-form">
        <form action="">
          <div>
            <label htmlFor="">Full Name:</label>
            <input type="text" placeholder='enter your full name' />
          </div>
          <div>
            <label htmlFor="">Phone Number:</label>
            <input type="text" placeholder='enter your phone number'/>
          </div>
          <div>
            <label htmlFor="">You Lost : </label>
            <select name="" id="">
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="rabbit">Rabbit</option>
              <option value="bird">Bird</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Breed:</label>
            <input type="text" placeholder="enter your pet's breed" />
          </div>
          <div>
            <label htmlFor="">Where did you lost your pet?</label>
            <input type="text" placeholder='enter the address'/>
          </div>
          <div>
            <label htmlFor="">When did you lost your pet?</label>
            <input type="text" placeholder='enter how long' />
          </div>
          <div>
            <label htmlFor="">Add More Details</label>
            <input type="text" placeholder='more details' />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default ServiceFind
