<?php
require("../init.php");
@$phone=$_REQUEST["phone"];
@$email=$_REQUEST["email"];
@$upwd=$_REQUEST["upwd"];
$reg1="/^1[34578]\d{9}$/";
$reg2="/^\w{5,}@\w{2,}.com$/";
$reg3="/^\w{6,}$/";
if(!preg_match($reg1,$phone)){
    die('{"code":-1,"msg":"手机号码格式不正确"}');
}else if(!preg_match($reg2,$email)){
    die('{"code":-1,"msg":"邮箱格式不正确"}');
}else if(!preg_match($reg3,$upwd)){
    die('{"code":-1,"msg":"密码格式不正确"}');
}else{
    $uname="用户".$phone;
    $sql="insert into flower_user(phone,email,upwd,uname) values ($phone, '$email' , '$upwd','$uname')";
    $res=mysqli_query($conn,$sql);
    $id=mysqli_affected_rows($conn);
    if($id>0){
        echo '{"code":"1","msg":"用户注册成功"}';
    }else{
        echo '{"code":"-1","msg":"用户注册失败"}';
    }
}