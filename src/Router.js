import React from "react";
import Home from "./Home/Home";
import Game from "./Home/Game/Game";
import Details from "./Home/Details/Details";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function Router() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/game-on" element={<Game />} />
      </Routes>
    </div>
  );
}

export default Router;
