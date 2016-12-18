//\u81ea\u9002\u5e94\u5bbd\u5ea6
var getlink = $("#screenMax"),bodSize = window.screen.width,screenMax=1000;
if(bodSize < screenMax){
    getlink.attr('href','');
}

//ajax
function ajaxURL(url,data,callfunction){
	$.ajax({
		url:url,
		type:'GET',
		dataType:'jsonp',
		data:data,
		success:callfunction
	});
}

//\u5bfc\u822a\u9ad8\u4eae
if(typeof(isChannel)!=='undefined'){
	var channel=['act','index','global','korea','baby','europe'];
	$.each(channel,function(i, item){
		if(isChannel===item){
			$("#"+item).addClass("current");
		}
	})
}
//appkey&&\u7248\u672c\u53f7&&\u65f6\u95f4\u6233
var publicUrl = '&appkey=' + commonjs.appkey + '&sign_method=1&v=' + commonjs.v + '&timestamp=' + commonjs.urlTime+'&from_device=pc';
//sideright \u53f3\u4fa7\u60ac\u6d6e\u4e2a\u4eba\u4fe1\u606f
(function($){
	$(function () {
		jQuery.extend(jQuery.easing, {
		def: 'easeOutQuad',
		easeOutQuad: function (x, t, b, c, d) {
			return -c *(t/=d)*(t-2) + b;
		}
	});
	var	menuFloat = $('.usercenter li'),
		menuHide = $('.user_hide'),
		menuSpeed = 400;
	menuHide.css('opacity','0')
	menuFloat.hover(function(){
			$(this).find(menuHide).fadeIn(0).stop().animate({
				right:30,
				opacity:1
			},menuSpeed,'easeOutQuad');
		},function(){
			$(this).find(menuHide).stop().animate({
				right:55,
				opacity:0
			},menuSpeed,'easeOutQuad').fadeOut(0);
		});
	});
})(jQuery);
//goTop
function goTop(){$('html, body').animate({scrollTop: 0}, 500 ,'easeOutQuad');}

//focus_banner
(function($){
	//\u5c4f\u853d\u65e0\u94fe\u63a5\u7684a\u6807\u7b7e\u5728\u65b0\u7a97\u53e3\u6253\u5f00
	$("a[href*=#],a[href*=javascript]").click(function() {
		$(this).attr("target","_self");
	});
	//\u8bbe\u7f6eiframe\u9ad8\u5ea6
	if($("iframe").length>0){
		$("iframe").load(function(){
			if(!$(this).attr("height")){
				$(this).css("height",1500);
			}
		});
	}
	//\u56fe\u7247\u61d2\u52a0\u8f7d
	if($(".lazyload").length>0){
		$(".lazyload").lazyload({effect: "fadeIn"});
	}	
	if($(".mod_tb_cart .cart_order").length>0){
		$(".mod_tb_cart .cart_order dl").each(function(){
			$(this).find("dd").eq(0).width(274);
			$(this).find("dd").eq(1).width(92);
			$(this).find("dd").eq(2).width(75);
		}); 
	}
	/*\u52a0\u8d2d\u7269\u8f66*/
	function addfavAnim(){
		var T_left=$("#add_cart_btn").offset().left,
			T_top=$("#add_cart_btn").offset().top,
			sTop=document.body.scrollTop+document.documentElement.scrollTop,
			box=$('#user_buy_num').offset(),
			box_left=box.left+8,
			box_top=box.top-sTop+8;
		$("body").append('<img id="J_shopcart">');
		$('#J_shopcart').attr("src",$("#bigPicture").attr("src")+"@100h_100w_1e").show()
		.css({left:T_left,top:T_left})
		.animate({top:T_top,left:T_left,opacity:1},100)
		.animate({width:'30px',height:'30px',top:box_top, left:box_left},1500)
		.animate({opacity:0},100);
	};
	//\u4e2a\u4eba\u4e2d\u5fc3\u8ba2\u5355
	if($(".cart_list").length>0){
		$(".cart_list").each(function(){
			var totalH=$(this).height()-34;
			$(this).find(".cart_total dd").css({"height":totalH});
		});
	}
	if($('.focus_banner_img li').length>0){
	var	focusImg = $('.focus_banner_img li'),
		focusPoint = $('.focus_banner_point'),
		pointIn = 'banner_point_in',
		focusNext = $('.focus_next'),
		focusPrev = $('.focus_prev'),
		focusTimeGO = 3000,
		J = 0;
		if(focusImg.length>1){			
			for(var focusJ = 1;focusJ <= focusImg.length; focusJ++){
				PointHtml = focusPoint.html();
				focusPoint.html(PointHtml + "<li></li>");
			}
			focusPointBtn = focusPoint.find('li');
			focusPointBtn.eq(0).addClass(pointIn);
			focusPointBtn.on('click',function(){
				J = $(this).index();
				focusEvent();
			});
			focusNext.on('click',function(){
				if(J == 0)J = focusImg.length;
				J--;
				focusEvent();
			})
			focusPrev.on('click',function(){
				J++;
				if(J == focusImg.length)J = 0;
				focusEvent();
			})
			$('.focus_banner_box').hover(function(){
				focusNext.show();focusPrev.show();
				clearInterval(focusTime)
			},function(){
				focusNext.hide();focusPrev.hide();
				focusTime = setInterval(function(){
					J++;
					if(J == focusImg.length)J = 0;
					focusEvent();
				},focusTimeGO);
			});
			function focusEvent(){
				focusPointBtn.removeClass(pointIn).eq(J).addClass(pointIn);
				focusImg.fadeOut().eq(J).fadeIn();
			}
			focusTime = setInterval(function(){
				J++;
				if(J == focusImg.length)J = 0;
				focusEvent();
			},focusTimeGO);
		}
	}
	//\u4e8c\u7ea7\u9891\u9053\u9875\u3001\u9876\u90e8\u60ac\u6d6e\u5bfc\u822a
	if($(".J_nav_top").length>0){
		$(window).scroll(function(){
			if($(window).scrollTop()>150){
				$(".J_nav_top").stop().animate({top:0},100);
			}else{
				$(".J_nav_top").stop().animate({top:-80},100);
				
			}
		});
	}
})(jQuery);

//\u901a\u7528\u5bfc\u822a\u5206\u7c7b
function getsiftlist(domId){
	var margin = 10;
	var li=$("#"+domId+" li");
	var	li_W = li[0].offsetWidth;
	var h=[];
	var n = 2;
	for(var i = 0;i < li.length;i++) {
		li_H = li[i].offsetHeight;
		if(i < n) {
			h[i]=li_H;
			li.eq(i).css("top",0);
			li.eq(i).css("left",i * li_W);
			}
		else{
			min_H =Math.min.apply(null,h) ;
			minKey = getarraykey(h, min_H);
			h[minKey] += li_H+margin ;
			li.eq(i).css("top",min_H+margin);
			li.eq(i).css("left",minKey * li_W);
		}
	}
	var lengkey=li.length-1;
	var geth=parseInt($(li[lengkey]).offset().top-$(li[0]).offset().top+li[lengkey].offsetHeight+15);
	$("#"+domId).height(geth);
}
function getarraykey(s, v) {for(k in s) {if(s[k] == v) {return k;}}}
var isDown = true,isShow = true;
function getsiftdata(){
	if (!isDown) { return;}
	ajaxURL(apiLink + 'global.category.tree','data={"cid":"0"}' + publicUrl,function(result){
	    if (typeof result !== 'object') result = JSON.parse(result);
	    if(result.code===1){
	    	isDown = false;
	    	var categoryteamData=result.data.response_category_list;
	    	if($("#siftMenu").length>0&&$("#siftList").length>0){
	    		if(categoryteamData && typeof(categoryteamData) != 'undefined') {
	    		var obj = { "122": "icon-mianmo", "376": "icon-gehu", "125": "icon-kouhong", "521": "icon-xiangshui", "443": "icon-naifenchaoshi", "139": "icon-baojianpin", "442": "icon-yunfu", "571": "icon-nvzhuang", "585": "icon-nanzhuang", "582": "icon-peishi", "579": "icon-xiezi", "576": "icon-peijian", "658": "icon-helanzhiyou"};//20151105
				$.each(categoryteamData,function(i, item){
				  	if(obj.hasOwnProperty(item.cat_id)){
						var ico = obj[item.cat_id];
					}else{
						var ico = 'icon-zidingyi';
					}
					var navstr='<li id="tab'+ i +'"><a href="http://hitao.top/category_'+item.cat_id+'.html"><i class="iconfont '+ico+'"></i>'+item.cat_name+'</a></li>';
					var classifystr='<ul class="sift_list" id="contab'+ i +'"></ul>';
					$(".sift_l").append(navstr);
					$("#siftList").append(classifystr);
					if(item.list && typeof(item.list) != 'undefined') {
					$.each(item.list,function(j, obj){
						var uldom_li='<li><h3><a href="http://hitao.top/category_'+obj.cat_id+'.html">' + obj.cat_name + '</a></h3><div class="sift_a" id="siftA'+i+j+'"></div></li>';
						$("#contab"+i).append(uldom_li);
						if(obj.list && typeof(obj.list) != 'undefined') {
						$.each(obj.list,function(n, val){
							var siftAStr='<a href="http://hitao.top/category_'+val.cat_id+'.html">' + val.cat_name + '</a>';
							$("#siftA"+i+j).append(siftAStr);
						})
						}
					})
					}
				})
				}
			}
        }else{
            $("#siftMenu").html(result.message);
        }
	});
}
getsiftdata();
var classifyBtn=$("#siftBtn");
var showIcon="http://gtms01.alicdn.com/tps/i1/TB1R8O7LFXXXXXUXVXX1DxgFpXX-20-20.png";
var hideIcon="http://gtms03.alicdn.com/tps/i3/TB1xYW8LFXXXXaQXVXXYSJgFpXX-20-20.gif";
if(classifyBtn.length>0){
	classifyBtn.on("click",function(e){
		if (isShow) {
			isShow = false;
			var liS=$(".sift_l li");
			$(this).find("img").attr("src",hideIcon);
			$(this).find("span.t").html("\u6536\u8d77\u5206\u7c7b");
			$("#siftMenu").fadeIn(500);
			$.each(liS,function(k, obj){
				liS.removeClass("cur");	
				$("#contab"+k).removeClass("getshow");
			})
			$("#tab0").addClass("cur");
			$("#contab0").addClass("getshow");
			getsiftlist("contab0");
			liS.mouseover(function (){
				$.each(liS,function(k, obj){
					liS.removeClass("cur");	
					$("#contab"+k).removeClass("getshow");
				})
				$("#"+this.id).addClass("cur");
				$("#con"+this.id).addClass("getshow");
				getsiftlist("con"+this.id);
			});
		}else{
			isShow = true;
			$(this).find("img").attr("src",showIcon);
			$(this).find("span.t").html("\u67e5\u770b\u5206\u7c7b");
			$("#siftMenu").fadeOut(200);
		}
	})
}




//\u8bbe\u7f6ecookie
function setCookie(name,value)
{
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+7)
	//document.cookie=name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
	document.cookie=name+ "=" +escape(value)+";expires="+exdate.toGMTString()
}

//\u83b7\u53d6cookie
function getCookie(name) { 
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
        return unescape(arr[2]);
        }
    else{
    	return null; 
    }     
}
//\u5220\u9664cookie
function delCookie(name) { 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null){
    	document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }      
} 

/* \u55e8\u6dd8\u5ba2\u670d*/
$.getScript("http://dl.ntalker.com/js/xn6/ntkfstat.js?siteid=kf_9661");

var ukeyVal,u;
function getState(){
	var strnull='<a href="http://hitao.top/login/" target="_self">\u767b\u5f55</a><a href="http://hitao.top/login/reg" target="_self">\u514d\u8d39\u6ce8\u518c</a>';
	ukeyVal=getCookie("_uk"); 
	ukeyVal = ukeyVal == null ? global_ukey : ukeyVal;
	if(typeof ukeyVal !== null && typeof ukeyVal !== '' && typeof ukeyVal !== "undefined"){  
		//\u67e5\u8be2\u767b\u5f55\u72b6\u6001 
		u=ukeyVal;
		ajaxURL('http://hitao.top/login/getUserInfo','',function(result){
			if (typeof result !== 'object') result = JSON.parse(result);
				if (result.code == 1) {
					var name=result.data,name2=name.customer.custNick,custNick=name2;
					NTKF_PARAM.uid=name.customer.custId;
					NTKF_PARAM.uname=custNick;
					var strhtml='\u6b22\u8fce\u60a8\uff0c<span class="accout ico_cssfont"><a href="http://hitao.top/mycenter">'+custNick+'</a></span><a href="http://hitao.top/login/logout" target="_self">[\u9000\u51fa]</a>';
					$("#quick_menu").html(strhtml);
				} else {
					$("#quick_menu").html(strnull);
				}
		})
		//\u67e5\u8be2\u8d2d\u7269\u8f66\u6570\u91cf
		if($("#user_buy_num").length>0){
			ajaxURL(apiLink + 'cart_count','data={"ukey":"' + ukeyVal + '","from_device":"pc"}' + publicUrl,function(result){
				if (typeof result !== 'object') result = JSON.parse(result);
				if (result.code == 1) {
					$("#user_buy_num").html(result.data.count);
					if($("#h_user_buy_num").length>0){
						$("#h_user_buy_num").html(result.data.count);
					}
				} else {
					$("#user_buy_num").html("0");
					if($("#h_user_buy_num").length>0){
						$("#h_user_buy_num").html("0");
					}
				}
			})
		}
	}else{
		$("#quick_menu").html(strnull);
		$("#user_buy_num").html("0");
		u="";
		custNick="";
	}
}
var global_ukey;
//\u8de8\u57df\u53d6cookie
if(hostnameUrl==='go.hitao.com'||hostnameUrl==='www.hitao.com'||hostnameUrl==='hitao.com'||hostnameUrl==='alimarket.hitao.com'){
	//delCookie("_uk");
	ajaxURL('http://hitao.top/login/ukey','',function(result){
	 	if (typeof result !== 'object') result = JSON.parse(result);
		if (result.code == 1) {
			global_ukey = result.data.u;
			setCookie("_uk",global_ukey);
			getState();
		}else{
			getState();
		}
	})
}else{
	getState();
}

/* \u55e8\u6dd8\u5ba2\u670d*/
var goods_id,goodsName,goodspicUrl,goodsUrl;
if(typeof goodsId !== null && typeof goodsId !== '' && typeof goodsId !== "undefined"){  
	goods_id=goodsId;
	goodsName=$(".pro_name").html();
	goodspicUrl=skuData[0].imgurl;
	goodsUrl="http://item.hitao.top/product_"+goodsId+".html";
}else{
	goods_id="";
	goodsName="";
	goodspicUrl="";
	goodsUrl="";
}
NTKF_PARAM = {
  siteid:"kf_9661",                            //\u5c0f\u80fd\u63d0\u4f9b\u4f01\u4e1aid,
  settingid:"kf_9661_1446448114835",          //\u5c0f\u80fd\u5206\u914d\u7684\u7f3a\u7701\u5ba2\u670d\u7ec4id  
  ukey: u,                                //ukey
  uid:"",		//\u7528\u6237ID,\u672a\u767b\u5f55\u53ef\u4ee5\u4e3a\u7a7a
  uname:"",		//\u7528\u6237\u540d\uff0c\u672a\u767b\u5f55\u53ef\u4ee5\u4e3a\u7a7a
  ntalkerparam:{
    item: {  
      id:             goods_id,
      name:           goodsName,
      imageurl:       goodspicUrl,
      url:            goodsUrl
      }
  }                        
};
//tab\u5207\u6362\uff08\u5546\u54c1\u8be6\u60c5\uff0c\u5546\u54c1\u7279\u5356\uff09
(function ($) {
  var htTabs = {
	tab: function (o1, o2, event, fn) {
	  var o1 = $(o1), o2 = $(o2);
	  o1.first().addClass('active');
	  o2.first().addClass('dis');
	  if (typeof fn == 'function') fn(0);
	  o1.bind(event || 'mouseover', function (i) {
		var e = o1.index(this);
		o1.removeClass('active');
		o1.eq(e).addClass('active');
		o2.removeClass('dis');
		o2.eq(e).addClass('dis');
		if (typeof fn == 'function') fn(e);
	  });
	}
  };
  window['htTabs'] = htTabs;
})(jQuery);

//popup  \u5f39\u7a97\uff08\u8c03\u7528\u65b9\u6cd5\u5982\uff1aonclick="popShow('.pop_payfor')"\uff09;
function popShow(popId){
		showId = $(popId);
		showId.css({'float':'left'}),
		showLeft = showId.outerWidth() /2,
		showTop = showId.outerHeight() /2;
	showId.css({
		'position':'fixed',
		'top':'50%',
		'left':'50%',
		'zIndex':'9999',
		'marginLeft':-showLeft,
		'marginTop':-showTop
	});
	showId.show();
	$("<div id='_pop_over' style='position:fixed;width:100%;height:100%;top:0;left:0;z-index:9998;display:none;'></div>").appendTo("body");
	popEvent();
	$('#_pop_over').show();
}
// popHide();
function popHide(){
	// $('#_pop_over').fadeOut(200);
	showId.fadeOut(200);
	$("#_pop_over").remove();
	$(".tips_judge").hide().find(".error-tips").html("");
};
$(document).keyup(function(event){
	switch(event.keyCode) {
		case 27: popHide();
	}
});
//\u5f39\u51fa\u5c42\u9ed1\u8272\u534a\u900f\u660e\u8499\u7248\u8bbe\u7f6e
function popEvent(){
	$('#_pop_over').css({
		 'opacity':'0.3',		
		 'background':'#000'	
	});
};




/*********** \u516c\u5171\u5f39\u51fa\u5c42   chunyu add   ***************/

function PublicAlert(obj,times,callback){

	//\u521b\u5efa  \u5355\u6309\u94ae\u5f62\u5f0f
	var create0 = function(){
		var html = '<div class="pop_info J_pop_comm" id="popbox"><a href="javascript:void(0);" title="\u70b9\u51fb\u5173\u95ed" class="close iconfont icon-guanbi"></a>	<h3 class="pop_title"></h3><div class="bd"><p class="txt"></p></div></div>';
		$('body').append(html);
	}

	//\u521b\u5efa  \u5355\u6309\u94ae\u5f62\u5f0f
	var create1 = function(){
		var html = '<div class="pop_info J_pop_comm" id="popbox"><a href="javascript:void(0);" title="\u70b9\u51fb\u5173\u95ed" class="close iconfont icon-guanbi"></a>	<h3 class="pop_title"></h3><div class="bd"><p class="txt"></p><div class="btn_action"><a href="javascript:void(0)" class="btn "><span></span></a></div></div></div>';
		$('body').append(html);
	}

	//\u521b\u5efa  \u53cc\u6309\u94ae\u5f62\u5f0f
	var create2 = function(){
		var html = '<div class="pop_info J_pop_comm" id="popbox"><a href="javascript:void(0);" title="\u70b9\u51fb\u5173\u95ed" class="close iconfont icon-guanbi"></a>	<h3 class="pop_title"></h3><div class="bd"><p class="txt"></p><div class="btn_action"><a href="javascript:;" class="btn"><span></span></a><a href="javascript:;" class="btn"><span></span></a></div></div></div>';
		$('body').append(html);
	}

	if(obj.btnnumber == 2 && obj.btnnumber){				//\u5982\u679c\u6309\u94ae\u4e2a\u6570\u8bbe\u7f6e\u4e3a2\u5219\u4e3a2\u4e2a\u6309\u94ae  \u9ed8\u8ba4\u4e3a1\u4e2a
		create2() 
	}else if(obj.btnnumber == 1 && obj.btnnumber){
		create1();
	}else{
		create0();
	}
	
	this.showElement = $('.J_pop_comm');
	this.isShowTitle = obj.isShowTitle == true ? this.showElement.find('.pop_title').show() : this.showElement.find('.pop_title').hide();		//\u6807\u9898\u662f\u5426\u663e\u793a
	this.title = obj.title ? this.showElement.find('.pop_title').html( obj.title ) : this.showElement.find('.pop_title').hide();				//\u6807\u9898\u5185\u5bb9  \u5982\u679c\u6807\u9898\u5185\u5bb9\u4e3a\u7a7a \u5219\u4e0d\u663e\u793a\u6807\u9898\u680f
	this.content = obj.content ? this.showElement.find('.txt').html( obj.content ) : this.showElement.find('txt').hide();						//\u5f39\u51fa\u5c42\u5185\u5bb9  \u5982\u679c\u5185\u5bb9\u4e3a\u7a7a \u5219\u4e0d\u663e\u793a\u5185\u5bb9\u5757
	this.btntext = obj.btntext; 				//\u6309\u94ae\u6587\u5b57  \u5fc5\u987b\u4f20\u5165\u6570\u7ec4
	this.btnstyle = obj.btnstyle;				//\u6309\u94ae\u6837\u5f0f  \u5fc5\u987b\u4f20\u5165\u6570\u7ec4   \u5982\u679c\u4f20\u5165\u7684\u503c\u4e3a0\u4e3a\u7ea2\u8272\u6309\u94ae  \u9ed8\u8ba4\u7070\u8272\u6309\u94ae
	this.fnArray = obj.fnArray;					//\u4f20\u8fdb\u6765\u7684\u65b9\u6cd5  \u5fc5\u987b\u4f20\u5165\u6570\u7ec4
	this.isRemove = obj.isRemove || false;		//\u5982\u679c\u9700\u8981\u4f7f\u7528\u4e2a\u5f39\u7a97  \u5982:\u53d6\u6d88\u8ba2\u5355 \u5f39\u6846  true => \u79fb\u9664\u5f39\u6846  false => \u9690\u85cf\u5f39\u7a97
	this.width = obj.width;
	this.hideCloseBtn = obj.hideCloseBtn;
	this.setStyle();

	var self = this;
	if ( times ) {
		setTimeout(function(){
			self.closePop();

			if ( typeof callback == 'function') {
				callback();
			};

		},times)
	};

}

//\u8bbe\u7f6e\u6837\u5f0f
PublicAlert.prototype.setStyle = function(){
	var self = this;
	var oBtn = self.showElement.find('.btn');
	var oBtnSpan = oBtn.find('span');

	if ( self.width ) {
		$('#popbox').width( self.width );
	};

	if ( self.hideCloseBtn ) {
		$('#popbox').find('.close').hide();
	};

	if(self.btntext){
		var btntext = self.btntext;								//\u6309\u94ae\u6587\u5b57
		for (var i = 0; i < oBtnSpan.length; i++) {
			oBtnSpan.eq(i).html(btntext[i]);
		};
	}

	if(self.btnstyle){
		var btnstyle = self.btnstyle;							//\u6309\u94ae\u6837\u5f0f
		for (var i = 0; i < oBtn.length; i++) {
			if(btnstyle[i] == 0){								
				oBtn.eq(i).addClass('btn_red40');
			}else{
				oBtn.eq(i).addClass('btn_gray40_off');
			}
		};
	}

	if(self.fnArray){
		var fnArray = self.fnArray;								//\u7ed1\u5b9a\u65b9\u6cd5
		for (var i = 0; i < oBtn.length; i++) {
			oBtn[i].onclick = fnArray[i];
		}
	}

}

//\u663e\u793a\u5f39\u51fa\u5c42
PublicAlert.prototype.popShow = function(){
	var self = this;

	showId = this.showElement;
	showId.css({'float':'left'}),
	showLeft = showId.outerWidth() /2,
	showTop = showId.outerHeight() /2;
	showId.css({
		'position':'fixed',
		'top':'50%',
		'left':'50%',
		'zIndex':'9999',
		'marginLeft':-showLeft,
		'marginTop':-showTop
	});
	showId.show();
	$("<div id='_pop_over' style='position:fixed;width:100%;height:100%;top:0;left:0;z-index:9998;opacity:0.3;background:#000'></div>").appendTo("body");
	$('#_pop_over').show();

	showId.find('.close').on('click',function(){
		self.closePop();
	});

}

//\u5173\u95ed\u5f39\u51fa\u5c42 
PublicAlert.prototype.closePop = function(){
	var self = this;
	var pop = $('#_pop_over');
	pop.animate({'opacity':0},200,function(){pop.remove()});
	if ( self.isRemove == true ) {
		$('#popbox').remove();	
	}else{
		showId.fadeOut(200);
	};
}

//\u5f39\u5c42\u63d0\u793a\u5185\u5bb9
function showMsg(tipsmsg,flag){
	if(!flag){		
		var html='<div class="pop_tips">'
			+'<a href="javascript:void(0);" onclick="popRemove()" title="\u70b9\u51fb\u5173\u95ed" class="close iconfont icon-guanbi"></a>'
			+'<div class="bd">'
				+'<p class="tips">'+tipsmsg+'</p>'
				+'<div class="btn_action">'
					+'<a href="javascript:void(0);" onclick="popRemove()" class="btn btn_red30"><span>\u786e\u5b9a</span></a>'
				+'</div></div></div>';
	}else{
		var html='<div class="pop_tips">'
			+'<a href="javascript:void(0);" onclick="popRemove()" title="\u70b9\u51fb\u5173\u95ed" class="close iconfont icon-guanbi"></a>'
			+'<div class="bd">'
				+'<p class="tips">'+tipsmsg+'</p>'
				+'<div class="btn_action">'
					+'<a class="btn btn_red30"><span class="delAddr">\u786e\u5b9a</span></a>'
					+'<a href="javascript:void(0);" onclick="popRemove()" class="btn btn_red30_white"><span>\u53d6\u6d88</span></a>'
				+'</div></div></div>';
	}
	$("body").append(html);
	popShow('.pop_tips');
}

function popRemove(){
	$(".pop_tips,#_pop_over").remove();
	$(".tips_judge").hide().find(".error-tips").html("");
}
/*********** \u516c\u5171\u5f39\u51fa\u5c42*************/

/*********** \u5934\u90e8\u641c\u7d22 *************/
//\u83b7\u53d6\u5730\u5740\u680f\u53c2\u6570
Common.prototype.getUrlKye_name_comU = function(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}
var h={
	sbtn : $(".h-sbtn"),     //\u641c\u7d22\u94f5\u626d
	searchbar : $("#h-s405"),    //\u641c\u7d22\u6846
	searchbox : $(".search-bar"),    //\u641c\u7d22\u533a\u5757
	keywordsbox : $("#h-search-con-box"),  //\u5173\u952e\u5b57\u76d2\u5b50
	ckTit : $(".h-cookie-tit"),    //\u6700\u8fd1\u641c\u7d22
	keywordsList : $(".h-cookie-list"),   //\u5173\u952e\u5b57\u5217\u8868
	deleteCookie : $(".icon-delete"),    //\u5220\u9664cookie
	defaultKeywords : $("#defaultKeywords"),    //\u9ed8\u8ba4\u5173\u952e\u5b57
	settext : '<p id="hText"></p>',
	curDo : null,
	getkey : commonjs.getUrlKye_name_comU("keyword"), //\u5730\u5740\u680f\u53c2\u6570 
	//getkey : '', //\u5730\u5740\u680f\u53c2\u6570 
	i : 0
}

//\u5173\u952e\u5b57\u83b7\u53d6
function defaultHot(){
	if(h.getkey){
		//alert(location.href);
		//alert(decodeURI(location.href))
		h.searchbar.val($.trim(h.getkey));
		h.keywordsbox.addClass('h-hide');
	}else{
		ajaxURL(apiLink + 'search.word.default','data={}' + publicUrl,function(result){
		    if (typeof result !== 'object') result = JSON.parse(result);
		    if(result.code===1){
		    	var k=result.data.info.title;
		    	var kc=result.data.info.content;
		    	h.defaultKeywords.html(k);
		    	h.defaultKeywords.attr('data-content', kc);
		    	if(result.data.info.type === 5){
		    		h.defaultKeywords.attr('data-isSearch',1);
		    	}else{
		    		h.defaultKeywords.attr('data-isSearch',0);
		    	}
	        }else{
	            h.defaultKeywords.html("");
	        }
		});
	}
	if($(".h-Keywords").length>0){
		ajaxURL(apiLink + 'search.word.hot','data={}' + publicUrl,function(result){
		    if (typeof result !== 'object') result = JSON.parse(result);
		    if(result.code===1){
		    	var keylist=result.data.list;
		    	$.each(keylist,function(i, item){
					var strkey='<span data-content="' + item.content + '">&nbsp;|&nbsp;' + item.title + '</span>';
					$(".h-Keywords").append(strkey);
				});
				$(".h-Keywords span").on("click",function(){
					h.searchbar.val($(this).attr('data-content'));
					h.defaultKeywords.addClass('h-hide');
					h_gosearch();
				});
	        }else{
	            $(".h-Keywords").append(result.message);
	        }
		});
	}
}
defaultHot();

Array.prototype.remove = function(dx)  //array\u6dfb\u52a0  \u5220\u9664\u65b9\u6cd5
{
	if(isNaN(dx)||dx>this.length){return false;}
	this.splice(dx,1);
}
function h_gosearch(){
	h_hid();
	var str=getCookie("ckKey");
	var v=$.trim(h.searchbar.val());
	if(h.searchbar.attr('data-num')>0 && v ==''){ location.reload(); return false;}
	if(h.defaultKeywords.attr('data-isSearch') == 0 && v ==''){ location.reload(); return false;}
	if(str!== null){
		var ckKeyarr=str.split(",");
		var isSave=1;
		if(v == ''){ v=h.defaultKeywords.attr('data-content');}
		window.open('http://hitao.top/goods/search?keyword=' + encodeURI(v));
		$.each(ckKeyarr,function(i, item){
				if(item == v){
					isSave = 0;
				}
				if(item == ""){
					ckKeyarr.remove(i);
				}
			});
			if(isSave == 1){
				if(ckKeyarr.length>9){
					ckKeyarr.remove(9);
				}
				str=ckKeyarr.join(",");
				str=v+","+str;
				setCookie("ckKey",str);
			}

	}else{
		if(v!==''){
			str=v;
			//alert(encodeURI('http://hitao.top/goods/search?key=' + str));
			window.open('http://hitao.top/goods/search?keyword=' + encodeURI(str));
			setCookie("ckKey",str);
		}else if(h.defaultKeywords.attr('data-content')!==""){
			str=h.defaultKeywords.attr('data-content');
			//alert(encodeURI('http://hitao.top/goods/search?key=' + str));
			window.open('http://hitao.top/goods/search?keyword=' + encodeURI(str));
			setCookie("ckKey",str);
		}
	}
}


function getCookieList(){
	var str=getCookie("ckKey");
	if(str!== null){
		var ckKeyarr=str.split(",");
		if(ckKeyarr.length>0){
			h.keywordsbox.removeClass('h-hide');
		  	h.ckTit.removeClass('h-hide');
		  	h.keywordsList.html(h.settext);
		  	$("#hText").remove();
	  		$.each(ckKeyarr,function(i, item){
				var strHtml='<li id=k'+i+'><a href="#">\u5220\u9664</a><span>' + item + '</span></li>';
				h.keywordsList.append(strHtml);
			});
			$(".h-cookie-list li span").on("click",function(){
				var re = /&amp;/g;
				var k=$(this).html();
			    var v = k.replace(re,"&");
				h.searchbar.val(v);
				h.defaultKeywords.addClass('h-hide');
				h_gosearch();
			});
			$(".h-cookie-list li a").each(function(i, item){
				$(item).on("click",function(){
					$("#k"+i).remove();
					ckKeyarr.remove(i);
					str=ckKeyarr.join(",");
					setCookie("ckKey",str);
				});
			});
		}
	}
}
h.sbtn.on("click",function(){
	h_gosearch();
});
function h_hid(){
	h.keywordsbox.addClass('h-hide');
	search_select_over=0;
	h.keywordsList.html(h.settext);
	$("#hText").remove();
}
var search_select_over = 0;
h.searchbox.mouseover(function(){ search_select_over = 1;});
h.searchbox.mouseout(function(){ search_select_over = 0;});
$(document).on("click",function(){
	if(!search_select_over && !h.keywordsbox.hasClass('h-hide'))
	{
		h_hid();
	}
});

h.searchbar.on("focus",function(){
	if(h.searchbar.val()==""){
		h.defaultKeywords.removeClass('h-hide');
	}else{
		h.defaultKeywords.addClass('h-hide');
	}
	getCookieList();
});
/* suggest\u9009\u62e9\u64cd\u4f5c */
function createSelect(){
    var CLASSES = {
        ACTIVE: "suggest-hover"
    };
    function moveSelect(step) {
        var listItems=$('.h-cookie-list li');
        //\u5f53\u524dhover\u7684\u6b65\u6570
        var active;
        active = $('.'+CLASSES.ACTIVE).index();
        listItems.eq(active).removeClass(CLASSES.ACTIVE);
        active += step;
        if (active < 0) {
            active = listItems.size() - 1;
        } else if (active >= listItems.size()) {
            active = 0;
        }
        listItems.eq(active).addClass(CLASSES.ACTIVE);
        h.searchbar.val(listItems.eq(active).find("span").html());
    };
    return {
        next:function(){
            moveSelect(-1);
        },
        prev:function(){
            moveSelect(1);
        }

    };
};


h.searchbar.on("keyup",function(e){
	var theEvent =  e || window.event;
        code = theEvent.keyCode ? theEvent.keyCode : (theEvent.which ? theEvent.which : theEvent.charCode);
        var KEY = {
            UP: 38,
            DOWN: 40,
            RETURN: 13
        };
    h.searchbar.attr('data-num', h.i+=1);
    var kw = encodeURI($.trim($(this).val()));
	if(kw.length>0 && kw!==''){
		h.defaultKeywords.addClass('h-hide');
		function getSuggest(){
			ajaxURL(apiLink + 'search.word.autocomplete','data={"kw":"'+kw+'"}' + publicUrl,function(result){
			    if (typeof result !== 'object') result = JSON.parse(result);
			    if(result.code===1){
			    	var ckKeyarr=result.data.list;
			    	h.ckTit.addClass('h-hide');
			    	h.keywordsbox.removeClass('h-hide');
				  	h.keywordsList.html(h.settext);
				  	$("#hText").remove();
			  		$.each(ckKeyarr,function(i, item){
			  			if(i<10){
			  				var strHtml='<li id=k'+i+'><span>' + item + '</span></li>';
							h.keywordsList.append(strHtml);
			  			}
					});
					$(".h-cookie-list li span").on("click",function(){
						var re = /&amp;/g;
						var k=$(this).html();
					    var v = k.replace(re,"&");
						h.searchbar.val(v);
						h.defaultKeywords.addClass('h-hide');
						h_gosearch();
					});
		        }else{
		            var strHtml='<li>\u52a0\u8f7d\u5931\u8d25\u2026\u2026</li>';
					h.keywordsList.append(strHtml);
		        }
			});
		}
		var hSelect = createSelect();
		clearTimeout(h.curDo);//\u952e\u76d8\u5f39\u8d77\u7684\u65f6\u5019\u5e94\u8be5\u53d6\u6d88\u5b9a\u65f6ajax\u83b7\u53d6\u6570\u636e\u64cd\u4f5c
        switch(code) {
            case KEY.UP:
                hSelect.next();
                break;
            case KEY.DOWN:
                hSelect.prev();
                break;
            case KEY.RETURN:
                h_gosearch();
                break;
            default:
                h.curDo = setTimeout(getSuggest(),300);
                break;
        }
	}else{
		h.defaultKeywords.addClass('h-hide');
		getCookieList();
		var hSelect = createSelect();
		switch(code) {
            case KEY.UP:
                hSelect.next();
                break;
            case KEY.DOWN:
                hSelect.prev();
                break;
            case KEY.RETURN:
                h_gosearch();
                break;
        }
	}
});

h.deleteCookie.on("click",function(){
	delCookie("ckKey");
	h.keywordsList.html(h.settext);
	$("#hText").remove();
});


/*********** \u5934\u90e8\u641c\u7d22 end *************/
	
