$(function(){
	//倒计时
	function daoJiShi(){
		//获取当前时间
		var now=new Date();
		var nTime=now.getTime();
		//获取十月十日
		var time=new Date(2016,9,13,00,00,00);
		var tTime=time.getTime();
		//计算时差
		var cha=tTime-nTime;
		if(cha<=0){
			$('#hms1').text(0);
			$('#hms2').text(0);
			$('#hms3').text(0);
			$('#hms4').text(0);
			$('#hms5').text(0);
			$('#hms6').text(0);
			clearInterval(timer);
			timer=null;
		}else{
			//计算多少个小时
			var hs=parseInt(cha/(1000*60*60));
			$('#hms1').text(parseInt(hs/10));
			$('#hms2').text(hs-parseInt(hs/10)*10);
			//计算多少个分钟
			var ms=parseInt(cha/(1000*60)-hs*60);	
			$('#hms3').text(parseInt(ms/10));
			$('#hms4').text(ms-parseInt(ms/10)*10);
			//计算多少秒
			var ss=parseInt(cha/1000-hs*60*60-ms*60);	
			$('#hms5').text(parseInt(ss/10));
			$('#hms6').text(ss-parseInt(ss/10)*10);
		}

	}	
	var timer=null;
	timer=setInterval(daoJiShi,1000);

	//刷新按钮
	var lis=$('.con01-row02 ul li').length;
	console.log(lis);
	if(lis%5!=0){
		for(i=0;i<5-lis%5;i++){
			$('.con01-row02 ul li').eq(i).clone().appendTo('.con01-row02 ul');
		}
	}
	lis=$('.con01-row02 ul li').length;
	$('.con01-row02 ul li:gt(4)').css('display','none');
	var i=5;	
	$('.refresh').click(function(){
		var j=i+5;
		if(j>lis){
			i=0;
			j=i+5;
		}
		if(i==0){
			$('.con01-row02 ul li').hide();
			$('.con01-row02 ul li:lt('+j+')').show();
			$('.con01-row02 ul li').eq(j-1).css({'margin':'0px'});			

		}else{
			$('.con01-row02 ul li').show().css({'margin-right':'40px'});
			$('.con01-row02 ul li:lt('+i+')').hide();
			$('.con01-row02 ul li:gt('+(j-1)+')').hide();	
			$('.con01-row02 ul li').eq(j-1).css({'margin':'0px'});			
		}
		i+=5;
	});

	//多选框
	$('.check-box').click(function(){
		if($(this).html()==''){
			$(this).html('<img src="./image/checkde.png">')
		}else{
			$(this).html('');
		}
	});
});