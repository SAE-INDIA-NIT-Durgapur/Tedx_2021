import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Speakers from "./components/Speakers"
import Sponsors from "./components/Sponsors"
import Home from "./components/Home"
import About from "./components/About"
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Switch>

          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/about" >
            <About />
          </Route>

          <Route exact path="/speakers" >
            <Speakers />
          </Route>

          <Route exact path="/sponsors" >
            <Sponsors />
          </Route>

          <Route exact path='/*' />

        </Switch>

      </div>
      <Footer />
    </>
  );
}

export default App;
