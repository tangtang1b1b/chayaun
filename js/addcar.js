let shopcar = document.querySelector(".shopcar");
let itemlist = document.querySelector("#productcontent_group");
// let gg = JSON.parse(localStorage.getItem(fuck));
// let fuck = ["img/22.jpg","850","850"];
// let fuck = [{picuuuu:"img/22.jpg"},{priceee:"850"},{piccc:"850"}];
let fuck = JSON.parse(localStorage.getItem(fuck)) || [];
let picuu;
let prlce;
let pic;
if(shopcar){
    shopcar.addEventListener("click",() => {
        picuu = $(".shopcar").data("picuu");
        prlce = $(".shopcar").data("price");
        pic = $(".shopcar").data("pic");
        // console.log(picuu);
        fuck = [{ picuuuu: picuu }, { priceee: `${prlce}` }, { piccc: `${pic}`}];
        localStorage.setItem("fuck", JSON.stringify(fuck));
        showla();
    });
}
// localStorage.setItem("fuck",JSON.stringify(fuck));
// JSON.parse(localStorage.getItem(fuck));



let myclass = "<li class='productcontent'><div class='productname'><img src='{img}'></div><div class='productname proprice'>{price}</div><div id='math' class='productname'><div class='minus'>-</div><div class='number'>1</div><div class='plus'>+</div></div><div class='productname producttotal'>{total}</div><div class='productname del'>x</div></li>"
function showla(){
    JSON.parse(localStorage.getItem(fuck));
    let myclassnew = myclass.replace("{img}",fuck[0]['picuuuu'])
                            .replace("{price}",fuck[1]['priceee'])
                            .replace("{total}",fuck[2]['piccc'])
 
                                    
    $(itemlist).append(myclassnew);
    console.log(fuck[0]['picuuuu'])
}
// showla();