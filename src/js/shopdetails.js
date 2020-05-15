// 获取文具类型的商品
function getDetail(goodsId) {

    $.get("./PHP/getGoodsInfo.php", {
        "goodsId": goodsId,
    }, function(data) {
        let htmlStr = `

        <div class="sdetails_l">
          <img src="${data.goodsImg}" alt="">
        </div>
        <div class="sdetails_r">
          <h2>${data.goodsName}</h2>
          <p>${data.goodsDesc}</p>
          <p>小米自营</p>
          <p><span>${data.goodsPrice}</span>元</p>
        <div>
            <p><i class="iconfont icon-dingwei1"></i> 安徽合肥市瑶海区铜陵路街道 <span> 修改</span>
            </p>
            <p>有现货</p>
        </div>
        <div>
            <h5>选择颜色</h5>
            <a href="">${data.beiyong4}</a>
        </div>
        <ul>
            <li>${data.goodsName} ${data.beiyong4}
                <p><span>${data.goodsPrice}</span>元</p>
            </li>
            <li>总计：<span>${data.goodsPrice}</span>元</li>
        </ul>
        <div>
            <input id="addshopcar" type="button" value="加入购物车">
        </div>
        <ul>
            <li>√ 小米自营</li>
            <li>√ 小米发货</li>
            <li>√ 7天无理由退货</li>
            <li>√ 运费说明</li>
            <li>√ 企业信息</li>
            <li>√ 售后服务政策</li>
            <li>√ 7天价格保护</li>
        </ul>
    </div>
        `;
        $(".sdetails-wrap").html(htmlStr);
        $(".dnav-wrap>.dnav_l>h2").html(data.goodsName);
        $("#addshopcar").click(function() {
            addShoppingCar(goodsId);
        })
    }, "json");
}

$(function() {
    let goodsId = location.search.split("=")[1];
    getDetail(goodsId);

})



function addShoppingCar(goodsId) {
    let username = getCookie("username");
    let count = 0;
    count++;
    $.post("./php/addShoppingCart.php", {
        "vipName": username,
        "goodsId": goodsId,
        "goodsCount": count
    }, (data) => {
        if (data === "0") {
            alert("添加失败");
        } else {
            alert("添加成功,请前往购物车查看");
        }
    });
}