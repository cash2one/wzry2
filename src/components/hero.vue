<template lang="pug">
  transition(name="fade")
    div.hero
      ul
        li(v-for ="item in heroData", )
          img(:src='item.hero_id', @click="openHeroS(item.hero_name,item.hero_title,item.hero_desc,item.max_hp,item.physical_atk,item.magic_atk,item.physical_defense,item.magic_defense,item.move_speed,item.atk_range,item.hero_id)")
          p.hero-name {{item.hero_name}}
          p.hero-title {{item.hero_title}}
      heroInfo(@downHref="down", v-show="heroStart", :hero_name = "hero_name", :hero_title = "hero_title", :hero_desc = "hero_desc", :max_hp = "max_hp", :physical_atk = "physical_atk", :magic_atk = "magic_atk", :physical_defense = "physical_defense", :magic_defense = "magic_defense", :move_speed = "move_speed", :atk_range = "atk_range", :img = "img")
</template>
<script>
  import {mapActions, mapState} from "vuex";
  import heroInfo from "./heroInfo.vue";

  export default {
    data() {
      return {
        heroStart: false,
        hero_name: "",
        hero_title: "",
        hero_desc: "",
        max_hp: "",
        physical_atk: "",
        magic_atk: "",
        physical_defense: "",
        magic_defense: "",
        move_speed: "",
        atk_range: "",
        img: ""
      }
    },
    props: ["title"],
    methods: {
      ...mapActions(["titleInfo", "getData","setData"]),
      down() {
        this.heroStart = false
      },
      openHeroS(hero_name, hero_title, hero_desc, max_hp, physical_atk, magic_atk, physical_defense, magic_defense, move_speed, atk_range, img) {
        this.heroStart = true;
        this.hero_name = hero_name;
        this.hero_title = hero_title;
        this.hero_desc = hero_desc;
        this.max_hp = max_hp;
        this.physical_atk = physical_atk;
        this.magic_atk = magic_atk;
        this.physical_defense = physical_defense;
        this.magic_defense = magic_defense;
        this.move_speed = move_speed;
        this.atk_range = atk_range;
        this.img = img;
      }

    },
    computed: {
      ...mapState(["heroData"]),
    },
    created() {
      this.titleInfo(this.title);
      this.setData(0)
    },
    components: {
      heroInfo
    },
  }
</script>

