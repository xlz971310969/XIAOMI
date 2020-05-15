let isRight = [0, 0, 0, 0];
$("#username").focusout(function() {
    let reg = /^[_a-zA-Z]\w{5,15}$/;
    if (reg.test($(this).val())) {
        isRight[0] = 1;
        $(this).next().css("color", "green");
        $(this).next().html("√");
    } else {
        isRight[0] = 0;
        $(this).next().css("color", "red");
        $(this).next().html("×，数字，字母，下划线组成，不能以数字开头，6-16位");
    }
    if (isRight[0] === 1) {
        $.ajax({
            type: "GET",
            url: "PHP/checkUser.php",
            data: {
                "username": $(this).val()
            },
            success: function(res1) {
                if (res1 == "1") {
                    isRight[1] = 0;
                    $("#username").next().css("color", "red");
                    $("#username").next().html("该用户名已被注册");
                } else if (res1 == "0") {
                    isRight[1] = 1;
                    $("#username").next().css("color", "green");
                    $("#username").next().html("该用户名可用");
                }
            }
        })
    }
});


$("#password").focusout(function() {
    let reg = /^[\da-zA-Z]{6,16}$/;
    if (reg.test($(this).val())) {
        isRight[2] = 1;
        $(this).next().css("color", "green");
        $(this).next().html("√");
    } else {
        isRight[2] = 0;
        $(this).next().css("color", "red");
        $(this).next().html("×，6-16位数字和字母");
    }
})


$("#password").change(function() {
    isRight[3] = 0;
    if ($("#repassword").val() !== "") {
        if ($(this).val() === $("#repassword").val()) {
            isRight[3] = 1;
            $("#repassword").next().css("color", "green");
            $("#repassword").next().html("√");
        } else {
            isRight[3] = 0;
            $("#repassword").next().css("color", "red");
            $("#repassword").next().html("×，两次密码不一致！");
        }
    }

})


$("#repassword").focusout(function() {
    if (isRight[2] === 1) {
        if ($(this).val() === $("#password").val()) {
            isRight[3] = 1;
            $("#repassword").next().css("color", "green");
            $("#repassword").next().html("√");

        } else {
            isRight[3] = 0;
            $("#repassword").next().css("color", "red");
            $("#repassword").next().html("×，两次密码不一致！");
        }
    } else {
        isRight[3] = 0;
        $("#repassword").next().css("color", "red");
        $("#repassword").next().html("×，请正确填写密码");
    }
})

$("#rbtn").click(function() {
    let sum = 0;
    isRight.forEach(item => {
        sum += item;
    });
    if (sum === 4) {
        $.ajax({
            type: "POST",
            url: "PHP/addUser.php",
            data: {
                "username": $("#username").val(),
                "userpass": $("#password").val()
            },
            success: function(res2) {
                if (res2 == "1") {
                    $("#rbtn").next().css("color", "green");
                    $("#rbtn").next().html("恭喜注册成功，请<a href='milogin.html'>登录</a>")
                } else if (res2 == "0") {
                    $("#rbtn").next().css("color", "red");
                    $("#rbtn").next().html("注册失败，请重新<a href='mireg.html'>注册</a>")
                }
            }
        })
    } else {
        $("#rbtn").next().css("color", "red");
        $("#rbtn").next().html("请正确填写注册信息");
    }

})