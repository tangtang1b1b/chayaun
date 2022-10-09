$(window).on("mousemove",function(e){ 
    let pageX = e.pageX;
    let pageY = e.pageY;
    let x = pageX - $("#special_group .derivative_list").offset().left;
    let y = pageY - $("#special_group .derivative_list").offset().top;
    if(y<0 || x<0 || y>$("#special_group").outerHeight() || x>$("#special_group").outerWidth()){
        $("#followbtn").css("opacity","0");
    }else{
        $("#followbtn").css("opacity","1");
    }  
       
    $("#followbtn").css("left",x);
    $("#followbtn").css("top",y);
});


let rowbox = document.querySelector("#special_group");
let container = document.querySelectorAll(".derivative_list_card");
let downpagex = 0;
let downpagey = 0;
let offsetpagex = 0;
let offsetpagey = 0;
let check = false;
let checktop = $(rowbox).offset().top;
let checkdown = $(rowbox).outerHeight();



$(rowbox).mousedown(function (e) {
    $(container).css("pointer-events","none")
    check = true; 
    downpagex = e.pageX;
    $(document).mousemove(move);
});

$(rowbox).mouseup(function (e) {
    if(check && e.pageY>checktop && e.pageY<(checktop+checkdown)){
        
        $(container).css("pointer-events","auto")
        offsetpagex += e.pageX - downpagex;
        
    }
    
    check = false;
    $(document).off("mousemove");
});

function move(e){
    if(check && e.pageY>checktop && e.pageY<(checktop+checkdown)){
        let x = e.pageX - downpagex;
        if((offsetpagex + x)<180 && (offsetpagex + x)>-3500){
            $(rowbox).css("left",""+(700 + offsetpagex + x)+"px");

        }
    }
}
// console.log(checkdown);