// JavaScript File
// let statements
let circleDiameter;
let circleRadius;
let circleArea;
let circleCircumference;
const pi = 3.14;
function myMath () {
  circleDiameter = document.getElementById("diameterinput").value;
  circleRadius = circleDiameter / 2;
  circleArea = pi * circleRadius * circleRadius;
  circleCircumference = pi * circleDiameter;
  alert("The area of the circle is " + circleArea + " and the circumference is " + circleCircumference + ".");
}
window.addEventListener("dblclick", myMath);