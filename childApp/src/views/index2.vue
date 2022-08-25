<template>
  <div class="containBox">
    <el-container>
      <el-header height="44px" class="mystyle nopad"
        ><headerPage></headerPage
      ></el-header>
      <el-main>Main</el-main>
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
    name: 'index',
    data() {
      return {
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
</style>
