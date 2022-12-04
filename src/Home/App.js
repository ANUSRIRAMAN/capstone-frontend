// import "../App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Markdown from "../Components/Markdown/Markdown";
import Login from "../Components/Login/Login";
import Register from "../Components/register/Register";

// import Signup from "../Components/Signup/index"
// import Login from "../Components/Login/index";
function App() {
  const [markDown, setMarkDown] = useState("# markdown preview");
  // const user = localStorage.getItem("token");
  return (
   <>
{/* <BrowserRouter>
<Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/" element={<Markdown/> } />
</Routes>
</BrowserRouter> */}
   <BrowserRouter>
        <Routes>
          <Route path="/mainpage" element={<Markdown/>} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
 

 
   </> 
  );
}

export default App;
