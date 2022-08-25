<template>
  <el-container direction="horizontal">
    <el-aside width="182px"
      ><sideMenuPage>
        <template>
          <el-menu
            class="ps_menu"
            default-active="3"
            text-color="#ffffff"
            active-text-color="#ffffff"
            @select="handleSelect"
          >
            <el-menu-item index="3">
              <span slot="title">菜单二</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title">菜单三</span>
            </el-menu-item>
            <el-menu-item index="5">
              <span slot="title">菜单四</span>
            </el-menu-item>
            <el-menu-item index="6">
              <span slot="title">菜单五</span>
            </el-menu-item>
            <el-menu-item index="7">
              <span slot="title">菜单六</span>
            </el-menu-item>
          </el-menu>
        </template>
      </sideMenuPage></el-aside
    >
    <el-container>
      <el-main class="ps_main">
        <component :is="isComponent"></component>
      </el-main>
      <el-footer><footerPage></footerPage></el-footer>
    </el-container>
  </el-container>
</template>

<script>
  import footerPage from '@/components/footer.vue';
  import sideMenuPage from '@/components/sideMenu.vue';
  import lossPressure from './lossPressure.vue';
  import electricSwitch from './electricSwitch.vue';
  import rectifierModule from './rectifierModule.vue';
  import switchStatus from './switchStatus.vue';
  import feedOutScreen from './feedOutScreen.vue';
  import {
  } from '@/api/index';

  export default {
    name: 'dcMenu',
    data() {
      return {
        tableData: [
          {
            id: '121',
            number: 1,
            muxian: 1,
            dianya: 1,
            dianliu: 1,
            wendu: 1,
            gongzuo: 1,
            tongxun: 1,
          },
          {
            id: '122',
            number: 1,
            muxian: 1,
            dianya: 1,
            dianliu: 1,
            wendu: 1,
            gongzuo: 1,
            tongxun: 1,
          },
          {
            id: '123',
            number: 1,
            muxian: 1,
            dianya: 1,
            dianliu: 1,
            wendu: 1,
            gongzuo: 1,
            tongxun: 1,
          },
        ],
        activeName: 3,
        isComponent: 'rectifierModule',
      };
    },
    created() {
    },
    mounted() {
    },

    methods: {
      handleSelect(item) {
        console.log(item);
        switch (item) {
          case '3': {
            this.isComponent = 'rectifierModule';
            break;
          }
          case '4': {
            this.isComponent = 'lossPressure';
            break;
          }
          case '5': {
            this.isComponent = 'feedOutScreen';
            break;
          }
          case '6': {
            this.isComponent = 'switchStatus';
            break;
          }
          case '7': {
            this.isComponent = 'electricSwitch';
            break;
          }
          default: {
            break;
          }
        }
      },
    },
    beforeDestroy() {
    },
    watch: {
    },
    computed: {
    },
    components: {
      footerPage,
      sideMenuPage,
      lossPressure,
      electricSwitch,
      rectifierModule,
      switchStatus,
      feedOutScreen,
    },
  };
</script>
<style scoped lang="scss">
</style>
