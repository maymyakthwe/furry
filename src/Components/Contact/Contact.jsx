import React from 'react'
import './Contact.css'
import { BsFacebook } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-wrapper">
        <div className="info-box">
          <h3>Have you spotted a stray animal in need? </h3>
          <h1>Don't look away, take action!</h1>
          <p>Call our pet rescue service : <span>895-847-5323</span></p>
          <div className="contact-links">
            <a href="/"><BsFacebook /></a>
            <a href="/" ><MdEmail /></a>
            <a href="/" ><AiFillPhone /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
