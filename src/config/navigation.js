// 导航配置文件
// 你可以在这里修改导航的分类和网站

// 分类配置
export const categories = [
  {
    id: "all",
    name: "全部",
    description: "所有网站",
  },
  {
    id: "programming",
    name: "编程",
    description: "编程相关网站",
  },
  {
    id: "tools",
    name: "工具",
    description: "开发工具",
  },
  {
    id: "resources",
    name: "资源",
    description: "学习资源",
  },
  {
    id: "news",
    name: "资讯",
    description: "技术资讯",
  },
  {
    id: "ai",
    name: "AI",
    description: "人工智能相关",
  },
  {
    id: "design",
    name: "设计",
    description: "设计工具和资源",
  },
];

// 网站配置
export const sites = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com",
    description: "全球最大的代码托管平台",
    category: "programming",
    // 网站图标，使用Google Favicon服务获取
    icon: "https://github.com/favicon.ico",
  },
  {
    id: 2,
    name: "Stack Overflow",
    url: "https://stackoverflow.com",
    description: "程序员问答社区",
    category: "programming",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com",
  },
  {
    id: 3,
    name: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    description: "Web 开发文档",
    category: "programming",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=developer.mozilla.org",
  },
  {
    id: 4,
    name: "npm",
    url: "https://www.npmjs.com",
    description: "Node.js 包管理器",
    category: "tools",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=npmjs.com",
  },
  {
    id: 5,
    name: "Vercel",
    url: "https://vercel.com",
    description: "部署平台",
    category: "tools",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=vercel.com",
  },
  {
    id: 6,
    name: "Figma",
    url: "https://www.figma.com",
    description: "设计工具",
    category: "design",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=figma.com",
  },
  {
    id: 7,
    name: "ChatGPT",
    url: "https://chat.openai.com",
    description: "AI 聊天助手",
    category: "ai",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=openai.com",
  },
  {
    id: 8,
    name: "掘金",
    url: "https://juejin.cn",
    description: "开发者社区",
    category: "news",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=juejin.cn",
  },
];

// 导航栏配置
export const navLinks = [
  {
    name: "首页",
    href: "#",
  },
  {
    name: "推荐",
    href: "#",
  },
  {
    name: "工具",
    href: "#",
  },
  {
    name: "资源",
    href: "#",
  },
  {
    name: "关于",
    href: "#",
  },
];

// 网站设置
export const siteSettings = {
  title: "导航",
  description: "我的个人导航系统",
  searchPlaceholder: "搜索网站...",
};
