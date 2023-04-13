import React from "react";
import Mistake from "./Mistake";
import Right from "./Right";
import Finish from "../pages/Finish";
// import Q5 from "./Q5"
// import Q3 from "./Q3"
import { useNavigate } from "react-router-dom";

// import Next from "./Next";
export default function Q5() {
    console.log("enter q4")
  const navigate1 = useNavigate();

  function Next() {
    navigate1("/Finish");
    < Finish></Finish>;
    console.log("navigate Finish");
  }
  return (
    <div>
<br/>
<br/>
<br/>
      <div className="d-grid gap-2 d-md-block">
        <button type="button" className="btn btn-primary btn-lg btn-block">
1-2-4-7-28-?
        </button>
      </div>
      <br />

      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary rounded-circle" type="button" onClick={Mistake}>
     32
        </button>

        <button className="btn btn-primary rounded-circle" type="button"onClick={Right}>
33
        </button>

        <button className="btn btn-primary rounded-circle" type="button" onClick={Mistake}>
   35
        </button>

        <button className="btn btn-primary rounded-circle" type="button" onClick={Mistake}>
    84
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
