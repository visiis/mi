$(function() {
   // var $aDes = $('#a-des'),
   //     $aContainter = $('#a-containter');

    var getMsg = function() {
        return $.get(' https://account.youcloud.com/account/details', function(res){
            if (res.c === 0) {
                $('#avatar').attr('src', res.data.avatar);
                // $('.nav-btn > a').hide();
                // $('#a-nav').removeClass('hide');
            }
        });
    };

    var getNavigation = function() {
	//  https://account.youcloud.com/api/navigation
	// https://account-delta.youmi.net/api/navigation
        return $.get(' https://account.youcloud.com/api/navigation', function(data) {
            var aderServices = data.ader_services,
                aderServicesLength = aderServices.length,
                developerServices = data.developer_services,
                developerServicesLength = developerServices.length;

            let aderServicesDesHtml = '<p>有米科技旗下的广告工具合集，提供全营销链条工具解决方案。有米科技提供以上服务所有技术支持。</p>';

            let aderServicesHtml = '';
            for (let i = 0; i < aderServicesLength; i ++) {
                aderServicesHtml += `<li data-index="${i}">
                                        <a href=${aderServices[i].website_url}>
                                            <img class="a-icon" src=${aderServices[i].icon_url}>
                                            <span>${aderServices[i].name}</span>
                                        </a>
                                    </li>`;
                aderServicesDesHtml += `<p class="hide">${aderServices[i].description}</p>`

            }
            $('#ader-services').html(aderServicesHtml);
            $aDes.html(aderServicesDesHtml);

            let developerServicesDesHtml = '';


            let developerServicesHtml = '';
            for (let i = 0; i < developerServicesLength; i ++) {
                developerServicesHtml += `<li data-index="${i + 3}">
                                            <a href=${developerServices[i].website_url}>
                                                <img class="a-icon" src=${developerServices[i].icon_url}>
                                                <span>${developerServices[i].name}</span>
                                            </a>
                                        </li>`;
                developerServicesDesHtml += `<p class="hide">${developerServices[i].description}</p>`

            }
            $('#developer-services').html(developerServicesHtml);
            $aDes.append(developerServicesDesHtml);
        });
    };

	// https://account-delta.youmi.net/api/login_info
	//  https://account.youcloud.com/api/login_info
    $.ajax({url:' https://account.youcloud.com/api/login_info', type:'get', dataType:'json', crossDomain: true, xhrFields: {withCredentials:true}, success:(res) => {
        if (res.status === 1){ 
            //getMsg();
            $('#avatar').attr('src', res.avatar);
	    $('.nav-btn > a').hide();
            $('#a-nav').removeClass('hide');
            // getNavigation();
        } else {
            $('.nav-btn > a').show();
            $('#a-nav').addClass('hide');
        }
    }});
   

    /*
    $aContainter.on('mouseenter', 'li', function() {
        var $t = $(this);

        var index = $t.data('index');
        $aDes
            .find('p')
            .addClass('hide');

        $aDes
            .find(`p:eq(${index + 1})`)
            .removeClass('hide');
    });

    $aContainter.on('mouseleave', 'li', function() {
        var $t = $(this);

        $aDes
            .find('p')
            .addClass('hide');

        $aDes
            .find(`p:eq(0)`)
            .removeClass('hide');
    });
    */
});

