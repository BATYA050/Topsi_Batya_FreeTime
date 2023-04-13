import React from "react";
import { useNavigate } from "react-router-dom";

import Q4 from "../questionsFolder/Q4";

export default function Page2() {
  const navigate1 = useNavigate();

  function Next() {
    navigate1("/Q4");
    <Q4></Q4>;
    console.log("navigate Q4");
  }
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h1 className="h1  display-4 text-danger"> סדרות מספריות</h1>
      <p className="h3 text-info">
        מבחן סדרות מספריות בוחן יכולת להסקה אינדוקטיבית ודדוקטיבית
        <br />
        יכולת ההסקה נחשבת למרכיב משמעותי באינטליגנציה האנושית כבר עשורים רבים.
        <br />
      </p>
      <button className="btn btn-primary" onClick={Next}>
        המשך המבחן
      </button>
    </div>
  );
}
