// JavaScript File
// let statements
let circleDiameter;
let circleRadius;
let circleArea;
let circleCircumference;
const pi = 3.14;
// function to take inputted value of diameter and calculate area and circumference with it
function myMath () {
  //finds inputted value
  circleDiameter = document.getElementById("diameterinput").value;
  // r = d / 2
  circleRadius = circleDiameter / 2;
  // A = pi*r^2
  circleArea = pi * circleRadius * circleRadius;
  // C = pi*d
  circleCircumference = pi * circleDiameter;
  // alert that outputs the area and circumference with a message
  alert("The area of the circle is " + circleArea + " and the circumference is " + circleCircumference + ".");
}
//event listener waiting for double click to trigger function
window.addEventListener("dblclick", myMath);