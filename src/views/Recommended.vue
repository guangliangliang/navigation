<template>
  <div class="page-content">
    <!-- 中间内容 -->
    <section class="content-area">
      <div class="page-header">
        <div class="header-content">
          <h2>
            <span class="header-icon">⭐</span>
            推荐网站
          </h2>
          <p>精心挑选的优质网站，每日更新</p>
        </div>
      </div>

      <!-- 网站网格 -->
      <div class="site-grid">
        <div v-for="site in filteredSites" :key="site.id" class="site-card featured">
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
      <div class="empty-state" v-if="filteredSites.length === 0">
        <div class="empty-icon">🔍</div>
        <h3>未找到网站</h3>
        <p>换个关键词试试吧</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { sites } from '../config/navigation.js'

const props = defineProps({
  searchQuery: {
    type: String,
    default: ''
  }
})

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

const getCategoryLabel = (categoryId) => {
  return categoryLabels[categoryId] || categoryId
}

// 推荐网站
const recommendedSites = computed(() => {
  return [
    ...sites.filter(s => s.category === 'ai'),
    ...sites.filter(s => s.category === 'programming'),
    ...sites.filter(s => s.category === 'tools'),
  ]
})

// 过滤后的网站
const filteredSites = computed(() => {
  if (!props.searchQuery || !props.searchQuery.trim()) {
    return recommendedSites.value
  }
  const query = props.searchQuery.toLowerCase().trim()
  return recommendedSites.value.filter(site => 
    site.name.toLowerCase().includes(query) ||
    site.description.toLowerCase().includes(query)
  )
})

// 处理图标加载失败
const handleIconError = (e) => {
  e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23667eea"><circle cx="12" cy="12" r="10"/></svg>'
}
</script>

<style scoped>
.page-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.content-area {
  width: 100%;
}

.page-header {
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: 28px 32px;
  margin-bottom: 24px;
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.header-content h2 {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 24px;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 8px;
}

.header-icon {
  font-size: 28px;
}

.header-content p {
  font-size: 14px;
  color: var(--text-light);
}

/* 网站网格 */
.site-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;
}

.site-card {
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(102, 126, 234, 0.08);
}

.site-card.featured {
  border: 2px solid transparent;
  background: linear-gradient(135deg, rgba(255, 255, 255, 1) 0%, rgba(248, 250, 255, 1) 100%);
}

.site-card.featured:hover {
  border-color: rgba(102, 126, 234, 0.4);
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--shadow-hover);
}

.site-link {
  display: flex;
  flex-direction: column;
  padding: 28px;
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
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.site-icon {
  width: 36px;
  height: 36px;
  object-fit: contain;
}

.site-category-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 5px 12px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%);
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
  font-size: 18px;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 10px;
  transition: color 0.3s;
}

.site-card:hover .site-name {
  color: var(--primary-color);
}

.site-description {
  font-size: 14px;
  color: var(--text-light);
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-bottom {
  padding-top: 16px;
  border-top: 1px solid rgba(102, 126, 234, 0.1);
}

.visit-text {
  font-size: 14px;
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
  padding: 80px 40px;
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
@media (max-width: 768px) {
  .page-content {
    padding: 10px;
  }

  .site-grid {
    grid-template-columns: 1fr;
  }

  .page-header {
    padding: 20px;
  }
}
</style>
