import '../../src/sass/hotelComment.scss';
import '../../src/plugins/swiper-3.4.2.min.css'
import '../../src/plugins/dropload.css';
import '../../src/plugins/zepto.min.js';
import '../../src/plugins/dropload.min.js';
import $ from 'jquery';
import '../../src/plugins/swiper-3.4.2.min.js';


$(document).ready(function($){
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
	//点击切换标签
	$(".tag ul li").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
	});

	//幻灯片
	var mySwiper = new Swiper('.swiper-container',{
		pagination : '.swiper-pagination',
		paginationType : 'fraction',
	});
});

//下拉加载
Zepto(function($){
  var counter = 0;
  // 每页展示4个
  var num = 4;
  var pageStart = 0,pageEnd = 0;
  // dropload
  $('.page-content').dropload({
      scrollArea : window,
      loadDownFn : function(me){
          $.ajax({
              type: 'GET',
              url: '../dist/json/update.json',
              dataType: 'json',
              success: function(data){
                  var result = '';
                  counter++;
                  pageEnd = num * counter;
                  pageStart = pageEnd - num;

                  for(var i = pageStart; i < pageEnd; i++){
                      result +=   '<a class="item opacity" href="'+data.lists[i].link+'">'
                                      +'<img src="'+data.lists[i].pic+'" alt="">'
                                      +'<h3>'+data.lists[i].title+'</h3>'
                                      +'<span class="date">'+data.lists[i].date+'</span>'
                                  +'</a>';
                      if((i + 1) >= data.lists.length){
                          // 锁定
                          me.lock();
                          // 无数据
                          me.noData();
                          break;
                      }
                  }
                  // 为了测试，延迟1秒加载
                  setTimeout(function(){
                      $('.lists').append(result);
                      // 每次数据加载完，必须重置
                      me.resetload();
                  },1000);
              },
              error: function(xhr, type){
                  console.log('Ajax error!');
                  // 即使加载出错，也得重置
                  me.resetload();
              }
          });
      }
  });
});