<?php
require ("../init.php");
session_start();
@$uid=$_SESSION["uid"];
if($uid!=null){
    $sql="select *,(select sm from flower_img where piid=pid limit 1) as sm ,(select price from flower_product  where pid=pid limit 1) as price from flower_order where uid=$uid";
    $row=mysqli_query($conn,$sql);
    $res=mysqli_fetch_all($row,1);
    echo json_encode($res);
}