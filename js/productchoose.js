let bigpi = document.querySelector(".bigpi_group");
let arr = document.querySelectorAll(".bigpi_list");
let index = 1;

moveright();
function moveright(){
    if(index < arr.length){
        
        $(bigpi).css("transition","0.5s");
        $(bigpi).css("left",""+(-100*index)+"%");
        if(index == arr.length-1){
            setTimeout(function(){
                index = 1;
                $(bigpi).css("transition","0s");
                $(bigpi).css("left",""+(-100*index)+"%");
            },500);
        }
    }
}

function moveleft(){
    if(index > -1){
        $(bigpi).css("transition","0.5s");
        $(bigpi).css("left",""+(-100*index)+"%");
        if(index == 0){
            setTimeout(function(){
                index = arr.length-2;
                $(bigpi).css("transition","0s");
                $(bigpi).css("left",""+(-100*index)+"%");
            },500);
        }
    }
}
$("#conright").click(function(){
    index++;
    moveright();
});
$("#conleft").click(function(){
    index--;
    moveleft();
});
