<?php
//验证注册手机号是否已经存在
require("../init.php");
@$phone=$_REQUEST["phone"];
$reg="/^1[34578]\d{9}$/";
if(!preg_match($reg,$phone)) {
    die('{"code":-1,"msg":"手机号码格式不正确"}');
}else {
    $sql="select uid from flower_user where phone=$phone";
    $res=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($res);
    if($row[0]>0){
        echo '{"code":-1,"msg":"注册手机号码已存在"}';
    }else{
        echo '{"code":1,"msg":"该手机号码可以注册"}';
    }
}