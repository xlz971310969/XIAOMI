$(".mcon_r>.nav>li:first-child").click(function() {
    $(".mcon_r>.nav>li").css("color", "#6666")
    $(this).css("color", "#f56600");
    $(".way2").css("display", "none");
    $(".way1").css("display", "block");

})

$(".mcon_r>.nav>li:nth-child(2)").click(function() {
    $(".mcon_r>.nav>li").css("color", "#6666")
    $(this).css("color", "#f56600");
    $(".way1").css("display", "none");
    $(".way2").css("display", "block");

})

let myClock = null

$("#loginbtn").click(function() {
    if ($("#username").val() == "") {
        alert("用户名不能为空");
        return;
    }
    if ($("#password").val() == "") {
        alert("密码不能为空");
        return;
    }



    $.ajax({
        type: "POST",
        url: "./PHP/login.php",
        data: {
            "username": $("#username").val(),
            "userpass": $("#password").val()
        },
        success: function(result) {
            if (result == "1") {
                addCookie("username", document.getElementById("username").value, 7)
                let count = 6;
                myClock = setInterval(() => {

                    count--;
                    if (count <= 0) {
                        window.clearInterval(myClock);
                        location.href = "miindex.html";
                        return myClock;
                    }
                    $(".way1>div:nth-child(3)>span").css("color", "green").html(`登录成功，${count}s后自动跳往<a href='miindex.html'>小米官网</a>`)
                }, 1000);

            } else if (result == "0") {
                $(".way1>div:nth-child(3)>span").html("登录失败，请重新<a href='milogin.html'>登录</a>")
            }


        },
    });
});