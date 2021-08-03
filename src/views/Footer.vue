<template>
  <div class="footer">
    <div class="foot_top">
      <div class="foot_center">
        <li v-for="item in arrList" :key="item.id">{{ item.name }}</li>
      </div>
      <div class="foot_link">
        <div class="dl" v-for="n in booList" :key="n.index">
          <p>{{ n.name }}</p>
          <a href="##" v-for="m in n.list" :key="m.id">{{ m.name }}<br /></a>
        </div>
        <div class="dl_right">
          <p class="dl_phone">400-100-5678</p>
          <p class="time">8:00-18:00（仅收市话费）</p>
          <div class="people">人工客服</div>
          <p class="time">
            <span>关注小米:</span>
            <span>
              <img src="../assets/img/img1/ia_200000460.png" />
              <img src="../assets/img/img1/ia_200000461.png" alt="" />
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="foot_bot">
      <div class="bot_centain">
        <div class="logo_mi">
          <img src="../assets/img/img1/ia_200000462.png" alt="" />
        </div>
        <div class="logo_r">
          <p v-for="(i, index) in fooList" :key="index.id">
     
            <a href="##" class="small" v-for="s in i.list" :key="s.id">
              {{ s.name }}
            </a>
          </p>
          <br />
          <p v-for="(k, index) in folList" :key="index">
            <br />
            <a href="##" class="jing" v-for="(v,index) in k.list" :key="index.name">
              {{ v.name }}
            </a>
          </p>
          <br />
          <div v-for="(k,index) in imgList" :key="index">
              <img :src="k.src" alt="" />
          </div>

          <!-- <img src="../assets/img/img1/ia_200000349.png" alt="" />
          <img src="../assets/img/img1/ia_200000350.png" alt="" />
          <img src="../assets/img/img1/ia_200000351.png" alt="" />
          <img src="../assets/img/img1/ia_200000352.png" alt="" /> -->
        </div>
        <br />
      </div>
      <div class="tt">
        <img src="../assets/img/img1/ia_200000463.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arrList: [
        {
          id: 1,
          name: "预约维修服务",
        },
        {
          id: 2,
          name: "7天无理由退货",
        },
        {
          id: 3,
          name: "15天免费换货",
        },
        {
          id: 4,
          name: "满69包邮",
        },
        {
          id: 5,
          name: "520余家售后网点",
        },
      ],
      booList: [
        {
          id: 1,
          name: "帮助中心",
          list: [
            { id: 1, name: "账户管理" },
            { id: 2, name: "购物指南" },
            { id: 3, name: "订单操作" },
          ],
        },
        {
          id: 2,
          name: "服务支持",
          list: [
            { id: 1, name: "售后政策" },
            { id: 2, name: "自助服务" },
            { id: 3, name: "相关下载" },
          ],
        },
        {
          id: 3,
          name: "授权体验店",
          list: [
            { id: 1, name: "小米之家" },
            { id: 2, name: "服务网点" },
            { id: 3, name: "授权体验店" },
          ],
        },
        {
          id: 4,
          name: "关于小米",
          list: [
            { id: 1, name: "了解小米" },
            { id: 2, name: "加入小米" },
            { id: 3, name: "投资者关系" },
            { id: 4, name: "企业社会责任" },
            { id: 5, name: "廉洁举报" },
          ],
        },
        {
          id: 5,
          name: "关注我们",
          list: [
            { id: 1, name: "新浪微博" },
            { id: 2, name: "官方微信" },
            { id: 3, name: "联系我们" },
            { id: 4, name: "公益基金会" },
          ],
        },
        {
          id: 6,
          name: "特色服务",
          list: [
            { id: 1, name: "F 码通道" },
            { id: 2, name: "礼物码" },
            { id: 3, name: "防伪查询" },
          ],
        },
      ],
      fooList: [
        {
          id: 1,
          name: "",
          list: [
            { id: 1, name: "小米商城" },
            { id: 2, name: "MIUI" },
            { id: 3, name: "米家" },
            { id: 4, name: "米聊" },
            { id: 5, name: "多看" },
            { id: 6, name: "游戏" },
            { id: 7, name: "政企服务" },
            { id: 8, name: "小米天猫店" },
            { id: 9, name: "小米集团隐私政策" },
            { id: 10, name: "小米公司儿童信息保护规则" },
            { id: 11, name: "小米商城隐私政策" },
            { id: 12, name: "小米商城用户协议" },
            { id: 13, name: "问题反馈" },
            { id: 14, name: "Select Location" },
          ],
        },
        {
          id: 2,
          name: "",
          list: [
            { id: 1, name: "售后政策" },
            { id: 2, name: "自助服务" },
            { id: 3, name: "相关下载" },
          ],
        },
      ],
      folList: [
        {
          id: 1,
          name: "",
          list: [
            { id: 1, name: "©" },
            { id: 2, name: " mi.com" },
            { id: 3, name: "京ICP证110507号" },
            { id: 4, name: "京ICP备10046444号" },
            { id: 5, name: " 京公网安备11010802020134号" },
          ],
        },
        {
          id: 2,
          name: "",
          list: [
            { id: 1, name: "了解小米" },
            { id: 2, name: "加入小米" },
            { id: 3, name: "投资者关系" },
            { id: 4, name: "企业社会责任" },
            { id: 5, name: "廉洁举报" },
          ],
        },
        {
          id: 3,
          name: "",
          list: [
            { id: 1, name: "新浪微博" },
            { id: 2, name: "官方微信" },
            { id: 3, name: "联系我们" },
            { id: 4, name: "公益基金会" },
          ],
        },
        {
          id: 4,
          name: "",
          list: [
            { id: 1, name: "F 码通道" },
            { id: 2, name: "礼物码" },
            { id: 3, name: "防伪查询" },
          ],
        },
      ],
        imgList:[
            {id:1,
            src:"../../static/img/img1/ia_200000348.png"},
            {id:2,
            src:"../../static/img/img1/ia_200000349.png"},
            {id:3,
            src:"../../static/img/img1/ia_200000350.png"},
            {id:4,
            src:"../../static/img/img1/ia_200000351.png"},
            {id:5,
            src:"../../static/img/img1/ia_200000352.png"},
        ]
    };
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
#all {
  width: 1903px;
  height: 7000px;
}
#all .clear_boder {
  border-right: 0px solid red;
  text-align: center;
}
#all .clear_margin {
  margin-right: 0;
}
img:hover {
  cursor: pointer;
}
.footer {
  text-align: center;
}
.foot_top {
  width: 1903px;
  height: 335px;
  background: #fff;
  text-align: center;
}
.foot_center {
  width: 1226px;
  height: 30px;
  padding: 27px 0;
  display: inline-block;
  border-bottom: 1px solid #b0b0b0;
}
.foot_center li {
  width: 243px;
  height: 25px;
  border-right: 1px solid #b0b0b0;
  color: #616161;
}
.foot_center li:hover {
  color: #ff6700;
  cursor: pointer;
}
.foot_link {
  width: 1226px;
  height: 174px;
  padding: 40px 0;
  display: inline-block;
}
.dl {
  width: 160px;
  float: left;
}
.dl p {
  width: 100%;
  height: 17px;
  color: #424242;
  margin: 0 0 26px 0;
  font-size: 14px;
  text-align: left;
}
.dl a {
  color: #757575;
  font-size: 12px;
  padding: 0 60px 12px 0;
}
.dl_right {
  width: 252px;
  height: 111px;
  text-align: center;
  float: left;
  border-left: 1px solid #b0b0b0;
}
.dl_phone {
  width: 251px;
  height: 22px;
  margin: 0 0 5px;
  color: #ff6700;
  font-size: 22px;
}
.time {
  width: 251px;
  height: 18px;
  margin: 0 0 5px;
  font-size: 12px;
  color: #616161;
}
.people {
  width: 120px;
  height: 30px;
  color: #ff6700;
  border: 1px solid #ff6700;
  display: inline-block;
  line-height: 30px;
}
.people:hover {
  background: #ff6700;
  color: #fff;
}
.time span {
  width: 60px;
  margin: 0 0 0 0;
  float: left;
  margin: 5px -60px 0 65px;
  height: 24px;
  line-height: 24px;
}
.time span img {
  width: 24px;
  height: 24px;
  float: left;
}
.foot_bot {
  width: 1903px;
  height: 226px;
  background: #fafafa;
  padding: 30px 0;
  text-align: center;
}
.bot_centain {
  width: 1226px;
  height: 110px;
  display: inline-block;
  border: 0px solid red;
}
.logo_mi {
  width: 56px;
  height: 140px;
  float: left;
  margin: 0 10px 0 0;
}
.logo_mi img {
  width: 56px;
  height: 56px;
}
.logo_r p {
  list-style-type: none;
  margin: -2px 0;
}
.small {
  padding: 0 5px;
  border-right: 1px solid #b0b0b0;
  font-size: 12px;
  color: #757575;
}
.jing {
  padding: 0 5px;
  font-size: 12px;
  color: #b0b0b0;
}
.logo_r img {
  float: left;
  width: 85px;
  height: 28px;
  margin-right: 5px;
}
.tt {
  margin: 50px 0 0 0;
}
.footer a:hover {
  color: #ff6700;
}
</style>