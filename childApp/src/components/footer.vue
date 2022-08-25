<template>
  <div class="footerPage">
    <div class="footer_tuichu">
      <el-button type="text" @click="gotoback" class="textLinetranlate"
        >返回 <i class="iconfont-ZLP icon-ZLP-tuichu"></i
      ></el-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footerPage',
    props: {
    },
    data() {
      return {
      };
    },
    computed: {},
    methods: {
      gotoback() {
        this.$router.go(-1);
      },
    },
  };
</script>
<style lang="scss" scoped>
.footer_tuichu {
  .el-button {
    float: right;
  }
}
</style>
