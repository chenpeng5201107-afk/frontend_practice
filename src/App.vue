<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <!-- 导航栏 -->
    <nav>
      <RouterLink to="/login">登录</RouterLink>
      <RouterLink to="/">首页</RouterLink>
      <RouterLink to="/about">关于</RouterLink>
    </nav>

    <!-- 页面内容区域 -->
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

nav {
  padding: 16px;
  background: #f5f5f5;
  border-radius: 8px;
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: #333;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  transition: all 0.3s;
}

nav a:hover {
  background: #e0e0e0;
}

/* ✅ 当前激活的导航链接 */
nav a.router-link-active {
  background: #42b883;
  color: white;
}

main {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
</style>
