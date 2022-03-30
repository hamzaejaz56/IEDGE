import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Route,Routes,Redirect } from "react-router-dom";
import CheckDetail from "./Components/CheckDetail";
import Navbar from "./Components/Navbar";
import AddDetails from "./Components/AddDetails";
import EmployeeCard from "./Components/EmployeeCard";




const App=()=> {
  return (
    <>
    <Navbar/>
    <Routes>

      <Route exact path="/checkDetail" element={<CheckDetail/>} />
      <Route exact path="/addDetails" element={<AddDetails/>} />
      <Route exact path="/EmployeeCard" element={<EmployeeCard/>}/>
      
      {/* <Redirect to="/"/> */}
    </Routes>
    </> 
    
  );
};

export default App;
