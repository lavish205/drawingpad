var setRadius = function changeRadius(value)
{
	if (value<minrad)
		value = minrad;
	if (value>maxrad)
		value = maxrad;
		radius = value;
		context.lineWidth = 2*radius;
		document.getElementById('radVal').innerHTML = radius;
}
var minrad = 1,
	maxrad = 40,
	incRad = document.getElementById('inc'),
	decRad = document.getElementById('dec');

incRad.addEventListener('click', function(){
	setRadius(radius+2);
});
decRad.addEventListener('click',function(){
	setRadius(radius-2);
});
var text = document.getElementById('radval');
