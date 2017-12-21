<template lang="pug">
  transition(name="fade")
    div.arms
      ul
        li(v-for ="i in armsData",)
          img(:src="i.item_id", @click="hrefInfoS(i.item_id,i.item_name,i.price,i.total_price,i.des1)")
          p {{i.item_name}}

      armsInfo(v-show="armsStart" , :armsImg="armsImg", :armsTitle="armsTitle",
      :armsAllNum="armsAllNum", :armsNum="armsNum", :armsdes="armsdes", @downHref="down")
</template>
<script>
  import {mapActions, mapState} from "vuex"
  import armsInfo from "./armsInfo.vue"

  export default {
    data() {
      return {
        armsStart: false,
        armsImg:"",
        armsTitle:"",
        armsNum:"",
        armsAllNum:"",
        armsdes:""
      }
    },
    props: ["title"],
    methods: {
      ...mapActions(["titleInfo", "getData","setData"]),
      hrefInfoS(img, title, num, allNum, des) {
        this.armsStart = true;
        this.armsImg = img;
        this.armsTitle = title;
        this.armsNum = num;
        this.armsAllNum = allNum;
        this.armsdes = des;
      },
      down(){
        this.armsStart = false
      }
    },
    computed: {
      ...mapState(["armsData"])
    },
    created: function () {
      this.titleInfo(this.title);
      this.setData(1)
    },
    components: {
      armsInfo
    },

  }
</script>
