
import { useState, React } from "react";
import { MyContext } from './Components/MyContext';
import MyComponent from "./Components/MyComponent";
import Product from "./Components/Product";
import Webpages from "./webpages/Index";
import PostWebpages from "./PostComponent/PostIndex";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeForm from "./EmployeeComponents/EmployeeForm";
import OnlineComponent from "./Components/OnlineComponent";

function App() {
  //const [text,setText]= useState("Imarticus");
  return (
    <div>
      {/*<MyContext.Provider value={{text , setText}}>
      </MyContext.Provider>
      <Product />
  
  <div>
    <h1 style={{color:"red"}}>Adding the Employee details</h1>
    <div class="col">
      {/*<EmployeeForm/>
      
    </div>
  </div>*/}
  <OnlineComponent/>
    </div>
    
  );
}

export default App;
