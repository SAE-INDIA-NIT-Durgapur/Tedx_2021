import React from "react";
import "../CSS/register.css";
import logo from "./tedxnitdgp.png";

import PTable from "./pTable";
import SizeTable from "./SizeTable";

const Register = () => {
  return (
    <div className="fluid-container register-main">
      <div className="row register">
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
        <div class="row" style={{ width: "100%", margin: 0 }}>
          <div class="col">
            <SizeTable />
          </div>
          <div class="col">
            <PTable />
          </div>
        </div>
        <div style={{maxWidth: "600px",padding: "5px"}}>
        <a href="https://dare2compete.com/o/mWayboQ?lb=R7fQoJ0">
          <button
            class="btn btn-block"
            href="https://dare2compete.com/o/mWayboQ?lb=R7fQoJ0"
            target="_blank"
            type="submit"
            value="Register"
          >
            Register
          </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
