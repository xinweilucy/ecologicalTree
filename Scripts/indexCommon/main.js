// JavaScript Document
//index slider
var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination2',
    paginationClickable: true,
	loop: true,
	calculateHeight:true,
	autoplay: 3000
  });
//筛选条件
$(".screen-condition .col-xs-7 a,.screen-condition .col-xs-8 a").click(function(){
	$(this).siblings().removeClass("active").end().addClass("active");
})
$(".screen-condition .col-xs-11 a").click(function(){
	if($(this).hasClass("active")){
		$(this).removeClass("active");
	}else{
		$(this).addClass("active");
	};
})
//合作品牌
$(window).load(function() {
	$("#cooperater").flexisel({
		visibleItems: 5,
		animationSpeed: 1000,
		autoPlay: true,
		autoPlaySpeed: 3000,    		
		pauseOnHover: true,
		enableResponsiveBreakpoints: true,
		responsiveBreakpoints: { 
			portrait: { 
				changePoint:480,
				visibleItems: 1
			}, 
			landscape: { 
				changePoint:640,
				visibleItems: 2
			},
			tablet: { 
				changePoint:768,
				visibleItems: 3
			}
		}
	});
	
});
//最新设计
$(window).load(function() {
	$("#newDesign").flexisel({
		visibleItems: 4,
		animationSpeed: 1000,
		autoPlay: true,
		autoPlaySpeed: 3000,    		
		pauseOnHover: true,
		enableResponsiveBreakpoints: true,
		responsiveBreakpoints: { 
			portrait: { 
				changePoint:480,
				visibleItems: 1
			}, 
			landscape: { 
				changePoint:640,
				visibleItems: 2
			},
			tablet: { 
				changePoint:768,
				visibleItems: 3
			}
		}
	});
	
});
//返回顶部
$(window).scroll(function(){
	var h = $(window).scrollTop();
	if(h >500){
		$(".back-top").show();
	}else{
		$(".back-top").hide();
	}
})
$(".back-top").click(function(){
	$("body,html").animate({scrollTop:"0px"},500);
})
//导航
var navigation = responsiveNav("#nav",{
  label: "<i class='icon-reorder color-green'></i>",
  openPos: "relative",
  insert: "before",
});
$(".open-screen").click(function(){
	var screenList = $(this).parent();
	if(screenList.nextAll().is(":visible")){
		screenList.siblings().slideUp();
		$(this).html("展开选择");
	}else{
		screenList.siblings().slideDown();
		$(this).html("点击收起");
	}
})