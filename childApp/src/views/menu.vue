<template>
  <div class="containBox">
    <el-container>
      <el-header height="44px" class="mystyle nopad"
        ><headerPage></headerPage
      ></el-header>
      <el-main class="ps_main flexCenter">
        <div class="menu_containBox">
          <div class="menu_item" v-for="item in menuData" :key="item.bgClass" @click="gotoRoute(item)">
            <div class="menu_img" :class="item.bgClass"></div>
            <div class="menu_label textLinetranlate">{{item.label}}</div>
          </div>
        </div>
      </el-main>
      <el-footer><footerPage></footerPage></el-footer>
    </el-container>
  </div>
</template>

<script>
  import headerPage from '@/components/header.vue';
  import footerPage from '@/components/footer.vue';
  import {
  } from '@/api/index';

  export default {
    name: 'mainMenu',
    data() {
      return {
        menuData: [{
          label: '主系统',
          Path: '/main',
          bgClass: 'zhuxitong',
        }],
      };
    },
    created() {
    },
    mounted() {
    },

    methods: {
      gotoRoute(item) {
        this.$router.push({ path: item.Path });
      },
    },
    beforeDestroy() {
    },
    watch: {
    },
    computed: {
    },
    components: {
      headerPage,
      footerPage,
    },
  };
</script>
<style scoped lang="scss">
.containBox {
  height: 100%;
  width: 100%;
  display: flex;
  background: url("~@/assets/images/bg01.png") no-repeat center;
}
.menu_containBox {
  width: 700px;
  height: 360px;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:center;
  align-content:space-around;
  }
.menu_item {
  width: 120px;
  height: 166px;
  // margin-right: 20px;
}
.menu_img {
  height: 115px;
  width: 100%;
  background-color: #2a2f55;
  border-radius: 4px;
  background-repeat: no-repeat;
  background-position: center;
}
.menu_label {
  height: 49px;
  line-height: 45px;
  text-align: center;
  font-size: 16px;
}
</style>
