function handle () {
	//判断还能不能向下移动
	for(let x = height - 1; x >= 0; x--)
	{//从下开始往上判断
		for(let y = 0; y < width; y++)
		{
			//从左向右开始判断
			if(digit[target_num][x][y])
			{
				var box = document.getElementById("target" + target_num + x + y);
				if(box.offsetTop < (h_num - 1) * 50)
				{
					if(myarr[box.offsetTop / 50 + 1][box.offsetLeft / 50])
					{
						w == 6? w = 0: w++;
						end ();
						blchange ();
						createBlock ();
						return 0;
					}
				}
				else
				{
					w == 6? w = 0: w++;
					end ();
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