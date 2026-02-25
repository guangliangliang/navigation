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
        <h2>关于我们</h2>
        <p>导航网站的介绍</p>
      </div>
      <div class="about-content">
        <div class="about-card">
          <h3>网站简介</h3>
          <p>这是一个简洁实用的导航网站，旨在为用户提供优质的网站资源聚合服务。我们精心挑选了各个领域的优质网站，方便用户快速访问。</p>
        </div>
        <div class="about-card">
          <h3>功能特点</h3>
          <ul>
            <li>分类导航：按类别组织网站资源</li>
            <li>推荐网站：精选优质网站</li>
            <li>工具集合：实用在线工具</li>
            <li>资源分享：学习和素材资源</li>
          </ul>
        </div>
        <div class="about-card">
          <h3>联系我们</h3>
          <p>如果您有任何建议或意见，欢迎联系我们。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { categories } from '../config/navigation.js'

// 当前激活的分类
const activeCategory = ref('all')

// 滚动到对应分类位置
const scrollToCategory = (categoryId) => {
  activeCategory.value = categoryId
  // 滚动到页面顶部
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
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

/* 关于内容样式 */
.about-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.about-card h3 {
  font-size: 16px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 15px;
}

.about-card p {
  font-size: 14px;
  color: #606266;
  line-height: 1.5;
  margin-bottom: 10px;
}

.about-card ul {
  list-style: disc;
  padding-left: 20px;
}

.about-card li {
  font-size: 14px;
  color: #606266;
  margin-bottom: 8px;
}
</style>