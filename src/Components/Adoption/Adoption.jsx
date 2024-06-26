/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import './Adoption.css'
import { Link } from 'react-router-dom'
//import mochi from '../../Assets/images/adopt_Mochi.jpg'

const Adoption = () => {

  const [pet,setPet]= useState([]);

  const fetchInfo = async()=>{
    await fetch('http://localhost:4000/pets')
    .then((res)=>res.json())
    .then((data)=>{setPet(data)});
  }

  useEffect(() => {
    fetchInfo();
  },[])



  return (
    <div className='adoption'>
        <div className="adoption-headline">
              <h1>When you adopt, you save a life and gain a best friend</h1>
        </div>
        <p className='filter'>Filters :</p>
        <div className="adoption-filter-wrapper">
          <div className="adoption-filter">
            <label htmlFor="">Type</label>
            <select name="" id="" >
              <option value="dog">dog</option>
              <option value="cat">cat</option>
              <option value="rabbit">rabbit</option>
              <option value="bird">bird</option>
            </select>
          </div>
          <div className="adoption-filter">
            <label htmlFor="">Age</label>
            <select name="" id="" >
              <option value="under one">under one</option>
              <option value="one to three">one to three</option>
              <option value="older than three">older than three</option>
            </select>
          </div>
          <div className="adoption-filter">
            <label htmlFor="">Gender</label>
            <select name="" id="" >
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="any">any</option>
            </select>
          </div>
          <div className="adoption-filter">
            <label htmlFor="">Color</label>
            <select name="" id="" >
              <option value="grey">grey</option>
              <option value="white">white</option>
              <option value="orange">orange</option>
              <option value="black">black</option>
            </select>
          </div>
        </div>
        
        <div className="adoption-filter-result">
          {pet.map((d, index) => {
            return <Link key={index} to={`/services/adopt/${d.pet_id}`} className="adoption-pet">
              <img src={d.pet_image} alt="" />
              <p>{d.pet_name}<span>{d.pet_id}</span></p>
            </Link>
          })}
        </div>
    </div>
  )
}

export default Adoption
