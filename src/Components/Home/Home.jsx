import React from 'react'
import './Home.css'
import homeBG from '../../Assets/images/homeBG.png'

const Home = () => {
  return (
    <div className='home'>
        <img className="background-img" src={homeBG} alt="" />
      <div className="home-wrapper">
        <h2>Saving One Animal Won't Change The World</h2>
        <h1>But It Will Change the World for That One Animal</h1>
        <a href='/services/adopt' >Adopt Now</a>
      </div>
    </div>
  )
}

export default Home
