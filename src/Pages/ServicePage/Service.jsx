import React from 'react'
import './Service.css'
//import Adoption from '../../Components/Adoption/Adoption'
import ServiceIntro from '../../Components/ServiceIntro/ServiceIntro'
import ServiceDonate from '../../Components/ServiceDonate/ServiceDonate'
import ServiceFind from '../../Components/ServiceFind/ServiceFind'


const Service = () => {
  return (
    <>
        <ServiceIntro/>
        <ServiceDonate/>
        <ServiceFind/>
    </>
  )
}

export default Service
