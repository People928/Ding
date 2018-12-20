$(function(){
    var user = JSON.parse(localStorage.getItem("user")) || "";
    if(user!=""){
        $(".inputd").attr("value",user);
    }
        $(".next").tap(function(){
        console.log(1)
        var val = $(".inputd").val();
        if(val!=""){
             localStorage.setItem("user",JSON.stringify(val))
            console.log(1) 
            location.href = "./loginTrue.html";
        }
      
    })
    $(".del").tap(function(){
        $(this).prev().val(" ")
    })

})