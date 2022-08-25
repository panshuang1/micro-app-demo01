<template>
  <div class="containBox">
    <el-container>
      <el-header height="44px" class="mystyle nopad"
        ><headerPage></headerPage
      ></el-header>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
  import headerPage from '@/components/header.vue';
  import footerPage from '@/components/footer.vue';
  import {
  } from '@/api/index';

  export default {
    name: 'mainMoudleIndex',
    data() {
      return {
        menuData: [{
          label: '交流信息',
          Path: '',
          bgClass: 'jiaoliu',
        }, {
          label: '直流信息',
          Path: '',
          bgClass: 'zhiliu',
        }, {
          label: '通信信息',
          Path: '',
          bgClass: 'tongxin',
        }, {
          label: '逆变信息',
          Path: '',
          bgClass: 'nibian',
        }, {
          label: '放电信息',
          Path: '',
          bgClass: 'fangdian',
        }, {
          label: '当前警告',
          Path: '',
          bgClass: 'dangqiangaojing',
        }, {
          label: '历史警告',
          Path: '',
          bgClass: 'lishigaojing',
        }, {
          label: '充电记录',
          Path: '',
          bgClass: 'chongdianjilu',
        }, {
          label: '参数设置',
          Path: '',
          bgClass: 'canshushezhi',
        }, {
          label: '关于',
          Path: '',
          bgClass: 'guanyu',
        }],
      };
    },
    created() {
    },
    mounted() {
    },

    methods: {
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
