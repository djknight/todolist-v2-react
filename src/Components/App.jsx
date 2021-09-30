import React, { Component } from "react";
import About from "./About";
// import Header from "./Header";
import Footer from "./Footer";
import Today from "./Today";
import List from "./List";

//about--------------------------  done
//list?------- ------------------  Need to recode
//header and footers /css--------  done ish - header needs to be done
// create entry points
//props
//import
//map
function App() {
  return (
    <div>
      <Today />
      <About />
      <Footer />
      <List />
    </div>
  );
}
export default App;
