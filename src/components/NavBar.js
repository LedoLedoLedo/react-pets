import React from "react";
import { Link } from "react-router-dom"; // <== IMPORT

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/"> Home </Link> {/* <== ADD */}
      <Link to="/about"> About </Link> {/* <== ADD */}
      <Link to="/projects">Dogs </Link> {/* <== ADD */}
    </nav>
  );
}

export default NavBar;

// const NavBar = () => {
//   return (  <div className="bnt">

//  <button>Nibble</button> <br/>
//  <button>Dogs</button> <br/>
//  <button>Rescues</button><br/>

//  {/* <Link to="./About.js">
//  <button>About us</button><br/>
//  </Link> */}
//  </div>
//   )
// }
