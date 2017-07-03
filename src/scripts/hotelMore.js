import '../../src/sass/hotelMore.scss';
import $ from 'jquery';
$(document).ready(function(){
	$(".develop").on("click",function(){
		$(this).toggleClass("on");
		if($(this).hasClass("on")){
			$(this).prev().css("-webkit-line-clamp","500");
			$(this).find("span").text("收缩");
		}else{
			$(this).prev().css("-webkit-line-clamp","5");
			$(this).find("span").text("展开");
		}
	});
})

