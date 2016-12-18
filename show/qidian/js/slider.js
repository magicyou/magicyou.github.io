$(function(){

	function onSlider1(){
		var timer=null;
		var step=1920;
		var left=0;
		var i=0;
		var JL=true;
		
		$('#ban_slider ul li').first().clone().appendTo('#ban_slider ul');
		$('#ban_slider ul').css({width:$('#ban_slider ul li').length*$('#ban_slider ul li').width()+'px'});
		var l=$('#ban_slider ul li').length;
		function slider(){	
			if(i==l){
				$('#ban_slider ul').css({left:'0px'});
				i=1;
			}
			if(i==-1){
				i=l-2;
				$('#ban_slider ul').css({'left':-(l-1)*step+'px'});			
			}		
			left=-i*step;
			$('#ban_slider ul').animate({left:left+'px'},'slow',function(){JL=true;});	
		}	
		
		$('.ban-ctrl-left').click(function(){
			if(JL==true){
				JL=false;
				i--;	
				slider();
			}
		});
		$('.ban-ctrl-right').click(function(){
			if(JL==true){
				JL=false;
				i++;
				slider();				
			}
		});
		function autoPlay(){
			timer=setInterval(function(){
				i++;
				slider();			
			},5000);
		}
		
		$('.slider').hover(
			function(){
				clearInterval(timer);
				timer=null;
			},
			function(){
				autoPlay();
			}
		);
		autoPlay();
	}
	onSlider1();


	function onSlider2(){
		var timer=null;
		var step=1046;
		var left=0;
		var i=0;
		var JL=true;
	
		$('#con02_slider ul').first().clone().appendTo('#con02_slider');
		$('#con02_slider').css({width:$('#con02_slider ul').length*($('#con02_slider ul').width()+34)+'px'});
		var l=$('#con02_slider ul').length;
		function slider(){	
			if(i>l-1){
				$('#con02_slider').css({left:'0px'});
				i=1;
			}
			if(i<0){
				i=l-2;
				$('#con02_slider').css({'left':-(l-1)*step+'px'});			
			}		
			left=-i*step;
			$('#con02_slider').animate({left:left+'px'},'slow',function(){
				JL=true;
			});	
		}	
		
		$('.ctrl-left').click(function(){
			if(JL==true){
				JL=false;
				i--;	
				slider();				
			}
		});
		$('.ctrl-right').click(function(){
			if(JL==true){
				JL=false;
				i++;
				slider();
			}
		});
		function autoPlay(){
			timer=setInterval(function(){
				i++;
				slider();
						
			},3000);
		}

		$('.con02-con').hover(
			function(){
				clearInterval(timer);
				$('.ctrl').show();
			},
			function(){
				autoPlay();
				$('.ctrl').hide();
			}
		);
		autoPlay();
	}
	onSlider2();
});