<?php
require ("../init.php");
session_start();
@$uid=$_SESSION["uid"];
@$uname = $_REQUEST["uname"];
@$email = $_REQUEST["email"];
@$sex = $_REQUEST["sex"];
@$user_name =$_REQUEST["user_name"];
@$sign =$_REQUEST["sign"];
@$phone=$_REQUEST["phone"];
$sql="update flower_user set uname='$uname',email='$email',sex='$sex',user_name='$user_name',sign='$sign',phone='$phone' where uid=$uid";
$res=mysqli_query($conn,$sql);
$row=mysqli_affected_rows($conn);
echo $row;