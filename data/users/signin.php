<?php
require("../init.php");
@$uname=$_REQUEST["uname"];
@$upwd=$_REQUEST["upwd"];
//创建正则验证用户名密码
$uname_reg="/^[a-zA-Z]{4,10}$/";
$phone_reg="/^1[34578]\d{9}$/";
$email_reg="/^\w{5,}@\w{2,}.com$/";
$upwd_reg="/^\w{6,}$/";
if(!preg_match($upwd_reg,$upwd)){
    die('{"code":-1,"msg":"输入密码不合法"}');
}else if(preg_match($uname_reg,$uname)){
    $sql="SELECT uid FROM flower_user WHERE uname='$uname'";
}else if(preg_match($email_reg,$uname)){
    $sql="SELECT uid FROM flower_user WHERE email='$uname'";
}else if(preg_match($phone_reg,$uname)){
    $sql="SELECT uid FROM flower_user WHERE phone=$uname";
}else{
    die('{"code":-1,"msg":"输入登录名不合法"}');
}
$res=mysqli_query($conn,$sql);
$row=mysqli_fetch_row($res);
//var_dump($row);
if($row==null){
    echo '{"code":-1,"msg":"用户名或密码错误"}';
}else{
	session_start();
	$_SESSION["uid"]=$row[0];
    echo '{"code":1,"msg":"登录成功"}';
}
