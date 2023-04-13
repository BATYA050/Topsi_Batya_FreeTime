import React from "react";
import Mistake from "./Mistake";
import Right from "./Right";

import Q3 from "./Q3"
import { useNavigate } from "react-router-dom";
// import Next from "./Next";
export default function Q2() {
  const navigate1 = useNavigate();

  function Next() {
    navigate1("/Q3");
    <Q3></Q3>;
    console.log("navigate Q3");
  }
  return (
    <div>
<br/>
<br/>
<br/>
      <div className="d-grid gap-2 d-md-block">
        <button type="button" className="btn btn-primary btn-lg btn-block">
    הדום:נגר
        </button>
      </div>
      <br />

      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="button" onClick={Mistake}>
        כסא:ריפוד
        </button>

        <button className="btn btn-primary" type="button"onClick={Mistake}>
     דת:רב
        </button>

        <button className="btn btn-primary" type="button" onClick={Right}>
     עיסה:נחתום
        </button>

        <button className="btn btn-primary" type="button" onClick={Mistake}>
      עור: בורסקאי
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
     

<button id="n" onClick={Next}>לשאלה הבאה </button>
      <br />
        
      </div>
    </div>
  );
}
