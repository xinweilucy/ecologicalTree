
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