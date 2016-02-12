<?php
require ("../init.php");
$sql="SELECT pname,price,pic,pid FROM new_product";
$res=mysqli_query($conn,$sql);
$row=mysqli_fetch_all($res,1);
echo json_encode($row);