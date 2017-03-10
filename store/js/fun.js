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
	var ty, lx, i = 1;
	for(let x = 0; x < height; x++)
	{
		for(let y = 0; y < width; y++)
		{
			if(digit[t][x][y])
			{
				var box = document.getElementById("target" + t + x + y);
				if(i)
				{
					ty = box.offsetTop;
					lx = box.offsetLeft;
					i = 0;
				}
				else 
				{
					ty = ty < box.offsetTop? ty : box.offsetTop;
					lx = lx < box.offsetLeft? lx : box.offsetLeft;
				}
				
			}
		}
	}
	return {lx, ty};
};
function moveTop (t, {lx, ty}) {
	for(let x = 0; x < 3; x++)
	{
		for(let y = 0; y < 3; y++)
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
			remove (1);
			Block (4, color);
			moveTop (4, {lx, ty});
			target_num = 4;
		break;
		case 4:
			var {lx, ty} = source (4);
			remove (4);
			Block (7, color);
			moveTop (7, {lx, ty});
			target_num = 7; 
		break;
		case 7:
			var {lx, ty} = source (7);
			remove (7);
			Block (9, color);
			moveTop (9, {lx, ty});
			target_num = 9;
		break;
		case 9:
			var {lx, ty} = source (9);
			remove (9);
			Block (1, color);
			moveTop (1, {lx, ty});
			target_num = 1;
		break;
		case 10:
			var {lx, ty} = source (10);
			remove (10);
			Block (12, color);
			moveTop (12, {lx, ty});
			target_num = 12;
		break;
		case 12:
			var {lx, ty} = source (12);
			remove (12);
			Block (15, color);
			moveTop (15, {lx, ty});
			target_num = 12;
		break;
		case 15:
			var {lx, ty} = source (15);
			remove (15);
			Block (18, color);
			moveTop (18, {lx, ty});
			target_num = 18;
		break;
		case 18:
			var {lx, ty} = source (18);
			remove (18);
			Block (10, color);
			moveTop (10, {lx, ty});
			target_num = 10;
		break;
		case 2:
			var {lx, ty} = source (2);
			remove (2);
			Block (5, color);
			moveTop (5, {lx, ty});
			target_num = 5;
		break;
		case 5:
			var {lx, ty} = source (5);
			remove (5);
			Block (13, color);
			moveTop (13, {lx, ty});
			target_num = 13;
		break;
		case 13:
			var {lx, ty} = source (13);
			remove (13);
			Block (17, color);
			moveTop (17, {lx, ty});
			target_num = 17;
		break;
		case 17:
			var {lx, ty} = source (17);
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
				if(!(box.offsetLeft > 0 && box.offsetLeft < 500))
				{
					if(box.offsetLeft == 500 && (dir < 0));
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
function blchange (x = 1) {
	for(let x = 0; x < height; x++)
	{
		for(let y = 0; y < width; y++)
		{
			if(digit[target_num][x][y])
			{
				var box = document.getElementById("target" + target_num + x + y);
				myarr[box.offsetTop / 50][box.offsetLeft / 50] = x;
				box.id = `line${box.offsetTop / 50}`;
				box.setAttribute('name', `line${box.offsetTop / 50}`);
				box.setAttribute('data_x', box.offsetLeft / 50);
				box.setAttribute('data_y', box.offsetTop / 50);
				var ty = box.offsetTop / 50;
				lineHeight = lineHeight > ty ? ty : lineHeight;
			}
		}
	}
	score ();
};

function score () {
	for(let x = 11; x >= lineHeight; x--)
	{
		var count = document.getElementsByName(`line${x}`);
		if(count.length == 11)
		{
			console.log(count.length);
			for(let y = count.length; y > 0; y--)
			{
				var a = document.getElementById(`line${x}`);
				var t = a.getAttribute('data_y');
				var b = a.getAttribute('data_x');
				myarr[t][b] = 0;
				a.remove();
			}
			moveAgain (x);
		}
	}
};

function moveAgain (x) {

	for(let y = lineHeight; y < x; y++)
	{
		var count = document.getElementsByName(`line${y}`);
		for(let r = count.length - 1; r >= 0; r--)
		{
			var t = count[r].getAttribute('data_y');
			var b = count[r].getAttribute('data_x');
			myarr[t][b] = 0;
			myarr[t - 0 + 1][b] = 1;
			count[r].style.top = count[r].offsetTop + 50 + 'px';			
		}
	}

	for(let y = lineHeight; y < x; y++)
	{
		var count = document.getElementsByName(`line${y}`);
		for(let r = count.length - 1; r >= 0; r--)
		{
			count[r].id = `line${count[r].offsetTop / 50}`;
			count[r].setAttribute('name', `line${count[r].offsetTop / 50}`);			
		}
	}

	for(let y = lineHeight; y < x; y++)
	{
		var count = document.getElementsByName(`line${y}`);
		for(let r = count.length - 1; r >= 0; r--)
		{
			count[r].setAttribute('data_x', count[r].offsetLeft / 50);
			count[r].setAttribute('data_y', count[r].offsetTop / 50);
			var ty = count[r].offsetTop / 50;
			lineHeight = lineHeight > ty ? ty : lineHeight;	
		}
	}
};