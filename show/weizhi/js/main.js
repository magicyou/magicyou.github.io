$(function(){
	$(window).bind('scroll',function(){
		if($(window).scrollTop() >0){
			$('#header').addClass('header-fixed');
		}else if($(window).scrollTop() ==0){
			$('#header').removeClass('header-fixed');
		}
		console.log($(window).scrollTop());
	});
	$('#header_toggle').click(function(){
		console.log($('.header').height());
		//#header_toggle_target
		if($('#header_toggle_target').css('display') == 'none'){
			$('#header_toggle_target').css({display:'block'});
			$('.header').animate({height:'316px'});
			
		}else{
			$('.header').animate({height:'50px'},function(){
				$('#header_toggle_target').css({display:'none'});
			});
			
		}

	});
	$(window).bind('resize',function(){
		$('.header').css({height:'50px'});
	})
	//新闻栏目鼠标事件
	$('.news .row2>div').hover(
		function(){
			$(this).find('.col-avtive').stop().fadeIn();
			$(this).find('.col-avtive').children('span').stop().animate({marginTop:'22%'},'300');
		},
		function(){
			$(this).find('.col-avtive').stop().fadeOut();
			$(this).find('.col-avtive').children('span').stop().animate({marginTop:'30%'},'300');
		}
	)
	
	//企业成员模块
	$(window).bind('resize',function(){
		
	})
	
	


})