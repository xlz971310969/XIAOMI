// 猜你喜欢
$(".shopmore>ul>li:nth-child(1)").click(function() {
    $(".shopmore>ul>li").css({
        "background-color": "#333333",
        "border": "none",
    })
    $(this).css({
        "background-color": " white",
        "border": "2px solid #FF6600"
    })

    $(".shopmore>div>ul").animate({ "left": "0" }, 200)
})
$(".shopmore>ul>li:nth-child(2)").click(function() {
    $(".shopmore>ul>li").css({
        "background-color": "#333333",
        "border": "none",
    })
    $(this).css({
        "background-color": " white",
        "border": "2px solid #FF6600"
    })

    $(".shopmore>div>ul").animate({ "left": "-1242" }, 200)
})