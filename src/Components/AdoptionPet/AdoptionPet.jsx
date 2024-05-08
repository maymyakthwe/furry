import React from 'react'
import "./AdoptionPet.css"
import mochi from '../../Assets/images/adopt_Mochi.jpg'

const AdoptionPet = () => {
  return (
    <div className="each-adoption-pet-wrapper">
          <div className="each-adoption-pet">
              <img src={mochi} alt="" />
              <div>Hi My name is Mochi</div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ea eveniet veritatis dolor, omnis praesentium obcaecati harum 
                eos veniam temporibus libero molestiae magnam! Fugiat nesciunt 
                assumenda et architecto recusandae laboriosam maiores?</p>
          </div>
    </div> 
  )
}

export default AdoptionPet
