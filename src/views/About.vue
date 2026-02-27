<template>
  <div class="about-page">
    <div class="about-container">
      <!-- 头部 -->
      <div class="about-header">
        <div class="header-icon">🧭</div>
        <h1>关于导航系统</h1>
        <p class="subtitle">你的个人网站导航助手</p>
      </div>

      <!-- 主要内容 -->
      <div class="about-content">
        <!-- 介绍卡片 -->
        <div class="info-card">
          <div class="card-header">
            <span class="card-icon">📖</span>
            <h2>项目介绍</h2>
          </div>
          <div class="card-body">
            <p>
              这是一个基于
              <strong>Vue 3 + Vite</strong>
              构建的现代化导航系统，旨在帮助你快速访问常用的网站和工具。
            </p>
            <p>通过分类管理，你可以轻松找到所需的资源，提升工作和学习效率。</p>
          </div>
        </div>

        <!-- 特性卡片 -->
        <div class="info-card">
          <div class="card-header">
            <span class="card-icon">✨</span>
            <h2>主要特性</h2>
          </div>
          <div class="card-body">
            <ul class="feature-list">
              <li>
                <span class="feature-icon">🎨</span>
                <span>现代化 UI 设计，渐变色彩搭配</span>
              </li>
              <li>
                <span class="feature-icon">📱</span>
                <span>响应式布局，支持各种设备</span>
              </li>
              <li>
                <span class="feature-icon">🔍</span>
                <span>搜索功能，快速定位网站</span>
              </li>
              <li>
                <span class="feature-icon">📁</span>
                <span>分类管理，清晰有序</span>
              </li>
              <li>
                <span class="feature-icon">⚡</span>
                <span>快速加载，流畅体验</span>
              </li>
              <li>
                <span class="feature-icon">🔗</span>
                <span>一键访问，便捷高效</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- 技术栈卡片 -->
        <div class="info-card">
          <div class="card-header">
            <span class="card-icon">🛠️</span>
            <h2>技术栈</h2>
          </div>
          <div class="card-body">
            <div class="tech-grid">
              <div class="tech-item">
                <span class="tech-icon">💚</span>
                <div class="tech-info">
                  <strong>Vue 3</strong>
                  <span>前端框架</span>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon">⚡</span>
                <div class="tech-info">
                  <strong>Vite</strong>
                  <span>构建工具</span>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon">🛣️</span>
                <div class="tech-info">
                  <strong>Vue Router</strong>
                  <span>路由管理</span>
                </div>
              </div>
              <div class="tech-item">
                <span class="tech-icon">🎨</span>
                <div class="tech-info">
                  <strong>CSS3</strong>
                  <span>样式设计</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 统计卡片 -->
        <div class="stats-card">
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-number">{{ sites.length }}</span>
              <span class="stat-label">收录网站</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">{{ categories.length - 1 }}</span>
              <span class="stat-label">分类数量</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">5</span>
              <span class="stat-label">功能页面</span>
            </div>
            <div class="stat-item">
              <span class="stat-number">100%</span>
              <span class="stat-label">免费开源</span>
            </div>
          </div>
        </div>

        <!-- 联系卡片 -->
        <div class="info-card contact-card">
          <div class="card-header">
            <span class="card-icon">💌</span>
            <h2>联系我们</h2>
          </div>
          <div class="card-body">
            <p>如果你有任何建议或问题，欢迎反馈！</p>
            <div class="contact-links">
              <a
                href="https://github.com/guangliangliang/navigation"
                target="_blank"
                class="contact-link"
              >
                <span class="link-icon">🐙</span>
                GitHub
              </a>
              <a href="mailto:17600498920@164.com" class="contact-link">
                <span class="link-icon">📧</span>
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- 页脚 -->
      <div class="about-footer">
        <p>Made with ❤️ | Navigation System © 2026</p>
        <p class="version">Version 1.0.0</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { sites, categories } from "../config/navigation.js";
</script>

<style scoped>
.about-page {
  min-height: calc(100vh - 200px);
  padding: 40px 20px;
  background: var(--bg-gradient);
}

.about-container {
  max-width: 900px;
  margin: 0 auto;
}

/* 头部 */
.about-header {
  text-align: center;
  margin-bottom: 48px;
  padding: 40px;
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.header-icon {
  font-size: 64px;
  margin-bottom: 16px;
  display: block;
}

.about-header h1 {
  font-size: 36px;
  font-weight: 700;
  background: var(--primary-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
}

.subtitle {
  font-size: 16px;
  color: var(--text-light);
}

/* 内容区域 */
.about-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* 信息卡片 */
.info-card {
  background: var(--card-bg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  border: 1px solid rgba(102, 126, 234, 0.1);
  transition: all 0.3s;
}

.info-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 24px 28px;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.05) 0%,
    rgba(118, 75, 162, 0.05) 100%
  );
  border-bottom: 1px solid rgba(102, 126, 234, 0.1);
}

.card-icon {
  font-size: 24px;
}

.card-header h2 {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-color);
}

.card-body {
  padding: 28px;
}

.card-body p {
  font-size: 15px;
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: 12px;
}

.card-body strong {
  color: var(--primary-color);
}

/* 特性列表 */
.feature-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.feature-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: var(--text-color);
}

.feature-icon {
  font-size: 20px;
  flex-shrink: 0;
}

/* 技术栈网格 */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  background: var(--bg-color);
  border-radius: var(--radius-md);
  transition: all 0.3s;
}

.tech-item:hover {
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.08) 0%,
    rgba(118, 75, 162, 0.08) 100%
  );
  transform: translateX(4px);
}

.tech-icon {
  font-size: 28px;
  flex-shrink: 0;
}

.tech-info {
  display: flex;
  flex-direction: column;
}

.tech-info strong {
  font-size: 15px;
  color: var(--text-color);
}

.tech-info span {
  font-size: 12px;
  color: var(--text-light);
  margin-top: 2px;
}

/* 统计卡片 */
.stats-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: var(--radius-lg);
  padding: 40px;
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
}

.stats-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      circle at 20% 50%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    );
  pointer-events: none;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.stat-item {
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
}

.stat-number {
  display: block;
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 8px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.stat-label {
  font-size: 14px;
  opacity: 0.95;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}

/* 联系卡片 */
.contact-card {
  text-align: center;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--bg-color);
  border-radius: var(--radius-xl);
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
}

.contact-link:hover {
  background: var(--primary-gradient);
  color: white;
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.link-icon {
  font-size: 18px;
}

/* 页脚 */
.about-footer {
  text-align: center;
  margin-top: 48px;
  padding: 30px;
  color: var(--text-light);
  font-size: 14px;
}

.about-footer p {
  margin-bottom: 8px;
}

.version {
  font-size: 12px;
  opacity: 0.7;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .about-page {
    padding: 20px 15px;
  }

  .about-header {
    padding: 30px 20px;
  }

  .header-icon {
    font-size: 48px;
  }

  .about-header h1 {
    font-size: 28px;
  }

  .feature-list {
    grid-template-columns: 1fr;
  }

  .tech-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .stat-number {
    font-size: 32px;
  }

  .contact-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
