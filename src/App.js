import React from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Training from "./Pages/Training";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InBerlin from "./Pages/InBerlin";
import PhotoJ from "./Pages/PhotoJ";
import Archives from "./Pages/Archives";
import About from "./Pages/About";
import OpenCloseFootnote from "./Components/OpenCloseFootnote";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/Home' element={<Home />}></Route>
        <Route exact path='/Training' element={<Training />}></Route>
        <Route exact path='/InBerlin' element={<InBerlin />}></Route>
        <Route exact path='/Photoj' element={<PhotoJ />}></Route>
        <Route exact path='/Archives' element={<Archives />}></Route>
        <Route exact path='/About' element={<About />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
