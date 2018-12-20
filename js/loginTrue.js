$(function(){
    var tel  = JSON.parse(localStorage.getItem("user"));
    var str=1;
    for(var i=1;i<tel.length;i++){
        if(i%4==0){
            str += "-"
        }
        str += tel[i];

    }
    console.log(str)
    $(".tel").html(`+86 ${str}`);
        var inow=0;
       var pasw = "";
      $(".inputBox input").on("input",function(e){
        console.log($(this))
        pasw += $(this).val();
        console.log(pasw)
        $(this).next().focus()
        if($(this).val() !=0){
            inow++;
        }
        if(inow==4){
            location.href = "./message.html";
            var obj = {
                "user":tel,
                "pasw":pasw,
                "status":false
            }
           
            localStorage.setItem("info",JSON.stringify(obj))
        }
      })

    // .change(function(){
    
          
     

})