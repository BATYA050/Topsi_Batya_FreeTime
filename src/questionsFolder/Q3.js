import React from "react";
import Mistake from "./Mistake";
import Right from "./Right";
import Page2 from "../pages/Page2";
// import Q3 from "./Q3"
import { useNavigate } from "react-router-dom";
// import Next from "./Next";
export default function Q3() {
  console.log("enter q3");
  const navigate1 = useNavigate();

  function Next() {
    navigate1("/Page2");
    <Page2></Page2>;
    console.log("navigate Page2");
  }
  return (
    <div>
      <br />
      <br />
      <br />
      <div className="d-grid gap-2 d-md-block">
        <button type="button" className="btn btn-primary btn-lg btn-block">
          בוסר:הבשיל
        </button>
      </div>
      <br />

      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-primary" type="button" onClick={Mistake}>
          מדווה:כאוב
        </button>

        <button className="btn btn-primary" type="button" onClick={Right}>
          ילד: הגיע לפרקו
        </button>

        <button className="btn btn-primary" type="button" onClick={Mistake}>
          הזדקן: קשיש
        </button>

        <button className="btn btn-primary" type="button" onClick={Mistake}>
          התחצף:מנומס
        </button>

        <br />
        <br />
        <br />

        <div className="d-grid gap-2 d-md-block">
          <button
            type="button"
            // className="btn btn-success"
            id="b"
          ></button>
        </div>

        <button onClick={Next}>לשאלה הבאה </button>
        <br />
      </div>
    </div>
  );
}
