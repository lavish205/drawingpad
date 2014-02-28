var save = document.getElementById('button');
save.addEventListener('click',function(){
	var data = 	canvas.toDataURL();
	console.log('save');
	Canvas2Image.saveAsPNG(canvas);
});