<?php
    header("content:text/html;charset=utf-8");

    $user = $_POST["username"];
    $pass = $_POST["userpass"];

    $link = mysqli_connect("localhost","root","19960807","shoppingcenter");

    $sqlStr = "insert into vip(username,userpass) value('{$user}','{$pass}')";
    $result = mysqli_query($link,$sqlStr);

    mysqli_close($link);

    if($result){
      echo "1";
    }else{
      echo "0";
    }
?>