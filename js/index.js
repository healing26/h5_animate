$(function(){
    $(".container").fullpage({
        sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        navigation:true,
        scrollingSpeed:1000,
        verticalCentered: false,
        afterLoad:function(link,index){
            $(".section").eq(index-1).addClass("now");
        },
        afterRender:function(){
            $(".more").on("click",function(){
                $.fn.fullpage.moveSectionDown();
            });
            $('.screen04 .cart').on('transitionend',function () {
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });
            $(".screen05 .hand").on("animationend",function(){
                $(".screen05").addClass("show");
                console.log("ok");
            });
            $('.screen08').on('mousemove',function (e) {
                /*设置鼠标给手*/
                $(this).find('.hand').css({
                    left:e.pageX,
                    top:e.pageY
                });
                console.log('鼠标X：'+e.pageX+'==='+'鼠标Y：'+e.pageY+'|'+'图X：'+$('.screen08 .hand').css('left')+'==='+'图Y：'+$('.screen08 .hand').css('top'))
            }).find('.again').on('click',function () {
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                $('.content [style]').removeAttr('style');
                $.fn.fullpage.moveTo(1);
            });
        },
        onLeave:function(index,nextIndex,direction){
            var currentSection = $(".section").eq(index-1);
            if(index==2 && nextIndex == 3){
                currentSection.addClass("leaved");
            }else if(index==3 && nextIndex == 4){
                currentSection.addClass("leaved");
            }else if(index == 5 && nextIndex == 6){
                currentSection.addClass('leaved');
                $('.screen06 .box').addClass('show');
            }else if(index == 6 && nextIndex == 7){
                $('.screen07 .star').addClass('show');
                $('.screen07 .text').addClass('show');
                $('.screen07 .star img').each(function (i, item) {
                    $(this).css('transition-delay',i*0.5+'s');
                });

            }
        },
        scrollingSpeed:1000
    });
})