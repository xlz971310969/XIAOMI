let username = getCookie("username");

$(function() {

    getShopCar(addEvent)


})


function totalMoney() {
    let money = 0;
    let yxcount = 0;
    let gcount = $(".mywant").length;
    $(".mywant").each(function() {
        if ($(this).find(":checkbox").prop("checked")) {
            yxcount++;
            money += parseFloat($(this).find("li").eq(4).html());

        }

    });
    $(".allmoney>li>p:nth-of-type(1)>span:nth-child(1)").html(gcount);
    $(".allmoney>li>p:nth-of-type(1)>span:nth-child(2)").html(yxcount);
    $(".allmoney>li>p:nth-of-type(2)>span").html(money.toFixed(2));

    let xuyao = 99;
    xuyao -= money;

    if (xuyao <= 0) {
        $(".shoplist>h3").hide();
    } else {
        $(".shoplist>h3").show();
    }
    $(".shoplist>h3>span").html(xuyao);


}

function addEvent() {
    $(".mylist :checkbox:eq(0)").check($(".mylist :checkbox:gt(0)"))

    $(":checkbox").click(function() {
        totalMoney();
    })

    $(".addbtn").click(function() {
        let hrefs = $(this).parent().parent().parent().find("li").eq(1).find("a").attr("href");
        let goodsId = hrefs.split("=")[1];
        let count = $(this).parent().prev().find("input").val();
        count++;
        updataCount(goodsId, count, () => {
            $(this).parent().prev().find("input").val(count);

            let price = parseFloat($(this).parent().parent().prev().html());
            let money = price * count;
            $(this).parent().parent().next().html(`${money.toFixed(2)}元`);

            totalMoney();
        });

    })


    $(".reducebtn").click(function() {
        let hrefs = $(this).parent().parent().parent().find("li").eq(1).find("a").attr("href");
        let goodsId = hrefs.split("=")[1];
        let count = $(this).parent().next().find("input").val();
        count--;
        if (count < 1) {
            count = 1;
        }
        updataCount(goodsId, count, () => {
            $(this).parent().next().find("input").val(count);

            let price = parseFloat($(this).parent().parent().prev().html());
            let money = price * count;
            $(this).parent().parent().next().html(`${money.toFixed(2)}元`);

            totalMoney();
        })
    })

    $(".writecount").blur(function() {

        let hrefs = $(this).parent().parent().parent().find("li").eq(1).find("a").attr("href");
        let goodsId = hrefs.split("=")[1];
        let count = $(this).val();
        if (count < 1) {
            count = 1;
        }
        updataCount(goodsId, count, () => {

            $(this).val(count);

            let price = parseFloat($(this).parent().parent().prev().html());
            let money = price * count;
            $(this).parent().parent().next().html(`${money.toFixed(2)}元`);

            totalMoney();
        })
    })

    $(".mywant>li:last-child").click(function() {
        let hrefs = $(this).parent().find("li").eq(1).find("a").attr("href");
        let goodsId = hrefs.split("=")[1];
        if (confirm("您确定要删除该商品吗？")) {
            $.get("./PHP/deleteGoods.php", {
                "vipName": username,
                "goodsId": goodsId
            }, (data) => {
                if (data == "0") {
                    alert("服务器出错，操作失败！")
                } else {
                    $(this).parent().remove();
                    totalMoney();
                }
            })
        }
    })
}




function getShopCar(callback) {
    let username = getCookie("username");
    $.get("./PHP/getShoppingCart.php", {
        "vipName": username
    }, function(datas) {
        let htmlStr = `
                <ul>
                    <li>
                        <input type="checkbox">全选
                    </li>
                    <li>商品名称</li>
                    <li>单价</li>
                    <li>数量</li>
                    <li>小计</li>
                    <li>操作</li>
                </ul>
        `;
        datas.forEach((goods) => {
            htmlStr += `
            <ul class="mywant">
                    <li>
                        <input type="checkbox">
                    </li>
                    <li><a class="goodsId" href="shopdetails.html?goodsId=${goods.goodsId}">
                            <img src="${goods.goodsImg}" alt="">
                            <p>${goods.goodsName} ${goods.beiyong4}</p>
                        </a>
                    </li>
                    <li>${goods.goodsPrice}元</li>
                    <li>
                        <div><input class="reducebtn" type="button" value="-"></div>
                        <div><input class="writecount" type="text" name="" id="" value="${goods.goodsCount}"></div>
                        <div><input class="addbtn" type="button" value="+"></div>
                    </li>
                    <li class="xj">${goods.goodsPrice*goods.goodsCount}元</li>
                    <li>×</li>
            </ul>
            `
        });
        htmlStr += `
        <ul class="allmoney">
            <li>
                <a href="">继续购物</a>
                <p>共 <span>0</span> 件商品，已选择 <span>0</span> 件</p>
                <P>合计：<span>0.00</span> 元</P>
                <a href="">去结算</a>
            </li>

        </ul>
        `
        $(".mylist").html(htmlStr);
        callback && callback();
    }, "json")
}



function updataCount(goodsId, goodsCount, callback) {

    $.get("./PHP/updateGoodsCount.php", {
        "vipName": username,
        "goodsId": goodsId,
        "goodsCount": goodsCount
    }, function(data) {
        if (data == "0") {
            alert("服务器出错，操作失败！")
        } else {
            callback && callback();
        }
    })
}