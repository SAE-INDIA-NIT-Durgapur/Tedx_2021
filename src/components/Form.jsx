import React, { useState } from "react";
import "../CSS/form.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const values = {
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    email: "",
    phone: "",
    college: "",
    collegeyear: "",
    ticket: "",
    size: "",
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
    pincode,
    email,
    phone,
    college,
    collegeyear,
    ticket,
    size,
  } = initialState;

  const handleChange = (e) => {
    setState({ ...initialState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    
    // console.log(initialState);

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/ishangupta/google_sheets/eofIBPjlYnODPKFP?tabId=Sheet1",
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
              pincode,
              email,
              phone,
              college,
              collegeyear,
              ticket,
              size,
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
        pincode: "",
        email: "",
        phone: "",
        college: "",
        collegeyear: "",
        ticket: "",
        size: "",
      });


      toast("Thank you for your order! We will reach out to you with further details soon!", {
        className: "custom-style",
        progressClassName: "custom-progress",
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,

      });
      console.log("Thanks");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1 className="form">Registration Form</h1>
      <form className="container-form" onSubmit={handleSubmit}>
        <div className="container">
          <div className="required-field">
            <label htmlFor="name"></label>
            <input
              placeholder="Name"
              type="text"
              name="name"
              autoComplete="off"
              value={name}
              onChange={handleChange}
              required
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
              required
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
              required
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
              required
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
              required
            />
          </div>

          <div className="required-field">
            <label htmlFor="pincode"></label>
            <input
              placeholder="Pin Code"
              type="text"
              name="pincode"
              autoComplete="off"
              value={pincode}
              onChange={handleChange}
              required
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
              required
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
              required
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
              required
            />
          </div>

          <div>
            <label htmlFor="items"></label>
            <select
              style={{
                backgroundColor: "#0D0D0D",
                boxShadow: "none",
                borderRadius: "0",
                borderBottom: "2px solid red",
                borderLeft: "2px solid red",
                borderTop: "none",
                borderRight: "none",
                display: "block",
                padding: "0.5rem 0.75rem",
                width: "100%",
                fontSize: "1rem",
                lineHeight: "1.25",
                color: "#ffff",
              }}
              className="form-select"
              onChange={handleChange}
              required
              name="collegeyear"
              value={collegeyear}
              required
            >
              <option selected value="">college year</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
            </select>
          </div>

          <div>
            <label htmlFor="items"></label>
            <select
              style={{
                backgroundColor: "#0D0D0D",
                boxShadow: "none",
                borderRadius: "0",
                borderBottom: "2px solid red",
                borderLeft: "2px solid red",
                borderTop: "none",
                borderRight: "none",
                display: "block",
                padding: "0.5rem 0.75rem",
                width: "100%",
                fontSize: "1rem",
                lineHeight: "1.25",
                color: "#ffff",
              }}
              className="form-select"
              onChange={handleChange}
              required
              name="ticket"
              value={ticket}
              required
            >
              <option selected value="">Purchase Item</option>
              <option value="Ticket">Ticket</option>
              <option value="T-Shirt">T-Shirt</option>
              <option value="Ticket+T-Shirt">Ticket + T-Shirt</option>
            </select>
          </div>

          <div>
            <label htmlFor="size"></label>
            <select
              style={{
                backgroundColor: "#0D0D0D",
                boxShadow: "none",
                borderRadius: "0",
                borderBottom: "2px solid red",
                borderLeft: "2px solid red",
                borderTop: "none",
                borderRight: "none",
                display: "block",
                padding: "0.5rem 0.75rem",
                width: "100%",
                fontSize: "1rem",
                lineHeight: "1.25",
                color: "#ffff",
              }}
              className="form-select"
              onChange={handleChange}
              name="size"
              value={size}

            >
              <option selected value="">
                Size Of T-Shirt
              </option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="2XL">2XL</option>
              <option value="3XL">3XL</option>
            </select>
          </div>

          {/* <!-- Button trigger modal --> */}
          <button
            class="btn btn-block"


            type="submit"
            value="Register"
          >
            Register
          </button>
          <ToastContainer />

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="exampleModalCenter"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div
                class="modal-content"
                style={{ backgroundColor: "rgb(255 255 255 / 91%)" }}
              >
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    Order Processing....
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body" style={{ textAlign: "center" }}>
                  Thank you for your order! We will reach out to you with
                  further details very soon!
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <input className="btn" type="submit" value="Register" />
          </div> */}
        </div>
      </form>
    </>
  );
};

export default Form;
