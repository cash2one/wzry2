<template>
  <div id="app">
    <heads></heads>
    <router-view/>
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/0">
          <!--<img src="http://game.gtimg.cn/images/yxzj/img201606/itemimg/1135.jpg" alt="arms">-->
          <span>{{titleArr[0]}}</span></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/hero/1">
          <!--<img src="http://cdn.tgp.qq.com/kog/v3/images/heroPortrait/301100.png" alt="arms">-->
          <span>{{titleArr[1]}}</span></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import heads from "./components/head.vue";
  import {mapState,mapActions} from "vuex";
  export default {
    name: 'app',
    data(){
      return {}
    },
    components: {
      heads
    },
    computed: {
      ...mapState(["titleArr"])
    },
    methods:{
      ...mapActions(["setData"])
    },
    created(){

    }
  }
</script>
<style lang="scss">
  @import "../static/style/index";
</style>

