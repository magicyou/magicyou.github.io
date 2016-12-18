	$(document).ready(function(){
						function show_li(){
								if($("#banner_1").css("display") == "block"){
										$(".banner_1_show").css({"border":"2px solid #208455","background-color":"white"}).animate({"border":"2px solid #208455","background-color":"white"});
									}else{
										$(".banner_1_show").css({"border":"2px solid #7b7b7b","background-color":"#7b7b7b"});
									}
								if($("#banner_2").css("display") == "block"){
										$(".banner_2_show").css({"border":"2px solid #208455","background-color":"white"});
									}else{
										$(".banner_2_show").css({"border":"2px solid #7b7b7b","background":"#7b7b7b"});
									}
								if($("#banner_3").css("display") == "block"){
										$(".banner_3_show").css({"border":"2px solid #208455","background":"white"});
									}else{
										$(".banner_3_show").css({"border":"2px solid #7b7b7b","background":"#7b7b7b"});
									}
						}
								function show_banner(){	
					              if($("#banner_1").css("display")=="block"){
									$("#banner_1").css("display","none");
									$("#banner_2").css("display","block");
									$("#banner_3").css("display","none");
									show_li();
							}else if($("#banner_2").css("display")=="block"){
									$("#banner_1").css("display","none");
									$("#banner_2").css("display","none");
									$("#banner_3").css("display","block");
									show_li();
									}else if($("#banner_3").css("display")=="block"){
									$("#banner_1").css("display","block");
									$("#banner_2").css("display","none");
									$("#banner_3").css("display","none");
									show_li();
							}			
						}
						show_li();
						setInterval(show_banner,5000);
						$("#banner_1_show").click(function(){
							$("#banner_1").css("display","block");
							$("#banner_2").css("display","none");
							$("#banner_3").css("display","none");	
							$(".banner_1_show").css({"border":"2px solid #208455","background-color":"white"});
							$(".banner_2_show").css({"border":"2px solid #7b7b7b","background-color":"#7b7b7b"});
							$(".banner_3_show").css({"border":"2px solid #7b7b7b","background-color":"#7b7b7b"});
						});
						$("#banner_2_show").click(function(){
							$("#banner_1").css("display","none");
							$("#banner_2").css("display","block");
							$("#banner_3").css("display","none");	
							$(".banner_2_show").css({"border":"2px solid #208455","background-color":"white"});
							$(".banner_1_show").css({"border":"2px solid #7b7b7b","background-color":"#7b7b7b"});
							$(".banner_3_show").css({"border":"2px solid #7b7b7b","background-color":"#7b7b7b"});
						});
						$("#banner_3_show").click(function(){
							$("#banner_3").css("display","block");
							$("#banner_2").css("display","none");
							$("#banner_1").css("display","none");	
							$(".banner_3_show").css({"border":"2px solid #208455","background-color":"white"});
							$(".banner_2_show").css({"border":"2px solid #7b7b7b","background-color":"#7b7b7b"});
							$(".banner_1_show").css({"border":"2px solid #7b7b7b","background-color":"#7b7b7b"});
						});
			});