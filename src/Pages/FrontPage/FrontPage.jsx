import React from 'react'
import './FrontPage.css'
import Home from '../../Components/Home/Home'
import Offers from '../../Components/Offers/Offers'
import Booking from '../../Components/Booking/Booking'
import Mission from '../../Components/Mission/Mission'
import Contact from '../../Components/Contact/Contact'
import News from '../../Components/News/News'
import Volunteer from '../../Components/Volunteer/Volunteer'

const FrontPage = () => {
  return (
  <>
    <Home/>
    <Offers/>
    <Booking/>
    <Mission/>
    <News/>
    <Volunteer/>
    <Contact/>
  </>
  )
}

export default FrontPage
