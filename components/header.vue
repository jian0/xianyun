<template>
  <el-row type="flex" justify="space-between" class="header" style="margin:auto">
    <div class="img"></div>
    <div class="navs">
      <el-row type="flex">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/post">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/air">国内机票</nuxt-link>
      </el-row>
    </div>
    <el-dropdown>
  <span class="el-dropdown-link el-icon-bell">
    消息<i class="el-icon-arrow-down el-icon-caret-bottom"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>消息</el-dropdown-item>
  </el-dropdown-menu>
</el-dropdown>
    <el-dropdown v-if="$store.state.user.userInfo.token">
      <el-row type="flex" align="middle" class="el-dropdown-link">
          <img src="http://157.122.54.189:9095/assets/images/avatar.jpg" alt="">
        <nuxt-link class="login" to="#">{{$store.state.user.userInfo.user.nickname}}</nuxt-link>
        <i class="el-icon-caret-bottom"></i>
      </el-row>
      <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
        <nuxt-link class="login" to="/user/login" v-if="!$store.state.user.userInfo.token">登录/注册</nuxt-link>
  </el-row>
</template>

<script>
export default {};
</script>

<style lang='less' scoped>
.header {
  width: 1000px;
  min-width: 1000px;
  // border-bottom: 2px solid #ccc;
  box-shadow: 0 3px 2px #f6f6f6;
}
.img {
  display: block;
  width: 156px;
  height: 60px;
  background: url("/logo.jpg") center no-repeat;
  background-size: 100%;
}
.navs {
  flex: 1;
  margin: 0 20px;
  a {
    display: block;
    padding: 0 20px;
    height: 60px;
    box-sizing: border-box;
    line-height: 60px;
    &:hover {
      border-bottom: 5px solid #409eff;
      color: #409eff;
    }
  }
  .nuxt-link-exact-active {
    color: #fff;
    background-color: #409eff;
    &:hover {
      color: #fff;
    }
  }
}
.login {
  height: 60px;
  line-height: 60px;
}
.el-dropdown-link {
    img {
        width: 36px;
        height: 36px;
        border-radius: 18px
    }
}
.el-dropdown {
    line-height: 60px;
    cursor: pointer;
    margin-right: 10px;
}
</style>