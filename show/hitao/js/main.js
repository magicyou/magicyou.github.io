/* 点击出现的详细分类菜单 */
$(document).ready(function(){
		$(".menu_hidden").hide() ;
		$("#menu_in").click(function(){
			$(".menu_hidden").fadeToggle() ;
			if($("#menu_in span").text() == "查看分类"){
					$("#menu_in span").text("收起分类");
					$("#menu_in img").attr("src","./image/TB1xYW8LFXXXXaQXVXXYSJgFpXX-20-20.gif");
					
			}else{
				$("#menu_in span").text("查看分类");
				$("#menu_in img").attr("src","./image/TB1R8O7LFXXXXXUXVXX1DxgFpXX-20-20.png");
			}
		});
		
});
/* 鼠标略过事件切换详细分类菜单里的菜单 */
$(document).ready(function(){
		$(".btn_span .menu_h_li").hide() ;
		$(".btn_span:nth-child(1) .menu_h_li").show() ;
		$(".btn_span").mouseover(function(){
				$(".btn_span .menu_h_li").hide() ;
				$(this).children(".menu_h_li").show();
		});	
});
/* 侧边栏 鼠标经过事件，出现隐藏的div，（有bug）*/
$(document).ready(function(){
//		$(".chuxian").css({'display':'none'});
		$(".yinchu").mouseenter(function(){
			$(this).find(".chuxian").stop().css({'display':'block'}).animate({opacity:'1',right:'30px'},'fast','linear');
		});	
		$(".yinchu").mouseleave(function(){
			$(this).find(".chuxian").stop().animate({right:'60px',opacity:'0'},'fast',function(){
				$(this).hide();
			});
		});
//		$("#panel").stop();
/* 返回到顶部 */
		 $("#to_top").click(function(){
				$("body,html").animate({scrollTop:'0px'},200);
		 });
});

/* 滚动图 */
$(document).ready(function(){
	var timer = null;
	var index = 0;
	//$('.banner>ul li').hide();
	
	
	function play(){
		if(index < 0){
				index = 3;
		}
		
		if(index == $('.banner>ul li').length){
				index = 0;
		}
		$('.banner>ul li').fadeOut();
		$('.banner>ul li').eq(index).fadeIn('slow',function(){statu = true});
	}
	function autoPlay(){
		timer = setInterval(function(){
			index++;
			play();
		},3000);
	}
	var statu = true;
	$('.banner .btn_prev').mouseover(function(){
		clearInterval(timer);
		timer = null;
	}).mouseout(function(){
		autoPlay();
	}).click(function(){
		if(statu == true){
			statu = false;
			index--;
			play();			
		}

	});
	
	$('.banner .btn_next').mouseover(function(){
		clearInterval(timer);
		timer = null;
	}).mouseout(function(){
		autoPlay();
	}).click(function(){
		if(statu == true){
			statu = false;
			index++;
			play();	
		}

	});
	autoPlay();

})