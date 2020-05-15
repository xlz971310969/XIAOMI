//header的下载二维码
let $downloadapp = $(".header_l").find("li").eq(20);
$downloadapp.mouseenter(() => {
    $downloadapp.find("div").finish();
    $downloadapp.find("div").slideDown(100);

})
$downloadapp.mouseleave(() => {
    $downloadapp.find("div").finish();
    $downloadapp.find("div").slideUp(100);

})


// 购物车的提示
let $shoppingbox = $(".header_r").find("li").eq(5);
$shoppingbox.mouseenter(() => {
    $shoppingbox.find("div").finish();
    $shoppingbox.find("div").slideDown(200);

})
$shoppingbox.mouseleave(() => {
    $shoppingbox.find("div").finish();
    $shoppingbox.find("div").slideUp(200);

})
$shoppingbox.find("div").mouseenter(() => {
    $shoppingbox.find("div").css("display", "block")
})


// 二级导航
let $nava = $(".nav_c>li:gt(0) a");

$nava.mouseover((event) => {


    $(event.target).next().finish();
    $(event.target).next().slideDown(200);

})
$nava.children().mouseover((event) => {
    event.stopPropagation();

})


$nava.next().mouseenter(function() {
    $(this).css("display", "block");
})

$nava.mouseout((event) => {
    $(event.target).next().finish();
    $(event.target).next().slideUp(200);
})
$nava.children().mouseout((event) => {
    event.stopPropagation();

})


// 搜索框
$(".headSearch>input").focus((event) => {
    $(event.target).nextAll().css("display", "none")
    $(event.target).parent().css("border-color", "orange")
    $(event.target).parent().parent().css("border-color", "orange")

})
$(".headSearch>input").focusout((event) => {
    $(event.target).nextAll().css("display", "block")
    $(event.target).parent().css("border-color", "#9c9d9c")
    $(event.target).parent().parent().css("border-color", "#9c9d9c")

})





// 微信二维码
$(".link-wrap>ul:last-child>li:nth-child(4)>a>i:nth-of-type(2)").mouseover(function() {
    $(".link-wrap>ul:last-child>li:nth-child(4)>a>div").css("display", "block")

})
$(".link-wrap>ul:last-child>li:nth-child(4)>a>i:nth-of-type(2)").mouseout(function() {
    $(".link-wrap>ul:last-child>li:nth-child(4)>a>div").css("display", "none")

})




// 获取cookie
function getUser() {
    let username = getCookie("username");

    if (username) {
        $(".user").css("display", "block")
        $(".dlzc").css("display", "none")
        $(".user>li:first-child>a").html(username);
    } else {
        $(".user").css("display", "none")
        $(".dlzc").css("display", "block")
    }
}
// 退出登录
function deleteuser() {
    removeCookie("username");
    $(".user").css("display", "none")
    $(".dlzc").css("display", "block")
}

$(function() {
    getUser();
    $(".tcdl").click(function() {
        deleteuser();
    })
})