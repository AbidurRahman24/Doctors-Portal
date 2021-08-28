import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Appoinment from "./components/Appointment/Appointment/Appoinment";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <div >
     <Router>
       <Switch>
         <Route exact path='/'>
           <Home></Home>
         </Route>
         <Route path='/appoinment'>
           <Appoinment></Appoinment>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
