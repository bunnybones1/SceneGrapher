console.log("Hello World.");

var url = require('url');
console.log(url.parse(window.location.href));

var Scene = require('./Scene');
var scene = new Scene();
scene.load('scenes/testScene.json');
$(document.body).append(scene.workArea.display);

/*
var scale = .5;
var tx = 0;
var ty = 0;
var tz = 0;
var tM = $M([
	[scale, 0, 0, 0],
	[0, scale, 0, 0],
	[0, 0, scale, 0],
	[tx, ty, tz, 1]
]);

s  = "matrix3d("
s += tM.e(1,1).toFixed(10) + "," + tM.e(1,2).toFixed(10) + "," + tM.e(1,3).toFixed(10) + "," + tM.e(1,4).toFixed(10) + ","
s += tM.e(2,1).toFixed(10) + "," + tM.e(2,2).toFixed(10) + "," + tM.e(2,3).toFixed(10) + "," + tM.e(2,4).toFixed(10) + ","
s += tM.e(3,1).toFixed(10) + "," + tM.e(3,2).toFixed(10) + "," + tM.e(3,3).toFixed(10) + "," + tM.e(3,4).toFixed(10) + ","
s += tM.e(4,1).toFixed(10) + "," + tM.e(4,2).toFixed(10) + "," + tM.e(4,3).toFixed(10) + "," + tM.e(4,4).toFixed(10)
s += ")"

console.log(s);

thing.css('-webkit-transform-origin', '0% 0%');
thing.css('-webkit-transform', s);
*/

/*
document.addEventListener("mousedown", onObjectMouseDown, false);
function onObjectMouseDown(val) {
	console.log("adding", val);
	document.addEventListener("mouseup", onObjectMouseUp, false);
}
function onObjectMouseUp(val) {
	console.log("removing", val);
	document.removeEventListener("mouseup", onObjectMouseUp, false);
}
*/
//document.addEventListener("mouseup", function(val){console.log(val)}, false);
//document.addEventListener("mousemove", function(val){console.log(val)}, false);