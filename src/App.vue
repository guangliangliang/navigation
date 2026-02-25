<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <header class="top-nav">
      <div class="container">
        <div class="logo">
          <router-link to="/" class="logo-link"><h1>{{ siteSettings.title }}</h1></router-link>
        </div>
        <nav class="main-nav">
          <router-link v-for="link in navLinks" :key="link.name" :to="link.href" class="nav-link">{{ link.name }}</router-link>
        </nav>
        <div class="search-box">
          <input type="text" :placeholder="siteSettings.searchPlaceholder" class="search-input">
          <button class="search-btn">搜索</button>
        </div>
      </div>
    </header>

    <!-- 主体内容 -->
    <main class="main-content">
      <!-- 左侧菜单 -->
      <aside class="left-menu">
        <div class="menu-section">
          <h3>分类</h3>
          <ul class="menu-list">
            <li v-for="category in categories" :key="category.id" class="menu-item">
              <a href="#" class="menu-link" :class="{ active: activeCategory === category.id }" @click="scrollToCategory(category.id)">
                {{ category.name }}
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <section class="content-area">
        <div class="category-header">
          <h2>{{ currentCategory.name }}</h2>
          <p>{{ currentCategory.description }}</p>
        </div>
        <div class="site-grid">
          <div v-for="site in filteredSites" :key="site.id" class="site-card">
            <a :href="site.url" target="_blank" class="site-link">
              <div class="site-info">
                <h3 class="site-name">{{ site.name }}</h3>
                <p class="site-description">{{ site.description }}</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { categories, sites, navLinks, siteSettings } from './config/navigation.js'

// 当前激活的分类
const activeCategory = ref('all')

// 滚动到对应分类位置
const scrollToCategory = (categoryId) => {
  activeCategory.value = categoryId
  // 这里可以添加滚动逻辑，例如滚动到页面顶部或特定位置
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 当前分类信息
const currentCategory = computed(() => {
  return categories.find(cat => cat.id === activeCategory.value) || categories[0]
})

// 过滤后的网站
const filteredSites = computed(() => {
  // 不再根据分类过滤，始终显示所有网站
  return sites
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: #f5f7fa;
  color: #333;
}

/* 顶部导航栏 */
.top-nav {
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.top-nav .container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.logo h1 {
  font-size: 20px;
  font-weight: 700;
  color: #409eff;
}

.logo-link {
  text-decoration: none;
  color: inherit;
}

.main-nav {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: #606266;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #409eff;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 10px;
}

.search-input {
  width: 200px;
  height: 36px;
  padding: 0 15px;
  border: 1px solid #dcdfe6;
  border-radius: 18px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #409eff;
}

.search-btn {
  width: 36px;
  height: 36px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-btn:hover {
  background-color: #66b1ff;
}

.main-content {
  min-height: calc(100vh - 60px);
  padding: 20px 0;
}

/* 路由过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .top-nav .container {
    flex-direction: column;
    height: auto;
    padding: 15px 20px;
    gap: 10px;
  }

  .main-nav {
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }

  .search-box {
    width: 100%;
    justify-content: center;
  }

  .search-input {
    width: 100%;
    max-width: 300px;
  }

  .main-content {
    flex-direction: column;
  }

  .left-menu {
    width: 100%;
  }

  .menu-section h3 {
    margin-bottom: 10px;
  }

  .menu-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .menu-item {
    margin-bottom: 0;
  }

  .menu-link {
    padding: 6px 12px;
    font-size: 13px;
  }

  .site-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
}
</style>