// document.cookie = "chayuan = haha";
// --開頭有進過一次就不再顯示
function getcook(user){
    let allcook = document.cookie.split(";");
    // console.log(document.cookie)
    for(let pp=0;pp<allcook.length;pp++){
        let maincook = allcook[i].split("=");
        if(user == maincook[0]){
            return maincook[1];
        }
        // console.log(maincook[0]);
    }
}
function checkCook() {
    let user = getcook("chayuan");
    if (user == "haha") {
        document.getElementById("loading").style.display="none";
    }else{
        window.addEventListener("load",()=>{
            document.cookie = "chayuan = haha";
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
    }
}
checkCook();

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