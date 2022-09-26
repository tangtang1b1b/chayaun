$(window).on("scroll",function(e){
    if($(window).scrollTop()>0){
        $(".nav_box").css("box-shadow","0px 0px 15px 0px #dcdcdc");
        $("#totop").css("opacity","1");
    }else{
        $(".nav_box").css("box-shadow","none");
        $("#totop").css("opacity","0");
    }
});

// $("#totop").on("click",function(){
//     $("html,body").animate({scrollTop:0},300);
// });

$(window).on("mousemove",function(e){ 
    let pageX = e.pageX;
    let pageY = e.pageY;
    let x = pageX-$("#special_group").offset().left;
    let y = pageY-$("#special_group").offset().top;
    if(y<0 && y>$("#special_group").Height()){
    }else{
        $("#followbtn").css("opacity","1");
    }  
       
    $("#followbtn").css("left",x);
    $("#followbtn").css("top",y);
});