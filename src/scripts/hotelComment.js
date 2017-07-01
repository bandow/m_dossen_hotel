import '../../src/sass/hotelComment.scss';
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
	$(".img-list li").on("click",function(){
		$(".mask").fadeIn();
    	$(".page-album-info").addClass("on");
	});
	//点击切换回复
	$(".reply-change").on("click",function(){
		// $(this).toggleClass("on").parent().next().slideToggle();
		$(this).toggleClass("on").parent().next().slideToggle();
	});

	//幻灯片
	var mySwiper = new Swiper('.swiper-container',{
		pagination : '.swiper-pagination',
		paginationType : 'fraction',
	});
});