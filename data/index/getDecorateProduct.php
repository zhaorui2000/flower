<?php
require ("../init.php");
$sql="SELECT pid, pname ,price ,pic FROM decorate_homes";
$result=mysqli_query($conn,$sql);
$row=mysqli_fetch_all($result,1);
echo json_encode($row);