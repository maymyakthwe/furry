//jsx file about service-adoption

import React from 'react'
import './ServiceIntro.css'

const ServiceIntro = () => {
  return (
    <div className='service-intro'>
        <div className="service-adopt">
            <div className='service-adopt-intro'>
                <h1>Looking for a Pet?</h1>
                <p>Thank you for opening your heart and home to a furry friend in need.
                    Most of our shelter dogs and cats are rescued animals 
                    while some of them are abondoned by their former home due to
                    financial conditions. Here in our shelter, we not only take care of cats and dogs
                    but also other animals such as rabbits and birds which means you have multiple 
                    options. All of the pets are vaccinated and have taken necessary vetting actions
                    and ready to be adopted. Once again, we thank you for choosing adoption and 
                    giving a loving home to a shelter pet. Your decision not only changes their 
                    life but enriches yours in ways you can't imagine. 
                    Together, we're making a difference one paw at a time.
                </p>
            </div>
            <div className='how-to-adopt'>
                <h3>How To Bring a Pet Home</h3>
                <p><span>Research and Visit:</span> Start by researching the animals available for adoption on our shelter's website 
                      or by visiting us in person. To choose your pet online <a href="/services/adopt">click here</a>.</p>
                <p><span>Meet the Animals:</span> Once you've identified potential matches, spend some time interacting with them. 
                Our staff will be happy to introduce you and facilitate meetings to ensure compatibility.</p>
                <p><span>Complete an Application:</span> If you've found the perfect match, you'll need to fill out an adoption application. 
                This helps us ensure that our animals are placed in suitable homes.</p>
                <p><span>Adoption Fee:</span> Once approved, there will be an adoption fee. This fee typically covers the cost of vaccinations, spaying/neutering, 
                microchipping, and other medical expenses incurred by the shelter.</p>
                <p><span>Paperwork:</span> You'll need to sign an adoption contract outlining your responsibilities as a pet owner and our 
                commitment to the welfare of the animal.</p>
                </div>
            <div className='choose-pet'>
                <h3>Ready to choose your new best friend? </h3>
                  <a href='/services/adopt'>Click Here</a>
            </div>
        </div>
      
    </div>
  )
}

export default ServiceIntro
