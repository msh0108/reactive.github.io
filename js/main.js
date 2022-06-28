$(document).ready(function(){
//$("#top").before("<p class='txt'>0</p>");//임시코드
//$(".txt").css({"position":"fixed","right":"0","top":"0","margin":"0","padding":"0","color":"black"});
    

$(".search_wrap div").hide();
$(".search_wrap").mouseover(function(){
 $(".search_wrap div").stop().slideDown("fast", "easeOutBounce");  
}).mouseout(function(){
 $(".search_wrap div").stop().slideUp(400, "easeOutBounce");   
});    
    
 $(".sns_icon li:nth-child(1) img").mouseover(function(){
	 $(this).attr("src","images/icon_youtube_on.png");
 }).mouseout(function(){
	 $(this).attr("src","images/icon_youtube.png");
 });
    
    
    $(".sns_icon li:nth-child(2) img").mouseover(function(){
	 $(this).attr("src","images/icon_instargram_on.png");
 }).mouseout(function(){
	 $(this).attr("src","images/icon_instargram.png");
 });
    
    
    $(".sns_icon li:nth-child(3) img").mouseover(function(){
	 $(this).attr("src","images/icon_facebook_on.png");
 }).mouseout(function(){
	 $(this).attr("src","images/icon_facebook.png");
 });
    
    
    //전체메뉴 보이기
    
    $(".all_menu img").click(function(){
    $(".menu_wrap").animate({left:"0"},"fast");
        $("#layer").fadeIn();
    });
    $(".menu_close").click(function(){
    $(".menu_wrap").animate({left:"-50%"},"fast");
        $("#layer").fadeOut();
    });
    
    //모달태그 추가
    $("body").append("<div id='layer'></div>");
    
    //모달태그 숨기기
    $("#layer").hide();
    
    //main_menu
    $("#main_menu > ul > li > a").click(function(){
    $("#main_menu > ul > li > a").removeClass("sel");
        $(this).addClass("sel");
        return false;
    });
    //m_main_menu
    $("#m_main_menu > ul > li > a").click(function(){
    $("#m_main_menu > ul > li > a").removeClass("sel2");
        $(this).addClass("sel2");
        return false;
    });
    
    
    
$("#banner2 ul li").fadeOut(0);
$(window).scroll(function(){
  $(".txt").text( parseInt($(this).scrollTop() ));//임시코드
     
     if($(this).scrollTop() > 300){ 
      $("#banner2 ul li").delay(500).fadeIn();   
      //$(".txt").css("color","blue");//임시코드
     }
});
    
    $("#banner3 div").fadeOut(0);
$(window).scroll(function(){
  $(".txt").text( parseInt($(this).scrollTop() ));//임시코드
     
     if($(this).scrollTop() > 1100){ 
      $("#banner3 div").delay(800).fadeIn();   
      //$(".txt").css("color","blue");//임시코드
     }
});
    
    /*$(".web").fadeOut(0);
$(window).scroll(function(){
  $(".txt").text( parseInt($(this).scrollTop() ));//임시코드
     
     if($(this).scrollTop() > 2110){ 
      $(".web").eq(0).delay(0).fadeIn();   
      $(".web").eq(1).delay(1000).fadeIn();   
      $(".web").eq(2).delay(2000).fadeIn(); 
         
      $(".web").eq(3).delay(500).fadeIn();
      $(".web").eq(4).delay(1500).fadeIn();
         
      $(".banner4_right_1").delay(1500).fadeIn();
         
         
      $(".txt").css("color","blue");//임시코드
     }
});
       $(".banner4_right_1").fadeOut(0);
$(window).scroll(function(){
  $(".txt").text( parseInt($(this).scrollTop() ));//임시코드
     
     if($(this).scrollTop() > 2110){ 
         
      $(".banner4_right_1").delay(1500).fadeIn();
         
         
      $(".txt").css("color","blue");//임시코드
     }
});*/
    
    $("#family_site > ul").animate({top : 150},0);
    
    var cnt2 = 1;
    $("#family_site > button").click(function(){
    if(cnt2 == 1){
        $("#family_site > ul:not(:animated)").animate({top:1},"fast");
        $(".icon1").text("-");
        cnt2 = 0;
    }else{
    $("#family_site > ul:not(:animated)").animate({top:150},"fast");
        $(".icon1").text("+");
        cnt2 = 1;
    }
    });
    $("#family_site > ul > li > a").click(function(){
    $("#family_site > ul").animate({top:150},0);
        cnt2 = 1;
    $(".icon1").text("+");
    });
    
    
    /*$(".banner4_left").on("mousewheel",function(evnet,delta){
        if(delta > 0){
            $(".banner4_left").scrollTop($(".banner4_left").scrollTop() + 50);
        }else{
            $(".banner4_left").scrollTop($(".banner4_left").scrollTop() + -50);
        }
        return false; //기본적인 마우스휠 기능 제거
    });*/
    
});//end