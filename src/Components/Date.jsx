import React, { Component } from "react";

let today = new date();
let options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

function date() {
  return today.toLocaleDateString("en-US", options);
}

export default Date;
