$(function(){
    var user = localStorage.getItem("user");
    var info = JSON.parse(localStorage.getItem("info"));
    console.log(user)
    if(info==null){
        location.href = "./login.html";
    }else if(info.status == false){
        location.href = "./Back.html";

    }
    console.log(user.status)
    // window.close(function(){
    //     info.status = false
    //     localStorage.setItem("info",JSON.stringify(info));
    // })
    
})