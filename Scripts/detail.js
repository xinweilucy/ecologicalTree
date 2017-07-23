
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
//商品详情
var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination2',
    paginationClickable: true,
	loop: true,
	calculateHeight:true,
	autoplay: 3000
  });
//房子面积
$(".house-size").click(function(){
	var size = $(".other-size-box");
	var houseSize = $(this);
	if(size.is(":visible")){
		size.slideUp();
		houseSize.html('更多条件 <i class="icon-double-angle-down color-green"></i>');
	}else{
		size.slideDown();
		houseSize.html('收起条件  <i class="icon-double-angle-up color-green"></i>');
	}
})