var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var radius = 5;
var drag = false;
context.lineWidth = 2*radius;
var putPoint = function (e)
{		
		if(drag)
		{
			context.lineTo(e.clientX,e.clientY);
			context.stroke();
			context.beginPath();
			context.arc(e.clientX,e.clientY,radius,0,2*Math.PI);
			context.fill();
			context.beginPath();
			context.moveTo(e.clientX,e.clientY);
			console.log('hi');
		}
}
var engage = function(e)
{
	drag = true;
	putPoint(e)
}
var disengage = function()
{
	drag = false;
	context.beginPath();
}
canvas.addEventListener('mousemove',putPoint);
canvas.addEventListener('mousedown',engage);
canvas.addEventListener('mouseup',disengage);
