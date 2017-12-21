<template lang="pug">
  transition(name="fade")
    div.armsInfoWarp
        div.armsInfo
            i(class=['fa','fa-close'],  @click="hrefInfoDown")
            dl.clearfix
              dt.pull-left
                img(:src="armsImg")
              dd.pull-left
                p  <span>名称</span> {{armsTitle}}
                p  <span>总价</span> {{armsAllNum}}
                p  <span>售价</span> {{armsNum}}

            p {{armsdes}}
</template>
<script>
  export default {
    props:["armsImg","armsTitle","armsAllNum","armsNum","armsdes"],
    methods:{
      hrefInfoDown:function() {
          this.$emit("downHref");
      }

    }
  }
</script>
<style scoped lang="scss">
  .armsInfo{
    border-radius: 5px;
  }
</style>
