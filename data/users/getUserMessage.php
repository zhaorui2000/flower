<?php
require ("../init.php");
session_start();
$uid=$_SESSION["uid"];
if($uid!=null){
    $sql="select uname,phone,email,sex,user_name,avatar,sign from flower_user where uid =$uid";
    $res=mysqli_query($conn,$sql);
    $row=mysqli_fetch_all($res,1);
    echo json_encode($row[0]);
}