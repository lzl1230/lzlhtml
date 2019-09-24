/**
 * Created by devil-love on 2019/2/18.
 */
$(function () {
    $(".container").fullpage({
        //给每个页面配置背景颜色
        sectionsColor: ["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        //取消内容的默认居中
        verticalCentered: false,
        //显示右侧项目导航
        navigation: true,
        //进入下一个页面的时候执行动画，
        afterLoad: function (link, index) {
            $(".section").eq(index - 1).addClass("now");
        },
        //通过自定义封装函数实现点击图片滑入下个页面功能：将点击事件与项目导航联系起来
        afterRender: function () {
            $(".more").on("click", function () {
                $.fn.fullpage.moveSectionDown();   //这里的fullpage后面不用加()
            });
            //第四屏收货地址动画显示的代码
            $(function () {
                $(".screen04 .cart").on("animationend",function () {
                    $(".screen04 .address").delay(400).fadeIn(1000).children(1).delay(400).fadeIn(2000);
                    $(".screen04 .text").addClass("show");
                })
            });
            //图片跟着鼠标动
            $(".screen08").on("mousemove",function(e){
               $(this).find(".hand").css({
                   left: e.clientX-320,
                    top: e.clientY-200 })
               });
            $(".screen08").find(".again").on("click",function(){
                    /*移除当前已经触发的所有事件和属性*/
                    $(".now,.leaved,.show").removeClass("now").removeClass("leaved").removeClass("show");
                    $(".content [style]").removeAttr("style");
                    /*跳转到第一页，重新开始*/
                    $.fn.fullpage.moveTo(1);
            });
        },
        //离开当前页面的同时触发动画
        onLeave: function (index, nextIndex, direction) {
            if (index == 2 && nextIndex == 3) {   //离开第二页到第三页做动画
                $(".section").eq(index - 1).addClass("leaved");
            } else if (index == 3 && nextIndex == 4) {  //第三页到第四页
                $(".section").eq(index - 1).addClass("leaved");
            }else if(index==5&&nextIndex==6){
                $(".section").eq(index-1).addClass("leaved");
                $(".screen06 .box").addClass("show");
            }else if(index==6&&nextIndex==7){
                $(".screen07 .star").addClass("show");
                $(".screen07 .text").addClass("show");
            }
        },
    });
});
