import React, { Component } from "react";
const Fname = "Daniel";
const Lname = " Knight";

function Footer() {
  return (
    <footer>
      <p>
        Copyright © {new Date().getFullYear()} {Fname + Lname}
      </p>
    </footer>
  );
}

export default Footer;
