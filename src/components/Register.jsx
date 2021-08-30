import React from 'react'
import "../CSS/register.css"
import logo from './tedxnitdgp.png'

const Register = () => {
    return (
        <div>
            <div className="register">
                <img className="image_register" src={logo}/>
                <p className="Coming_Soon"> 
                    Registrations<br /> Coming soon
                </p>
            </div>
        </div>
    )
}

export default Register
