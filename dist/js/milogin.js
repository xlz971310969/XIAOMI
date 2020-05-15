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