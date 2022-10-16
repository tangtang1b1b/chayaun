let sect = $(".product_menu");
let prod = $(".type_list .a");
// console.log($(".product_menu"));
$(prod[0]).addClass("bc");
$(".type_list").click(function(){
    $(this).attr("data-num");
    i = parseInt($(this).attr("data-num"));
    for(let i =0;i<sect.length;i++){
        $(prod[i]).removeClass("bc");
        $(sect[i]).css("display","none");
    }
    $(sect[i]).css("display","block");
    $(prod[i]).addClass("bc");
});
