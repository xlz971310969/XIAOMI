<?php
    header("content:text/html;charset=utf-8");

    $user = $_POST["username"];
    $pass = $_POST["userpass"];

    $link = mysqli_connect("localhost","root","19960807","shoppingcenter");


    $sqlStr = "select * from vip where username='{$user}' and userpass='{$pass}'";
    $result = mysqli_query($link,$sqlStr);

    mysqli_close($link);
    $rows = mysqli_num_rows($result);

    if($rows>0){
        echo "1";
    }else{
        echo "0";
    }

?>