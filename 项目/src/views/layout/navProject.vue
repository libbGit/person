<template>
  <el-menu
    mode="horizontal"
    class="el-menu-nav"
    :default-active="$route.meta.nav"
    :router="true">
    <el-menu-item index="/ad/project">
      <span slot="title">项目管理</span>
    </el-menu-item>
    <el-menu-item index="/cm">
      <span slot="title">创意管理</span>
    </el-menu-item>
    <el-menu-item index="/ad/report">
      <span slot="title">数据报告</span>
    </el-menu-item>
    <el-menu-item index="/ad/media">
      <span slot="title">媒体管理</span>
    </el-menu-item>
    <el-submenu index="/crowd">
      <template slot="title">系统工具</template>
      <el-menu-item index="/crowd/crowdList">人群包管理</el-menu-item>
    </el-submenu>
    <!--<el-menu-item index="#">-->
        <!--<span slot="title">系统工具</span>-->
    <!--</el-menu-item>-->
  </el-menu>
</template>
<script>
export default {
  name: 'NavProject'
}
</script>
