$(document).ready(function(){
		var li = $('.banner ul li');
		var m = $('.banner ul li').length;
		var i=0;
		$('.shu').val(i);
		xiaoyuan();
		//自动切换图片
	function run(){
							if(i<m-1){
								i=i+1;
							}else if(i==m-1){
								i=1;
							}
				$.each(li,function(n){
								if(i>=0 && i<m-1){
								   $(li[i-1]).css({'z-index':'1','opacity':'0'});
								   $(li[i]).css({'z-index':'2','opacity':'1'});
							   }else if(i==m-1){
								   $(li[i-1]).css({'z-index':'1','opacity':'0'});
								   $(li[0]).css({'z-index':'2','opacity':'1'});
							   }		   
							})
							$('.shu').val(i);
							xiaoyuan();
							back();
    }
  //banner对应的小圆圈
	function xiaoyuan(){
		var val = $('.shu').val()*1;
		switch(val){
			case 0:
				$('.banner_list span').css({'background-color':'#A2A2A2'});
				$('.banner_list span:nth-child(1)').css({'background-color':'white'});
				break;
			case 1:
				$('.banner_list span').css({'background-color':'#A2A2A2'});
				$('.banner_list span:nth-child(2)').css({'background-color':'white'});
				break;
			case 2:
				$('.banner_list span').css({'background-color':'#A2A2A2'});
				$('.banner_list span:nth-child(3)').css({'background-color':'white'});
				break;
				case 3:
				$('.banner_list span').css({'background-color':'#A2A2A2'});
				$('.banner_list span:nth-child(4)').css({'background-color':'white'});
				break;
				case 4:
				$('.banner_list span').css({'background-color':'#A2A2A2'});
				$('.banner_list span:nth-child(5)').css({'background-color':'white'});
				break;
				case 5:
				$('.banner_list span').css({'background-color':'#A2A2A2'});
				$('.banner_list span:nth-child(6)').css({'background-color':'white'});
				break;
				case 6:
				$('.banner_list span').css({'background-color':'#A2A2A2'});
				$('.banner_list span:nth-child(1)').css({'background-color':'white'});
				break;
		}
	}

		function back(){
				var val = $('.shu').val()*1;
				switch(val){
					case 0:
						$('.menu').css({'background-color':'#E8E8E8'});
						break;
					case 1:
						$('.menu').css({'background-color':'#E8E8E8'});
						break;
					case 2:
						$('.menu').css({'background-color':'#E8E8E8'});
						break;
					case 3:
						$('.menu').css({'background-color':'#4E2EFF'});
						break;
					case 4:
						$('.menu').css({'background-color':'#FFEE03'});
						break;
					case 5:
						$('.menu').css({'background-color':'#D9133C'});
						break;
					case 6:
						$('.menu').css({'background-color':'#E8E8E8'});
						break;
					}
		}
		//点击小圆圈响应出现的图
		$('.banner_list span').click(function(){
			var q = $(this).attr('value')*1;
			$('.shu').val(q-1);
			$('.banner_list span').css({'background-color':'#A2A2A2'});
			$(this).css({'background-color':'white'});
			back();
					switch(q){
					case 1:
						$('.banner ul li').css({'z-index':'1','opacity':'0'});
						$('.banner ul li:nth-child(1)').css({'z-index':'2','opacity':'1'});
						break;
					case 2:
						$('.banner ul li').css({'z-index':'1','opacity':'0'});
						$('.banner ul li:nth-child(2)').css({'z-index':'2','opacity':'1'});
						break;
					case 3:
						$('.banner ul li').css({'z-index':'1','opacity':'0'});
						$('.banner ul li:nth-child(3)').css({'z-index':'2','opacity':'1'});
						break;
					case 4:
						$('.banner ul li').css({'z-index':'1','opacity':'0'});
						$('.banner ul li:nth-child(4)').css({'z-index':'2','opacity':'1'});
						break;
					case 5:
						$('.banner ul li').css({'z-index':'1','opacity':'0'});
						$('.banner ul li:nth-child(5)').css({'z-index':'2','opacity':'1'});
						break;
					case 6:
						$('.banner ul li').css({'z-index':'1'});
						$('.banner ul li:nth-child(6)').css({'z-index':'2'});
						break;
				}
		});
		var scroll = setInterval(run,3000);   //定时执行图片切换，每三秒换一次
		/*  $('.banner,.banner_list').mouseover(function(){
				clearInterval(scroll);			
		});
		$('.banner,.banner_list').mouseout(function(){
				scroll = setInterval(run,3000); 
		});  */
		//背景颜色相应的
});