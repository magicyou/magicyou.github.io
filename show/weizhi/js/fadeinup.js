$(function () {

	$(window).bind('scroll', function () {
		//fadeIn(parentNode,childrenNode),（ parentNode,childrenNode是string ）
		function fadeInUp(parentNode) {
			if ($(window).scrollTop() >= $(parentNode).offset().top - 600) {
				var animWrap = $(parentNode).find('.animation');
				for (var i = 0; i < animWrap.length; i++) {
					animWrap.eq(i).css({
						visibility: 'visible',
						animationName: 'fadeInUp',
						animationDelay: i * 0.2 + 's'
					});
				}
			}
		}

		if ($('.news .row2').length != 0) {
			fadeInUp('.news .row2');
		}
		if ($('.enterp .row2').length != 0) {
			fadeInUp('.enterp .row2');
		}
		if ($('.dynamic .row2').length != 0) {
			fadeInUp('.dynamic .row2');
		}
		if ($('.footer .footer-show').length != 0) {
			fadeInUp('.footer .footer-show');
		}
		
	})

})