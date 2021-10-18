import React, { useState, useRef } from "react";
import "../CSS/form.css";
import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Order Processing....</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 style={{ textAlign: "center" }}>
          Thank you for your order! We will reach out to you with further
          details very soon!
        </h5>
      </Modal.Body>
    </Modal>
  );
}

const Form = () => {
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

  const [modalShow, setModalShow] = React.useState(false);

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
    ticket,
    size,
  } = initialState;

  const handleChange = (e) => {
    setState({ ...initialState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("Submit");
    // console.log(initialState);
    setModalShow(true);
    // show the modal

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/ishangupta614/google_sheets/EFbQThhmJkbEKSRY?tabId=Sheet1",
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
        email: "",
        phone: "",
        college: "",
        collegeyear: "",
        ticket: "",
        size: "",
      });

      // alert(
      //   "Thank you for your order! We will reach out to you with further details soon!"
      // );
      // console.log("Thanks");
      // console.log(initialState);
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
          </div> */}

          {/* <div className="required-field">
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

          <div className="required-field">
            <label htmlFor="collegeyear"></label>
            <input
              placeholder="College Year"
              type="text"
              name="collegeyear"
              autoComplete="off"
              value={collegeyear}
              onChange={handleChange}
              required
            />
          </div>

          <div className="required-field">
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
              name="ticket"
              value={ticket}
              required
            >
              <option selected value="">
                Purchase Items
              </option>
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

          <button class="btn btn-block" type="submit" value="Register">
            Register
          </button>

          {/* <!-- Modal --> */}
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </form>
    </>
  );
};

export default Form;
