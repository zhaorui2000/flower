<?php
require ("../init.php");
@$count=$_REQUEST["count"];
@$sid=$_REQUEST["sid"];
if($sid!=null && $count!=null){
    if($count==0){
        $sql="delete from flower_shoppingcart where sid=$sid";
    }else{
        $sql="update flower_shoppingcart set count=$count where sid=$sid";
    }
    mysqli_query($conn,$sql);
    echo json_encode(null);
}