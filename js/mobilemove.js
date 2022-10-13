let rowbox = document.querySelector("#special_group");
let container = document.querySelectorAll(".derivative_list_card");
let downpagex = 0;
let downpagey = 0;
let offsetpagex = 0;
let offsetpagey = 0;
let check = false;
let checktop = $(rowbox).offset().top;
let checkdown = $(rowbox).outerHeight();
let numb = document.querySelector(".derivative_number_var");


if($(window).width<1024){
    $(rowbox).touchstart(function (e) {
        $(this).css("cursor","grabbing");
        check = true; 
        downpagex = e.pageX;
        $(document).touchmove(move);
    });

    $(rowbox).touchend(function (e) {
        if(check && e.pageY>checktop && e.pageY<(checktop+checkdown)){
            offsetpagex += e.pageX - downpagex;
            
        }
        check = false;
        $(document).off("touchmove");
    });

    function move(e){
        if(check && e.pageY>checktop && e.pageY<(checktop+checkdown)){
            let x = e.pageX - downpagex;
            if((offsetpagex + x)<180 && (offsetpagex + x)>-3500){
                $(rowbox).css("left",""+(700 + offsetpagex + x)+"px");
                if((offsetpagex + x) < -300 && (offsetpagex + x) > -750){
                    $(numb).text("02");
                }else if((offsetpagex + x) < -750 && (offsetpagex + x) > -1200){
                    $(numb).text("03");
                }else if((offsetpagex + x) < -1200 && (offsetpagex + x) > -1650){
                    $(numb).text("04");
                }else if((offsetpagex + x) < -1650 && (offsetpagex + x) > -2100){
                    $(numb).text("05");
                }else if((offsetpagex + x) < -2100 && (offsetpagex + x) > -2550){
                    $(numb).text("06");
                }else if((offsetpagex + x) < -2550 && (offsetpagex + x) > -3000){
                    $(numb).text("07");
                }else if((offsetpagex + x) < -3000 && (offsetpagex + x) > -4000){
                    $(numb).text("08");
                }else{
                    $(numb).text("01");
                }
            }
        }
    }
}