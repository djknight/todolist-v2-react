import React, { Component } from "react";

let today = new Date();
let options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

function Today() {
  return today.toLocaleDateString("en-US", options);
}

export default Today;
