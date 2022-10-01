$(window).on("scroll",function(e){
    if($(window).scrollTop()>450){
        $(".nav_box").css("box-shadow","0px 0px 5px 0px #BBB");
        $("#totop").css("opacity","1");
        $("#totop").css("transform","scale(1) rotate(-90deg)");
    }else{
        $(".nav_box").css("box-shadow","none");
        $("#totop").css("opacity","0");
        $("#totop").css("transform","scale(0) rotate(-90deg)");
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

$("#dun").click(function(){
    $(".choosewhat p").text("使用LINE登入");
    $(".choosewhat p + p").text("使用FaceBook登入");
    $(".write_group").css("display","none");
    $(".write_group.other").css("display","block");
    $(".letgo").text("開始購物吧！");
    $(".jufr").removeClass("dunjuadd");
    $(".dunse").addClass("dunjuadd");
    $(".forget").css("display","block")
});
$("#ju").click(function(){
    $(".choosewhat p").text("使用LINE註冊");
    $(".choosewhat p + p").text("使用FaceBook註冊");
    $(".write_group").css("display","block");
    $(".write_group.other").css("display","none");
    $(".letgo").text("立即加入");
    $(".dunse").removeClass("dunjuadd");
    $(".jufr").addClass("dunjuadd");
    $(".forget").css("display","none")
});