// Copyright (c) 2022 Ava Venturino All rights reserved
//
// Created by: Ava Venturino
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit-5-03-JS/sw.js", {
    scope: "/ICS20-Unit-5-03-JS/",
  })
}

/**
 * Input
 */
function myButtonClicked() {
  const age17 = parseInt(document.getElementById("age17").value)
  const age13 = parseInt(document.getElementById("age13").value)
  const age5 =  parseInt(document.getElementById("age5").value)

  // process
  if (age17 == 17) {
    document.getElementById("answer").innerHTML = "You can see an R rated movie alone"
    }
    else if (age13 == 13) {
      document.getElementById("answer").innerHTML = "You can see an PG 13 rated movie alone"
    }
    else if (age5 == 5) {
      document.getElementById("answer").innerHTML = "You can see an G rated movie alone"
    }
    else {
    document.getElementById("answer").innerHTML = "Uh. You are too young for most things!"
  }
}
