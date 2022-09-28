$(window).on("scroll",function(e){
    if($(window).scrollTop()>300){
        $(".nav_box").css("box-shadow","0px 0px 5px 0px #BBB");
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
    let x = pageX-$("#special_group .derivative_list").offset().left;
    let y = pageY-$("#special_group .derivative_list").offset().top;
    if(y<0 || x<0 || y>$("#special_group").outerHeight() || x>$("#special_group").outerWidth()){
        $("#followbtn").css("opacity","0");
    }else{
        $("#followbtn").css("opacity","1");
    }  
       
    $("#followbtn").css("left",x);
    $("#followbtn").css("top",y);
});
let i=0;
$("#choosesubcribe").click(function(){
    $("#subcribe").slideToggle();
    $("#go").addClass("up");
    i++;
    if(i%2==0){
        $("#go").removeClass("up");
    }
});
let y=0;
$("#choosemonth").click(function(){
    $("#month").slideToggle();
    $("#gogo").addClass("up");
    y++;
    if(y%2==0){
        $("#gogo").removeClass("up");
    }
});