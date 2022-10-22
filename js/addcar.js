let shopcar = document.querySelector(".shopcar");
let itemlist = document.querySelector("#productcontent_group");
let newfuck = JSON.parse(localStorage.getItem("fuck"));
// let del = document.querySelectorAll(".del");
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
    fuck.push({ picuuuu: `${picuu}` ,  priceee: `${prlce}` ,  piccc: `${pic}`}); 
    localStorage.setItem("fuck", JSON.stringify(fuck));
    showla();
    // console.log($(this).data("num"));
});
$(".del").click(function(){
    fuck.splice(0,1);
    localStorage.setItem("fuck", JSON.stringify(fuck));
    showla();
});
console.log(fuck)

let myclass = `<li class='productcontent'><div class='productname'><img src={img}></div><div class='productname proprice'>{price}</div><div id='math' class='productname'><div class='minus'>-</div><div class='number'>1</div><div class='plus'>+</div></div><div class='productname producttotal'>{total}</div><div class='productname del'>x</div></li>`;

function showla(){
    for(let i = 0;i<newfuck.length;i++){
        hahadead = newfuck[i];

    
        let myclassnew = myclass.replace("{img}",hahadead.picuuuu)
                                .replace("{price}",hahadead.priceee)
                                .replace("{total}",hahadead.piccc)
                                
        $(itemlist).append(myclassnew);
        // console.log(newfuck)
    }
}
// console.log(JSON.parse(localStorage.getItem("fuck")))
showla();