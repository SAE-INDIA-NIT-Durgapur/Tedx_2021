import React from "react";
import "../CSS/register.css";
import logo from "./tedxnitdgp.png";
import Form from "./Form.jsx";
import PTable from "./pTable";
import SizeTable from "./SizeTable";

const Register = () => {
  return (
    <div className="fluid-container register-main">
      <div className="row container register">
        {/* <img className="image_register" src={logo}/> */}
        <br />
        <br />
        <br />
        <br />
        {/* <p 
                className="Coming_Soon"> 
                    Registrations<br /> Coming soon
                </p> */}
        {/* <PTable/>
         */}
        <div class="container">
          <div class="row" style={{ width: "100%", margin: 0 }}>
            <div class="col">
              <SizeTable />
            </div>
            <div class="col">
              <PTable />
            </div>
          </div>
        </div>

        <Form />
      </div>
    </div>
  );
};

export default Register;
