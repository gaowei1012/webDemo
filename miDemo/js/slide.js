$(function(){
	(function($){
		var picWidth=600;//设定图片宽度
		var picHeigth=400;//设定图片高度
		var num=5;//设定图片数量
		var stopTime=3000;  //动画间隔时间ms
		var transition=350; //动画持续时间ms
		
		var index=0;
		var running=true;
		var runner=true;
		var picNum=num+2;
		var slide=$($('.slide')[0]);
		var slideContainer=$($('.slide-container')[0]);
		var slidePics=$('.slide-pic')
		var prev=$($('.slider-prev')[0]);
		var next=$($('.slider-next')[0]);
		var sliderButtons=$($('.slider-buttons')[0]).find('span');
		slide.css('width',picWidth+'px');
		slide.css('height',picHeigth+'px');
		slideContainer.css('width',picWidth*picNum)
		slideContainer.css('height',picHeigth)
		slideContainer.prepend($(slidePics[num-1]).clone())
		slideContainer.append($(slidePics[0]).clone())
		slideContainer.css('left',-1*picWidth+'px')
		prev.bind('click',function(){
			if(runner==false){
				return
			}
			else{
				runner=false
				index--;
				if(index==-1)index=num-1;
				if(slideContainer.css('left')=='0px'){
					slideContainer.css('left',-1*picWidth*num+'px')
				}
				slideContainer.animate({left:'+='+picWidth,},transition,function(){runner=true})			
				for(let j=0;j<sliderButtons.length;j++){
					$(sliderButtons[j]).removeClass('on')					
				}
				$(sliderButtons[index]).addClass('on')				
			}			
		})
		next.bind('click',function(){
			if(runner==false){
				return
			}
			else{
				runner=false
				index++;
				if(index==num)index=0;
				if(slideContainer.css('left')==picWidth*(num+1)*-1+'px'){
					slideContainer.css('left',-1*picWidth+'px')
				}
				slideContainer.animate({left:'-='+picWidth,},transition,function(){runner=true})
				for(let j=0;j<sliderButtons.length;j++){
					$(sliderButtons[j]).removeClass('on')					
				}
				$(sliderButtons[index]).addClass('on')
				
			}	
		})
		$(sliderButtons[0]).addClass('on')
		for(let i=0;i<sliderButtons.length;i++){
			$(sliderButtons[i]).bind('click',function(){
				for(let j=0;j<sliderButtons.length;j++){
					$(sliderButtons[j]).removeClass('on')					
				}
				$(sliderButtons[i]).addClass('on')
				index=i+1
				slideContainer.css('left',-1*picWidth+$(sliderButtons[i]).attr('index')*picWidth*-1+"px")
			})
		}
		slide.bind('mouseover',function(){
			running=false;
		})
		slide.bind('mouseout',function(){
			running=true;
		})
		setInterval(function(){
			if(running==false)return;
			if(runner==false){
				return
			}
			else{
				runner=false
				index++;
				if(index==num)index=0;
				if(slideContainer.css('left')==picWidth*(num+1)*-1+'px'){
					slideContainer.css('left',-1*picWidth+'px')
				}
				slideContainer.animate({left:'-='+picWidth,},transition,function(){runner=true})
				for(let j=0;j<sliderButtons.length;j++){
					$(sliderButtons[j]).removeClass('on')					
				}
				$(sliderButtons[index]).addClass('on')				
			}			
		},stopTime)
	})(jQuery)
});