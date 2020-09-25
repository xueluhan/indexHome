 var vm = new Vue({
         el: '#app',
         data: {
             index: 0,
             cneterIndex: 0
         },
         methods: {
             // init:function(){
             //     console.log(this.index)
             // },
             mounted: function() {
                 // this.init();

             }
         }
     })
     //  $(function() {
 var len = $('.headerBar .swiper-slide').length;
 new Swiper('.headerBar', {
     //  loop: true,
     autoplay: true,
     effect: 'fade',
     delay: 2000,
     pagination: {
         el: '.swiper-pagination',
         clickable: true,
     },
     on: {
         init: function(swiper) {
             $('.moveBar').animate({
                 'width': '100%'
             }, 2000)
         },
         slideChangeTransitionStart: function() {
             //  var num = 100 / len * (this.activeIndex + 1) + '%';
             //  $('.moveBar').css({
             //      'width': num
             //  })
             $('.moveBar').css({
                 'width': '0%'
             })
             $('.barNum').html('0' + (this.activeIndex + 1))
             switch (this.activeIndex) {
                 case 0:
                     $('.letter_dotted').html('让健康在丽滋卡尔');
                     $('.letter_solid').html('重新出发')
                     break;
                 case 1:
                     $('.letter_dotted').html('细胞力量');
                     $('.letter_solid').html('逆转时光')
                     break;
                 case 2:
                     $('.letter_dotted').html('我们比您');
                     $('.letter_solid').html('更爱您')
                     break;
                 case 3:
                     $('.letter_dotted').html('酒店式装饰');
                     $('.letter_solid').html('家样的温馨')
                     break;
                 default:

             }
         },
         slideChangeTransitionEnd: function() {
             $('.moveBar').animate({
                 'width': '100%'
             }, 2000)
         },
     },
 });
 //鼠标悬停更换class
 $(".hoverList").mouseover(function() {
     $(this).find('.iconFon').addClass('icon_down')
 })
 $(".hoverList").mouseout(function() {
     $(this).find('.iconFon').removeClass('icon_down')
 })
 window.onscroll = function() {
     var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
     var scrool = document.documentElement.clientHeight || document.body.clientHeight;
     if (scrolltop > scrool) {
         $('.moreUP').fadeIn()
     } else {
         $('.moreUP').fadeOut()
     }
 }


 //点击回到顶部
 $('.moreUP').click(function() {
     $("html,body").animate({ scrollTop: '0px' }, 500); //回到顶部
 })

 var mySwipers;
 //体检项目
 $('.classifyLi').click(function() {
     vm.index = $(this).index();
     //  var dataName = $(this).attr("data-name");
     //  console.log(dataName)
     //  $(this).addClass('active').siblings().removeClass('active');
     //  $(".listDetail_pro .cells_box").eq(vm.index).addClass("active").siblings().removeClass("active");
     //  swiperSlid('.classifyProject'+vm.index)
     mySwipers.destroy();
     vm.$nextTick(function() {
         swiperSlid('.classifyProject' + vm.index)
     })
 })

 swiperSlid('.classifyProject0');

 function swiperSlid(name) {
     mySwipers = new Swiper(name, {
         effect: 'fade',
         fadeEffect: {
             crossFade: true,
         },
         navigation: {
             nextEl: '.pagination .swiper-button-next',
             prevEl: '.pagination .swiper-button-prev',
         },
         pagination: {
             el: '.pagination .swiper-pagination',
             clickable: true,
             renderBullet: function(index, className) {
                 return '<span class="' + className + '">' + (index + 1) + '</span>';
             }
         },
     })
 }


 //给每个页码绑定跳转的事件   
 $('.swiper-pagination').on('click', 'li', function() {
     var index = this.innerHTML;
     mySwiper.slideTo(index - 1, 500, false); //切换到第一个slide，速度为1秒
 })

 //  })


 //服务项目滑过运动

 $(".serviceList li").hover(function() {
     $(this).find(".markerConBox").stop().animate({ height: "100%", marginTop: "-3px" }, 400);
     $(this).find(".markerConBox .MarkTit").stop().animate({ padding: "80px 0 5px" }, 400);
 }, function() {
     $(this).find(".markerConBox").animate({ height: "88px" }, 400);
     $(this).find(".markerConBox .MarkTit").stop().animate({ padding: "10px 0 5px" }, 400);
 })


 //八大临床中心列表切换
 $('.listL_dsc li').click(function() {
     vm.cneterIndex = $(this).index();
     $(this).addClass('thatActive').siblings().removeClass('thatActive');
 })


 //专家团队
 new Swiper('.ExpertSwiper', {
     centeredSlides: true,
     navigation: {
         nextEl: '.ExpertSwiper .swiper-button-next',
         prevEl: '.ExpertSwiper .swiper-button-prev',
     },
 })