// JavaScript Document
$(".banner-nav-list>ul>li").hover(function(){
    $(this).find(".open-category").show();
},function(){
    $(this).find(".open-category").hide();
})
//类目
$("#slide-box").hover(function(){
    $(".category").stop().slideDown();
},function(){
    $(".category").stop().slideUp();
})
$(window).scroll(function(){
    if($(window).scrollTop() > 100){
        $(".banner-nav").addClass("category-fixed");
    }else{
       $(".banner-nav").removeClass("category-fixed"); 
    }
})
//筛选条件
$(".control-btn").click(function(){
    var span = $(this).find("span");
    $(".filtrate li").toggle().eq(0).show();
    $(".control-btn").find("i").toggleClass("icon-angle-down");
    if(span.text() == "收起筛选条件"){
        span.text("查看更多筛选条件");
    }else{
        span.text("收起筛选条件");
    }
})
//销售、价格排序
$(".seller,.price").click(function(){
	$(this).find("i").toggleClass("icon-angle-down");
	$(this).find("i").toggleClass("icon-angle-up");
})
//返回顶部
$("#back-top").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
});