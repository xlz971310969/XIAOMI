<?php
	
	header("content-type","text/html;charset=utf-8");
	
	//一、接收前端传来的数据
	$userId = $_POST["userId"];
	$userPass = $_POST["userPass"];
	
	//二、保存数据
	//1、建立连接并选择数据库
	$con = mysqli_connect("localhost","root","19960807");
	if(!$con){
		//die("连接失败".mysqli_error());
		echo "0";	
	}	
	mysqli_select_db($con,"shop1701");
	
	//2、执行SQL语句
	$sqlStr = "insert into userTable(userId,userPass)
              values('".$userId."','".$userPass."')";
	//echo $sqlStr;
	
	mysqli_query($con,$sqlStr);
	
	//3、关闭数据库
	mysqli_close($con);
	
	//三、给前端响应
//	echo "1";

?>