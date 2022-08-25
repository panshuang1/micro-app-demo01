<template>
  <div class="sideMenuPage">
    <el-scrollbar>
      <!-- <el-menu
        default-active="2"
        text-color="#ffffff"
        active-text-color="#ffffff"
      >
        <el-menu-item index="2">
          <span slot="title">直流母线</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span slot="title">整流模块</span>
        </el-menu-item>
        <el-menu-item index="4">
          <span slot="title">失压补偿</span>
        </el-menu-item>
        <el-menu-item index="5">
          <span slot="title">馈出屏</span>
        </el-menu-item>
        <el-menu-item index="6">
          <span slot="title">开关状态</span>
        </el-menu-item>
        <el-menu-item index="7">
          <span slot="title">电操开关</span>
        </el-menu-item>
        <el-menu-item index="8">
          <span slot="title">电池组</span>
        </el-menu-item>
        <el-menu-item index="9">
          <span slot="title">交流进线</span>
        </el-menu-item>
      </el-menu> -->
      <slot></slot>
    </el-scrollbar>
  </div>
</template>

<script>
  export default {
    name: 'sideMenuPage',
    props: {
    },
    data() {
      return {
      };
    },
    computed: {},
    methods: {
    },
  };
</script>
<style lang="scss" scoped>
.sideMenuPage {
  height: 100%;
  background: #0c0e3f;
  position: relative;
}
.el-scrollbar {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
}
</style>
<style lang="scss">
.sideMenuPage {
  .el-scrollbar {
    .el-scrollbar__wrap {
      &::-webkit-scrollbar {
        background: transparent;
      }
    }
  }
}
</style>
