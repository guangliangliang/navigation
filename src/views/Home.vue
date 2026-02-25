<template>
  <div class="home">
    <header class="header">
      <h1>我的导航</h1>
    </header>
    <main class="main">
      <div class="welcome">
        <h2>欢迎使用导航系统</h2>
        <p>项目已成功初始化，等待导航配置文件...</p>
      </div>
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.header {
  padding: 2rem;
  text-align: center;
  color: white;
}

.header h1 {
  font-size: 2.5rem;
  font-weight: 700;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.welcome {
  background: white;
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.welcome h2 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.welcome p {
  color: #666;
  font-size: 1.1rem;
}
</style>