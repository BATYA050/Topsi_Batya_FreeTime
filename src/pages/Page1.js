import React from "react";
import Q1 from "../questionsFolder/Q1";
import { useNavigate } from "react-router-dom";

export default function Page1() {
  const navigate1 = useNavigate();

  function Next() {
    navigate1("/Q1");
    <Q1></Q1>;
    console.log("navigate Q1");
  }
  return (
    <div>
      <h1 className="h1  display-4 text-danger">ברוכה הבאה </h1>
      <br />
      <br />
      <p className="h3 text-info">
        אנלוגיות מילוליות נחשבות לחלק משמעותי מהאינטליגנציה האנושית
        <br />
        הגיון אינדוקטיבי יכולת הסקה ממקרה פרטי לכלל
        <br />
        והגיון יום-יומי, כמו גם מיכולת הלמידה, הבנה סביבתית ויכולת יצירת רעיונות
        חדשים
      </p>
      <br />
      <br />

      <button onClick={Next} className="btn btn-primary h5">
        תחילת המבחן
      </button>
      {/* <button >לשאלה הבאה </button> */}
    </div>
  );
}
