import React, { useEffect } from "react";
import { Routes, Route , Navigate } from "react-router-dom";

import NavBar from "./components/navBar"
import SideNav from "./components/sideNav"
import Header from "./components/header"
import Home from "./pages/home"
import Characters from "./pages/characters"
import Chests from "./pages/chests";
import Foundry from "./pages/foundry";
import Marketplace from "./pages/marketplace";
import Summary from "./components/summary";
import Evolving from "./components/evolving";
import Training from "./components/training";

function App() {
  return (
      <div className="main">
        <NavBar/>
        <SideNav/>
        <div className="section container">
          <Header/>
          <div id="main-content">
          <Routes>
              <Route path='*' element={<Navigate to="home" />}/>
              <Route path='home' element={<Home/>}/>
              <Route path='characters' element={<Characters/>}>
                  <Route path='' element={<Navigate to="summary" />}/>
                  <Route path='summary' element={<Summary/>}/>
                  <Route path='evolving' element={<Evolving/>}/>
                  <Route path='training' element={<Training/>}/>
              </Route>
              <Route path='chests' element={<Chests/>}/>
              <Route path='foundry' element={<Foundry/>}/>
              <Route path='Marketplace' element={<Marketplace/>}/>
          </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
