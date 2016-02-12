(()=>{
    var phone_test=/^1[34578]\d{9}$/;
    var email_test=/^\w{5,}@\w{2,}.com$/;
    var test1=false, test2=false, test3=false, test4=false;
    $(".phone").blur(function(){
        $phone=$(this);
        if($phone.val()==""){
            $(".phone_test").html("手机号码不能为空");
        }else if(!phone_test.test($phone.val())){
            $(".phone_test").html("手机号码格式不正确");
        }else{
            $(".phone_test").html("");
        }
        $.ajax({
            type:"get",
            url:"data/users/isregister.php",
            data:{phone:$phone.val()},
            success:function (data) {
                if(data.code>0){
                    test1=true;
                }else{
                    $(".phone_test").html(data.msg);
                }
            }
        })
    })
    $(".email").blur(function () {
        $email=$(this).val();
        if($email==""){
            $(".email_test").html("邮箱不能为空");
        }else if(!email_test.test($email)){
            $(".email_test").html("邮箱格式不正确");
        }else{
            $(".email_test").html("");
            test2=true;
        }
    })
    var reg1=/^[0-9]{1,}$/;
    var reg2=/^\w{6,8}$/;
    var reg3=/^\w{8,}$/;
    $(".upwd").blur(function(){
        $upwd=$(this).val();
        if($upwd==""){
            $(".upwd_test").html("密码不能为空");
        }
    })
    $(".upwd").on("input",function () {      //监听input输入框的变动
        $upwd=$(this).val();
         if(reg1.test($upwd)){
             $(".upwd_test").html("");
            $(".rank").html("密码强度太低");
            $("#p1").css("background-color","red").siblings("#p2,#p3").css("background-color","#fff");
        }else if(reg2.test($upwd)){
            $(".rank").html("密码强度中等");
            $("#p1,#p2").css("background-color","blue").siblings("#p3").css("background-color","#fff");
            test3=true;
        }else if(reg3.test($upwd)){
            $(".rank").html("密码强度很高");
            $("#p1,#p2,#p3").css("background-color","green");
            test3=true;
        }
    $(".cpwd").blur(function () {
        $cpwd=$(this).val();
        if($cpwd!=$(".upwd").val()){
            $(".cpwd_test").html("两次密码不一致");
        }else{
            $(".cpwd_test").html("");
            test4=true;
        }
    })

    })
    $("#register").click(function(){      //点击注册
        var phone=$(".phone").val(),
            email=$(".email").val(),
            upwd=$(".upwd").val();
        var ischeck=$("#agree").is(":checked");
        if(phone==""){
            $(".phone_test").html("手机号码不能为空");
        }else if(email==""){
            $(".email_test").html("邮箱不能为空");
        }else if(upwd==""){
            $(".upwd_test").html("密码不能为空");
        }else if(!ischeck){
            $(".ischeck").html("请选择！");
        }else if(test1 && test2 && test3 &&test4){
            $.ajax({
                type:"post",
                url:"data/users/register.php",
                data:{phone,email,upwd},
                success:function (data) {
                    if(data.code>0){
                        alert(data.msg);
                        location.href="login.html";
                    }else{
                        alert(data.msg);
                    }
                },
                error:function () {
                    alert("网络故障请检查！");
                }
            })
        }
    })
})()