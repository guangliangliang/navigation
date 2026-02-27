<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <header class="top-nav">
      <div class="container">
        <div class="logo">
          <router-link to="/" class="logo-link">
            <span class="logo-icon">🧭</span>
            <h1>{{ siteSettings.title }}</h1>
          </router-link>
        </div>
        <nav class="main-nav">
          <router-link 
            v-for="link in navLinks" 
            :key="link.name" 
            :to="link.href" 
            class="nav-link"
            active-class="active"
          >
            {{ link.name }}
          </router-link>
        </nav>
        <div class="search-box">
          <el-input
            v-model="searchQuery"
            :placeholder="siteSettings.searchPlaceholder"
            :prefix-icon="Search"
            clearable
            class="header-search-input"
            size="default"
          />
        </div>
      </div>
    </header>

    <!-- 主体内容 -->
    <main class="main-content">
      <!-- 路由视图 -->
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :search-query="searchQuery" />
        </transition>
      </router-view>
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <p>Made with ❤️ | Navigation System © 2026</p>
    </footer>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { navLinks, siteSettings } from './config/navigation.js'
import { Search } from '@element-plus/icons-vue'

const route = useRoute()
const searchQuery = ref('')

// 监听路由变化，切换页面时清空搜索
watch(() => route.path, () => {
  searchQuery.value = ''
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
  background: var(--bg-gradient);
  color: var(--text-color);
  line-height: 1.6;
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 顶部导航栏 */
.top-nav {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-md);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(102, 126, 234, 0.1);
}

.top-nav .container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo-icon {
  font-size: 28px;
  margin-right: 10px;
}

.logo h1 {
  font-size: 24px;
  font-weight: 700;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: transform 0.3s;
}

.logo-link:hover {
  transform: scale(1.05);
}

.main-nav {
  display: flex;
  gap: 8px;
  background: var(--bg-color);
  padding: 6px 12px;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

.nav-link {
  color: var(--text-light);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: var(--radius-xl);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
}

.nav-link:hover {
  color: var(--primary-color);
  background: rgba(102, 126, 234, 0.08);
}

.nav-link.active {
  color: var(--primary-color);
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.12) 0%, rgba(118, 75, 162, 0.12) 100%);
  font-weight: 600;
  box-shadow: inset 0 0 0 2px rgba(102, 126, 234, 0.2);
}

.search-box {
  width: 280px;
}

.header-search-input :deep(.el-input__wrapper) {
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-xl);
  padding: 0 16px;
  height: 40px;
  background: var(--bg-color);
  transition: all 0.3s;
}

.header-search-input :deep(.el-input__wrapper:hover),
.header-search-input :deep(.el-input__wrapper.is-focus) {
  box-shadow: var(--shadow-md);
  background: white;
}

.header-search-input :deep(.el-input__inner) {
  font-size: 14px;
  color: var(--text-color);
}

.header-search-input :deep(.el-input__inner::placeholder) {
  color: var(--text-light);
}

/* 主体内容 */
.main-content {
  flex: 1;
  padding: 30px;
}

/* 路由过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* 页脚 */
.footer {
  background: white;
  padding: 20px;
  text-align: center;
  color: var(--text-light);
  font-size: 14px;
  border-top: 1px solid rgba(102, 126, 234, 0.1);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .top-nav .container {
    flex-wrap: wrap;
    height: auto;
    padding: 15px 20px;
    gap: 15px;
  }

  .main-nav {
    order: 3;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .search-box {
    order: 2;
    width: 200px;
  }
}

@media (max-width: 768px) {
  .top-nav .container {
    flex-direction: column;
  }

  .main-nav {
    gap: 4px;
    padding: 4px 8px;
  }

  .nav-link {
    padding: 8px 14px;
    font-size: 13px;
  }

  .search-box {
    width: 100%;
    max-width: 300px;
  }

  .main-content {
    padding: 15px;
  }
}
</style>
