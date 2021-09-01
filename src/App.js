import React, { createContext, useState } from "react";
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
import Login from "./components/LogIn/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
          <PrivateRoute path='/deshboard'>
            <Deshboard></Deshboard>
          </PrivateRoute>
          <Route path='/appoinment'>
            <Appoinment></Appoinment>
          </Route>
          <Route path='/doctor/patients'>
            <AllPatients></AllPatients>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
