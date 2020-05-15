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



// 从后端获取所有的商品
function getGoods() {
    $.get("./PHP/getGoodsList.php", function(data) {
        showData(data);
    }, "json");
}

// 显示商品
function showData(data) {
    let htmlStr = "";
    data.forEach(item => {
        htmlStr += `
        <li>
        <a href="shopdetails.html?goodsId=${item.goodsId}"><img src="${item.goodsImg}" alt=""></a>
        <h2>
            <a href="">${item.goodsName} ${item.beiyong4}</a>
        </h2>
        <p>${item.goodsPrice}元</p>
        <a href="goodsdetail.html?goodsId=${item.goodsId}"><img src="${item.goodsImg}" alt=""></a>
        <a href="goodsdetail.html?goodsId=${item.goodsId}"> 
            <img class="zeng" src="${item.beiyong2}" alt="">
            <img class="jjg" src="${item.beiyong1}" alt="">
            <img class="fq" src="${item.beiyong3}" alt="">
        </a>
    </li>
        `
    });
    $(".listcon_m").html(htmlStr);
}
$(function() {
    getGoods();
})