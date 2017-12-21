<template lang="pug">
  header
    span {{headTitle}}
</template>
<script>
  import {mapState} from "vuex";
  export default{
    computed:{
      ...mapState(["headTitle"])
    }
  }
</script>
