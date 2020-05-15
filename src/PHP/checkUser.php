<?php

    header("content-type:text/html;charset=utf-8");

    $user = $_GET["username"];

    $link = mysqli_connect("localhost","root","19960807","shoppingcenter");

    $sqlStr = "select username from vip where username = '{$user}' ";
    $result = mysqli_query($link,$sqlStr);

    mysqli_close($link);

    $arr = mysqli_fetch_all($result,MYSQLI_NUM);

    if(count($arr)===1){
        echo "1";
    }else{
        echo "0";
    }







?>