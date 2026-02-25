<template>
  <div id="app">
    <!-- 顶部导航栏 -->
    <header class="top-nav">
      <div class="container">
        <div class="logo">
          <h1>导航</h1>
        </div>
        <nav class="main-nav">
          <a href="#" class="nav-link">首页</a>
          <a href="#" class="nav-link">推荐</a>
          <a href="#" class="nav-link">工具</a>
          <a href="#" class="nav-link">资源</a>
          <a href="#" class="nav-link">关于</a>
        </nav>
        <div class="search-box">
          <input type="text" placeholder="搜索网站..." class="search-input">
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
              <a href="#" class="menu-link" :class="{ active: activeCategory === category.id }" @click="setActiveCategory(category.id)">
                {{ category.name }}
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <!-- 中间内容 -->
      <section class="content-area">
        <div class="category-header">
          <h2>{{ currentCategory.name }}</h2>
          <p>{{ currentCategory.description }}</p>
        </div>
        <div class="site-grid">
          <div v-for="site in filteredSites" :key="site.id" class="site-card">
            <a :href="site.url" target="_blank" class="site-link">
              <div class="site-icon">
                <img :src="site.icon" :alt="site.name">
              </div>
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

// 分类数据
const categories = ref([
  { id: 'all', name: '全部', description: '所有网站' },
  { id: 'programming', name: '编程', description: '编程相关网站' },
  { id: 'tools', name: '工具', description: '开发工具' },
  { id: 'resources', name: '资源', description: '学习资源' },
  { id: 'news', name: '资讯', description: '技术资讯' },
  { id: 'ai', name: 'AI', description: '人工智能相关' },
  { id: 'design', name: '设计', description: '设计工具和资源' }
])

// 网站数据
const sites = ref([
  {
    id: 1,
    name: 'GitHub',
    url: 'https://github.com',
    description: '全球最大的代码托管平台',
    category: 'programming',
    icon: 'https://www.google.com/s2/favicons?sz=64&domain=github.com'
  },
  {
    id: 2,
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com',
    description: '程序员问答社区',
    category: 'programming',
    icon: 'https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com'
  },
  {
    id: 3,
    name: 'MDN Web Docs',
    url: 'https://developer.mozilla.org',
    description: 'Web 开发文档',
    category: 'programming',
    icon: 'https://www.google.com/s2/favicons?sz=64&domain=developer.mozilla.org'
  },
  {
    id: 4,
    name: 'npm',
    url: 'https://www.npmjs.com',
    description: 'Node.js 包管理器',
    category: 'tools',
    icon: 'https://www.google.com/s2/favicons?sz=64&domain=npmjs.com'
  },
  {
    id: 5,
    name: 'Vercel',
    url: 'https://vercel.com',
    description: '部署平台',
    category: 'tools',
    icon: 'https://www.google.com/s2/favicons?sz=64&domain=vercel.com'
  },
  {
    id: 6,
    name: 'Figma',
    url: 'https://www.figma.com',
    description: '设计工具',
    category: 'design',
    icon: 'https://www.google.com/s2/favicons?sz=64&domain=figma.com'
  },
  {
    id: 7,
    name: 'ChatGPT',
    url: 'https://chat.openai.com',
    description: 'AI 聊天助手',
    category: 'ai',
    icon: 'https://www.google.com/s2/favicons?sz=64&domain=openai.com'
  },
  {
    id: 8,
    name: '掘金',
    url: 'https://juejin.cn',
    description: '开发者社区',
    category: 'news',
    icon: 'https://www.google.com/s2/favicons?sz=64&domain=juejin.cn'
  }
])

// 当前激活的分类
const activeCategory = ref('all')

// 设置激活分类
const setActiveCategory = (categoryId) => {
  activeCategory.value = categoryId
}

// 当前分类信息
const currentCategory = computed(() => {
  return categories.value.find(cat => cat.id === activeCategory.value) || categories.value[0]
})

// 过滤后的网站
const filteredSites = computed(() => {
  if (activeCategory.value === 'all') {
    return sites.value
  }
  return sites.value.filter(site => site.category === activeCategory.value)
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

/* 主体内容 */
.main-content {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
  display: flex;
  gap: 20px;
}

/* 左侧菜单 */
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

/* 中间内容 */
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

/* 网站网格 */
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
  display: flex;
  padding: 20px;
  text-decoration: none;
  color: inherit;
}

.site-icon {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  overflow: hidden;
  margin-right: 15px;
  flex-shrink: 0;
}

.site-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.site-info {
  flex: 1;
  min-width: 0;
}

.site-name {
  font-size: 16px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.site-description {
  font-size: 14px;
  color: #909399;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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