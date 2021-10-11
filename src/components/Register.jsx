import React from 'react'
import "../CSS/register.css"
import logo from './tedxnitdgp.png'
import Form from './Form.jsx'

const Register = () => {
    return (
           
         <div className="fluid-container register-main">
            <div className="row container register">
                {/* <img className="image_register" src={logo}/> */}
                <br/><br/><br/><br/>
                {/* <p 
                className="Coming_Soon"> 
                    Registrations<br /> Coming soon
                </p> */}
                <Form />
                
            </div>
        </div>

    )
}

export default Register
