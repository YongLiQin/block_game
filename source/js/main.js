var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var btn_begin = document.getElementById('btn_begin');
var btn_rebegin = document.getElementById('btn_rebegin');
var btn_change = document.getElementById('btn_change');
var speed = 50, w = 0, number = 0, width = 3, height = 3,
time = 600, scoreGET = 0, h_num = 12, w_num = 11;
var color, lineHeight, target_num, timer, i = 1;
document.getElementById('con_score').innerHTML =  '总分:' + scoreGET;
btn_begin.onclick = Begin;
btn_rebegin.onclick = reBegin;
btnLeft.onclick = btn_l;
btnRight.onclick = btn_r;
btn_change.onclick = Change;