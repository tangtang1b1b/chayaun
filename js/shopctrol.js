let check = true;
let check2 = true;
$(".all_type").click(function(){
    if(check && check2){
        $(".choose_group").slideDown();
        $("#gogogo").addClass("back");
        check =false;
    }else if(!check && check2){
        $(".choose_group").slideUp();
        $("#gogogo").removeClass("back");
        check = true;
    }
});
$(".sert_big_clone").click(function(){
    if(check2 && check){
        $(".sert_group_clone").slideDown();
        $("#popogo").addClass("back");
        check2 =false;
    }else if(!check2 && check){
        $(".sert_group_clone").slideUp();
        $("#popogo").removeClass("back");
        check2 = true;
    }
});

// 重製區
$(window).resize(function() {
    if($(window).width()>1024){
        $(".choose_group").css("display","");
    }
});