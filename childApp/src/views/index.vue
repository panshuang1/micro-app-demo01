<template>
  <div class="containBox">
    <div class="playBox">
      <div class="titleBox">子应用</div>
      <el-container class="containerBox">
        <el-aside width="331px">
          <div class="inputBox martop30" style="height:150px"></div>
          <div class="inputBox martop30">
            <el-button class="myBtn" @click="gotoRouter" round>进入系统</el-button>
          </div>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
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
      gotoRouter() {
        this.$router.push({ path: '/menu' });
      },
    },
    beforeDestroy() {
    },
    watch: {

    },
    computed: {
    },
    components: {
    },
  };
</script>
<style scoped lang="scss">
.playBox {
  height: 100%;
  width: 100%;
  position: relative;
}
.titleBox {
  height: 82px;
  width: 100%;
  background: url("~@/assets/images/bg02.png") no-repeat center;
  position: absolute;
  left: 0;
  top: 0;
  line-height: 46px;
  text-align: center;
  color: #fff;
  font-size: 20px;
}
.containerBox {
  height: 100%;
}
.inputBox {
  width: 210px;
  margin: 0 auto;
}
.subtitleBox {
  height: 50px;
  line-height: 50px;
  padding: 0 9px;
}
.marBtm10 {
  margin-bottom: 10px;
}
.martop30 {
  margin-top: 30px;
}
.statusBox {
  width: 97px;
  height: 57px;
  background: url("~@/assets/images/bg03.png") no-repeat center;
  &_value {
    height: 30px;
    text-align: center;
    line-height: 25px;
    font-weight: bold;
    font-size: 13px;
    color: #58dbff;
  }
  &_label {
    margin: 0 5px;
    color: #fff;
    font-size: 13px;
    text-align: center;
    height: 22px;
    line-height: 22px;
    background: linear-gradient(to right, #006ae1, #16b7ff);
    border-radius: 4px;
  }
}
.flexBox {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 130px;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
}
.myBtn {
  width: 140px;
  background: #2a2f55
    linear-gradient(
      to bottom,
      #00ffc0,
      rgba(0, 10, 59, 0) 60%,
      rgba(0, 0, 0, 0)
    );
  border: none;
  color: #fff;
  font-size: 18px;
}
.tuopuBox{
  background: url("~@/assets/images/bg05.png") no-repeat center;
}
</style>
