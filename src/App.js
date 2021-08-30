import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Lottie from "react-lottie";
import * as location from "../src/lf20_1vvry1ud.json";
import React, { useEffect, useState } from "react";
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer"
import Speakers from "./components/Speakers"
import Sponsors from "./components/Sponsors"
import Home from "./components/Home"
import About from "./components/About"
import Info from './components/Aboutus';
import { Switch, Route } from 'react-router-dom';
import Countdown from './components/Countdown';
import Register from './components/Register'

function App() {

  const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "none",
  },
};

  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 3000);
  }, []);

  return (
    <>
    { 
      !(loading) ? 
      <div className="fluid-container-loader">
      <div className="loader-op">
      <Lottie options={defaultOptions} height={200} width={200} />
      </div>
      </div>
      :
      <>
      <Navbar />
      <div className="App">
        <Switch>

          <Route exact path="/" >
            <Home /><About/><Countdown />
          </Route>
          <Route exact path="/about" >
            <Info />
          </Route>

          <Route exact path="/speakers" >
            <Speakers />
          </Route>

          <Route exact path="/sponsors" >
            <Sponsors />
          </Route>

          <Route exact path="/register" >
            <Register />
          </Route>

          <Route exact path='/*' />

        </Switch>

      </div>

      <Footer />
      </>
    }
    </>
  );
}

export default App;
