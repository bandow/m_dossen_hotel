import '../../src/sass/hotelInfo.scss';
import $ from 'jquery';

$(document).ready(function(){
	//点击房间列表
	$(".rooms .wrap").on("click",function(){
		if($(this).parent().hasClass("on")){	
			$(this).parent().removeClass("on").find(".price").html("<span>¥</span><strong>178</strong>起");
		}else{
			$(this).parent().addClass("on").find(".price").html("<span>¥</span><strong>178</strong>门店价").parent().parent().parent()
			.siblings().removeClass("on").find(".price").html("<span>¥</span><strong>178</strong>起");	
		}
	});	
	//大于5个房型
	var flag=false;
	$(".type>ul>li").each(function(index,element){
		if($(this).find(".info-list ul li").length>5){
			$(this).find(".info-list ul li:gt(4)").hide();
			$(this).find(".info-list .more").show();
            //点击更多
			$(this).find(".info-list .more").on("click",function(){
				$(this).toggleClass("active");
				if(!flag){
					$(this).parent().find("li").show();
					$(this).find("p").text("收缩起来");
					flag=true;
				}else{
					$(this).parent().find("li:gt(4)").hide();
					$(this).find("p").text("查看更多");
					flag=false;
				}
			});
		}else{
			$(this).find(".info-list .more").hide();
		}		
	});
	//滚动页面执行
	$(window).scroll(function() {       
	    if ($(window).scrollTop()>=1){
	        $(".hotel-info-header").addClass("hotel-info-header-active");
	        $(".hotel-info-wrapper").css("padding-top",40);
	    }else{
	    	$(".hotel-info-header").removeClass("hotel-info-header-active");
	    	 $(".hotel-info-wrapper").css("padding-top",0);
	    }
    });
    //点击覆盖层
    $(".mask").on("click",function(){
    	$(".mask").fadeOut();
    	$(".page-activity-info").removeClass("on");
    	$(".page-room-info").removeClass("on");
    	$(".page-hotel-equipment").removeClass("on");
    });
    //点击活动详情
    $(".roomdetail .left h3 i").on("click",function(){
    	$(".mask").fadeIn();
    	$(".page-activity-info").addClass("on");
    });
    $(".page-activity-info .close").on("click",function(){
    	$(".mask").fadeOut();
    	$(".page-activity-info").removeClass("on");
    });
    //点击房间详情
    $(".wrap .l").on("click",function(){
    	$(".mask").fadeIn();
    	$(".page-room-info").addClass("on");
    });
    $(".page-room-info .close").on("click",function(){
    	$(".mask").fadeOut();
    	$(".page-room-info").removeClass("on");
    });
    //点击酒店设施
    $(".hotel-serve ul li i").on("click",function(){
    	$(".mask").fadeIn();
    	$(".page-hotel-equipment").addClass("on");
    });
    $(".page-hotel-equipment .close").on("click",function(){
    	$(".mask").fadeOut();
    	$(".page-hotel-equipment").removeClass("on");
    });
});


  

