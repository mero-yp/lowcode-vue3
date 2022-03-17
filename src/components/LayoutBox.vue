<template>
  <div class="layout-box">
      <div class="layout-header">
          <div class="top-nav-box">
    <div class="nav-left-box">
        <div class="demo-dropdown-wrap">
        <a-dropdown >
      <div class="nav-menu">
          <BarsOutlined />
          <P>菜单</P>
      </div>
      <template #overlay>
      <a-menu>
        <a-menu-item key="1">
          <a href="javascript:;">文件</a>
        </a-menu-item>
        <a-menu-item key="2">
          <a href="javascript:;">工具</a>
        </a-menu-item>
      </a-menu>
    </template>
        </a-dropdown>
        </div>
        <router-link to="/dataSource">
      <div class="nav-data">
        <DatabaseOutlined />
        <p>数据源</p>
      </div>
      </router-link>
    </div>
    <div class="nav-title">test后台管理</div>
    <div class="nav-right-box">
      <div class="nav-preview" title="预览">
        <BulbOutlined />
      </div>
      <div class="nav-publish" title="发布">
        <SendOutlined />
      </div>
      <div class="nav-user" title="我的">
        <UserOutlined />
      </div>
    </div>
  </div>
      </div>
      <div class="layout-content">
      <router-view></router-view>
      </div>    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import {
  BarsOutlined,
  DatabaseOutlined,
  UserOutlined,
  BulbOutlined,
  SendOutlined,
} from "@ant-design/icons-vue";
export default defineComponent({
  components: {
    BarsOutlined,
  DatabaseOutlined,
  UserOutlined,
  BulbOutlined,
  SendOutlined,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.layout-box{
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.layout-header{
  height: 40px;
  width: 100%;
  background-color: rgb(38, 47, 62);

}
.top-nav-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
.nav-left-box {
  width: 8%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.nav-menu {
  width: 20px;
  height: 100%;
  font-size: 12px;
  color: #fff;
}
.nav-data {
  width: 58px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 12px;
}
.nav-title {
  color: #fff;
  font-size: 12px;
}
.demo-dropdown-wrap :deep(.ant-dropdown-button) {
  margin-right: 8px;
  margin-bottom: 8px;
}
.nav-menu {
  width: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 12px;
}
.nav-right-box {
  width: 8%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  color: #fff;
}

.layout-content{
  width: 100%;
  flex-grow: 1;
}

</style>