<template>
  <div class="home-page">
    <!-- 左侧锚点菜单 -->
    <aside class="anchor-menu">
      <div class="menu-section">
        <div class="section-header">
          <span class="section-icon">📁</span>
          <h3>快速导航</h3>
          <span class="total-count">{{ totalSitesCount }} 个网站</span>
        </div>
        <ul class="menu-list">
          <li v-for="category in categories.filter(c => c.id !== 'all')" :key="category.id" class="menu-item">
            <a 
              :href="`#category-${category.id}`" 
              class="menu-link"
              @click.prevent="scrollToCategory(category.id)"
            >
              <span class="category-icon">{{ getCategoryIcon(category.id) }}</span>
              <span class="category-name">{{ category.name }}</span>
              <span class="category-count">{{ getCategoryCount(category.id) }}</span>
            </a>
          </li>
        </ul>
      </div>

      <!-- 快捷统计 -->
      <div class="stats-section">
        <div class="stats-header">
          <span class="stats-icon">📊</span>
          <h3>统计</h3>
        </div>
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-value">{{ sites.length }}</span>
            <span class="stat-label">网站</span>
          </div>
          <div class="stat-item">
            <span class="stat-value">{{ categories.length - 1 }}</span>
            <span class="stat-label">分类</span>
          </div>
        </div>
      </div>
    </aside>

    <!-- 右侧网站列表 -->
    <section class="sites-section">
      <!-- 按分类展示网站 -->
      <div v-for="category in categories.filter(c => c.id !== 'all')" :key="category.id" class="category-section">
        <div :id="`category-${category.id}`" class="category-title">
          <span class="title-icon">{{ getCategoryIcon(category.id) }}</span>
          <h2>{{ category.name }}</h2>
          <span class="title-count">{{ getCategoryCount(category.id) }} 个网站</span>
        </div>

        <div class="site-grid">
          <div v-for="site in getSitesByCategory(category.id)" :key="site.id" class="site-card">
            <a :href="site.url" target="_blank" class="site-link">
              <div class="card-top">
                <div class="site-icon-wrapper">
                  <img :src="site.icon" :alt="site.name" class="site-icon" @error="handleIconError">
                </div>
                <span class="site-category-badge">{{ getCategoryLabel(site.category) }}</span>
              </div>
              <div class="site-info">
                <h3 class="site-name">{{ site.name }}</h3>
                <p class="site-description">{{ site.description }}</p>
              </div>
              <div class="card-bottom">
                <span class="visit-text">访问网站 →</span>
              </div>
            </a>
          </div>
        </div>

        <!-- 空状态 -->
        <div class="empty-state" v-if="getSitesByCategory(category.id).length === 0">
          <div class="empty-icon">🔍</div>
          <h3>暂无网站</h3>
          <p>这个分类下还没有添加网站</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { categories, sites } from '../config/navigation.js'

const props = defineProps({
  searchQuery: {
    type: String,
    default: ''
  }
})

// 分类图标映射
const categoryIcons = {
  all: '🌐',
  programming: '💻',
  tools: '🛠️',
  resources: '📚',
  news: '📰',
  ai: '🤖',
  design: '🎨'
}

// 分类标签映射
const categoryLabels = {
  all: '全部',
  programming: '编程',
  tools: '工具',
  resources: '资源',
  news: '资讯',
  ai: 'AI',
  design: '设计'
}

const getCategoryIcon = (categoryId) => {
  return categoryIcons[categoryId] || '📌'
}

const getCategoryLabel = (categoryId) => {
  return categoryLabels[categoryId] || categoryId
}

// 根据分类获取网站（支持搜索过滤）
const getSitesByCategory = (categoryId) => {
  let result = sites.filter(site => site.category === categoryId)
  
  // 按搜索关键词过滤
  if (props.searchQuery && props.searchQuery.trim()) {
    const query = props.searchQuery.toLowerCase().trim()
    result = result.filter(site => 
      site.name.toLowerCase().includes(query) ||
      site.description.toLowerCase().includes(query)
    )
  }
  
  return result
}

// 获取分类下的网站数量
const getCategoryCount = (categoryId) => {
  return getSitesByCategory(categoryId).length
}

// 当前展示的网站总数
const totalSitesCount = computed(() => {
  if (!props.searchQuery || !props.searchQuery.trim()) {
    return sites.length
  }
  const query = props.searchQuery.toLowerCase().trim()
  return sites.filter(site => 
    site.name.toLowerCase().includes(query) ||
    site.description.toLowerCase().includes(query)
  ).length
})

// 滚动到指定分类
const scrollToCategory = (categoryId) => {
  const element = document.getElementById(`category-${categoryId}`)
  if (element) {
    const offset = 100
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

// 处理图标加载失败
const handleIconError = (e) => {
  e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23667eea"><circle cx="12" cy="12" r="10"/></svg>'
}
</script>

<style scoped>
.home-page {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  gap: 24px;
  align-items: flex-start;
  padding: 20px;
}

/* 左侧锚点菜单 */
.anchor-menu {
  width: 280px;
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 24px;
  flex-shrink: 0;
  position: sticky;
  top: 100px;
}

.menu-section {
  margin-bottom: 24px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(102, 126, 234, 0.1);
}

.section-icon {
  font-size: 18px;
}

.section-header h3 {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.total-count {
  font-size: 12px;
  font-weight: 600;
  color: white;
  background: var(--primary-gradient);
  padding: 3px 10px;
  border-radius: 12px;
  margin-left: auto;
}

.menu-list {
  list-style: none;
}

.menu-item {
  margin-bottom: 6px;
}

.menu-link {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  color: var(--text-light);
  background: transparent;
  border: none;
  font-size: 14px;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;
  text-decoration: none;
}

.menu-link:hover {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
  color: var(--primary-color);
  transform: translateX(4px);
}

.category-icon {
  font-size: 18px;
  width: 24px;
  text-align: center;
}

.category-name {
  flex: 1;
  font-weight: 500;
}

.category-count {
  font-size: 12px;
  padding: 2px 8px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  font-weight: 600;
}

/* 统计区域 */
.stats-section {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
  border-radius: var(--radius-md);
  padding: 16px;
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.stats-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.stats-icon {
  font-size: 16px;
}

.stats-header h3 {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background: white;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.stat-value {
  font-size: 24px;
  font-weight: 700;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: 11px;
  color: var(--text-light);
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* 右侧网站区域 */
.sites-section {
  flex: 1;
  min-width: 0;
}

/* 分类区块 */
.category-section {
  margin-bottom: 48px;
  scroll-margin-top: 100px;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid rgba(102, 126, 234, 0.15);
}

.title-icon {
  font-size: 28px;
}

.category-title h2 {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-color);
}

.title-count {
  font-size: 14px;
  color: var(--text-light);
  background: var(--bg-color);
  padding: 4px 12px;
  border-radius: var(--radius-xl);
  font-weight: 500;
}

/* 网站网格 */
.site-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.site-card {
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(102, 126, 234, 0.08);
}

.site-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-hover);
  border-color: rgba(102, 126, 234, 0.3);
}

.site-link {
  display: flex;
  flex-direction: column;
  padding: 24px;
  text-decoration: none;
  color: inherit;
  height: 100%;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.site-icon-wrapper {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.site-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.site-category-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  color: var(--primary-color);
  border-radius: var(--radius-xl);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.site-info {
  flex: 1;
  margin-bottom: 16px;
}

.site-name {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 8px;
  transition: color 0.3s;
}

.site-card:hover .site-name {
  color: var(--primary-color);
}

.site-description {
  font-size: 13px;
  color: var(--text-light);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-bottom {
  padding-top: 16px;
  border-top: 1px solid rgba(102, 126, 234, 0.08);
}

.visit-text {
  font-size: 13px;
  font-weight: 600;
  color: var(--primary-color);
  transition: all 0.3s;
}

.site-card:hover .visit-text {
  transform: translateX(8px);
  display: inline-block;
}

/* 空状态 */
.empty-state {
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 60px 40px;
  text-align: center;
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 20px;
  opacity: 0.5;
}

.empty-state h3 {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-color);
  margin-bottom: 8px;
}

.empty-state p {
  font-size: 14px;
  color: var(--text-light);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .home-page {
    flex-direction: column;
  }

  .anchor-menu {
    width: 100%;
    position: static;
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }

  .menu-section {
    flex: 1;
    margin-bottom: 0;
  }

  .stats-section {
    width: 200px;
    flex-shrink: 0;
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
    width: auto;
    padding: 10px 16px;
  }

  .menu-link:hover {
    transform: none;
  }

  .category-count {
    display: none;
  }
}

@media (max-width: 768px) {
  .home-page {
    padding: 10px;
  }

  .anchor-menu {
    flex-direction: column;
  }

  .stats-section {
    width: 100%;
  }

  .menu-list {
    flex-direction: column;
  }

  .menu-link {
    width: 100%;
  }

  .site-grid {
    grid-template-columns: 1fr;
  }

  .category-title {
    flex-wrap: wrap;
  }
}
</style>
