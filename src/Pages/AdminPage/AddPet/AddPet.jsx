import React, { useState } from 'react'
import './Addpet.css'
import upload_area from '../../../Assets/images/upload_area.svg'

const AddPet = () => {

    const [image, setImage] = useState(false);
    const [pet, setPet] = useState({
        pet_name: "",
        pet_image: "",
        pet_type: "",
        pet_age: 0,
        pet_gender: "male",
        pet_color: "grey",
        pet_description: "",
        pet_arrived_date: "",
        pet_medical_check: ""

    })

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
        //console.log(image);
    }

    const changeHandler = (e) => {
        setPet({
            ...pet, [e.target.name]: e.target.value
        })
        //console.log(pet);
    }

    const addPet = async () => {
        let responseData;
        let petData = pet;

        let formData = new FormData();
        formData.append("pet", image);
        //image ko formData pyg
        //key,value // pet,image

        await fetch('http://localhost:4000/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((res) => res.json()).then((data) => { responseData = data });
        //formData ko /upload ko POST
        //response ko json pyg, responseData htl htae

        if (responseData.success) {
            petData.pet_image = responseData.image_url;
            console.log(JSON.stringify(petData));
            await fetch('http://localhost:4000/pets', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(petData),
            }).then((res) => res.json()).then((data) => {
                data.success ? alert("Product Added") : alert("Failed");
            })
        }
    }

    return (
        <div className='admin-page'>
            <div className="add-pet">
                <div className="pet-input-imagefield">
                    <label htmlFor="file-input">
                        Upload File :
                        <img src={image ? URL.createObjectURL(image) : upload_area} className='pet-input-thumnail-img' alt="" />
                    </label>
                    <input onChange={imageHandler} type="file" name='pet_image' id='file-input' hidden />
                </div>
                <div className="pet-input">
                    <label htmlFor="" className='pet-label'>Name :</label>
                    <input onChange={changeHandler} type="text" name='pet_name' placeholder="enter pet's name" />
                </div>
                <div className="pet-input">
                    <label htmlFor="" className='pet-label'>Type :</label>
                    <input onChange={changeHandler} type="text" name='pet_type' placeholder="enter pet's type" />
                </div>
                <div className="pet-input">
                    <label htmlFor="" className='pet-label'>Age :</label>
                    <input onChange={changeHandler} type="number" name='pet_age' />
                </div>
                <div className="pet-input">
                    <label htmlFor="" className='pet-label'>Gender :</label>
                    <select onChange={changeHandler} name="pet_gender" id="">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="pet-input">
                    <label htmlFor="" className='pet-label'>Color :</label>
                    <select onChange={changeHandler} name="pet_color" id="">
                        <option value="grey">Grey</option>
                        <option value="orange">Orange</option>
                        <option value="white">White</option>
                        <option value="black">Black</option>
                    </select>
                </div>
                <div className="pet-input">
                    <label htmlFor="" className='pet-label'>Description :</label>
                    <textarea onChange={changeHandler} name="pet_description" id="" placeholder='enter more details about the pet'></textarea>
                </div>
                <div className="pet-input">
                    <label htmlFor="" className='pet-label'>Pet Arrived Date :</label>
                    <input onChange={changeHandler} type="date" name='pet_arrived_date' />
                </div>

                <div className="pet-input">
                    <p className='pet-label'>Medical Check Up :</p>
                    <div className='pet-input-radio'>
                        <input onChange={changeHandler} id="med-check-done" type="radio" name='pet_medical_check' value={true} />
                        <label htmlFor="med-check-done">Done</label>
                    </div>
                    <div className='pet-input-radio'>
                        <input onChange={changeHandler} id="med-check-not-done" type="radio" name='pet_medical_check' value={false} />
                        <label htmlFor="med-check-not-done">Not Done</label>
                    </div>
                </div>
                <button onClick={addPet}>Add</button>
            </div>
        </div>
    )
}

export default AddPet
