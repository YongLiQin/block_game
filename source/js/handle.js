function Begin () {
	btnContions(true, false, false, false, false);
	createBlock();
	timer = setInterval(handle, time);
};
function reBegin () {
	btnContions(false, true, true, true, true);
	var domCount = document.getElementsByClassName('box');
	for(var j = 0; j < domCount.length; i++)
	{
		domCount[j].remove();
	}
	for(var x = 0; x < 12; x++)
	{
		for(var y = 0; y < 11; y++)
		{
			myarr[x][y] = 0;
		}
	}
};
function btn_l () {
	justify(-speed, -1);
};
function btn_r () {
	justify(speed, 1);
};
function Change () {
	rotate(target_num);
};