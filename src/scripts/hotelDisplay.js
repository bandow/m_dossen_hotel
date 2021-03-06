import '../../src/sass/hotelDisplay.scss';
import '../../src/plugins/swiper-3.4.2.min.css'
import $ from 'jquery';
import '../../src/plugins/swiper-3.4.2.min.js';

$(document).ready(function(){
	//点击覆盖层
    $(".mask").on("click",function(){
    	$(".mask").fadeOut();
    	$(".page-album-info").removeClass("on");
    });
    //点击相册列表
	$(".album-list li").on("click",function(){
		$(".mask").fadeIn();
    	$(".page-album-info").addClass("on").find("h5").text($(this).find("p").text());
	});

	//幻灯片
	var mySwiper = new Swiper('.swiper-container',{
		pagination : '.swiper-pagination',
		paginationType : 'fraction',
	});
});