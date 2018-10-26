window.onload = function() {
	stellarGo();
	var b, a = new Swiper(".ym-banner .swiper-container", {
		autoplay: 5e3,
		speed: 1e3,
		runCallbacksOnInit: !1,
		watchSlidesProgress: !0,
		pagination: ".ym-banner .swiper-pagination",
		paginationClickable: true,
		autoplayDisableOnInteraction : false,
		effect:"fade",
		paginationBulletRender: function(a, b, c) {
			return '<li class="' + c + '"><span><i></i></span></li>'
		},
		nextButton: ".swiper-button-next",
		prevButton: ".swiper-button-prev",


	});
	for (b = 0; b < a.slides.length; b++) a.slides[b].style.zIndex = b;

	var bannerLength=a.slides.length;
	if(bannerLength==1){
		$('.ym-banner .swiper-pagination').hide();
	}

	$ww=$(window).width();
	$wh=$(window).height();
	$('.ym-banner').height($wh);


    var newsSwiper = new Swiper('#news',{
		speed:1000,
		autoplayDisableOnInteraction : false,
		loop:true,
		centeredSlides : true,
		slidesPerView:2,
		prevButton:'.news .swiper-button-prev',
        nextButton:'.news .swiper-button-next',

        breakpoints: {
                1200: {
                    slidesPerView: 1,
                 }
            }
	});

    if($ww>1200){
    	var SS = false;
	    $(window).scroll(function(){
	        if ($(window).scrollTop()>100){
	        	SS = false;
	            $('header').addClass('on');
	        }
	        else
	        {
	        	SS = true;
	        	$('header').removeClass('on');
	        }
	    });

	    $('.header').stop(true).mouseleave(function(){
	    	if(SS){
	    		// var y= setTimeout(function(){
					$('.header').removeClass('on');
				// },300);
	    	}

		});
    }

};


