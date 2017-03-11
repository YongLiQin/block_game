function btnContions (...bl) {
	btn_begin.disabled = bl[0];
	btnLeft.disabled = bl[1];
	btnRight.disabled = bl[2];
	btn_change.disabled = bl[3];
	btn_rebegin.disabled = bl[4];
};

function create(colorR) {
 	number == 19 ? number = 0 : number++;
 	Block (number, colorR);
};

function Block (t ,colorR) {
	target_num = t;
	for(let x = 0; x < height; x++ )
	{
		for(let y = 0; y < width; y++)
		{
			if(digit[t][x][y])
			{
				var Odiv = document.createElement("div");
				Odiv.className = 'box' + x + y;
				Odiv.id = 'target' + t + x + y;
				Odiv.style.backgroundColor = colorR;
				var Ocontainer = document.getElementById("container");
				Ocontainer.appendChild(Odiv);
			}
		}
	}
};

function createBlock () {
	switch (w) {
		case 0:
			color = '#592B53';
			create(color);
			break;
		case 1:
			color = '#32EE32';
			create(color);
			break;
		case 2:
			color = 'yellow';
			create(color);
			break;
		case 3:
			color = '#D06F80';
			create(color);
			break;
		case 4:
			color = 'black';
			create(color);
			break;
		case 5:
			color = 'red';
			create(color);
			break;
		case 6:
			color = '#05FB05';
			create(color);
			break;
	};
};

function remove (t) {
	for(let x = 0; x < height; x++)
	{
		for(let y = 0; y < width; y++)
		{
			if(digit[t][x][y])
			{
				document.getElementById('target' + t + x + y).remove();
			}
		}
	} 
};

function source (t) {
	var ty, lx, n = 1;
	for(let x = 0; x < height; x++)
	{
		for(let y = 0; y < width; y++)
		{
			if(digit[t][x][y])
			{
				var box = document.getElementById("target" + t + x + y);
				if(n)
				{
					ty = box.offsetTop;
					lx = box.offsetLeft;
					n = 0;
				}
				else 
				{
					ty = ty < box.offsetTop ? ty : box.offsetTop;
					lx = lx < box.offsetLeft ? lx : box.offsetLeft;
				}
				
			}
		}
	}
	return {lx, ty};
};

function moveTop (t, {lx, ty}) {
	for(let x = 0; x < height; x++)
	{
		for(let y = 0; y < width; y++)
		{
			if(digit[t][x][y])
			{
				var box = document.getElementById("target" + t + x + y);
				box.style.left = y * 50 + lx + 'px';
				box.style.top = x * 50 + ty + 'px';
			}
		}
	}
};

function rotate (t) {
	switch (t) {
		case 1:
			var {lx, ty} = source (1);
			if(rotateJust(4, {lx, ty}))
			{
				break;
			}
			remove (1);
			Block (4, color);
			moveTop (4, {lx, ty});
			target_num = 4;
		break;
		case 4:
			var {lx, ty} = source (4);
			if(rotateJust(7, {lx, ty}))
			{
				break;
			}
			remove (4);
			Block (7, color);
			moveTop (7, {lx, ty});
			target_num = 7; 
		break;
		case 7:
			var {lx, ty} = source (7);
			if(rotateJust(9, {lx, ty}))
			{
				break;
			}
			remove (7);
			Block (9, color);
			moveTop (9, {lx, ty});
			target_num = 9;
		break;
		case 9:
			var {lx, ty} = source (9);
			if(rotateJust(1, {lx, ty}))
			{
				break;
			}
			remove (9);
			Block (1, color);
			moveTop (1, {lx, ty});
			target_num = 1;
		break;
		case 10:
			var {lx, ty} = source (10);
			if(rotateJust(12, {lx, ty}))
			{
				break;
			}
			remove (10);
			Block (12, color);
			moveTop (12, {lx, ty});
			target_num = 12;
		break;
		case 12:
			var {lx, ty} = source (12);
			if(rotateJust(15, {lx, ty}))
			{
				break;
			}
			remove (12);
			Block (15, color);
			moveTop (15, {lx, ty});
			target_num = 15;
		break;
		case 15:
			var {lx, ty} = source (15);
			if(rotateJust(18, {lx, ty}))
			{
				break;
			}
			remove (15);
			Block (18, color);
			moveTop (18, {lx, ty});
			target_num = 18;
		break;
		case 18:
			var {lx, ty} = source (18);
			if(rotateJust(10, {lx, ty}))
			{
				break;
			}
			remove (18);
			Block (10, color);
			moveTop (10, {lx, ty});
			target_num = 10;
		break;
		case 2:
			var {lx, ty} = source (2);
			if(rotateJust(5, {lx, ty}))
			{
				break;
			}
			remove (2);
			Block (5, color);
			moveTop (5, {lx, ty});
			target_num = 5;
		break;
		case 5:
			var {lx, ty} = source (5);
			if(rotateJust(13, {lx, ty}))
			{
				break;
			}
			remove (5);
			Block (13, color);
			moveTop (13, {lx, ty});
			target_num = 13;
		break;
		case 13:
			var {lx, ty} = source (13);
			if(rotateJust(17, {lx, ty}))
			{
				break;
			}
			remove (13);
			Block (17, color);
			moveTop (17, {lx, ty});
			target_num = 17;
		break;
		case 17:
			var {lx, ty} = source (17);
			if(rotateJust(2, {lx, ty}))
			{
				break;
			}
			remove (17);
			Block (2, color);
			moveTop (2, {lx, ty});
			target_num = 2;
		break;
	};

};

function justify (speed_, dir) {
	for(let x = height - 1; x >= 0; x--)
	{
		for(let y = 0; y < width; y++)
		{
			if(digit[target_num][x][y])
			{
				var box = document.getElementById("target" + target_num + x + y);
				if(myarr[box.offsetTop / 50][box.offsetLeft / 50 + dir])
				{
					return 0;
				}
				if(!(box.offsetLeft > 0 && box.offsetLeft < (w_num - 1) * 50))
				{
					if(box.offsetLeft == (w_num - 1) * 50 && (dir < 0));
					else if (box.offsetLeft == 0 && (dir > 0));
					else
					{
						return 0;
					}	
				}
			}
		}
	}
	for(let x = 0; x < height; x++)
	{
		for(let y = 0; y < width; y++)
		{
			if(digit[target_num][x][y])
			{
				var box = document.getElementById("target" + target_num + x + y);
				box.style.left = box.offsetLeft + speed_ + 'px';
			}
		}
	}
};

function blchange () {
	for(let x = 0; x < height; x++)
	{
		for(let y = 0; y < width; y++)
		{
			if(digit[target_num][x][y])
			{
				var box = document.getElementById("target" + target_num + x + y);
				myarr[box.offsetTop / 50][box.offsetLeft / 50] = 1;
				box.id = `line${box.offsetTop / 50}`;
				box.className += ` line${box.offsetTop / 50}`;
				box.setAttribute('name', `line${box.offsetTop / 50}`);
				box.setAttribute('data_x', `${box.offsetLeft / 50}`);
				box.setAttribute('data_y', `${box.offsetTop / 50}`);
				if(i)
				{
					lineHeight = box.offsetTop / 50;
					i = 0;
				}
				else 
				{
				 	var ty = box.offsetTop / 50;
				 	lineHeight = lineHeight > ty ? ty : lineHeight;
				} 
				
			}
		}
	}
	score ();
};

function score () {
	for(let x = h_num - 1; x >= lineHeight; x--)
	{
		var count = document.getElementsByName(`line${x}`);
		if(count.length == 11)
		{
			scoreGET += 10;
			document.getElementById('con_score').innerHTML =  '总分:' + scoreGET;
			for(;;)
			{	if(!document.getElementsByName(`line${x}`).length) break;
				for(let y = 0; y < count.length; y++)
				{
					var a = document.getElementById(`line${x}`);
					var t = count[y].getAttribute('data_y');
					var b = count[y].getAttribute('data_x');
					myarr[t][b] = 0;
					count[y].remove();
				}
			}
			moveAgain (x);
		}
	}
};

function moveAgain (x) {
	for(let y = x - 1; y >= lineHeight; y--)
	{
		var count = document.getElementsByClassName(`line${y}`);
		for(let r = 0; r < count.length; r++)
		{
			var t = count[r].getAttribute('data_y');
			var b = count[r].getAttribute('data_x');
			myarr[t][b] = 0;
			myarr[t - 0 + 1][b] = 1;
			count[r].style.top = count[r].offsetTop + 50 + 'px';
			count[r].id = `line${count[r].offsetTop / 50}`;
			count[r].setAttribute('name', `line${count[r].offsetTop / 50}`);
			count[r].setAttribute('data_x', `${count[r].offsetLeft / 50}`);
			count[r].setAttribute('data_y', `${count[r].offsetTop / 50}`);
			var ty = count[r].offsetTop / 50;
			lineHeight = lineHeight > ty ? ty : lineHeight;			
		}
	}
};

function rotateJust (t, {ty, lx}) {
	var n = ty / 50;
	var m = lx / 50;
	for(let x = 0; x < height; x++)
	{
		for(let y = 0; y < width; y++)
		{
			if(digit[t][x][y])
			{
				if(myarr[x + n][m + y])
				{
					return 1;
				}
			}
		}
	}
	return 0;
};

function end () {
	if(lineHeight == 0)
	{
		clearInterval(timer);
		varreset ();
	}
};

function varreset () {
	var speed = 50, w = 0, number = 0, width = 3, height = 3,
	time = 500, scoreGET = 0, h_num = 12, w_num = 11;
	var color, lineHeight, target_num, timer, i = 1;
};