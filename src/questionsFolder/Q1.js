import React from "react";
import Mistake from "./Mistake";
import Right from "./Right";

import Q2 from "./Q2"
import { useNavigate } from "react-router-dom";
// import Next from "./Next";
export default function Q1() {
  const navigate1 = useNavigate();

  function Next() {
    navigate1("/Q2");
    <Q2></Q2>;
    console.log("navigate Q2");
  }
  return (
    <div>
<br/>
<br/>
<br/>
      <div className="d-grid gap-2 d-md-block">
        <button type="button" className="btn btn-primary btn-lg btn-block">
        עין: אופטומטריסט
        </button>
      </div>
      <br />

      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="button" onClick={Mistake}>
         נכד :אמא
        </button>

        <button className="btn btn-primary" type="button"onClick={Right}>
        שיניים: שיננית
        </button>

        <button className="btn btn-primary" type="button" onClick={Mistake}>
       לידה:נשים
        </button>

        <button className="btn btn-primary" type="button" onClick={Mistake}>
        אף :אפיפית
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
