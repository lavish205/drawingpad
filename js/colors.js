var colors = document.getElementsByClassName('color');

for (var i = 0, n = colors.length; i<n; i++) 
{
	colors[i].addEventListener('click', setColor);
}
function set(col)
{
	context.fillStyle = col;
	context.strokeStyle = col;
	var active =  document.getElementsByClassName('active') [0];
	if(active)
	{
		active.className = 'color';
	}
}
 function setColor(e)
{
	//identify color
	var color = e.target;
	// set color
	set(color.style.backgroundColor);
	// set active
	color.className += ' active';
}