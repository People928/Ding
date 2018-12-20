$(function(){
    var obj = JSON.parse(localStorage.getItem("info"));
      $(".user").on('input',function(){
          if($(this).val()==obj.user){
               $(".pasw").focus();
          }
      })
      $(".pasw").on('input',function(){
        if($(this).val()==obj.pasw){
            $(".join a").addClass("ok") 
        }
    })
    // $(".user").blur(function(){
    //     if($(this).val()!=obj.user){
    //        alert("没有此账号，请前去注册，或者，重新输入账号");
    //        $(this).val(' ');
    //        $(this).focus();
    //     }
    // })

  console.log()
  $(".join a").tap(function(){
      console.log(1)
       if($(this).hasClass("ok")){
        obj.status = true
            localStorage.setItem("info",JSON.stringify(obj));
           location.href="./message.html"
       }
  })
  $(".del").tap(function(){
      $(this).prev().val(" ")
  })
})