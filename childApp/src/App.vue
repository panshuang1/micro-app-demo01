<template>
  <div id="outSide">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>

  export default {
    data() {
      return {
      };
    },

    mounted() {
    },

    watch: {
      // 监听当前路由的变化，根据路由不同页面的头部和底部展示不同的内容
      $route: {
        handler() {
          this.noFoot = this.$router.currentRoute.meta.noFoot;
          this.isNotSystemManagement = this.$route.name != 'systemManagement';
        },
        immediate: true,
        deep: true,
      },
    },

    methods: {
      getCameraInfo() {
        this.$cloudRender.SuperAPI(
          'GetCameraInfo',
          {
            coord_type: 0, // 坐标类型(0:经纬度坐标, 1:cad坐标)
            cad_mapkey: '', // CAD基准点Key值, 项目中约定
          },
          (e) => {
            console.log(e);
          },
        );
      },
    },
    computed: {
      /* isAPIAlready(){
        return this.$store.state.isAPIAlready
      } */
    },

  };
</script>

<style lang="scss" scoped>
#outSide {
  height: 768px;
  width: 1024px;
  position: relative;
  margin: 0 auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
