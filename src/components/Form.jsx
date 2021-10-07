import React,{useState} from 'react'
import '../CSS/form.css'

const Form =() => {

    const values = {
        name:"",
        email:"",
        phone:"",
    }
    const [initialState,setState] =useState(values);
    const [data,setData] =useState({
        // fname:"",
        // lname:"",
        // email:"",
        // phone:"",
    });

    const {name,email,phone} =initialState;

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
                    body: JSON.stringify([[name,email,phone]])
            }
            );
            await response.json();
            setState({...initialState, name: "",email: "",phone: ""})
        } catch (err){
            console.log(err)
        }
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <h1>Registration Form</h1>

                <div className=" container">
                    <div>
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
                    <div>
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

                    <div>
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

                    <div>
                        <input className="btn" type="submit" value="Register"/>
                    </div>
                </div>
            </form>
        </>

    );
}

export default Form;