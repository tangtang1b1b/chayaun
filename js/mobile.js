function getOffsetSum(ele){
    var top= 0,left=0;
    while(ele){
        top+=ele.offsetTop;
        left+=ele.offsetLeft;
        ele=ele.offsetParent;
    }
  /*  alert(left+" : "+top);*/
    return { top:top, left:left }
}
var maindiv=document.getElementById("#special_group");
maindiv.addEventListener("touchmove",touch,false);
function touch(e)
{
    switch(e.type)
    {
        case "touchmove":
        var ele=getOffsetSum(e.target);
        var left=ele.left;
        var top=ele.top;

        var x=e.touches[0].clientX-left/2;
        var y=e.touches[0].clientY-top/2;
        e.preventDefault();
        // alert(e.target.id);
        e.target.style.marginLeft=x+"px";
        e.target.style.marginTop=y+"px";

        /* $(e.target).css("left","50px");
        $(e.target).css("top","50px");*/
    }
}