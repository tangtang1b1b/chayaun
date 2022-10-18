
// if($(window).width()>1024){
    let oth = $(window).innerHeight();
    $(window).scroll(function(){
        let sct = $(this).scrollTop();
        let all = sct+oth;
        let oft = $("#special_group").offset().top;
        if(all > oft){
            $("#special_group").animate({left:"40%"},1000);
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
        $(".slideIn").each(function(){
            let sld = $(this).offset().top;
            if(all > sld){
                $(this).addClass("active");
            }else{
                // $(this).addClass("active");
            }
            // console.log(all)
        });
    });
// }