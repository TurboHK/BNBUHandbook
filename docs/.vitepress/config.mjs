import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'BNBU Handbook',
  description: 'A comprehensive BNBU Encyclopaedia',

  head: [
    ['link', { rel: 'icon', href: '/book.svg' }]   // 这里的路径是相对于站点根目录的
  ],

  // 多语言根配置
  locales: {
    'zh-cn': {
      label: '国语（大陆简体）',
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
        { text: '国语（大陆简体）', link: 'zh-cn' },
        { text: '粵語（香港繁體）', link: 'zh-yue' },
        { text: 'English', link: 'en-us' }
      ]
    },

    // 导航栏
    nav: [
      { text: 'PhoenixTech Project', link: 'https://github.com/PhoenixTechProject/' },
      // { text: 'English', link: '/en-us/' }
    ],

    // 侧边栏
    sidebar: {
      '/zh-cn/': [
        {
          text: '简介',
          items: [
            { text: '👋🏻 欢迎', link: '/zh-cn/intro' },
            { text: '🏫 BNBU 手册', link: '/zh-cn/briefing' },
          ],
        },
        {
          text: '📰 文文、新闻！',
          items: [
            { text: '📸 文文新闻编辑部', link: '/zh-cn/news/' },
          ],
        },
        {
          text: '📒 黄页',
          items: [
            { text: '📒 黄页', link: '/zh-cn/yellowpages/' },
          ],
        },
        {
          text: '🗓️ 校历',
          items: [
            { text: '📅 2025-2026 第二学期校历', link: '/zh-cn/calendar/S2ofAY2025-26' },
          ],
        },
        {
          text: '🎓 学科部门',
          items: [
            { text: '🎓 学科部门', link: '/zh-cn/faculty/' },
          ],
        },
        {
          text: '🏢 区域及楼栋',
          items: [
            { text: '🏢 区域及楼栋', link: '/zh-cn/buildings/' },
          ],
        },
        {
          text: '🍽️ 餐厅服务',
          items: [
            { text: '🍽️ 餐厅服务', link: '/zh-cn/canteen/' },
          ],
        },
        {
          text: '🎠 社团活动',
          items: [
            { text: '🎠 社团活动', link: '/zh-cn/associations/' },
          ],
        },
        {
          text: '🖥️ 技术文档',
          items: [
            { text: '🖥️ 技术文档', link: '/zh-cn/tech/' },
          ],
        },
        {
          text: '📲 社媒网络',
          items: [
            { text: '📲 社媒网络', link: '/zh-cn/sns/' },
          ],
        },
        {
          text: '🚎 交通设施',
          items: [
            { text: '🚎 交通设施', link: '/zh-cn/transportation/' },
          ],
        },
        {
          text: '📍 周边',
          items: [
            { text: '📍 周边', link: '/zh-cn/local/' },
          ],
        },
      ],
    
      '/zh-yue/': [
        {
          text: '簡介',
          items: [
            { text: '👋🏻 歡迎', link: '/zh-yue/intro' },
            { text: '🏫 BNBU 手冊', link: '/zh-yue/briefing' },
          ],
        },
        {
          text: '📰 文文、新聞！',
          items: [
            { text: '📸 文文時事台', link: '/zh-yue/news/' },
          ],
        },
        {
          text: '📒 黃頁',
          items: [
            { text: '📒 黃頁', link: '/zh-yue/yellowpages/' },
          ],
        },
        {
          text: '🗓️ 校曆',
          items: [
            { text: '📅 2025-2026 第二學期校曆', link: '/zh-yue/calendar/S2ofAY2025-26' },
          ],
        },
        {
          text: '🎓 學科部門',
          items: [
            { text: '🎓 學科部門', link: '/zh-yue/faculty/' },
          ],
        },
        {
          text: '🏢 區域同樓宇',
          items: [
            { text: '🏢 區域同樓宇', link: '/zh-yue/buildings/' },
          ],
        },
        {
          text: '🍽️ 食肆',
          items: [
            { text: '🍽️ 食肆', link: '/zh-yue/canteen/' },
          ],
        },
        {
          text: '🎠 社團活動',
          items: [
            { text: '🎠 社團活動', link: '/zh-yue/associations/' },
          ],
        },
        {
          text: '🖥️ 技術文檔',
          items: [
            { text: '🖥️ 技術文檔', link: '/zh-yue/tech/' },
          ],
        },
        {
          text: '📲 社交媒體',
          items: [
            { text: '📲 社交媒體', link: '/zh-yue/sns/' },
          ],
        },
        {
          text: '🚎 交通設施',
          items: [
            { text: '🚎 交通設施', link: '/zh-yue/transportation/' },
          ],
        },
        {
          text: '📍 周邊',
          items: [
            { text: '📍 周邊', link: '/zh-yue/local/' },
          ],
        },
      ],
    
      '/en-us/': [
        {
          text: 'Introduction',
          items: [
            { text: '👋🏻 Welcome', link: '/en-us/intro' },
            { text: '🏫 BNBU Handbook', link: '/en-us/briefing' },
          ],
        },
        {
          text: '📰 News & Updates!',
          items: [
            { text: '📸 BNBU News Editorial Office', link: '/en-us/news/' },
          ],
        },
        {
          text: '📒 Yellow Pages',
          items: [
            { text: '📒 Yellow Pages', link: '/en-us/yellowpages/' },
          ],
        },
        {
          text: '🗓️ Academic Calendar',
          items: [
            { text: '📅 2025-2026 Semester 2 Calendar', link: '/en-us/calendar/S2ofAY2025-26' },
          ],
        },
        {
          text: '🎓 Academic Departments',
          items: [
            { text: '🎓 Academic Departments', link: '/en-us/faculty/' },
          ],
        },
        {
          text: '🏢 Areas & Buildings',
          items: [
            { text: '🏢 Areas & Buildings', link: '/en-us/buildings/' },
          ],
        },
        {
          text: '🍽️ Dining Services',
          items: [
            { text: '🍽️ Dining Services', link: '/en-us/canteen/' },
          ],
        },
        {
          text: '🎠 Student Associations',
          items: [
            { text: '🎠 Student Associations', link: '/en-us/associations/' },
          ],
        },
        {
          text: '🖥️ Technical Documentation',
          items: [
            { text: '🖥️ Technical Documentation', link: '/en-us/tech/' },
          ],
        },
        {
          text: '📲 Social Media',
          items: [
            { text: '📲 Social Media', link: '/en-us/sns/' },
          ],
        },
        {
          text: '🚎 Transportation',
          items: [
            { text: '🚎 Transportation', link: '/en-us/transportation/' },
          ],
        },
        {
          text: '📍 Nearby',
          items: [
            { text: '📍 Nearby', link: '/en-us/local/' },
          ],
        },
      ]
    }
  }
})
