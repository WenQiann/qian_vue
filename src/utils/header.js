// import ia_200000364 from '../../public/static/img/img1/ia_200000364.png';
// import ia_200000363 from '../../public/static/img/img1/ia_200000363.png';

window.onload = function () {
    var ominibtn = document.getElementsByClassName("minibtn")[0];
    var oiconfont = document.getElementsByClassName("iconfont")[0];
    var oshopping = document.getElementsByClassName("shopping")[0];
    var ocar = document.getElementsByClassName("car")[0];
    var osquer = document.getElementsByClassName("squer")[10];
    var ohide = document.getElementById("hide");
    var oborder = document.getElementsByTagName("a")[12];
    oborder.style.border = "0px solid red";
    ominibtn.onmouseover = function () {
        // oiconfont.src = ia_200000364;
        oshopping.style.display = "block";
        ocar.className = "list_active";
        // alert(1)
    }
    ominibtn.onmouseout = function () {
        // oiconfont.src = ia_200000363;
        oshopping.style.display = "none";
        ocar.className = "";
        // alert(1)
    }
    osquer.onmouseover = function () {
        ohide.style.display = "block";
        // alert(1)
    }
    osquer.onmouseout = function () {
        ohide.style.display = "none";
        // alert(1)
    }
    var olist_btn = document.getElementsByClassName("list_btn");
    var opage = document.getElementsByClassName("page");
    var osearch = document.getElementsByClassName("search")[0];
    var osearch_img = document.getElementsByClassName("search_img")[0];
    var osearch_box = document.getElementsByClassName("search_box")[0];
    var osearch_text = document.getElementsByClassName("search_text");
    // 最上方导航购物车脚本
    osearch.onclick = function () {
        if (osearch_box.style.display == "block") {
            osearch_box.style.display = "none";
            osearch.style.border = "";
            osearch_img.style.border = "";
        } else {
            osearch_box.style.display = "block";
            osearch.style.border = "1px solid #ff6700";
            osearch_img.style.border = "1px solid #ff6700";
            for (var i = 0; i < osearch_text.length; i++) {
                osearch_text[i].index = i
                osearch_text[i].onmouseover = function () {
                    this.style.background = "#f5f5f5"
                }
                osearch_text[i].onmouseout = function () {
                    this.style.background = "white"
                }
            }
        }
    }
    osearch_img.onmouseover = function () {
        osearch_img.style.background = "#ff6700";
        osearch_img.style.color = "white"
    }
    osearch_img.onmouseout = function () {
        osearch_img.style.background = "";
        osearch_img.style.color = "#333"
    }
    // logo导航选项卡实现脚本
    for (var i = 0; i < olist_btn.length; i++) {
        olist_btn[i].index = i
        olist_btn[i].onmouseover = function () {
            this.className = "list_btn active";
            opage[this.index].style.display = "block";
            opage[this.index].onmouseover = function () {
                this.style.display = "block";
            }
            opage[this.index].onmouseout = function () {
                this.style.display = "none";
            }
        }
        olist_btn[i].onmouseout = function () {
            this.className = "list_btn";
            opage[this.index].style.display = "none";
        }
    }
    var oaside_list = document.getElementsByClassName("aside_list");
    var oconent_list = document.getElementsByClassName("conent_list");
    for (var i = 0; i < oaside_list.length; i++) {
        oaside_list[i].index = i
        oaside_list[i].onmouseover = function () {
            this.className = "aside_list aside_active";
            oconent_list[this.index].style.display = "block";
            oconent_list[this.index].onmouseover = function () {
                this.style.display = "block";
            }
            oconent_list[this.index].onmouseout = function () {
                this.style.display = "none";
            }
        }
        oaside_list[i].onmouseout = function () {
            this.className = "aside_list";
            oconent_list[this.index].style.display = "none";
        }
    }
    // 电视-周边选项卡

    var smaul = document.getElementsByClassName("more")[0];
    var smali = smaul.children;
    var smapic1 = document.getElementsByClassName("main_right")[0];
    var smapic = smapic1.children;
    for (var i = 0; i < smali.length; i++) {
        smali[i].index = i;
        smali[i].onmouseover = function () {
            for (var j = 0; j < smapic.length; j++) {
                smali[j].className = ""
                smapic[j].className = "main_right"
            }
            this.className = "more"
            smapic[this.index].className = "main_right more_active"
        }
    }
    var smaul = document.getElementsByClassName("more")[1];
    var smali = smaul.children;
    var smapic1 = document.getElementsByClassName("main_right")[1];
    var smapic = smapic1.children;
    for (var i = 0; i < smali.length; i++) {
        smali[i].index = i;
        smali[i].onmouseover = function () {
            for (var j = 0; j < smapic.length; j++) {
                smali[j].className = ""
                smapic[j].className = "main_right"
            }
            this.className = "more"
            smapic[this.index].className = "main_right more_active"
        }
    }
    var smaul = document.getElementsByClassName("more")[2];
    var smali = smaul.children;
    var smapic1 = document.getElementsByClassName("main_right")[2];
    var smapic = smapic1.children;
    for (var i = 0; i < smali.length; i++) {
        smali[i].index = i;
        smali[i].onmouseover = function () {
            for (var j = 0; j < smapic.length; j++) {
                smali[j].className = ""
                smapic[j].className = "main_right"
            }
            this.className = "more"
            smapic[this.index].className = "main_right more_active"
        }
    }
    var smaul = document.getElementsByClassName("more")[3];
    var smali = smaul.children;
    var smapic1 = document.getElementsByClassName("main_right")[3];
    var smapic = smapic1.children;
    for (var i = 0; i < smali.length; i++) {
        smali[i].index = i;
        smali[i].onmouseover = function () {
            for (var j = 0; j < smapic.length; j++) {
                smali[j].className = ""
                smapic[j].className = "main_right"
            }
            this.className = "more"
            smapic[this.index].className = "main_right more_active"
        }
    }
    var smaul = document.getElementsByClassName("more")[4];
    var smali = smaul.children;
    var smapic1 = document.getElementsByClassName("main_right")[4];
    var smapic = smapic1.children;
    for (var i = 0; i < smali.length; i++) {
        smali[i].index = i;
        smali[i].onmouseover = function () {
            for (var j = 0; j < smapic.length; j++) {
                smali[j].className = ""
                smapic[j].className = "main_right"
            }
            this.className = "more"
            smapic[this.index].className = "main_right more_active"
        }
    }
    // 视频播放
    var oval = document.getElementsByClassName("oval");
    var player = document.getElementsByClassName("player")[0];
    var playing = document.getElementsByClassName("playing")[0];
    var stoping = document.getElementsByClassName("sto");

    for (var i = 0; i < oval.length; i++) {
        oval[i].index = i;
        oval[i].onclick = function () {
            player.style.display = "block"
            playing.src = "../public/static/video/e25d81c4922fca5ebe51877717ef9b76.mp4";
        }
        for (let j = 0; j < stoping.length; j++) {
            stoping[j].onclick = function () {
                player.style.display = "none"
                playing.src = "";
            }
        }

    }
}
