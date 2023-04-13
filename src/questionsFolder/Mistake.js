import React from "react";
export default function Mistake() {
  console.log("enter to Mistake ");

  document.createElement("button").id = "b";
  document.getElementById("b").innerHTML = "התשובה שגויה";
  document.getElementById("b").className = "btn btn-warning";
}
