
// if($(window).width()>1024){

    let othh = $(window).innerHeight();
    $(window).scroll(function(){
        let sctt = $(this).scrollTop();
        let alll = sctt+othh;
        let oftt = $("#special_group").offset().top;
        
        if(alll > oftt){
            $("#special_group").animate({left:"40%"},1200);
        }
        // const els = document.querySelectorAll(".slideIn");
        // console.log(els)
        // els.forEach((v,x) => {
        //     let elTop = v.getBoundingClientRect().top;
        //     if (elTop < window.innerHeight && elTop> 0) {
        //         console.log('visible',x)
        //     } else {
        //         console.log('invisibe',x)
        //     }
        // })
    });
// }