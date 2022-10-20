let pronum = 1;
let price = 0;
let total = 0;
let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let number = document.querySelectorAll(".number");
let prodprice = document.querySelectorAll(".proprice")
let prodtotal = document.querySelectorAll(".producttotal")

// console.log(number[i].innerText)

for(let i = 0;i<plus.length;i++){
    plus[i].addEventListener("click",()=>{
        number[i].innerText = parseInt(number[i].innerText) + 1;
        total = prodprice[i].innerText * number[i].innerText;
        // console.log(prodprice[i].innerText * number[i].innerText)
        prodtotal[i].innerText = total;
    });
    minus[i].addEventListener("click",()=>{
        if((number[i].innerText)>1){
            number[i].innerText = parseInt(number[i].innerText) + -1;
            total = prodprice[i].innerText * number[i].innerText;
            console.log(prodprice[i].innerText * number[i].innerText)
            prodtotal[i].innerText = total;
        }
    });
    
}







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