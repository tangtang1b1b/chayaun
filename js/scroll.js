
// if($(window).width()>1024){

let othh = $(window).innerHeight();
$(window).scroll(function(){
    if($(window).width()>1024){
        let sctt = $(this).scrollTop();
        let alll = sctt+othh;
        let oftt = $("#special_group").offset().top;
        
        if(alll > oftt){
            $("#special_group").animate({left:"40%"},1200);
        }
    }

});
// }