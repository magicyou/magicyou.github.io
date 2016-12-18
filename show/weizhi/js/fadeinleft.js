$(function () {

	$(window).bind('scroll', function () {
		//fadeInLeft(node),（ node是string ）
		function fadeInLeft(node) {
			if ($(window).scrollTop() >= $(node).offset().top - 500 && $(window).scrollTop() <= $(node).offset().top+300) {
				var animWrap = $(node);
				for (var i = 0; i < animWrap.length; i++) {
					animWrap.eq(i).css({
						visibility: 'visible',
						animationName: 'fadeInLeft',
						animationDelay: i * 0.2 + 's'
					});
				}
			}
		}
		function fadeInRight(node) {
			if ($(window).scrollTop() >= $(node).offset().top - 500 && $(window).scrollTop() <= $(node).offset().top+300) {
				var animWrap = $(node);
				for (var i = 0; i < animWrap.length; i++) {
					animWrap.eq(i).css({
						visibility: 'visible',
						animationName: 'fadeInRight',
						animationDelay: i * 0.2 + 's'
					});
				}
			}
		}
		if($('.consti-con .animation02').length != 0){
			fadeInLeft('.consti-con .animation02');
		}
		if($('.consti-con .animation03').length != 0){
			fadeInRight('.consti-con .animation03');
		}
		if($('.consti-con .animation04').length != 0){
			fadeInLeft('.consti-con .animation04');
		}
		if($('.news-con .row').length != 0){
			var rowArr = $('.news-con .row');
			for(var i=0;i<rowArr.length;i++){
				fadeInLeft('.news-con .row:eq('+i+')');
			}
		};
	})

})