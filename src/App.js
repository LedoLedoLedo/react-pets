import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <div className="links">
        {/* <Link to="/"></Link> */}
        {/* <Link to="/about">About</Link> */}
      </div>

      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
