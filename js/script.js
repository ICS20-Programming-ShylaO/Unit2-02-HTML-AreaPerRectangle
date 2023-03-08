// Copyright (c) 2023 Shyla Oommen All rights reserved
//
// Created by: Shyla Oommen
// Created on: Mar 2023
// This file contains the JS functions for index.html

function doMathClicked () {
  // this function calculates perimeter and area of a rectangle
  document.getElementById("area").innerHTML = "The area is " + (6 * 8) + " cm<sup>2</sup>."
  document.getElementById("perimeter").innerHTML = "The perimeter is " + 2 * (6 + 8) + " cm."
}

function doCircleMathClicked () {
  // this function calculates circumference and area of a circle
  document.getElementById("circumference").innerHTML = "The circumference is " + 2 * 5 * Math.PI + " cm." + " Rounded, it is 31.42 cm."
  document.getElementById("C_area").innerHTML = "The area is " + 5 ** 2 * Math.PI + " cm<sup>2</sup>." + " Rounded, it is 78.54 cm<sup>2</sup>."
}