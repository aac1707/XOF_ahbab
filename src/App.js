import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Art from "./pages/Consulting";
import Contactus from "./pages/Contactus";
import Code from "./pages/Design";
import Aero from "./pages/Development";
import Robo from "./pages/Robo";
import Events from "./pages/Products";
import Clubs from "./pages/Services";
import Signup from "./pages/Signup";
import Loki from './Between/applyart.js'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contactus" component={Contactus}></Route>
          <Route path="/events" component={Events}></Route>
          <Route path="/clubs" component={Clubs}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/robo" component={Robo}> </Route>
          <Route path="/aero" component={Aero}></Route>
          <Route path="/code" component={Code}></Route>
          <Route path="/art" component={Art}></Route>
          <Loki/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
