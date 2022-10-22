window.addEventListener("load",()=>{
    if($(window).width()<1025){
        document.getElementById("loading").style.display="none";
    }
    setTimeout(()=>{
        document.getElementById("loading").style.animation="opa 0.5s 0.5s both ease-in";
    },3000);
    setTimeout(()=>{
        document.getElementById("loading").remove();
    },4000)

});
// if($(window).width()>1024){

let othh = $(window).innerHeight();
$(window).scroll(function(){
    if($(window).width()>1024){
        let sctt = $(this).scrollTop();
        let alll = sctt+othh;
        let oftt = $("#special_group").offset().top;
        
        if(alll > oftt){
            $("#special_group").animate({left:"40%"},1200);
        }
    }

});
// }