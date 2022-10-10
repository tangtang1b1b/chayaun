let banner = document.querySelectorAll("#bang");
let banbox = document.querySelector(".banner_inner_box_group");
let arr = document.querySelectorAll("#bang li");
let index = 0;

$(banner).css("transition","1s ease");
play();
function play(){
    $(banner).css("transition","1s ease");
    $(banbox).css("transition","0.8s 0.2s ease");
    // $(banner).css("transform","scale(1)");
    
    if(index<arr.length){
        $(banner).css("left","-"+(100*index)+"%");
        $(banbox).css("left","-"+(100*index)+"%");
        // $(banner).css("transform","scale(0.9)");
        if(index == arr.length-1){
            setTimeout(function(){
                index = 0;
                $(banner).css("transition","0s");
                $(banner).css("left","-"+(100*index)+"%");
                $(banbox).css("transition","0s");
                $(banbox).css("left","-"+(100*index)+"%");
            },1000);
        }
    }
    // $(banner).css("transform","scale(1)");
}

setInterval(function(){
    index++;
    play();
},5000);

// console.log(arr.length);