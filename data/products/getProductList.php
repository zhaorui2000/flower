<?php
require("../init.php");
$output=[
    "count"=>0,
    "pno"=>0,
    "pageSize"=>9,
    "pageCount"=>0,
    "product"=>[]
];
@$pno=$_REQUEST["pno"];
if($pno==null){
    $output["pno"]=1;
}else{
    $output["pno"]=$pno;
}
$sql="select count(pid) from flower_product";
$res=mysqli_query($conn,$sql);
$output["count"]=mysqli_fetch_row($res)[0];
$output["pageCount"]=ceil($output["count"]/$output["pageSize"]);
$start=($output["pno"]-1)*$output["pageSize"];
$sql="select pid ,pname ,ptitle,price ,(select md from flower_img where piid=pid limit 1) as md from flower_product limit $start,".$output["pageSize"];
$res=mysqli_query($conn,$sql);
$row=mysqli_fetch_all($res,1);
//var_dump($row);
$output["product"]=$row;
echo json_encode($output);