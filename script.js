const h3 = document.getElementsByTagName("h3")[0];
const body = document.getElementsByTagName("body")[0];
const inputColor1 = document.querySelector("#inputColor1");
const inputColor2 = document.getElementById("inputColor2");
const btnToRight = document.querySelector("#btnToRight");
const btnToLeft = document.querySelector("#btnToLeft");
let directionOfGradient = "to right";
function setGradientColor(){
	body.style.background =
	"linear-gradient(" + directionOfGradient + ", "
	+ inputColor1.value
	+ ", "
	+ inputColor2.value
	+ ")";

	h3.textContent = body.style.background + ";";
}

// function setGradientDirection(){
// 	directionOfGradient = 
// }

inputColor1.addEventListener("input", setGradientColor);
inputColor2.addEventListener("input", setGradientColor);
btnToRight.addEventListener("click", function(){
	directionOfGradient = "to right";
	setGradientColor();
});
btnToLeft.addEventListener("click", function(){
	directionOfGradient = "to left";
	setGradientColor();
});

console.log(body);

var _ = require('lodash');
const arr = [1,2,3,4,5,6,7,8];

console.log("answer", _.without(arr, 3));