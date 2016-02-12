<?php
require("../init.php");
session_start();
@$uid=$_SESSION["uid"];
if($uid!=null){
	$sql="select uname from flower_user where uid=$uid";
	$res=mysqli_query($conn,$sql);
	$user=mysqli_fetch_row($res)[0];
	echo json_encode(["code"=>1,"user"=>$user]);
}else{
	echo json_encode(["code"=>0]);
}
?>