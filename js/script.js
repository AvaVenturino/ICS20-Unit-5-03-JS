// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-02-JS/sw.js", {
    scope: "/ICS20-Unit-5-02-JS/",
  })
}

/**
 * Input
 */
function myButtonClicked() {
  const numbervalue = parseInt(document.getElementById("numbervalue").value)

  // process
  if (numbervalue < 0) {
    document.getElementById("answer").innerHTML = "The number is negative!"
  } else {
    document.getElementById("answer").innerHTML = "The number is positive!"
  }
}
