import React,{useState} from 'react'
import '../CSS/form.css'

const Form =() => {

    const values = {
        name:"",
        age:"",
        gender:"",
        address:"",
        city:"",
        state:"",
        country:"",
        email:"",
        phone:"",
        college:"",
        collegeyear:"",
    }
    const [initialState,setState] =useState(values);
    const [data,setData] =useState({
        // fname:"",
        // lname:"",
        // email:"",
        // phone:"",
    });

    const {name,age,gender,address,city,state,country,email,phone,college,collegeyear} =initialState;

    const handleChange = e => {
        setState({...initialState, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try{
            const response = await fetch(
                'https://v1.nocodeapi.com/ishangupta614/google_sheets/EFbQThhmJkbEKSRY?tabId=Sheet1',{
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'} ,
                    body: JSON.stringify([[name,age,gender,address,city,state,country,email,phone,college,collegeyear]])
            }
            );
            await response.json();
            setState({...initialState, name: "",age: "",gender: "",address: "",city: "",state: "",country: "",email: "",phone: "",college: "",collegeyear: ""});
            alert("Thank You!" )
        } catch (err){
            console.log(err)
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1 className="form">Registration Form</h1>

                <div className=" container">
                    <div className="required-field">
                        <label htmlFor="name"></label>
                        <input
                            placeholder="Name"
                            type="text"
                            name="name"
                            autoComplete="off"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="required-field">
                        <label htmlFor="age"></label>
                        <input
                            placeholder="Age"
                            type="text"
                            name="age"
                            autoComplete="off"
                            value={age}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="required-field">
                        <label htmlFor="gender"></label>
                        <input
                            placeholder="Gender"
                            type="text"
                            name="gender"
                            autoComplete="off"
                            value={gender}
                            onChange={handleChange}
                        />
                    </div>
                    


                    <div className="required-field">
                        <label htmlFor="address"></label>
                        <input
                            placeholder="Address"
                            type="text"
                            name="address"
                            autoComplete="off"
                            value={address}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="required-field">
                        <label htmlFor="city"></label>
                        <input
                            placeholder="City"
                            type="text"
                            name="city"
                            autoComplete="off"
                            value={city}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="required-field">
                        <label htmlFor="state"></label>
                        <input
                            placeholder="State"
                            type="text"
                            name="state"
                            autoComplete="off"
                            value={state}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="required-field">
                        <label htmlFor="country"></label>
                        <input
                            placeholder="Country"
                            type="text"
                            name="country"
                            autoComplete="off"
                            value={country}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="required-field">
                        <label htmlFor="email"></label>
                        <input
                            placeholder="Email Id"
                            type="text"
                            name="email"
                            autoComplete="off"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="required-field">
                        <label htmlFor="phone"></label>
                        <input
                            placeholder="Phone No."
                            type="text"
                            name="phone"
                            autoComplete="off"
                            value={phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="required-field">
                        <label htmlFor="college"></label>
                        <input
                            placeholder="College"
                            type="text"
                            name="college"
                            autoComplete="off"
                            value={college}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="required-field">
                        <label htmlFor="collegeyear"></label>
                        <input
                            placeholder="College Year"
                            type="text"
                            name="collegeyear"
                            autoComplete="off"
                            value={collegeyear}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <input className="btn" type="submit" value="Register"/>
                    </div>
                </div>
            </form>
        </>

    );
}

export default Form;