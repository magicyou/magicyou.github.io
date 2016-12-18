$(function(){
	
	$('.nav ul>li').hover(
		function(){
			$(this).addClass('on');
		},
		function(){
			$(this).removeClass('on');
			$('.nav ul>li:eq(0)').addClass('on');
		}
	);
	$('.nav ul>li ol li').hover(
		function(){
			$(this).addClass('on');
		},
		function(){
			$(this).removeClass('on');
		}
	);
	
	$('.nav ul>li').has('ol').hover(
		function(){
				$(this).children('ol').slideDown('fast');
			},
		function(){
				$(this).children('ol').slideUp('fast');
			}
	);

	$('.tit-name ul li').click(function(){
		var i=$(this).index();
		$(this).siblings().removeClass('on');
		$(this).addClass('on');
		$('.col-tab').hide();
		$('.col-tab').eq(i).show();		
	});
	
	$('.right div span').click(function(){
		var str=$(this).children('img').last().attr('src');
		$(this).children('img').last().fadeOut(300,function(){
			var that=$(this).parent();
			$(this).parent().children('img').last().prependTo(that);
			$(this).parent().children('img').first().show();
		});
		
		
		$('#show').children('img').css('width','100%');
		$('#show').children('img').attr('src',str);
	});

	$('#close').click(function(){
		$(this).parent().hide();
	});


	$('.totop').click(function(){
		if($(document).scrollTop()>0){
			$('html,body').animate({scrollTop:'0'});
		}	
	});
});