<template>
  <el-menu
    mode="horizontal"
    class="el-menu-nav"
    :default-active="$route.meta.nav"
    :router="true">
    <el-menu-item index="/advertiser">客户管理</el-menu-item>
    <el-menu-item index="/report">数据报告</el-menu-item>
    <el-menu-item index="/media">媒体管理</el-menu-item>
    <el-submenu index="/system">
      <template slot="title">系统工具</template>
      <el-menu-item index="/system/user">用户管理</el-menu-item>
      <el-menu-item index="/system/rule">角色管理</el-menu-item>
    </el-submenu>

  </el-menu>
</template>
<script>
export default {
  name: 'NavAdvertiser'
}
</script>

