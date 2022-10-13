let banner = document.querySelectorAll("#bang");
let banbox = document.querySelector(".banner_inner_box_group");
let arr = document.querySelectorAll("#bang .bangli");
let index = 0;

$(banner).css("transition","0.6s ease");
play();
function play(){
    
        
    // if($(window).width()>1200){
        $(".barbody").css("animation","bar 5s linear infinite");
        $(".bangli").css("animation","small 5s linear infinite");
        $(banner).css("transition","0.6s ease");
        $(banbox).css("transition","0.7s 0.2s ease");
        
        
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
                },500);
            }
        }
}
// $(window).resize(function() {
//     windowSize();
// });

// function bargo(){
//     if($(window).width()>768){
//         $(".barbody").css("animation","bar 5s linear infinite");
//     }
// }
// $(".barbody").css("animation","bar 5s linear infinite");

setInterval(function(){
    index++;
    play();
},5000);

// console.log(arr.length);