<template>
  <div class="page-content">
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

    <!-- 中间内容 -->
    <section class="content-area">
      <div class="category-header">
        <h2>资源网站</h2>
        <p>丰富的学习和素材资源</p>
      </div>
      <div class="site-grid">
        <div v-for="site in resourcesSites" :key="site.id" class="site-card">
          <a :href="site.url" target="_blank" class="site-link">
            <div class="site-info">
              <h3 class="site-name">{{ site.name }}</h3>
              <p class="site-description">{{ site.description }}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { categories, sites } from '../config/navigation.js'

// 当前激活的分类
const activeCategory = ref('all')

// 滚动到对应分类位置
const scrollToCategory = (categoryId) => {
  activeCategory.value = categoryId
  // 滚动到页面顶部
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 资源类网站
const resourcesSites = computed(() => {
  return sites.filter(site => site.category === 'resources')
})
</script>

<style scoped>
/* 页面内容样式 */
.page-content {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  display: flex;
  gap: 20px;
}

/* 左侧菜单样式 */
.left-menu {
  width: 200px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  flex-shrink: 0;
}

.menu-section h3 {
  font-size: 16px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 15px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ebeef5;
}

.menu-list {
  list-style: none;
}

.menu-item {
  margin-bottom: 8px;
}

.menu-link {
  display: block;
  padding: 8px 12px;
  color: #606266;
  text-decoration: none;
  font-size: 14px;
  border-radius: 4px;
  transition: all 0.3s;
}

.menu-link:hover {
  background-color: #ecf5ff;
  color: #409eff;
}

.menu-link.active {
  background-color: #ecf5ff;
  color: #409eff;
  font-weight: 500;
}

/* 中间内容样式 */
.content-area {
  flex: 1;
  min-width: 0;
}

.category-header {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
}

.category-header h2 {
  font-size: 18px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 5px;
}

.category-header p {
  font-size: 14px;
  color: #909399;
}

/* 网站网格样式 */
.site-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.site-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
}

.site-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

.site-link {
  display: block;
  padding: 20px;
  text-decoration: none;
  color: inherit;
}

.site-info {
  flex: 1;
}

.site-name {
  font-size: 16px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 8px;
}

.site-description {
  font-size: 14px;
  color: #606266;
  line-height: 1.4;
}
</style>