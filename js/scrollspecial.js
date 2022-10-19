let othhh = $(window).innerHeight();
$(window).scroll(function(){
    let scttt = $(this).scrollTop();
    let allll = scttt+othhh;
    $(".slideIn").each(function(){
        let slddd = $(this).offset().top;
        if(allll > slddd && slddd > 0){
            $(this).addClass("active");
        }else{
            $(this).removeClass("active");
        }
    });
});