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
    id: "ai",
    name: "AI",
    description: "人工智能相关",
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
    id: "design",
    name: "设计",
    description: "设计工具和资源",
  },
];

// 网站配置
export const sites = [
  // AI 类
  {
    id: 1,
    name: "ChatGPT",
    url: "https://chat.openai.com",
    description: "OpenAI 开发的 AI 聊天助手",
    category: "ai",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=openai.com",
  },

  // 国内 AI
  {
    id: 24,
    name: "DeepSeek",
    url: "https://chat.deepseek.com",
    description: "深度求索开发的 AI 助手",
    category: "ai",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=deepseek.com",
  },
  {
    id: 25,
    name: "腾讯元宝",
    url: "https://yuanbao.tencent.com",
    description: "腾讯推出的 AI 助手",
    category: "ai",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=tencent.com",
  },
  {
    id: 26,
    name: "豆包",
    url: "https://www.doubao.com",
    description: "字节跳动推出的 AI 助手",
    category: "ai",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=doubao.com",
  },
  {
    id: 27,
    name: "通义千问",
    url: "https://tongyi.aliyun.com",
    description: "阿里巴巴推出的 AI 助手",
    category: "ai",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=aliyun.com",
  },
  {
    id: 28,
    name: "文心一言",
    url: "https://yiyan.baidu.com",
    description: "百度推出的 AI 助手",
    category: "ai",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=baidu.com",
  },

  // 国外 AI
  {
    id: 29,
    name: "Bing Chat",
    url: "https://copilot.microsoft.com",
    description: "微软推出的 AI 聊天助手",
    category: "ai",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=microsoft.com",
  },
  {
    id: 2,
    name: "Claude",
    url: "https://claude.ai",
    description: "Anthropic 开发的 AI 助手",
    category: "ai",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=claude.ai",
  },

  // 编程类
  {
    id: 5,
    name: "GitHub",
    url: "https://github.com",
    description: "全球最大的代码托管平台",
    category: "programming",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=github.com",
  },
  {
    id: 6,
    name: "Stack Overflow",
    url: "https://stackoverflow.com",
    description: "程序员问答社区",
    category: "programming",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com",
  },
  {
    id: 7,
    name: "MDN Web Docs",
    url: "https://developer.mozilla.org",
    description: "Web 开发文档权威资源",
    category: "programming",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=developer.mozilla.org",
  },
  {
    id: 8,
    name: "LeetCode",
    url: "https://leetcode.com",
    description: "算法练习和面试准备平台",
    category: "programming",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=leetcode.com",
  },
  {
    id: 9,
    name: "CodePen",
    url: "https://codepen.io",
    description: "前端代码在线编辑和展示平台",
    category: "programming",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=codepen.io",
  },

  // 工具类
  {
    id: 10,
    name: "npm",
    url: "https://www.npmjs.com",
    description: "Node.js 包管理器",
    category: "tools",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=npmjs.com",
  },
  {
    id: 11,
    name: "Vercel",
    url: "https://vercel.com",
    description: "前端部署平台",
    category: "tools",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=vercel.com",
  },
  {
    id: 12,
    name: "Netlify",
    url: "https://netlify.com",
    description: "静态网站托管平台",
    category: "tools",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=netlify.com",
  },
  {
    id: 13,
    name: "Can I Use",
    url: "https://caniuse.com",
    description: "浏览器兼容性查询工具",
    category: "tools",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=caniuse.com",
  },

  // 设计类
  {
    id: 14,
    name: "Figma",
    url: "https://www.figma.com",
    description: "在线协作设计工具",
    category: "design",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=figma.com",
  },
  {
    id: 15,
    name: "Dribbble",
    url: "https://dribbble.com",
    description: "设计师作品展示平台",
    category: "design",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=dribbble.com",
  },
  {
    id: 16,
    name: "Behance",
    url: "https://www.behance.net",
    description: "Adobe 旗下的创意作品平台",
    category: "design",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=behance.net",
  },
  {
    id: 17,
    name: "Unsplash",
    url: "https://unsplash.com",
    description: "免费高质量图片库",
    category: "design",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=unsplash.com",
  },
  {
    id: 32,
    name: "蓝湖",
    url: "https://lanhuapp.com",
    description: "产品设计协作平台",
    category: "design",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=lanhuapp.com",
  },

  // 资讯类
  {
    id: 18,
    name: "掘金",
    url: "https://juejin.cn",
    description: "开发者技术社区",
    category: "news",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=juejin.cn",
  },
  {
    id: 19,
    name: "CSDN",
    url: "https://www.csdn.net",
    description: "中国专业开发者社区",
    category: "news",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=csdn.net",
  },
  {
    id: 20,
    name: "V2EX",
    url: "https://www.v2ex.com",
    description: "创意工作者社区",
    category: "news",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=v2ex.com",
  },
  {
    id: 30,
    name: "知乎",
    url: "https://www.zhihu.com",
    description: "中文互联网问答社区",
    category: "news",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=zhihu.com",
  },

  // 资源类
  {
    id: 21,
    name: "freeCodeCamp",
    url: "https://www.freecodecamp.org",
    description: "免费编程学习平台",
    category: "resources",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=freecodecamp.org",
  },
  {
    id: 22,
    name: "Coursera",
    url: "https://www.coursera.org",
    description: "在线课程平台",
    category: "resources",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=coursera.org",
  },
  {
    id: 23,
    name: "YouTube",
    url: "https://www.youtube.com",
    description: "视频教程和学习资源",
    category: "resources",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=youtube.com",
  },
  {
    id: 31,
    name: "Bilibili",
    url: "https://www.bilibili.com",
    description: "国内知名视频学习平台",
    category: "resources",
    icon: "https://www.google.com/s2/favicons?sz=64&domain=bilibili.com",
  },
];

// 导航栏配置
export const navLinks = [
  {
    name: "首页",
    href: "/",
  },
  {
    name: "推荐",
    href: "/recommended",
  },
  {
    name: "工具",
    href: "/tools",
  },
  {
    name: "资源",
    href: "/resources",
  },
  {
    name: "关于",
    href: "/about",
  },
];

// 网站设置
export const siteSettings = {
  title: "导航系统",
  description: "我的个人导航系统",
  searchPlaceholder: "搜索网站、工具、资源...",
};
