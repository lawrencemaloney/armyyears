import React from "react";
// import Header from "./Components/Header";
import Home from "./Pages/Home";
import Training from "./Pages/Training";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InBerlin from "./Pages/InBerlin";
import BOarticles from "./Pages/BOarticles";
import MyPhotos from "./Pages/MyPhotos";
import Archives from "./Pages/Archives";
import About from "./Pages/About";
import BOarticle1770 from "./Pages/BOarticle1770";
// import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>


    {/* <div className="flex flex-col items-center justify-center min-h-screen py-2"> */}
      {/* <Sidebar /> */}

    {/* </div> */}

    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/Home" element={<Home />}></Route>
        <Route exact path="/Training" element={<Training />}></Route>
        <Route exact path="/InBerlin" element={<InBerlin />}></Route>
        <Route exact path="/BOarticles" element={<BOarticles />}></Route>
        <Route exact path="/MyPhotos" element={<MyPhotos />}></Route>
        <Route exact path="/Archives" element={<Archives />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/BOarticle1770" element={<BOarticle1770 />}></Route>
      </Routes>
    </Router>
    </>
      );

}

export default App;
