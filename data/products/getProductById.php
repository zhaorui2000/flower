<?php
// 获取所有商品详情页面所需的数据
require("../init.php");
@$pid=$_REQUEST["pid"];
$output=[
    "text"=>[],
    "pic"=>[],
    "about"=>[],
    "hotSale"=>[],
    "comment"=>[]
];
//     详情查询
$sql="select vid,pname,ptitle,plive,price from flower_product where pid =$pid";
$res=mysqli_query($conn,$sql);
$row=mysqli_fetch_all($res,1)[0];
$output["text"]=$row;
//    相关商品查询
$vid=$row["vid"];
$sql="select pname,price ,pid,(select sm from flower_img where piid=pid limit 1) as sm from flower_product where vid=$vid";
$res=mysqli_query($conn,$sql);
$row=mysqli_fetch_all($res,1);
$output["about"]=$row;
//    商品图片查询
$sql="select sm,md,lg from flower_img where piid=$pid";
$res=mysqli_query($conn,$sql);
$row=mysqli_fetch_all($res,1);
$output["pic"]=$row;
//    热卖商品查询
$sql="select pname,pic,pid,price from host_sale";
$res=mysqli_query($conn,$sql);
$row=mysqli_fetch_all($res,1);
$output["hotSale"]=$row;
//    买家评价查询
$sql="select pid,cid,uid,comment,(select count(cid) from user_comment where pid=pid) as count,(select uname from flower_user where uid=uid) as uname from user_comment where pid=$pid";
$res=mysqli_query($conn,$sql);
$row=mysqli_fetch_all($res,1);
//var_dump($row);
$output["comment"]=$row;
echo json_encode($output);