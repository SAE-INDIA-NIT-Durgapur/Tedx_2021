import React, { useState } from "react";
import "../CSS/form.css";
import tshirt1 from "../images/merchandise/tshirt...1.jpg";
import tshirt2 from "../images/merchandise/tshirt...2.jpg";
import tshirt3 from "../images/merchandise/tshirt...3.jpeg";

import SizeTable from "./SizeTable";
import { useHistory } from "react-router-dom";

const Merchandise = (props) => {
  const history = useHistory();

  const values = {
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    email: "",
    phone: "",
    college: "",
    collegeyear: "",
    tshirtsize: "",
  };
  const [initialState, setState] = useState(values);
  const [data, setData] = useState({
    // fname:"",
    // lname:"",
    // email:"",
    // phone:"",
  });

  const {
    name,
    address,
    city,
    state,
    country,
    email,
    phone,
    college,
    collegeyear,
    tshirtsize,
  } = initialState;

  const handleChange = (e) => {
    setState({ ...initialState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/ishangupta614/google_sheets/ADXXBwONRePqTxpu?tabId=Sheet1",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([
            [
              name,
              address,
              city,
              state,
              country,
              email,
              phone,
              college,
              collegeyear,
              tshirtsize,
            ],
          ]),
        }
      );
      await response.json();
      setState({
        ...initialState,
        name: "",
        address: "",
        city: "",
        state: "",
        country: "",
        email: "",
        phone: "",
        college: "",
        collegeyear: "",
        tshirtsize: "",
      });
      alert("Thank You!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* <h1 className="form">Order Now!</h1> */}
      <div class="containter row">
        <div class="container col-md-6">
          <div class="shirt-wrapper">
            <img src={tshirt2} className="merchandise_img" />
          </div>
          <SizeTable />
          <h2
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "1.2rem",
              color: "rgb(207, 198, 198)",
            }}
          >
            Note: All measurements are in inches
          </h2>
        </div>
        <div class="container col-md-6">
          {/* <img src={tshirt3} className="merchandise_img"/> */}
          <div class="shirt-wrapper">
            <img src={tshirt1} className="merchandise_img" />
          </div>
          <SizeTable />
        </div>
      </div>
      {/* <form onSubmit={handleSubmit}> */}
      <h1 className="form">Order Now!</h1>

      <div className="container register container-form">
        <div>
          <input
            className="btn"
            value="Order"
            onClick={() => history.push("/register")}
          />
        </div>

        {/* <div className="required-field">
            <label htmlFor="name"></label>
            <input
              placeholder="Name"
              type="text"
              name="name"
              autoComplete="off"
              value={name}
              onChange={handleChange}
            />
          </div> */}

        {/* <div className="required-field">
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
                    </div> */}

        {/* <div className="required-field">
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

          <div className="required-field">
            <label htmlFor="tshirtsize"></label>
            <input
              placeholder="T-shirt Size"
              type="text"
              name="tshirtsize"
              autoComplete="off"
              value={tshirtsize}
              onChange={handleChange}
            />
          </div> */}
      </div>
      {/* </form> */}
    </>
  );
};

export default Merchandise;
