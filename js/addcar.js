let shopcar = document.querySelector(".shopcar");
let itemlist = document.querySelector("#productcontent_group");
// let newfuck = JSON.parse(localStorage.getItem("fuck"));
// let gg = JSON.parse(localStorage.getItem(fuck));
// let fuck = ["img/22.jpg","850","850"];
// let fuck = [{picuuuu:"img/22.jpg"},{priceee:"850"},{piccc:"850"}];
// let fuck = JSON.parse(localStorage.getItem(fuck));
let fuck=JSON.parse(localStorage.getItem("fuck"))||[];
let picuu;
let prlce;
let pic;

$(".shopcar").click(function(){
    picuu = $(this).data("picuu");
    prlce = $(this).data("price");
    pic = $(this).data("pic");
    updata();
    // picuu = $(this).data("picuu");
    // prlce = $(this).data("price");
    // pic = $(this).data("pic");
    // fuck.push({ picuuuu: `${picuu}` ,  priceee: `${prlce}` ,  piccc: `${pic}`}); 
    // localStorage.setItem("fuck", JSON.stringify(fuck));
    // showla();
    // alert("已加入購物車")
    // console.log($(this).data("num"));
});



function updata(){
    fuck.push({ picuuuu: `${picuu}` ,  priceee: `${prlce}` ,  piccc: `${pic}`}); 
    localStorage.setItem("fuck", JSON.stringify(fuck));
    showla();
    alert("已加入購物車")
}

let myclass = `<li class='productcontent'><div class='productname'><img src={img}></div><div class='productname proprice'>{price}</div><div id='math' class='productname'><div class='minus'>-</div><div class='number'>1</div><div class='plus'>+</div></div><div class='productname producttotal'>{total}</div><div class='productname del' data-del={del}>x</div></li>`;


function showla(){
    
    for(let i = 0;i<fuck.length;i++){
        newfuck = fuck[i];
        // $("li").click(function(){
        //     fuck = newfuck.splice(0,1);
        //     localStorage.setItem("fuck", JSON.stringify(fuck));
        // });
    
        let myclassnew = myclass.replace("{img}",newfuck.picuuuu)
                                .replace("{price}",newfuck.priceee)
                                .replace("{total}",newfuck.piccc)
                                .replace("{del}",i)
                                
        $(itemlist).append(myclassnew);
        $(".del").click(function(){
            localStorage.removeItem("fuck");
        });
    }
}
// console.log(JSON.parse(localStorage.getItem("fuck")))
showla();