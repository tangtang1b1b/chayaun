let pronum = 1;
let price = 0;
let total = 0;
let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let number = document.querySelectorAll(".number");
let prodprice = document.querySelectorAll(".proprice")
let prodtotal = document.querySelectorAll(".producttotal")
// let del = document.querySelectorAll(".del");
let mainclass = document.querySelectorAll(".productcontent")
let buy = 0;
let halfbuy=0;
// console.log(number[i].innerText)

for(let i = 0;i<plus.length;i++){
    plus[i].addEventListener("click",()=>{
        number[i].innerText = parseInt(number[i].innerText) + 1;
        total = prodprice[i].innerText * number[i].innerText;
        prodtotal[i].innerText = total;
        // for(let a=0;a<prodtotal.length;a++){
        //     var gg = prodtotal[i].innerText;
        //     console.log(gg)
        // }
        sure();
        // console.log(document.getElementById("smtotal").innerText)
    });
}
    
// document.getElementById("sure").addEventListener("click",()=>{
//     buy =0;
//     for(let a=0;a<prodtotal.length;a++){
//         buy += parseInt(prodtotal[a].innerText);
//     }
//     document.getElementById("smtotal").innerText = buy;
//     halfbuy = buy - (buy*0.1)
//     document.getElementById("bgtotal").innerText = halfbuy;
//     // console.log(buy)
// });

//瘋狂刷新金額之術
function sure(){
    buy =0;
    for(let a=0;a<prodtotal.length;a++){
        buy += parseInt(prodtotal[a].innerText);
    }
    document.getElementById("smtotal").innerText = buy;
    halfbuy = buy - (buy*0.1)
    document.getElementById("bgtotal").innerText = halfbuy;
}
sure();
for(let j = 0;j<plus.length;j++){
    minus[j].addEventListener("click",()=>{
        if((number[j].innerText)>1){
            number[j].innerText = parseInt(number[j].innerText) + -1;
            total = prodprice[j].innerText * number[j].innerText;
            // console.log(prodprice[i].innerText * number[i].innerText)
            prodtotal[j].innerText = total;
            sure();
        }
    });
}

// for(let x = 0;x<del.length;x++){
//     del[x].addEventListener("click",()=>{
//         // console.log(mainclass);
//         // mainclass.splice(1,1);
//         mainclass[x].remove("productcontent");
//         prodtotal[x].innerText="0";
//         sure();
//     });
// }






// function add(v){
//     pronum+=v;
//     $("#number").text(pronum);
//     price = parseInt($("#productname").text());
//     total = price*parseInt(pronum);
//     console.log(total)
//     $("#producttotal").text(total);
// }

// $(".plus").click(function(){
    
//     add(1);
    
// });

// $(".minus").click(function(){
//     if(pronum>1){
//         add(-1);
//     }
// });