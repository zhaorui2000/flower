<?php
require("../init.php");
@$kw=$_REQUEST["kw"];
$output=[
    "count"=>0,
    "pno"=>1,
    "pageSize"=>9,
    "pageCount"=>0,
    "product"=>[]
];
if($kw!=null){
    $start=($output["pno"]-1) * $output["pageSize"];
    $sql="select count(pid) from flower_product where pname like '%$kw%'";
    $res=mysqli_query($conn,$sql);
    $row=mysqli_fetch_row($res);
    $output["count"]=$row[0];
    $sql="select pid ,pname ,price ,(select md from flower_img where piid=pid limit 1) as md from flower_product where pname like '%$kw%' limit $start,".$output["pageSize"];
    $res=mysqli_query($conn,$sql);
    $row=mysqli_fetch_all($res,1);
    $output["product"]=$row;
}
echo json_encode($output);