let banner = document.querySelectorAll("#bang");
let banbox = document.querySelector(".banner_inner_box_group");
let arr = document.querySelectorAll("#bang .bangli");
let index = 0;

$(banner).css("transition","0.8s ease");
play();
function play(){
    
    $(".barbody").css("animation","bar 5s linear infinite");
    if($(window).width()>768){
        $(".bangli").css("animation","small 5s linear infinite");
    }
    $(banner).css("transition","0.8s ease");
    $(banbox).css("transition","0.6s 0.2s ease");
    
    
    if(index<arr.length){
        $(banner).css("left","-"+(100*index)+"%");
        $(banbox).css("left","-"+(100*index)+"%");
        if(index == arr.length-1){
            setTimeout(function(){
                index = 0;
                $(banner).css("transition","0s");
                $(banner).css("left","-"+(100*index)+"%");
                $(banbox).css("transition","0s");
                $(banbox).css("left","-"+(100*index)+"%");
            },800);
        }
    }
}
// $(window).resize(function() {
//     windowSize();
// });


setInterval(function(){
    index++;
    play();
},5000);

// console.log(arr.length);