<template>
  <div class="containBox">
    <el-container>
      <el-header height="44px" class="mystyle nopad"
        ><headerPage></headerPage
      ></el-header>
      <el-container direction="horizontal">
        <el-aside width="182px"
          ><sideMenuPage>
            <template>
              <el-menu class="ps_menu"
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
              </el-menu>
            </template>
          </sideMenuPage></el-aside
        >
        <el-container>
          <el-main class="ps_main">
            <div class="ps_tool ps_tool_total">模块总数量：4</div>
            <div class="ps_main_contain">
              <el-table
                class="ps_table height100"
                :data="tableData"
                current-row-key="id"
              >
                <el-table-column prop="number" label="序号" width="100">
                </el-table-column>
                <el-table-column prop="muxian" label="母线段号" width="100">
                </el-table-column>
                <el-table-column prop="dianya" label="输出电压" width="100">
                </el-table-column>
                <el-table-column prop="dianliu" label="输出电流" width="100">
                </el-table-column>
                <el-table-column prop="wendu" label="温度（℃）">
                </el-table-column>
                <el-table-column prop="gongzuo" label="工作状态" width="120">
                </el-table-column>
                <el-table-column prop="tongxun" label="通讯状态" width="120">
                </el-table-column>
              </el-table>
            </div>
            <div class="ps_tool ps_tool_page">
              <el-button class="ps_tool_page_button">上一页</el-button>
              <el-button class="ps_tool_page_button">下一页</el-button>
            </div>
          </el-main>
          <el-footer><footerPage></footerPage></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import elDragDialog from '@/directive/el-dragDialog';
  import headerPage from '@/components/header.vue';
  import footerPage from '@/components/footer.vue';
  import sideMenuPage from '@/components/sideMenu.vue';
  import {
  } from '@/api/index';

  export default {
    name: 'index',
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
    directives: {
      elDragDialog,
    },
    components: {
      headerPage,
      footerPage,
      sideMenuPage,
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
</style>
