<template lang="pug">
  transition(name="fade")
    div.armsInfoWarp
      div.heroInfo
        i(class=['fa','fa-close'],  @click="hrefInfoDown")
        dl.clearfix
          dt.pull-left
            img(:src="img")
          dd.pull-left
            p  <span>名称:</span>  {{hero_name}}
            p  <span>昵称:</span>  {{hero_title}}
            p  <span>口头禅:</span>  {{hero_desc}}
        p  <span>最大血量：</span>  {{max_hp}}
        p  <span>物理攻击：</span>  {{physical_atk}}
        p  <span>法术攻击：</span>  {{magic_atk}}
        p  <span>移动范围：</span>  {{move_speed}}
        p  <span>攻击范围：</span>  {{atk_range}}
</template>
<script>
  export default {
    props:['hero_name','hero_title','hero_desc','max_hp','physical_atk','magic_atk','physical_defense','magic_defense','move_speed','atk_range','img'],
    methods:{
      hrefInfoDown:function() {
        this.$emit("downHref");
      }

    }
  }
</script>
