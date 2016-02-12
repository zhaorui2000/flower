<?php
require ("../init.php");
session_start();
@$uid=$_SESSION["uid"];
if($uid!=null){
    $sql="SELECT *,(select sm from flower_img where piid=pid limit 1) as sm FROM flower_shoppingcart inner join flower_product on pid=spid where uid=$uid order by sid desc";
    $res=mysqli_query($conn,$sql);
    $row=mysqli_fetch_all($res,1);
    echo json_encode($row);
}
