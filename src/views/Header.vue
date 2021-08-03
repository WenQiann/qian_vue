<template>
  <div class="header">
    <div class="all">
      <div class="all_cen">
        <ul class="contain_left">
          <li class="squer" v-for="item in arrLists" :key="item.id">
            
            <a href="##"><router-link :to="{path:'/about'}">{{ item.name }}</router-link></a>
            
          </li>
          <div id="hide">
            <div class="triangle"></div>
            <div class="erweima">
              <img src="../../public/static/img/img1/ia_200000000.png" class="er" />
              <p>小米商城APP</p>
            </div>
          </div>
        </ul>
        <ul class="contain_right">
          <li class="squer" v-for="(item,index) in List" :key="index">
             <router-link :to="{path:'/load'}">
            <a href="##">{{ item.name }}</a>
             </router-link>
          </li>
          <li class="minibtn">
            <img src="../../public/static/img/img1/ia_200000363.png" class="iconfont" />
            <span class="squer"><a href="##" class="car">购物车（0）</a></span>
            <div class="shopping">购物车还没有商品，赶紧选购吧！</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {drag} from "../utils/header";
export default {
  data() {
    return {
      arrLists: [
        {
          id: 1,
          name: "小米商城",
        },
        {
          id: 2,
          name: "MIUI",
        },
        {
          id: 3,
          name: "LOT",
        },
        {
          id: 4,
          name: "云服务",
        },
        {
          id: 5,
          name: "天星数科",
        },
        {
          id: 6,
          name: "有品",
        },
        {
          id: 7,
          name: "小爱开发平台",
        },
        {
          id: 8,
          name: "企业团购",
        },
        {
          id: 9,
          name: "资质证照",
        },
        {
          id: 10,
          name: "协议规则",
        },
        {
          id: 11,
          name: "下载app",
        },
        {
          id: 12,
          name: "智能生活",
        },
        {
          id: 13,
          name: "Select Location",
        },
      ],
      List: [
        { id: 1, name: "登录" },
        { id: 2, name: "注册" },
        { id: 3, name: "消息通知" },
      ],
    };
  },
  methodos: {
    methodos1() {
      drag();
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
li,
a,
input {
  float: left;
  text-decoration: none;
  list-style-type: none;
  outline: none;
}

.clear_boder {
  border-right: 0px solid red;
  text-align: center;
}
.clear_margin {
  margin-right: 0;
}
.all {
  width: 100%;
  height: 40px;
  background: #333;
  text-align: center;
}
.all_cen {
  width: 1226px;
  height: 40px;
  display: inline-block;
}
.contain_left {
  width: 795px;
  height: 40px;
  border: 0px solid red;
  float: left;
}
.squer a {
  font-size: 12px;
  color: #b0b0b0;
  height: 10px;
  line-height: 10px;
  border-right: 1px solid #424242;
  padding: 5px;
  margin-top: 10px;
}
.squer a:hover {
  color: white;
}
.contain_right {
  float: right;
  width: 250px;
  height: 40px;
  border: 0px solid red;
}
.minibtn {
  width: 120px;
  height: 40px;
  background: #424242;
}
.iconfont {
  width: 20px;
  height: 20px;
  float: left;
  padding: 5px;
  margin: 5px;
}
.shopping {
  width: 250px;
  height: 100px;
  position: fixed;
  top: 40px;
  right: 340px;
  box-shadow: #b0b0b0 0px 1px 1px 1px;
  display: none;
  line-height: 100px;
  font-size: 14px;
  z-index: 10;
  background: white;
}
.erweima {
  width: 100px;
  height: 120px;
  border: 0px solid red;
  position: fixed;
  top: 48px;
  left: 850px;
  box-shadow: #b0b0b0 2px 2px 2px 2px;
  z-index: 20;
  background: #fff;
}
.triangle {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;
  border-bottom: 10px solid white;
  margin: 20px 0 0 545px;
}
.er {
  width: 80px;
  height: 80px;
  margin-top: 10px;
}
.erweima p {
  font-size: 14px;
}
#hide {
  display: none;
}
.minibtn li a:hover{
    color: #ff6700;
}
</style>