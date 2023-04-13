import logo from "./logo.svg";
import {
  Route,
  Router,
  Routes,
  BrowserRouter,
  Link,
  Outlet,
} from "react-router-dom";

import "./App.css";
import Page1 from "./pages/Page1.js";
import Page2 from "./pages/Page2.js";



import Finish from "./pages/Finish.js";
import Q1 from "./questionsFolder/Q1";

import Q2 from "./questionsFolder/Q2";
import Q3 from "./questionsFolder/Q3";
import Q4 from "./questionsFolder/Q4";
import Q5 from "./questionsFolder/Q5";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <div>  <Link to="./UserDetails2">UserDetails</Link> </div>
      <div> <Link to="./FormMy">FormMy</Link></div> */}

        <Routes>
          {/* <Route path="/" element={<formMy />}/> */}
          <Route path="/Page1" element={<Page1 />} />
          <Route path="" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Q1" element={<Q1 />} />
          <Route path="/Q2" element={<Q2 />} />
          <Route path="/Q3" element={<Q3 />} />
          <Route path="/Q4" element={<Q4 />} />
          <Route path="/Q5" element={<Q5 />} />
          <Route path="/Finish" element={<Finish />} />
          {/* <Route path="./questionsFolder/Q1" element={<Q1/>} /> */}
          {/* <Route path="/UserDetails2" element={   <UserDetails2 />  }/>
          <Route path="/FormMy" element={<FormMy />} />
          <Route path="/BayBay" element={<BayBay/>} />
          <Route path="/Help" element={<Help/>} /> */}
          {/* <Route path="/BayBay" element={<BayBay/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
