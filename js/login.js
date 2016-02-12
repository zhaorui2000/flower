(()=>{
    // 点击登录时验证登录时用户名和密码不能为空，且合法。
    //用户名，密码正则验证
    // var reg_name1=/^1[34578]\d{9}$/,     手机
    //     reg_name2=/^[\w{5,}@\w{2,}.com]$/,  邮箱
    //     reg_name3=/^[a-zA-Z]{4,10}$/;      用户名
    var uname=localStorage.getItem("uname");
    var upwd=localStorage.getItem("upwd");
    if(uname!=null&& upwd!=null){
        $.ajax({
            type:"post",
            url:"data/users/signin.php",
            data:{uname,upwd},
            success(data) {
                if(data.code>0){
                    location.href="user_message.html";
                }
            }
        })
    }
    var reg_name=/^(1[34578]\d{9}|\w{5,}@\w{2,}.com|[a-zA-Z]{4,10})$/,
        reg_upwd=/\w{6,10}/;
    var test1=false,test2=false;
    $("#uname").blur(function(){
        var uname=$("#uname").val();
        if(uname==""){
            $("#uname_test").html("用户名不能为空");
        }else if(!reg_name.test(uname)){
            // $("#uname_test").html("");
            $("#uname_test").html("用户名输入不合法");
        }else{
            $("#uname_test").html("");
            test1=true;
        }
    })
    $("#upwd").blur(function(){
        var upwd=$("#upwd").val();
        if(upwd==""){
            $("#upwd_test").html("密码不能为空");
        }else if(!reg_upwd.test(upwd)){
            $("#upwd_test").html("密码输入不合法");
        }else{
            $("#upwd_test").html("");
            test2=true;
        }
    })
    $("#login").click(function(){
        var uname=$("#uname").val();
        var upwd=$("#upwd").val();
        if(uname==""){
            $("#uname_test").html("用户名不能为空");
        }else if(upwd==""){
            $("#upwd_test").html("密码不能为空");
        }
		if($("#check").is(":checked")){
			if(confirm("确定要记住密码吗？")) {
				localStorage.setItem("uname", uname);
				localStorage.setItem("upwd", upwd);
			}
		}
		if(test1 && test2){
            $.ajax({
                type:"post",
                url:"data/users/signin.php",
                data:{uname,upwd},
                success:function (data) {
                       if(data.code>0){
                           if(location.search!==""){
                               var back=location.search.slice(6);
                               //console.log(back);
                               location.href=back;
                           }else{
                               location.href="index.html";
                           }
                       }else{
                           $("#login_reg").html(data.msg);
                       }
                },
                error:function(){alert("网络故障，请检查！")}
            })
        }

    })

    // 点击注册按钮跳转到register.html页面
    $("#register").click(function(){
        location.href="register.html";
    })
})()
