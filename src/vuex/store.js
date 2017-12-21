/**
 * Created by DELL on 2017/12/20.
 */
import vue from "vue";
import vueX from "vuex";
import * as actions from "./action"
import * as hero from "./../../static/json/hero.json"
import * as arms from "./../../static/json/arms.json"


vue.use(vueX);

const state = {
  headTitle: "武器",
  titleArr: ["武器", "英雄"],
  heroData: hero.data,
  armsData: arms.data,
};

const mutations = {
  TITLEINFO(state, index) {
    state.headTitle = state.titleArr[index];
  },
  GETDATA(state, page) {
    let arr = [];
    if (page.index) {
      console.log(1);
      arr = page.data;
      for (let i in arr) {
        arr[i].item_id = `http://game.gtimg.cn/images/yxzj/img201606/itemimg/${arr[i].item_id}.jpg`
      }
      state.armsData = arr;
    } else {
      console.log(2);
      arr = page.data;
      for (let i in arr) {
        arr[i].hero_id = `http://cdn.tgp.qq.com/kog/v3/images/heroPortrait/${arr[i].hero_img_id}.png`
      }
      state.heroData = arr;

    }
  },


  SETDATA(state, index){
    let arr = [];
    if (index) {
      arr = arms.data;
      console.log(typeof(arr[0].item_id));
      if (typeof(arr[0].item_id) == "number") {
        for (let i in arr) {
          arr[i].item_id = `http://game.gtimg.cn/images/yxzj/img201606/itemimg/${arr[i].item_id}.jpg`
        }
      }
      state.armsData = arr;
    } else {
      arr = hero.data;
      for (let i in arr) {
        arr[i].hero_id = `http://cdn.tgp.qq.com/kog/v3/images/heroPortrait/${arr[i].hero_img_id}.png`
      }
      state.heroData = arr;
    }
  }
};

export default new vueX.Store({
  state,
  mutations,
  actions
})
