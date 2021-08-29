import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Appoinment from "./components/Appointment/Appointment/Appoinment";
import AllPatients from "./components/Deshboard/AllPatients/AllPatients";
import Deshboard from "./components/Deshboard/Deshboard/Deshboard";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/deshboard/appoinment'>
            <Deshboard></Deshboard>
          </Route>
          <Route path='/appoinment'>
            <Appoinment></Appoinment>
          </Route>
          <Route path=''>
            <AllPatients></AllPatients>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
