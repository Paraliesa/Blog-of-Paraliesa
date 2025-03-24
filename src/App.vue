<template>
  <div class="app">
    <nav class="navbar" v-if="showNavbar">
      <div class="nav-container">
        <router-link to="/" class="nav-logo">
          <img src="./assets/avatar.png" alt="Paraliesa" class="nav-avatar" />
          <span class="nav-brand">Paraliesa</span>
        </router-link>
        
        <div class="nav-links">
          <router-link to="/" class="nav-link">首页</router-link>
          <router-link to="/blog" class="nav-link">博客</router-link>
          <router-link to="/about" class="nav-link">关于</router-link>
        </div>
      </div>
    </nav>
    
    <main>
      <router-view />
    </main>
    
  </div>
</template>

<script setup>
import { computed, onMounted  } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// 在首页不显示导航栏
const showNavbar = computed(() => {
  return route.path !== '/';
});

// 加载字体
onMounted(() => {
  // 加载Nunito字体
  const nunitoLink = document.createElement('link');
  nunitoLink.rel = 'stylesheet';
  nunitoLink.href = 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap';
  document.head.appendChild(nunitoLink);

  // 加载思源黑体字体
  const notoSansLink = document.createElement('link');
  notoSansLink.rel = 'stylesheet';
  notoSansLink.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;700&display=swap';
  document.head.appendChild(notoSansLink);
});

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Nunito', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
/* 专门针对英文和数字的选择器 */
.en, .english, .number {
  font-family: 'Nunito', sans-serif;
}

/* 专门针对中文的选择器 */
.cn, .chinese {
  font-family: 'Noto Sans SC', sans-serif;
}

body {
  background-color: #f5f5f5;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.navbar {
  position: fixed;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 1rem 0;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
}

.nav-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 0.75rem;
}

.nav-brand {
  font-size: 1.25rem;
  font-weight: 600;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  color: #666;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #333;
}

.nav-link.router-link-active {
  color: #1890ff;
}

main {
  flex: 1;
}

</style>