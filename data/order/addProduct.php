<?php
require("../init.php");
@$uid=$_SESSION["uid"];
@$pid=$_REQUEST["pid"];
@$name=$_REQUEST["name"];
@$count=$_REQUEST["count"];
@$order_time=$_REQUEST["order_time"];
@$province=$_REQUEST["province"];
@$city=$_REQUEST["city"];
@$order_adress=$_REQUEST["order_adress"];
@$way=$_REQUEST["way"];
@$code=$_REQUEST["code"];
@$price=$_REQUEST["price"];
$status=10;
$sql="INSERT INTO flower_order VALUES (NULL ,$uid , $pid , '$name',$count,$status,$order_time,'$province','$city','$order_adress',$way,$code,$price)";
$res=mysqli_query($conn,$sql);
echo json_encode(null);