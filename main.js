$(function(){
    var c0 = document.getElementById("myCanvas0");
	var ctx = c0.getContext("2d");
	ctx.beginPath();
	ctx.arc(95,50,40,0,2*Math.PI);
	ctx.lineTo(55,50);
	ctx.moveTo(100,50);
	ctx.lineTo(100,10);
	ctx.lineTo(100,90);
	ctx.stroke();  
});

$(function(){
    var c1 = document.getElementById("myCanvas1");
	var ctx = c1.getContext("2d");
	var grd = ctx.createRadialGradient(75,50,5,90,60,100);
	grd.addColorStop(0,"blue");
	grd.addColorStop(1,"black");
	ctx.fillStyle = grd;
	ctx.fillRect(0,0,200,100); 
});

$(function(){
	var mainCanvas = document.getElementById("myCanvas2");
var mainContext = mainCanvas.getContext('2d');
 
var canvasWidth = mainCanvas.width;
var canvasHeight = mainCanvas.height;
 
var angle = 0;
 
var requestAnimationFrame = window.requestAnimationFrame || 
                            window.mozRequestAnimationFrame || 
                            window.webkitRequestAnimationFrame || 
                            window.msRequestAnimationFrame;
 
function drawCircle() {
    mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
     
    // color in the background
    mainContext.fillStyle = "black";
    mainContext.fillRect(0, 0, canvasWidth, canvasHeight);
     
    // draw the circle
    mainContext.beginPath();
     
    var radius = 5 + 40 * Math.abs(Math.cos(angle));
    mainContext.arc(95, 50, radius, 0, Math.PI * 2, false);
    mainContext.closePath();
     
    // color in the circle
    mainContext.fillStyle = "blue";
    mainContext.fill();
      
    angle += Math.PI / 64;
     
    requestAnimationFrame(drawCircle);
}
drawCircle();
});