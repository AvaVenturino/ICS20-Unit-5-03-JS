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
  const age = parseInt(document.getElementById("age").value)

  // process
  if (age == 17) {
    document.getElementById("answer").innerHTML = "You can see an R rated movie alone"
    }
    else if (age == 13) {
      document.getElementById("answer").innerHTML = "You can see an PG 13 rated movie alone"
    }
    else if (age == 5) {
      document.getElementById("answer").innerHTML = "You can see an G rated movie alone"
    }
  } else {
    document.getElementById("answer").innerHTML = "Uh. You are too young for most things!"
  }
}
