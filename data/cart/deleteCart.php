<?php
require ("../init.php");
session_start();
@$uid=$_SESSION["uid"];
@$pid=$_REQUEST["pid"];
if($uid!=null && $pid!=null){
    $sql="delete from flower_shoppingcart where uid=$uid and spid=$pid";
    mysqli_query($conn,$sql);
    echo json_encode(null);
}