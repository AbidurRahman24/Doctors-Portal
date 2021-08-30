import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddDoctors from "./components/AddDoctors/AddDoctors";
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
          <Route path='/deshboard/addDoctors'>
            <AddDoctors></AddDoctors>
          </Route>
          <Route path='/deshboard'>
            <Deshboard></Deshboard>
          </Route>
          <Route path='/appoinment'>
            <Appoinment></Appoinment>
          </Route>
          <Route path='/doctor/patients'>
            <AllPatients></AllPatients>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
