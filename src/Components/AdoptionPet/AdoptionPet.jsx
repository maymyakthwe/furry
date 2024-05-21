/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import "./AdoptionPet.css"
import { useParams } from 'react-router-dom'

const AdoptionPet = () => {

  const {petId}=useParams();
  const [pet,setPet]=useState({});
  const [popUp,setPopUp] = useState("");
  const [agree,setAgree] = useState("");
  const [adoptForm,setAdoptForm]=useState({});

  const fetchInfo = async()=>{
    await fetch(`http://localhost:4000/pets/${petId}`)
    .then((res)=>res.json()
    .then((data)=>setPet(data)));
  }

  const adoptFormHandler = (e)=>{
    setAdoptForm({
      ...adoptForm,[e.target.name]:e.target.value
    })
    console.log(adoptForm);

  }

  const addAdoptionForm = async()=>{
    if(agree){
      let response;
      const adpform = adoptForm;
      adpform.authToken = localStorage.getItem("auth-token")
      adpform.pet_id = petId;

      console.log(adoptForm);

      await fetch('http://localhost:4000/adoptionForm', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adoptForm),
      }).then((res)=>res.json()).then((data)=>{response=data})

      if(response.success){
        alert("Form Submitted");
        window.location.replace(`/services/adopt/${petId}`);
      }else{
        alert("Failed");
      }
      
    }else{
      alert("You must Agree the terms and conditions before continue.")
    }
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  return (
    <>
      <div className="each-adoption-pet-wrapper">
            <div className="each-adoption-pet">
              <img src={pet.pet_image} alt="" />
              <div className='pet-info'>
                <h1>Hi My name is {pet.pet_name}</h1>
                <p>{pet.pet_description}</p>
            <p className="pet-id"><i className="fa-solid fa-arrow-right icon"></i>My Pet ID is <span>{pet.pet_id}</span>. </p>
                <div className="adopt-me">
                  <h2>Ready to Adopt Me?</h2>
                  <div className="adopt-suggestion">
                    <p><span>In Person Adoption</span>: Visiting shelter before adopting
                      a pet is a crucial step in ensuring a successful and fulfilling adoption
                      experience.Observing an animal in the shelter environment can give you a
                      better sense of their behavior, needs, and how they might fit into your home.
                      This includes assessing their socialization with humans and other animals. </p>
                    <p><span>Online Adoption</span>: We understand that life can be incredibly busy,
                      and finding time for in-person visits might be challenging. To accommodate your
                      busy schedule, we offer an online adoption option that allows you to complete
                      the entire adoption process from the comfort of your home.</p>
                  </div>
                  <div className="adopt-process">
                <button onClick={()=>setPopUp("visit")}>Visit Shelter</button>
                    <button onClick={()=>setPopUp("online")}>Proceed Online</button>
                  </div>
                </div>
              </div>
            </div>
      </div> 
      {
        popUp === "online" ?<div className="online">
          <div className="pop-up-online-content">
            <div className="pop-up-online-heading">
              <h2>Please Fill Out Your Information</h2>
              <button onClick={() => setPopUp("")}><i className="fa-solid fa-rectangle-xmark"></i></button>
            </div>
            <div className=" form">
              <div className="form-input">
                <label htmlFor="">Full Name</label>
                <input onChange={adoptFormHandler} type="text" name="adp_form_name" id="" />
              </div>
              <div className="form-input">
                <label htmlFor="">Email Address</label>
                <input onChange={adoptFormHandler} type="text" name="adp_form_email" id="" />
              </div>
              <div className="form-input">
                <label htmlFor="">Full Address</label>
                <input onChange={adoptFormHandler} type="text" name="adp_form_address" id="" />
              </div>
              <div className="form-input">
                <label htmlFor="">Contact Number</label>
                <input onChange={adoptFormHandler} type="text" name="adp_form_phone" id="" />
              </div>
              <div className='next'>
                <button onClick={() => setPopUp("next")}>Next</button>
              </div>
            </div>
          </div>
        </div>:<></>  
      }
      {
        popUp === "next" ? <div className="online">
          <div className="pop-up-online-content">
            <div className="pop-up-online-heading">
              <h2>Terms and condition</h2>
              <button onClick={() => setPopUp("")}><i className="fa-solid fa-rectangle-xmark"></i></button>
            </div>
            <div className="terms-cons">
              <p className='terms-cons-p'>These Terms and Conditions govern 
              the adoption of pets from Furry Friends Refuge. By adopting a pet from us, 
              you agree to comply with and be bound by these Terms.</p>
              <div className="terms-cons-points">
                <h4>Eligibility </h4>
                <li>Be at least 18 years old.</li>
                <li>Provide valid identification and proof of current address.</li>
                <li>Demonstrate the ability and willingness to provide a loving and safe environment for the pet.</li>
              </div>
              <div className="terms-cons-points">
                <h4>Home Inspection</h4>
                <li>We reserve the right to conduct a home inspection prior to approval of any adoption application to ensure the suitability of the living environment for the pet.</li>
              </div>
              <div className="terms-cons-points">
                <h4>Adoption Fee</h4>
                <li>The Adopter agrees to pay a non-refundable adoption fee of <span>$50</span>, which covers the initial care and administrative costs incurred by our organization.</li>
                <li>The Adopter acknowledges and agrees to bear all veterinary costs associated with the adopted pet.</li>
                <li>To weave any type adoption fee, the adopter can request personally to the authorized person with proof of financial incapacity. </li>
              </div>
              <div className="terms-cons-points">
                <h4>Return of Pet</h4>
                <li>If the Adopter is unable or unwilling to continue caring for the pet, 
                  the Adopter must notify us immediately and agree to return the pet to our organization. The Adopter must not rehome the pet to another individual or entity without our prior written consent.</li>
              </div>
              <div className="terms-cons-points">
                <h4>Refunds</h4>
                <li>No refunds will be issued for the adoption fee, veterinary costs, or delivery fees under any circumstances.</li>
              </div>
              <div className="terms-cons-points">
                <h4>Breach of Terms</h4>
                <li>Failure to comply with these Terms may result in the immediate repossession of the pet by our organization and potential legal action.</li>
              </div>
              <div className="terms-cons-points">
                <h4> Agreement and Acceptance</h4>
                <li>By signing below, the Adopter acknowledges that they have read, understood, and agree to abide by these Terms and Conditions.</li>
              </div>
                <div className="terms-cons-radio">
                <input id='terms-cons-radio' onClick={()=>{setAgree("agree")}} type="radio" />
                <label htmlFor="terms-cons-radio">Agree to the terms and conditions</label>
                </div>
              <div className='submit'>
                <button onClick={() => setPopUp("online")}>Back</button>
                <button onClick={addAdoptionForm}>Submit</button>
              </div>
            </div>
          </div>
        </div> : <></>
      }
      {
        popUp === "visit" ? <div className="visit">
          <div className="pop-up-visit-content">
            <div className="pop-up-visit-heading">
              <h2>Good Choice!</h2>
              <button onClick={() => setPopUp("")}><i class="fa-solid fa-rectangle-xmark"></i></button>
            </div>
            <p>We are thrilled that you are considering adopting a pet! 
              To ensure the best possible match and experience, 
              we highly recommend visiting our shelter in person 
              before making your decision.</p>
            <p>Visit Us : <span>123 Sesame Street, Wonderland, Neverland, NY 00000</span></p>
            <p>Call Us : <span>895-847-5323</span></p>
          </div>
        </div> : <></>
      }
    </>
  )
}

export default AdoptionPet
