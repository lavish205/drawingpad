document.getElementById('clear').addEventListener('click', function() {
      context.clearRect(0, 0, canvas.width, canvas.height);
}, false);

document.getElementById('save').addEventListener('click',function(){
	var dataURL = canvas.toDataURL();
	Canvas2Image.saveAsPNG(canvas);
	
});