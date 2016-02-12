<?php
require("../init.php");
session_start();
@$uid=$_SESSION["uid"];
@$pid=$_REQUEST["pid"];
@$count=$_REQUEST["count"];
if($count==null){
    $count=1;
}
if($uid!=null && $pid!=null){
    $sql="select sid from flower_shoppingcart where uid=$uid and spid=$pid";
    $res=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($res)[0];
    if($row==null){
        $sql="insert into flower_shoppingcart values(null,$uid,$pid,$count)";
    }else{
        $sql="update flower_shoppingcart set count=count+$count where sid=".$row;
    }
    $res=mysqli_query($conn,$sql);
    $row=mysqli_affected_rows($conn);
    if($row>0){
        echo json_encode("ok");
    }else{
        echo json_encode("no");
    }
}