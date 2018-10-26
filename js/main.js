
$(function(){
	var $ww=$(window).width();
    var $wh=$(window).height();
    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    if (isWin) {
        $('body').css({'font-family':'Microsoft YaHei'});
    }
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
     if (isMac) {
        $('body').css({'font-family':'PingFang'});
    }
	//导航栏hover
	$('.menu>ul>li,.nav-btn').stop(true).mouseenter(function(){
        $('.header').addClass('on');
    });
    
    //菜单
    $('.hamburger-box').click(function(){
        if ($(this).hasClass("is-active") != true) {
            $(this).addClass("is-active");
            $('.header-right').stop().slideDown();
            $('html').addClass('noscroll');
        } else{
            $(this).removeClass("is-active");
            $('.header-right').stop().slideUp();
            $('html').removeClass('noscroll');
        }
    });
    $('.menu > ul > li > a:not(".a-part")').click(function(){
        $(this).parents('li').find('.submenu').stop().slideToggle();
        $(this).parents('li').siblings().find('.submenu').stop().slideUp();
    });
    $('.submenu > li > a').click(function(){
        $(this).parents('.submenu>li').find('.childmenu').stop().slideToggle();
        $(this).parents('.submenu>li').siblings().find('.childmenu').stop().slideUp();
    });

    //菜单
    if($ww<=1200){
        $('.header').addClass('on');
        
    }else{
        $('.header-right').show();
    }
    if($ww<=640){
        $('.footer .footer-nav ul li dt').click(function(){
            $(this).toggleClass('show');
            $(this).siblings().removeClass('show');
            $(this).parents('li').find('div').stop().slideToggle();
            $(this).parents('li').siblings().find('div').stop().slideUp();
        })
    }



	/*底部导航栏*/
	$('.switch').click(function(){
		$('.sub-links').toggleClass('show');
		$(this).toggleClass('rotate');
	})

	$('.msg-ipt input').focus(function(){
		$(this).parents('.msg-ipt').addClass('focus');
	});
	$('.msg-ipt textarea').focus(function(){
		$(this).parents('.msg-ipt').addClass('focus');
	});
	$('.msg-ipt textarea').blur(function(){
		$(this).parents('.msg-ipt').removeClass('focus');
	});
	$('.msg-ipt input').blur(function(){
		$(this).parents('.msg-ipt').removeClass('focus');
	});


	/*底部滚动效果*/
    if($ww>768){
       var footerH=$('.footer').outerHeight();
        $('article').css({'margin-bottom':footerH}); 
    }
    
	 $(window).scroll(function(){  
        if($ww>768){
           var footerH=$('.footer').outerHeight();
            $('article').css({'margin-bottom':footerH}); 
        }
        if ($(window).scrollTop()>100){  
            $(".right-top").fadeIn(200);  
        
        }  
        else  
        {  
            $(".right-top").fadeOut(200);  
            
        }  
    });  

    //当点击跳转链接后，回到页面顶部位置  
    $(".right-top").click(function(){  
        $('body,html').animate({scrollTop:0},500);  
        return false;  
    });  
    $('.subscribe-form').validate({});
    
    jQuery.validator.setDefaults({
        errorElement:'span'
    });

    //验证
    jQuery.validator.addMethod("check", function() {
        return $("input[name='name']").val()!="" || $("input[name='single']").is(":checked");
     }, "如果您不是个人广告主，则企业名称必须填！");
    //姓名和企业名称
    jQuery.validator.addMethod("namecheck", function (value, element) {
        var namecheck = /^(?!\d+$)[\da-zA-Z\u4e00-\u9fa5]+$/;
        return this.optional(element) || (namecheck.test(value));
    }, "名称不能为纯数字");

    //邮箱 
    jQuery.validator.addMethod("mail", function (value, element) {
        var mail = /^[a-z0-9._%-]+@([a-z0-9-]+\.)+[a-z]{2,4}$/;
        return this.optional(element) || (mail.test(value));
    }, "邮箱格式不对");
    //手机验证规则  
    jQuery.validator.addMethod("mobile", function (value, element) {
        var mobile = /^1[3|4|5|7|8]\d{9}$/;
        return this.optional(element) || (mobile.test(value));
    }, "手机格式不对");
    jQuery.validator.addMethod("mssage", function (value, element) {
        var mssage = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“']");
        return this.optional(element) || (!mssage.test(value));

    }, "你的留言中含有特殊字符!");

    $('select').niceSelect();
});


/**
 * 弹窗
 * @param str       提示语
 * @param time      停留时间
 * @param url       跳转地址
 * @param outTime   自我消失时间
 */
function lyAlert(str,time,url,outTime){
    str  = str || '';
    time = time || 2500;
    url  = url || '';
    outTime  = outTime || 500;
    $(".dialog-warp .dialog").html(str);
    $(".dialog-warp").show();
    setTimeout(function(){
        $(".dialog-warp").fadeOut(outTime);
        if(url != ''){
            location.href=url;
        }
    },time);
}




