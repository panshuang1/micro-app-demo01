<template>
  <div class="headerPage">
    <div class="header_left">
      <div class="home_btn">
        <el-button type="text" icon="el-icon-house"></el-button>
      </div>
      <div class="home_breadCrumb textLinetranlate">
      </div>
    </div>
    <div class="header_right">
      <div class="home_breadCrumb_right textLinetranlate">
      </div>
      <div class="home_icon">
        <el-button
          type="text"
          class="iconfont-ZLP icon-ZLP-baojingshanshuo"
        ></el-button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'headerPage',
    props: {
      msg: String,
    },
    data() {
      return {
      };
    },
    watch: {
    },
    components: {
    },
  };
</script>
<style lang="scss" scoped>
.headerPage {
  height: 44px;
  background: #2a2f55;
  .header_left {
    height: 100%;
    float: left;
    .home_breadCrumb {
      font-size: 20px;
      display: inline-block;
      margin-left: 10px;
    }
    .home_btn {
      display: inline-block;
      height: 100%;
      width: 22px;
      margin-left: 20px;
      .el-button {
        font-size: 20px;
        color: #fff;
      }
    }
  }
  .header_right {
    height: 100%;
    float: right;
    .home_icon {
      height: 100%;
      width: 20px;
      display: inline-block;
      margin-right: 20px;

      .iconfont-ZLP {
        font-size: 20px;
        background-image: linear-gradient(to bottom, #ffddb9, #ffa200);
        -webkit-background-clip: text;
        color: transparent;
      }
    }
    .home_breadCrumb_right {
      font-size: 16px;
      display: inline-block;
      margin-right: 10px;
    }
  }
}
</style>
