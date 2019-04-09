// 封装一个代替getElementById()的方法
function byId(id) {
    return typeof (id) === "string" ? document.getElementById(id) : id;
}
// console.log(byId("main"));  // 测试成功

var index = 0,
    timer = null,
    pics  = byId("banner").getElementsByTagName("div"),
    dots  = byId("dots").getElementsByTagName("span");
    len   = pics.length;
// console.log(len);

function slideImg() {
    var main = byId("main");
    // 划过清楚定时器, 离开继续
    main.onmouseover = function () {
        // 划过清除定时器
        if(timer) {
            clearInterval(timer);
        }
    }
    main.onmouseout = function () {  // 此处是mouseover事件, 定义了这个事件发生时的方法
        // 定时器继续
        // 定时调用
        timer = setInterval(function () {
            index++;
            if (index == len) {
                index = 0;
            }
            // console.log(index);
            // 切换图片
            changeImg();  // index是全局变量, 应次不需要传参数
            
        }, 3800);  // 3秒调用一次
    }

    main.onmouseout();  // 自动在main上触发一个mouseout事件方法, 使得页面进去的时候就直接开始调用轮播的功能

    // 遍历所有点击, 且绑定点击事件, 点击圆点切换图片
    for(var d=0; d<len; d++){
        dots[d].id = d;
        dots[d].onclick = function() {
            // alert(this.id);
            index = this.id;  // 改变index的值为当前圆点的id值
            changeImg();  // 调用改变图片的方法
        }
    }

}

// 切换图片
function changeImg() {
    // 遍历banner下面的所有的div, 通过for循环将所有的图片隐藏
    for (var i = 0; i < len; i++) {
        pics[i].style.display = "none";
    }
    // 根据index显示对应的图片
    pics[index].style.display = "block";

}


slideImg();