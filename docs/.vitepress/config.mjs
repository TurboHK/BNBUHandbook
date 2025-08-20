import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'BNBU Handbook',
  description: 'A comprehensive BNBU Encyclopaedia',
  base: "/",
  // CHANGE base TO "/" WHEN DEPLOY ON THE MAIN BRANCH
  head: [
    ['link', { rel: 'icon', href: '/public/book.svg' }]   // 这里的路径是相对于站点根目录的
  ],

  // 多语言根配置
  locales: {
    'zh-cn': {
      label: '普通话（大陆简体）',
      lang: 'zh-CN'
    },
    'zh-yue': {
      label: '粵語（香港繁體）',
      lang: 'zh-HK'
    },
    'en-us': {
      label: 'English',
      lang: 'en-US'
    }
  },

  lastUpdated: true,

  themeConfig: {
    // GitHub 链接（右上角图标）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/PhoenixTechProject/BNBUHandbook' }
    ],

    // 启用搜索
    search: {
      provider: 'local'
    },

    // 暗黑模式切换
    appearance: true,

    // 多语言下拉
    localeLinks: {
      items: [
        { text: '普通话（大陆简体）', link: 'zh-cn' },
        { text: '粵語（香港繁體）', link: 'zh-yue' },
        { text: 'English', link: 'en-us' }
      ]
    },

    // 编辑链接
    editLink: {
        pattern: "https://github.com/PhoenixTechProject/BNBUHandbook/edit/main/docs/:path",
        text: "Edit This Page"
    },

    // 页脚信息
    footer: {
      message: "Released under the MIT License",
      copyright: "Copyright © 2025 PhoenixTech Project",
    },

    lastUpdatedText: "Last Updated",

    // 导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'PhoenixTech Project', link: 'https://github.com/PhoenixTechProject/' },
      // { text: 'English', link: '/en-us/' }
    ],

    // 侧边栏
    sidebar: {
      '/zh-cn/': [
        {
          text: '简介',
          collapsed: false,
          items: [
            { text: '👋🏻 欢迎', link: '/zh-cn/intro' },
            { text: '🏫 BNBU 手册', link: '/zh-cn/briefing' },
          ],
        },
        {
          text: '📰 文文、新闻！',
          collapsed: false,
          items: [
            { text: '📸 文文新闻编辑部', link: '/zh-cn/news/' },
          ],
        },
        {
          text: '📒 黄页',
          collapsed: false,
          items: [
            { text: '📖 官方网站', link: '/zh-cn/yellowpages/official/' },
            { text: '🗃️ 教务处（AR）', link: '/zh-cn/yellowpages/AR/' },
            { text: '✒️ 课程与学分', link: '/zh-cn/yellowpages/course/' },
            { text: '🛏️ 宿舍楼栋', link: '/zh-cn/yellowpages/dormitory/' },
            { text: '📱 软件下载', link: '/zh-cn/yellowpages/download/' },
            { text: '🧑‍🎓 毕业服务', link: '/zh-cn/yellowpages/graduation/' },
            { text: '🩺 保健', link: '/zh-cn/yellowpages/health/' },
            { text: '💻 信息资源服务（ITSC）', link: '/zh-cn/yellowpages/itsc/' },
            { text: '📚 图书馆服务（LRC）', link: '/zh-cn/yellowpages/library/' },
          ],
        },
        {
          text: '🗓️ 校历',
          collapsed: false,
          items: [
            { text: '📅 2025-2026 第二学期校历', link: '/zh-cn/calendar/S2ofAY2025-26' },
          ],
        },
        {
          text: '🎓 学科部门',
          collapsed: false,
          items: [
            { text: '🎓 学科部门', link: '/zh-cn/faculty/' },
          ],
        },
        {
          text: '🏢 区域及楼栋',
          collapsed: false,
          items: [
            { text: '🏢 区域及楼栋', link: '/zh-cn/buildings/' },
          ],
        },
        {
          text: '🍽️ 餐厅服务',
          collapsed: false,
          items: [
            { text: '🍽️ 餐厅服务', link: '/zh-cn/canteen/' },
          ],
        },
        {
          text: '🎠 社团活动',
          collapsed: false,
          items: [
            { text: '🎠 社团活动', link: '/zh-cn/associations/' },
          ],
        },
        {
          text: '🖥️ 技术文档',
          collapsed: false,
          items: [
            { text: '🖥️ 技术文档', link: '/zh-cn/tech/' },
          ],
        },
        {
          text: '📲 社媒网络',
          collapsed: false,
          items: [
            { text: '📺 官方社媒', link: '/zh-cn/sns/official' },
          ],
        },
        {
          text: '🚎 交通设施',
          collapsed: false,
          items: [
            { text: '🚎 交通设施', link: '/zh-cn/transportation/' },
          ],
        },
        {
          text: '📍 周边',
          collapsed: false,
          items: [
            { text: '🥢 餐饮', link: '/zh-cn/local/catering/' },
            { text: '🍸 酒吧', link: '/zh-cn/local/pub/' },
          ],
        },
      ],
    
      '/zh-yue/': [
        {
          text: '簡介',
          collapsed: false,
          items: [
            { text: '👋🏻 歡迎', link: '/zh-yue/intro' },
            { text: '🏫 BNBU 手冊', link: '/zh-yue/briefing' },
          ],
        },
        {
          text: '📰 文文、新聞！',
          collapsed: false,
          items: [
            { text: '📸 文文時事台', link: '/zh-yue/news/' },
          ],
        },
        {
          text: '📒 黃頁',
          collapsed: false,
          items: [
            { text: '📖 官方網站', link: '/zh-yue/yellowpages/official/' },
            { text: '🗃️ 教務處（AR）', link: '/zh-yue/yellowpages/AR/' },
            { text: '✒️ 課程與學分', link: '/zh-yue/yellowpages/course/' },
            { text: '🛏️ 宿舍樓棟', link: '/zh-yue/yellowpages/dormitory/' },
            { text: '📱 軟體下載', link: '/zh-yue/yellowpages/download/' },
            { text: '🧑‍🎓 畢業服務', link: '/zh-yue/yellowpages/graduation/' },
            { text: ' 🩺 保健', link: '/zh-yue/yellowpages/health/' },
            { text: '💻 資訊資源服務（ITSC）', link: '/zh-yue/yellowpages/itsc/' },
            { text: '📚 圖書館服務（LRC）', link: '/zh-yue/yellowpages/library/' },
          ],
        },
        {
          text: '🗓️ 校曆',
          collapsed: false,
          items: [
            { text: '📅 2025-2026 第二學期校曆', link: '/zh-yue/calendar/S2ofAY2025-26' },
          ],
        },
        {
          text: '🎓 學科部門',
          collapsed: false,
          items: [
            { text: '🎓 學科部門', link: '/zh-yue/faculty/' },
          ],
        },
        {
          text: '🏢 區域同樓宇',
          collapsed: false,
          items: [
            { text: '🏢 區域同樓宇', link: '/zh-yue/buildings/' },
          ],
        },
        {
          text: '🍽️ 食肆',
          collapsed: false,
          items: [
            { text: '🍽️ 食肆', link: '/zh-yue/canteen/' },
          ],
        },
        {
          text: '🎠 社團活動',
          collapsed: false,
          items: [
            { text: '🎠 社團活動', link: '/zh-yue/associations/' },
          ],
        },
        {
          text: '🖥️ 技術文檔',
          collapsed: false,
          items: [
            { text: '🖥️ 技術文檔', link: '/zh-yue/tech/' },
          ],
        },
        {
          text: '📲 社交媒體',
          collapsed: false,
          items: [
            { text: '📺 官方社群媒體', link: '/zh-yue/sns/official' },,
          ],
        },
        {
          text: '🚎 交通設施',
          collapsed: false,
          items: [
            { text: '🚎 交通設施', link: '/zh-yue/transportation/' },
          ],
        },
        {
          text: '📍 周邊',
          collapsed: false,
          items: [
            { text: '🥢 餐飲', link: '/zh-yue/local/catering/' },
            { text: '🍸 酒吧', link: '/zh-yue/local/pub' },
          ],
        },
      ],
    
      '/en-us/': [
        {
          text: 'Introduction',
          collapsed: false,
          items: [
            { text: '👋🏻 Welcome', link: '/en-us/intro' },
            { text: '🏫 BNBU Handbook', link: '/en-us/briefing' },
          ],
        },
        {
          text: '📰 News & Updates!',
          collapsed: false,
          items: [
            { text: '📸 BNBU News Editorial Office', link: '/en-us/news/' },
          ],
        },
        {
          text: '📒 Yellow Pages',
          collapsed: false,
          items: [
            { text: '📖 Official Websites', link: '/en-us/yellowpages/official/' },
            { text: '🗃️ Academic Registry (AR)', link: '/en-us/yellowpages/AR/' },
            { text: '✒️ Courses and Grade', link: '/en-us/yellowpages/course/' },
            { text: '🛏️ Dormitory', link: '/en-us/yellowpages/dormitory/' },
            { text: '📱 Software', link: '/en-us/yellowpages/download/' },
            { text: '🧑‍🎓 Graduation Services', link: '/en-us/yellowpages/graduation/' },
            { text: '🩺 Health', link: '/en-us/yellowpages/health/' },
            { text: '💻 Information Resources Services (ITSC)', link: '/en-us/yellowpages/itsc/' },
            { text: '📚 Library Services (LRC)', link: '/en-us/yellowpages/library/' },
          ],
        },
        {
          text: '🗓️ Academic Calendar',
          collapsed: false,
          items: [
            { text: '📅 2025-2026 Semester 2 Calendar', link: '/en-us/calendar/S2ofAY2025-26' },
          ],
        },
        {
          text: '🎓 Academic Departments',
          collapsed: false,
          items: [
            { text: '🎓 Academic Departments', link: '/en-us/faculty/' },
          ],
        },
        {
          text: '🏢 Areas & Buildings',
          collapsed: false,
          items: [
            { text: '🏢 Areas & Buildings', link: '/en-us/buildings/' },
          ],
        },
        {
          text: '🍽️ Dining Services',
          collapsed: false,
          items: [
            { text: '🍽️ Dining Services', link: '/en-us/canteen/' },
          ],
        },
        {
          text: '🎠 Student Associations',
          collapsed: false,
          items: [
            { text: '🎠 Student Associations', link: '/en-us/associations/' },
          ],
        },
        {
          text: '🖥️ Technical Documentation',
          collapsed: false,
          items: [
            { text: '🖥️ Technical Documentation', link: '/en-us/tech/' },
          ],
        },
        {
          text: '📲 Social Media',
          collapsed: false,
          items: [
            { text: '📺 官方社媒', link: '/en-us/sns/official' },
          ],
        },
        {
          text: '🚎 Transportation',
          collapsed: false,
          items: [
            { text: '🚎 Transportation', link: '/en-us/transportation/' },
          ],
        },
        {
          text: '📍 Nearby',
          collapsed: false,
          items: [
            { text: '🥢 Catering', link: '/en-us/local/catering/' },
            { text: '🍸 Pubs', link: '/en-us/local/pub' },
          ],
        },
      ]
    }
  }
})
