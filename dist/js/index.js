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
let $nava = $(".nav_c>li:lt(7) a");

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



// banner

let ord = 0;
let myClock = null;
let $img = $(".imgBox>img");
let $dou = $(".douBox>li");
let hrefs = ["http://www.mi.com/redminote8pro",
    "http://www.mi.com/redminote8",
    "https://www.mi.com/a/h/15061.html",
    "https://www.mi.com/mitvall-screen/e32a",
    "https://www.mi.com/miwatch/color-keith"
];

$dou.mouseover(function() {
    $(this).css("background-color", "white");
})
$dou.mouseout(function() {
    $(this).css("background-color", "#8e9898");
});


function autoPlay() {
    myClock = setInterval(function() {
        goImg(ord + 1);
    }, 2000)
}

function stopPlay() {
    window.clearInterval(myClock);
    myClock = null;
}

function goImg(transOrd) {
    if (transOrd === ord) {
        return;
    }
    let outOrd = ord;
    ord = transOrd;
    if (ord > $img.length - 1) {
        ord = 0;
    } else if (ord < 0) {
        ord = $img.length - 1;
    }

    $img.eq(outOrd).animate({ "opacity": "0" }, 1000);
    $img.eq(ord).animate({ "opacity": "1" }, 1000);
    $dou.eq(outOrd).css({ "background-color": "#8e9898" });
    $dou.eq(ord).css({ "background-color": "white" })
}


$(function() {
    autoPlay();
    $(".imgBox").mouseover(function() {
        stopPlay();
    });
    $(".imgBox").mouseout(function() {
        autoPlay();
    });
    $dou.click(function() {
        stopPlay();
        goImg($(this).index());
    });
    $(".arrowL").click(function() {
        stopPlay();
        goImg(ord - 1);
    })
    $(".arrowR").click(function() {
        stopPlay();
        goImg(ord + 1);
    })
    $(".imgBox").click(function() {
        window.open(hrefs[ord]);
    });

});



// showBox

let myClock1 = null;
let left = 0;
let $lis = $(".showBox>ul>li")

function autoShow() {

    myClock1 = setInterval(function() {
        $(".mshop_r>h5>span:nth-child(1)").css("color", "#b0b2b7");
        $(".mshop_r>h5>span:nth-child(2)").css("color", "#b0b2b7");
        left -= 992;
        if (left === ($lis.length - 2) * (-248)) {
            $(".mshop_r>h5>span:nth-child(2)").css("color", " #e5f1f1")
        } else if (left < ($lis.length) * (-248)) {
            $(".mshop_r>h5>span:nth-child(2)").css("color", "#b0b2b7");

            left = 0;
            $(".mshop_r>h5>span:nth-child(1)").css("color", " #e5f1f1")
        }
        $(".showBox").find("ul").css({ "left": left });

    }, 2000)

}
autoShow();

function stopShowPlay() {
    window.clearInterval(myClock1);
    myClock1 = null
}

function goRight() {
    $(".mshop_r>h5>span:nth-child(1)").css("color", "#b0b2b7");
    $(".mshop_r>h5>span:nth-child(2)").css("color", "#b0b2b7");
    left = parseFloat($(".showBox").find("ul").css("left")) - 992
    if (left === ($lis.length - 2) * (-248)) {
        $(".mshop_r>h5>span:nth-child(2)").css("color", " #e5f1f1")
    } else if (left < ($lis.length) * (-248)) {
        $(".mshop_r>h5>span:nth-child(2)").css("color", "#e5f1f1");

        left = ($lis.length - 3) * (-248);
        $(".mshop_r>h5>span:nth-child(1)").css("color", " #b0b2b7")
    }
    $(".showBox").find("ul").css({ "left": left });
}

$(".mshop_r>h5>span:nth-child(2)").click(function() {

    stopShowPlay();
    goRight();
})

function goLeft() {
    $(".mshop_r>h5>span:nth-child(1)").css("color", "#b0b2b7");
    $(".mshop_r>h5>span:nth-child(2)").css("color", "#b0b2b7");
    left = parseFloat($(".showBox").find("ul").css("left")) + 992
    if (left === ($lis.length - 2) * (-248)) {
        $(".mshop_r>h5>span:nth-child(2)").css("color", " #e5f1f1")
    } else if (left >= 0) {
        $(".mshop_r>h5>span:nth-child(2)").css("color", "#b0b2b7");

        left = 0;
        $(".mshop_r>h5>span:nth-child(1)").css("color", " #e5f1f1")
    }
    $(".showBox").find("ul").css({ "left": left });

}
$(".mshop_r>h5>span").mouseenter(function() {
    if (left !== 0 & left !== ($lis.length) * (-248)) {
        $(this).css("color", "rgb(253, 167, 6)");
    }
});
$(".mshop_r>h5>span").mouseleave(function() {
    $(this).css("color", " #e5f1f1");
});
$(".mshop_r>h5>span:nth-child(1)").click(function() {

    stopShowPlay();
    goLeft();
})




// allTit
$(".allTit>a>p").mouseover(function() {
    $(".allTit>a>p").css({
        "border-bottom": "none",
        "color": "#424242"
    })
    $(this).css({
        "border-bottom": " 3px solid rgb(248, 133, 1)",
        "color": " rgb(248, 133, 1)"
    })
    let len = $(".allTit>a>p").length;
    let i = len - $(this).index() - 1;
    $(this).parent().parent().parent().find("ul").css({
        "display": "none"
    });
    $(this).parent().parent().parent().find("ul").eq(i).css({
        "display": "block"
    })
})


// 微信二维码
$(".link-wrap>ul:last-child>li:nth-child(4)>a>i:nth-of-type(2)").mouseover(function() {
    $(".link-wrap>ul:last-child>li:nth-child(4)>a>div").css("display", "block")

})
$(".link-wrap>ul:last-child>li:nth-child(4)>a>i:nth-of-type(2)").mouseout(function() {
    $(".link-wrap>ul:last-child>li:nth-child(4)>a>div").css("display", "none")

})