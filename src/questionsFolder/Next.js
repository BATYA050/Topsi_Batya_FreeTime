import React from "react";

import { useNavigate } from "react-router-dom";

export default function Next(q)
{
//     let navigate1 = useNavigate();

//    console.log(`/${q}`)
//    console.log(`/${q}`)

   
//     navigate1(`/${q}`);
//    <q></q>
//     console.log("navigate q");
// }
// const navigate = useNavigate();
// document.getElementById("n").onclick="{()=>navigate(`/${q}`)}"
    
// // return (
// //     <>
// //       <h1 style={{color:"green"}}>GeeksForGeeks</h1>
// //       <button onClick={()=>navigate("/about")}>About</button>
// //     </>
// // )
// }
let navigate = useNavigate();

console.log("useNAV")



function help() {
  navigate(`/${q}`)
}
return (
  <div>
    <button onClick={help}>next</button>
  </div>
);
}
