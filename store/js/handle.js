function Begin () {
	btnContions(true, false, false, false, false);
	createBlock();
	timer = setInterval(handle, time);
};
function reBegin () {
	btnContions(false, true, true, true, true);
	var container = document.getElementById('container');
	container.innerHTML = '';
	clearInterval(timer);
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