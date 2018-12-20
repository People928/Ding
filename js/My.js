$(function(){
    $(".exd").tap(function(){
        var info = localStorage.getItem("info");
        info.status = false;
        location.href = "./Back.html";
    })
})