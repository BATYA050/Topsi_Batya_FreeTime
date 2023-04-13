import React from "react";
import Mistake from "./Mistake";
import Right from "./Right";
import Page2 from "../pages/Page2";
import Q5 from "./Q5"
// import Q3 from "./Q3"
import { useNavigate } from "react-router-dom";

// import Next from "./Next";
export default function Q4() {
    console.log("enter q4")
  const navigate1 = useNavigate();

  function Next() {
    navigate1("/Q5");
    < Q5></Q5>;
    console.log("navigate Q5");
  }
  return (
    <div>
<br/>
<br/>
<br/>
      <div className="d-grid gap-2 d-md-block">
        <button type="button" className="btn btn-primary btn-lg btn-block">
10-20-40-70-110-?
        </button>
      </div>
      <br />

      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary rounded-circle" type="button" onClick={Mistake}>
     220
        </button>

        <button className="btn btn-primary rounded-circle" type="button"onClick={Mistake}>
120
        </button>

        <button className="btn btn-primary rounded-circle" type="button" onClick={Right}>
   160
        </button>

        <button className="btn btn-primary rounded-circle" type="button" onClick={Mistake}>
    150
        </button>

<br/>
<br/>
<br/>



        <div className="d-grid gap-2 d-md-block">
        <button type="button" 
        // className="btn btn-success"
         id="b">
  
        </button>
      </div>
     

<button onClick={Next}>לשאלה הבאה </button>
      <br />
        
      </div>
    </div>
  );
}
