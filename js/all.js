$(window).on("scroll",function(e){
    if($(window).scrollTop()>0){
        $(".nav_box").css("box-shadow","0px 0px 5px 0px #BBB");
        $("#totop").css("opacity","1");
        $("#totop").css("transform","scale(1) rotate(-90deg)");
    }else{
        $(".nav_box").css("box-shadow","none");
        $("#totop").css("opacity","0");
        $("#totop").css("transform","scale(0) rotate(-90deg)");
    }
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


let j =0;
$(".hamber").click(function(){
    j++;
    $(".hambox:nth-child(1)").css("animation","hambarbang1 0.5s both");
    $(".hambox:nth-child(2)").css("animation","rotat 0.7s 0.5s both");
    $(".hambox:nth-child(3)").css("animation","rotat2 0.7s 0.5s both");
    $(".hambox:nth-child(4)").css("animation","hambarbang1 0.5s both");
    $(".list_item a").css("display","block");
    $(".list_group").animate({opacity:"1"},500);
    setTimeout(function(){
        $(".list_item a").css("opacity","1");
    },500);

    if(j%2==0){
        $(".hambox:nth-child(1)").css("animation","hambarbang2 0.5s 0.7s both");
        $(".hambox:nth-child(2)").css("animation","rotat12 0.7s both");
        $(".hambox:nth-child(3)").css("animation","rotat23 0.7s both");
        $(".hambox:nth-child(4)").css("animation","hambarbang2 0.5s 0.7s both");
        $(".list_item a").css("opacity","0");
        $(".list_group").animate({opacity:"0"},500);
        setTimeout(function(){
            $(".list_item a").css("display","none");
        },500);
    }
});