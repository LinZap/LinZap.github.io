

	function typein_effect(ele){
		var str = ele.html();
		var i=0;
		ele.html("");
		keyin(ele,str,0);
	}

	function keyin(ele,str,idx){

		var cs = str.charAt(idx);
		idx++;

		var incs = cs;
		if(cs=='<'){
			while(str.charAt(idx)!='>'){
				incs+=str.charAt(idx);
				idx++;
			}
			incs+=str.charAt(idx);
			idx++;

		}


		ele.append(incs);
		var speed = usefloor(50,200) ;
		if(idx<=str.length)
			setTimeout(function(){ 
				keyin(ele,str,idx); 
			},speed);
		else 
			setTimeout(function(){typein_effect(ele)},4700);
	}

	function usefloor(min,max) {
	return Math.floor(Math.random()*(max-min+1)+min);
	}


	function blink_effect(ele){
		ele.toggleClass('hide');
		setTimeout(function(){
			blink_effect(ele);
		},550);
	}

	