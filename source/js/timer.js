function handle () {
	//判断还能不能向下移动
	for(let x = height - 1; x >= 0; x--)
	{
		for(let y = 0; y < width; y++)
		{	
			if(digit[target_num][x][y])
			{
				var box = document.getElementById("target" + target_num + x + y);
				if(box.offsetTop < 550)
				{
					if(myarr[box.offsetTop / 50 + 1][box.offsetLeft / 50])
					{
						w == 6? w = 0: w++;
						blchange ();
						createBlock ();
						return 0;
					}
				}
				else
				{
					w == 6? w = 0: w++;
					blchange ();
					createBlock ();
					return 0;
				}	
			}
		}
	}
	//向下移动
	for(let x = height - 1; x >= 0; x--)
	{
		for(let y = 0; y < digit[target_num][x].length; y++)
		{
			if(digit[target_num][x][y])
			{
				var box = document.getElementById("target" + target_num + x + y);
				box.style.top = box.offsetTop + speed + 'px';
			}
		}
	}
};