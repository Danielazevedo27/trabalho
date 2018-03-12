var quotes=new Array() 
						quotes[0]='<img src="" alt=""/>'
						quotes[1]='<img src="" alt=""/>'
						quotes[2]='<img src="" alt=""/>'
						quotes[3]='<img src="" alt=""/>'
						quotes[4]='<img src="images (2).jpg" alt=""/>'
						quotes[5]='<img src="images (1).jpg" alt=""/>'
						var whichquote=Math.floor(Math.random()*(quotes.length))
						document.write(quotes[whichquote])