<template>
  <div class="home">
    <div class="header">
      <!-- 导航选项卡 -->
        <div class="page" v-for="(w, index) in arr2" :key="index.w">
          <div class="page_center">
            <div class="page_one" v-for="e in w.list" :key="e.na">
              <div class="page_img">
                <img :src="e.src" />
              </div>
              <p class="page_name">{{ e.name }}</p>
              <p class="page_price active">{{ e.price }}</p>
            </div>
          </div>
        </div>
      <div class="containter">
        <img src="../../public/static/img/img1/ia_200000462.png" class="header_logo" />
        <ul class="nav_list">
          <li class="list" v-for="list in arrList" :key="list.id">
            <a href="##" class="list_btn">{{ list.name }}</a>
          </li>
          <li class="list" v-for="(i, index) in fooList" :key="index.value">
            <a href="##" class="list_active">{{ i.name }}</a>
          </li>
          <div class="search_img">Search</div>
          <input type="text" placeholder="手机" class="search" />
          <div class="search_box">
            <p class="search_text" v-for="(p, index) in arr1" :key="index.num">
              {{ p.name }}
            </p>
          </div>
        </ul>
        <!-- 导航选项卡 -->
        <!-- <div class="page" v-for="(w, index) in arr2" :key="index.w">
          <div class="page_center">
            <div class="page_one" v-for="e in w.list" :key="e.na">
              <div class="page_img">
                <img :src="e.src" />
              </div>
              <p class="page_name">{{ e.name }}</p>
              <p class="page_price active">{{ e.price }}</p>
            </div>
          </div>
        </div> -->
        <!-- 轮播 -->
        <div class="play">
          <div class="block">
            <span class="demonstration"></span>
            <el-carousel trigger="click" height="460px">
              <el-carousel-item
                v-for="(item, index) in playlist"
                :key="index.play"
              >
                <img :src="item.src" alt="" />
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <!-- 侧边导航 -->
        <div class="aside">
          <li
            class="aside_list"
            v-for="(item, index) in asidelist"
            :key="index.title"
          >
            <a href="##">{{ item.title }}</a
            ><span>{{ item.cyc }}</span>
          </li>
        </div>
      </div>
      <div
        class="conent_list"
        v-for="(item, index) in pagelist"
        :key="index.sum"
      >
        <div class="list_ul" v-for="s in item.list" :key="s.id">
          <div class="list_one" v-for="a in s.list2" :key="a.txt">
            <img :src="a.src" class="list_img" />
            <span>{{ a.text }}</span>
          </div>
        </div>
      </div>
      <!-- 轮播下面四个图 -->
      <div class="home_pro">
        <div class="proli">
          <li v-for="(z, index) in prolist" :key="index.txt">
            <a href="##"
              ><img :src="z.pic" />
              <p>{{ z.txt }}</p></a
            >
          </li>
        </div>
        <img
          v-for="(x, index) in piclist"
          :key="index.ol"
          :src="x.ol"
          class="pro_pic"
        />
      </div>
    </div>
    <!-- 主体部分 -->
    <div class="main">
      <div class="main_centain">
        <div v-for="(e, index) in onelist" :key="index.long">
          <img :src="e.src" class="long_pic" />
          <div class="title" v-for="t in e.list" :key="t.more">
            <!-- <span>{{ t.name }}</span> -->
            {{ t.name }}
            <div class="more list_active">{{ t.more }}</div>
          </div>
          <div class="main_left" v-for="l in e.listleft" :key="l.tet">
            <img :src="l.src" class="left_one" />
          </div>
          <div class="main_right">
            <div
              class="right_list"
              v-for="(r, index) in e.listright"
              :key="index.old"
            >
              <img :src="r.pic" class="phone" />
              <p class="phone_title">{{ r.name }}</p>
              <p class="phone_desc">{{ r.tet }}</p>
              <p class="phone_price">
                {{ r.price }}<span class="old_price">{{ r.old }}</span>
              </p>
            </div>
          </div>
        </div>

        <div v-for="(li, index) in cenlist" :key="index.first">
          <img :src="li.src" class="long_pic" />
          <!-- 类似导航条 -->
          <div class="title" v-for="v in li.namelist" :key="v.ids">
            {{ v.name }}
            <div class="more" v-for="re in v.names" :key="re.se">
              <!-- <span class="more_list2 more_active">{{v.names}}</span> -->
              <span class="more_list">{{ re.name }}</span>
            </div>
          </div>
          <!-- 左边图片 -->
          <div class="main_left">
            <img v-for="g in li.left" :key="g.short" :src="g.src" />
          </div>
          <!-- 右边类似选项卡整体部分 -->
          <div class="main_right main_right2" v-for="f in li.right" :key="f.rs">
            <div class="right_list" v-for="fn in f.first" :key="fn.lis">
              <img :src="fn.pic" class="phone" />
              <p class="phone_title">{{ fn.name }}</p>
              <p class="phone_desc">{{ fn.tet }}</p>
              <p class="phone_price">
                {{ fn.price }}<span class="old_price">{{ fn.old }}</span>
              </p>
            </div>
            <div class="right_list li_top" v-for="h in f.one" :key="h.nu">
              <div class="little">
                <div class="little_tit">{{ h.tet }}</div>
                <div class="little_price">{{ h.price }}</div>
                <p>{{ h.txt }}</p>
                <span>{{ h.des }}</span>
              </div>
              <img :src="h.pic" class="little_pic" />
            </div>
          </div>
          <div class="main_right main_right2" style="display: none" v-for="(hi,index) in hidelist" :key="index.rss">
              <div class="right_list" v-for="los in hi.first" :key="los.lis">
                <img :src="los.pic" class="phone" />
                <p class="phone_title">{{los.name}}</p>
                <p class="phone_desc">{{los.tet}}</p>
                <p class="phone_price">
                  {{los.price}}<span class="old_price">{{los.old}}</span>
                </p>
              </div>
              
        </div>

        
        <!-- 视频部分 -->
        <div class="video">
          <div class="vid_logo">
            <img src="../../public/static/img/img2/ia_100000004544.jpg" alt="" />
          </div>
          <div class="video_txt">
            <p class="p">视频<span>查看更多 >></span></p>
          </div>
          <div class="play">
            <ul>
              <li v-for="(item, index) in videolist" :key="index">
                <img :src="item.src" alt="" />
                <div class="oval"><div class="sanjiao"></div></div>
                <p>{{ item.name }}</p>
                <span>{{ item.txt }}</span>
              </li>
            </ul>
          </div>

          <div class="player" v-for="(item, index) in video" :key="index">
            <div class="player_txt">
              <h3>2021年新品发布会春季第一场</h3>
              <span class="sto">×</span>
            </div>
            <div>
              <video controls class="playing">
                <source :src="item.vdo" />
                你的浏览器版本太低，
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import drag from "../utils/header.js";
export default {
  name: "Home",
  data() {
    return {
      arrList: [
        {
          id: 1,
          name: "小米手机",
        },
        {
          id: 2,
          name: "Redmi红米",
        },
        {
          id: 3,
          name: "电视",
        },
        {
          id: 4,
          name: "笔记本",
        },
        {
          id: 5,
          name: "家电",
        },
        {
          id: 6,
          name: "路由器",
        },
        {
          id: 7,
          name: "智能服务",
        },
      ],
      fooList: [
        {
          id: 1,
          name: "服务",
        },
        {
          id: 2,
          name: "社区",
        },
      ],
      arr1: [
        {
          num: 1,
          name: "全部商品",
        },
        {
          num: 2,
          name: "电脑",
        },
        {
          num: 3,
          name: "手机",
        },
        {
          num: 4,
          name: "家电",
        },
        {
          num: 5,
          name: "鲨鱼",
        },
        {
          num: 6,
          name: "智能",
        },
        {
          num: 7,
          name: "耳机",
        },
      ],
      arr2: [
        {
          id: 1,
          list: [
            {
              id: 1,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 2,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 3,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 4,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 5,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
          ],
        },
        {
          id: 2,
          list: [
            {
              id: 1,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 2,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 3,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 4,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 5,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
          ],
        },
        {
          id: 3,
          list: [
            {
              id: 1,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 2,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 3,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 4,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 5,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
          ],
        },
        {
          id: 4,
          list: [
            {
              id: 1,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 2,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 3,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 4,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 5,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
          ],
        },
        {
          id: 5,
          list: [
            {
              id: 1,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 2,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 3,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 4,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 5,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
          ],
        },
        {
          id: 6,
          list: [
            {
              id: 1,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 2,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 3,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 4,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 5,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
          ],
        },
        {
          id: 1,
          list: [
            {
              id: 1,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 2,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 3,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 4,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
            {
              id: 5,
              src: "../../static/img/img1/ia_200002956.png",
              name: "小米MIX FLOD",
              price: "9999元起",
            },
          ],
        },
      ],
      playlist: [
        { play: 1, src: "../../static/img/img1/ia_200000223.webp" },
        { play: 2, src: "../../static/img/img1/ia_200000224.webp" },
        { play: 3, src: "../../static/img/img1/ia_200000225.webp" },
        { play: 4, src: "../../static/img/img1/ia_200000226.webp" },
        { play: 5, src: "../../static/img/img1/ia_200000227.jpg" },
      ],
      asidelist: [
        { title: "手机 电话卡", cyc: ">" },
        { title: "电视 盒子", cyc: ">" },
        { title: "笔记本 显示器", cyc: ">" },
        { title: "家电 插线板", cyc: ">" },
        { title: "出行 穿戴", cyc: ">" },
        { title: "智能 路由器", cyc: ">" },
        { title: "电源 配件", cyc: ">" },
        { title: "健康 儿童", cyc: ">" },
        { title: "耳机 音箱", cyc: ">" },
        { title: "生活 箱包", cyc: ">" },
      ],
      pagelist: [
        {
          sum: 1,
          list: [
            {
              id: 1,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 2,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 3,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 4,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
          ],
        },
        {
          sum: 2,
          list: [
            {
              id: 1,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 2,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 3,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 4,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
          ],
        },
        {
          sum: 3,
          list: [
            {
              id: 1,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 2,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 3,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 4,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
          ],
        },
        {
          sum: 4,
          list: [
            {
              id: 1,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 2,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 3,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 4,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
          ],
        },
        {
          sum: 5,
          list: [
            {
              id: 1,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 2,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 3,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 4,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
          ],
        },
        {
          sum: 6,
          list: [
            {
              id: 1,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 2,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 3,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 4,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
          ],
        },
        {
          sum: 7,
          list: [
            {
              id: 1,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 2,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 3,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 4,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
          ],
        },
        {
          sum: 8,
          list: [
            {
              id: 1,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 2,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 3,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 4,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
          ],
        },
        {
          sum: 9,
          list: [
            {
              id: 1,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 2,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 3,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 4,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
          ],
        },
        {
          sum: 10,
          list: [
            {
              id: 1,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 2,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 3,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
            {
              id: 4,
              list2: [
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
                {
                  src: "../../static/img/img1/ia_200002955.png",
                  text: "小米MIX　FLOD",
                },
              ],
            },
          ],
        },
      ],
      prolist: [
        { pic: "../../static/img/img1/ia_200000228.png", txt: "小米秒杀" },
        { pic: "../../static/img/img1/ia_200000229.png", txt: "企业团购" },
        { pic: "../../static/img/img1/ia_200000230.png", txt: "F码通道" },
        { pic: "../../static/img/img1/ia_200000231.png", txt: "米粉卡" },
        { pic: "../../static/img/img1/ia_200000232.png", txt: "以旧换新" },
        { pic: "../../static/img/img1/ia_200000233.png", txt: "话费充值" },
      ],
      piclist: [
        { ol: "../../static/img/img1/ia_200000234.jpg" },
        { ol: "../../static/img/img1/ia_200000235.jpg" },
        { ol: "../../static/img/img1/ia_200000236.png" },
      ],
      onelist: [
        {
          long: 1,
          src: "../../static/img/img1/ia_200000247.webp",
          list: [{ name: "手机", more: "查看更多 >>" }],
          listleft: [{ src: "../../static/img/img1/ia_200000238.webp" }],
          listright: [
            {
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
            {
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
          ],
        },
      ],
      cenlist: [
        {
          first: 21,
          src: "../../static/img/img1/ia_200000266.webp",
          namelist: [
            {
              ids: 1,
              name: "智能",
              names: [
                { se: 11, name: "安防" },
                { se: 21, name: "安防" },
              ],
            },
          ],
          left: [
            { short: 10, src: "../../static/img/img1/ia_200000267.webp" },
            { short: 20, src: "../../static/img/img1/ia_200000267.webp" },
          ],
          right: [
            {
              rs: 0,
              first: [
                {
                  lis: 0,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
                {
                  lis: 1,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 2,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 3,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 4,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 5,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 6,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
              ],
              one: [
                {
                  nu: 10,
                  pic: "../../static/img/img1/ia_200002983.png",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                },
                {
                  nu: 20,
                  pic: "../../static/img/img1/ia_200002983.png",
                  txt: "浏览更多",
                  des: "热门",
                },
              ],
            },
            {
              rs: 100,
              first: [
                {
                  lis: 0,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
                {
                  lis: 1,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 2,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 3,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 4,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 5,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 6,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
              ],
              one: [
                {
                  nu: 10,
                  pic: "../../static/img/img1/ia_200002983.png",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                },
                {
                  nu: 20,
                  pic: "../../static/img/img1/ia_200002983.png",
                  txt: "浏览更多",
                  des: "热门",
                },
              ],
            },
          ],
        },
        {
          first: 22,
          src: "../../static/img/img1/ia_200000266.webp",
          namelist: [
            {
              ids: 1,
              name: "智能",
              names: [
                { se: 11, name: "安防" },
                { se: 21, name: "安防" },
              ],
            },
          ],
          left: [
            { short: 10, src: "../../static/img/img1/ia_200000267.webp" },
            { short: 20, src: "../../static/img/img1/ia_200000267.webp" },
          ],
          right: [
            {
              rs: 0,
              first: [
                {
                  lis: 0,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
                {
                  lis: 1,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 2,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 3,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 4,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 5,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 6,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
              ],
              one: [
                {
                  nu: 10,
                  pic: "../../static/img/img1/ia_200002983.png",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                },
                {
                  nu: 20,
                  pic: "../../static/img/img1/ia_200002983.png",
                  txt: "浏览更多",
                  des: "热门",
                },
              ],
            },
            {
              rs: 100,
              first: [
                {
                  lis: 0,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
                {
                  lis: 1,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 2,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 3,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 4,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 5,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 6,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
              ],
              one: [
                {
                  nu: 10,
                  pic: "../../static/img/img1/ia_200002983.png",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                },
                {
                  nu: 20,
                  pic: "../../static/img/img1/ia_200002983.png",
                  txt: "浏览更多",
                  des: "热门",
                },
              ],
            },
          ],
        },
        {
          first: 23,
          src: "../../static/img/img1/ia_200000266.webp",
          namelist: [
            {
              ids: 1,
              name: "智能",
              names: [
                { se: 11, name: "安防" },
                { se: 21, name: "安防" },
              ],
            },
          ],
          left: [
            { short: 10, src: "../../static/img/img1/ia_200000267.webp" },
            { short: 20, src: "../../static/img/img1/ia_200000267.webp" },
          ],
          right: [
            {
              rs: 0,
              first: [
                {
                  lis: 0,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
                {
                  lis: 1,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 2,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 3,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 4,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 5,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 6,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
              ],
              one: [
                {
                  nu: 10,
                  pic: "../../static/img/img1/ia_200002983.png",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                },
                {
                  nu: 20,
                  pic: "../../static/img/img1/ia_200002983.png",
                  txt: "浏览更多",
                  des: "热门",
                },
              ],
            },
            {
              rs: 100,
              first: [
                {
                  lis: 0,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
                {
                  lis: 1,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 2,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 3,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 4,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 5,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 6,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
              ],
              one: [
                {
                  nu: 10,
                  pic: "../../static/img/img1/ia_200002983.png",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                },
                {
                  nu: 20,
                  pic: "../../static/img/img1/ia_200002983.png",
                  txt: "浏览更多",
                  des: "热门",
                },
              ],
            },
          ],
        },
        {
          first: 24,
          src: "../../static/img/img1/ia_200000266.webp",
          namelist: [
            {
              ids: 1,
              name: "智能",
              names: [
                { se: 11, name: "安防" },
                { se: 21, name: "安防" },
              ],
            },
          ],
          left: [
            { short: 10, src: "../../static/img/img1/ia_200000267.webp" },
            { short: 20, src: "../../static/img/img1/ia_200000267.webp" },
          ],
          right: [
            {
              rs: 0,
              first: [
                {
                  lis: 0,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
                {
                  lis: 1,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 2,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 3,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 4,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 5,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 6,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
              ],
              one: [
                {
                  nu: 10,
                  pic: "../../static/img/img1/ia_200002983.png",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                },
                {
                  nu: 20,
                  pic: "../../static/img/img1/ia_200002983.png",
                  txt: "浏览更多",
                  des: "热门",
                },
              ],
            },
            {
              rs: 100,
              first: [
                {
                  lis: 0,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
                {
                  lis: 1,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 2,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 3,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 4,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 5,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 6,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
              ],
              one: [
                {
                  nu: 10,
                  pic: "../../static/img/img1/ia_200002983.png",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                },
                {
                  nu: 20,
                  pic: "../../static/img/img1/ia_200002983.png",
                  txt: "浏览更多",
                  des: "热门",
                },
              ],
            },
          ],
        },
        {
          first: 25,
          src: "../../static/img/img1/ia_200000266.webp",
          namelist: [
            {
              ids: 1,
              name: "智能",
              names: [
                { se: 11, name: "安防" },
                { se: 21, name: "安防" },
              ],
            },
          ],
          left: [
            { short: 10, src: "../../static/img/img1/ia_200000267.webp" },
            { short: 20, src: "../../static/img/img1/ia_200000267.webp" },
          ],
          right: [
            {
              rs: 0,
              first: [
                {
                  lis: 0,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
                {
                  lis: 1,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 2,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 3,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 4,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 5,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 6,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
              ],
              one: [
                {
                  nu: 10,
                  pic: "../../static/img/img1/ia_200002983.png",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                },
                {
                  nu: 20,
                  pic: "../../static/img/img1/ia_200002983.png",
                  txt: "浏览更多",
                  des: "热门",
                },
              ],
            },
            {
              rs: 100,
              first: [
                {
                  lis: 0,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
                {
                  lis: 1,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 2,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 3,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 4,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 5,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },

                {
                  lis: 6,
                  pic: "../../static/img/img1/ia_200002983.png",
                  name: "Note 10 Pro",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                  old: "5999元",
                },
              ],
              one: [
                {
                  nu: 10,
                  pic: "../../static/img/img1/ia_200002983.png",
                  tet: "天玑1100年度旗舰芯，VC液冷散热",
                  price: "1699元起",
                },
                {
                  nu: 20,
                  pic: "../../static/img/img1/ia_200002983.png",
                  txt: "浏览更多",
                  des: "热门",
                },
              ],
            },
          ],
        },
      ],
      hidelist: [
        {
          rss: 200,
          first: [
            {
              lis: 0,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
            {
              lis: 1,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 2,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 3,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 4,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 5,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 6,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
          ],
        },
        {
          rss: 1,
          first: [
            {
              lis: 0,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
            {
              lis: 1,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 2,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 3,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 4,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 5,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },

            {
              lis: 6,
              pic: "../../static/img/img1/ia_200002983.png",
              name: "Note 10 Pro",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
              old: "5999元",
            },
          ],
          one: [
            {
              nu: 10,
              pic: "../../static/img/img1/ia_200002983.png",
              tet: "天玑1100年度旗舰芯，VC液冷散热",
              price: "1699元起",
            },
            {
              nu: 20,
              pic: "../../static/img/img1/ia_200002983.png",
              txt: "浏览更多",
              des: "热门",
            },
          ],
        },
      ],
      videolist: [
        {
          src: "./src/assets/img/img1/ia_100003331.webp",
          name: "2021年春季发布会第一场",
          txt: "",
          vdo: "./src/assets/img/img1/vid.mp4",
        },
        {
          src: "./src/assets/img/img1/ia_100003332.webp",
          name: "2021年春季发布会第一场",
          txt: "Redmi 10x系列发布会",
          vdo: "./src/assets/img/img1/vid.mp4",
        },
        {
          src: "./src/assets/img/img1/ia_100003333.webp",
          name: "2021年春季发布会第一场",
          txt: "",
          vdo: "./src/assets/img/img1/vid.mp4",
        },
        {
          src: "./src/assets/img/img1/ia_100003334.webp",
          name: "2021年春季发布会第一场",
          txt: "",
          vdo: "./src/assets/img/img1/vid.mp4",
        },
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
img:hover {
  cursor: pointer;
}
/* logo 搜索框导航 */
.header {
  width: 1903px;
  height: 100px;
  text-align: center;
}
.containter {
  width: 1226px;
  height: 100px;
  display: inline-block;
  border: 0px solid red;
}
.header_logo {
  width: 56px;
  height: 56px;
  margin-top: 22px;
  float: left;
}
.nav_list {
  width: 1000px;
  height: 100px;
  border: 0px solid red;
  float: left;
  margin: 0 0 0 37px;
  padding: 0 0 0 130px;
}
.list {
  height: 100px;
  line-height: 100px;
  padding: 0 10px;
}
.list a {
  color: #333;
  font-size: 16px;
}

.search_img {
  width: 50px;
  height: 50px;
  border: 1px solid #b0b0b0;
  float: right;
  margin: 25px -1px;
  line-height: 50px;
  color: #333;
  cursor: pointer;
}
.search {
  float: right;
  width: 235px;
  height: 50px;
  margin: 25px 0;
  padding: 0 0 0 10px;
  border: 1px solid #b0b0b0;
}
.search_box {
  width: 245px;
  height: 175px;
  border: 1px solid #ff6700;
  position: absolute;
  top: 124px;
  right: 383px;
  display: none;
  z-index: 10;
  background: white;
  cursor: pointer;
}
.search_text {
  width: 221px;
  height: 20px;
  line-height: 20px;
  font-size: 14px;
  color: #333;
  padding: 2px 12px;
  text-align: left;
}
/* 导航选项卡 */
.page {
  width: 1903px;
  height: 210px;
  border-top: 1px solid #b0b0b0;
  display: none;
  text-align: center;
  box-shadow: #b0b0b0 0px 1px 1px 1px;
  position: absolute;
  top: 150px;
  background: white;
  z-index: 10;
  margin: -4px 0 0 0;
}
.active {
  color: #ff6700;
}
.page_center {
  display: inline-block;
  border: 0px solid red;
  width: 1226px;
  height: 200px;
}
.page_one {
  width: 202px;
  height: 200px;
  float: left;
}
.page_img {
  margin: 35px 0 15px;
  border-right: 1px solid #b0b0b0;
  width: 202px;
  height: 100px;
  cursor: pointer;
}
.page_name,
.page_price {
  font-size: 12px;
  cursor: pointer;
}
.list_active:hover {
  color: #ff6700;
  cursor: pointer;
}
/* 轮播 */
.el-carousel__item img {
  width: 1226px;
  height: 460px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.play {
  width: 1226px;
  height: 460px;
  display: inline-block;
}
.home {
  width: 1903px;
  height: 7000px;
  text-align: center;
}
.block >>> .el-carousel__button {
  width: 10px;
  height: 10px;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
}
.block >>> .el-carousel__indicators {
  margin: 0 0 20px 500px;
}
.block >>> .el-carousel__arrow--left {
  left: 246px;
  display: block;
}
element.style {
  display: block;
}
/* 侧边导航 */
.aside {
  width: 234px;
  height: 420px;
  background: #65696559;
  padding: 20px 0;
  z-index: 3;
  position: absolute;
  top: 148px;
  left: 346px;
}
.aside_list {
  width: 215px;
  height: 42px;
  padding: 0 0 0 20px;
  line-height: 42px;
}
.aside_list a {
  color: #fff;
  font-size: 14px;
}
.aside_list span {
  float: right;
  margin: -4px 5px 0 0px;
  color: #ffffff;
}
.conent_list {
  width: 1000px;
  height: 460px;
  background: transparent;
  position: absolute;
  z-index: 10;
  top: 148px;
  left: 575px;
  display: none;
}
.list_one {
  width: 228px;
  height: 75px;
  border: 0px solid red;
  padding: 0 10px;
}
.list_img {
  width: 50px;
  height: 50px;
  margin: 12px 0;
  float: left;
}
.list_one span {
  line-height: 75px;
  margin: 0 0 0 -65px;
  font-size: 14px;
  color: #333;
}
.list_one span:hover {
  cursor: pointer;
  color: #ff6700;
}
.list_ul {
  float: left;
  width: 250px;
  height: 460px;
  background: #ffffff;
}
.aside_active {
  background: #ff6700;
}
/* 轮播下面四个图 */
.home_pro {
  width: 1226px;
  height: 170px;
  display: inline-block;
  border: 0px solid red;
  margin: 14px 0 0 0;
  z-index: 100;
}
.proli {
  width: 228px;
  height: 165px;
  background: #5f5750;
  padding: 3px;
  float: left;
}
.proli li {
  width: 70px;
  height: 75px;
  padding: 0 3px;
  border-bottom: 1px solid #665e57;
  margin: 7px 0 0 0;
}
.proli li a {
  width: 70px;
  height: 64px;
  border-right: 1px solid #665e57;
}
.proli li a img {
  width: 24px;
  height: 24px;
  margin: 15px 0 0 0;
}
.proli li a p {
  font-size: 12px;
  color: #fff;
}
.pro_pic {
  width: 316px;
  height: 170px;
  float: left;
  margin: 0 0 0 14px;
}
/* 主体部分 */
.main {
  width: 1903px;
  height: 5650px;
  background: #f5f5f5;
  margin: 650px 0 0 0;
  text-align: center;
}
.main_centain {
  width: 1226px;
  height: 5600px;
  display: inline-block;
  border: 0px solid red;
}
.long_pic {
  width: 1226px;
  height: 120px;
  margin: 20px 0;
}
/* 类似导航条 */
.title {
  font-size: 22px;
  text-align: left;
  padding: 0 5px;
  color: #333;
  float: left;
  width: 1226px;
  height: 58px;
  line-height: 58px;
}
.more {
  float: right;
  font-size: 16px;
  color: #333;
}
.main_left {
  width: 234px;
  height: 614px;
  float: left;
}
/* 右边类似选项卡部分 */
.main_right {
  width: 992px;
  height: 614px;
  float: right;
  border: 0px solid red;
  margin: 0 0 15px 0;
  position: relative;
  display: block;
}

.right_list {
  width: 233px;
  height: 260px;
  padding: 20px 0;
  background: #fff;
  float: left;
  margin: 0 0 15px 15px;
}
.phone {
  width: 160px;
  height: 160px;
}
.phone_title {
  font-size: 14px;
  color: #333;
  margin: 8px 0 0 0;
}
.phone_desc {
  font-size: 12px;
  color: #b0b0b0;
  margin: 5px 0 10px 0;
}
.phone_price {
  font-size: 14px;
  color: #ff6700;
}
.old_price {
  color: #b0b0b0;
  text-decoration: line-through;
  margin: 0 0 0 7px;
}
.right_list:hover {
  box-shadow: 0px 0px 25px rgba(46, 46, 46, 0.2);
  width: 230px;
}
.main_left img:hover {
  box-shadow: 0px 0px 25px rgba(46, 46, 46, 0.2);
  width: 230px;
}

.right_top {
  width: 992px;
  height: 305px;
  border: 0px solid red;
  float: left;
}
.left_one {
  margin: 0 0 10px 0;
}

.more span {
  width: 32px;
  height: 26px;
  line-height: 26px;
  margin-right: 30px;
  cursor: pointer;
}
.more_active {
  color: #ff6700;
  border-bottom: 1px solid #ff6700;
  line-height: 26px;
  margin-right: 30px;
  cursor: pointer;
}
.li_top {
  width: 233px;
  height: 102px;
  border: 0px solid red;
}
.little {
  width: 92px;
  height: 64px;
  border: 0px solid red;
  float: left;
  margin: 15px 0 0 37px;
}
.little_tit {
  /* width: 94px;
  height: 42px; */
  margin: 0 0 2px 0;
  font-size: 14px;
  text-align: left;
}
.little_pic {
  width: 80px;
  height: 80px;
  float: left;
}
.little_price {
  font-size: 12px;
  color: #ff6700;
  text-align: left;
}
.little_more {
  width: 94px;
  height: 45px;
  float: left;
  margin: 20px 0 0 37px;
  border: 0px solid red;
}
.little p {
  font-size: 20px;
  color: #333;
  text-align: left;
}
.little span {
  font-size: 12px;
  color: #5f5750;
  text-align: left;
  display: block;
}
.more_list2 {
  float: left;
}
</style>
