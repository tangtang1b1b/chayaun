let bigpi = document.querySelector(".bigpi_group");
let arr = document.querySelectorAll(".bigpi_list");
let othimg = document.querySelectorAll(".img_list");
let index = 1;


$(othimg[index-1]).css({"filter":"brightness(0.5)","transform":"scale(0.9)"});
moveright();
function moveright(){
    if(index < arr.length){
        
        $(bigpi).css("transition","0.3s");
        $(bigpi).css("left",""+(-100*index)+"%");
        if(index == arr.length-1){
            setTimeout(function(){
                index = 1;
                $(bigpi).css("transition","0s");
                $(bigpi).css("left",""+(-100*index)+"%");
            },300);
        }
    }
}

function moveleft(){
    if(index > -1){
        $(bigpi).css("transition","0.3s");
        $(bigpi).css("left",""+(-100*index)+"%");
        if(index == 0){
            setTimeout(function(){
                index = arr.length-2;
                $(bigpi).css("transition","0s");
                $(bigpi).css("left",""+(-100*index)+"%");
            },300);
        }
    }
}
$("#conright").click(function(){
    index++;
    moveright();
    for(let i = 0;i<othimg.length;i++){
        $(othimg[i]).css({"filter":"brightness(1)","transform":"scale(1)"});
    }
    $(othimg[index-1]).css({"filter":"brightness(0.5)","transform":"scale(0.9)"});

    if(index == arr.length-1){
        $(othimg[index-(arr.length-1)]).css({"filter":"brightness(0.5)","transform":"scale(0.9)"});
    }
});

$("#conleft").click(function(){
    index--;
    moveleft();
    for(let i = 0;i<othimg.length;i++){
        $(othimg[i]).css({"filter":"brightness(1)","transform":"scale(1)"});
    }
    $(othimg[index-1]).css({"filter":"brightness(0.5)","transform":"scale(0.9)"});
    if(index == 0){
        $(othimg[index+4]).css({"filter":"brightness(0.5)","transform":"scale(0.9)"});
    }
    
});
function choose(n){
    index = n;
    moveright();
    for(let i = 0;i<othimg.length;i++){
        $(othimg[i]).css({"filter":"brightness(1)","transform":"scale(1)"});
    }
    $(othimg[index-1]).css({"filter":"brightness(0.5)","transform":"scale(0.9)"});
}

// console.log(othimg[i]);