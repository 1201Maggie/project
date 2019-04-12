// 二级菜单
$(".item").children("dl").mouseover(function(){
//  console.log(this)      	
    $(this).children("dd").stop().slideDown(500)
})
$(".item").children("dl").mouseout(function(){
//  console.log(this)      	
    $(this).children("dd").stop().slideUp(500)
})

// 选项卡
$(".tab").find("a").mouseover(function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".tabc").removeClass("active").eq($(this).index()).addClass("active").end();
})

// 手风琴
$(function(){
	$('.good_c').mouseover(function(){
        $(this).stop().animate({
            'width':'656px'
        }).siblings().stop().animate({
            'width':'174px'
        })
	})
})

// 楼层
$(".stair").find("li").click(function () {
    var t = $(".floor_" + ($(this).index() + 1)).offset().top;
    $("html").animate({scrollTop:t});
})

// 轮播图
$(".swiper").banner({
    items:$(".swiper").children(".sw").children("img"),
    moveTime:100,
    autoPlay:true,
    delayTime:2500,
})

// 倒计时
$(function() {
    $(".main").countDown({
        times: "2019/5/13 18:00:00",
        ms: true,
        Hour: true,
    },function() {
        console.log("我不服！！！");
    })
})


$(".option").find("a").mouseover(function () {
    $(this).addClass("active").siblings().removeClass("active");
    // // $(".cont").addClass("active").siblings().removeClass("active");
    // $(".cont").removeClass("active").eq($(this).index()).addClass("active").end();
    // console.log($(".cont"))
    $('.cexia').find('.cont').eq($(this).index()).addClass('active').siblings().removeClass('active');
})

