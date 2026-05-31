import { defineConfig } from 'vitepress'

const nav = [
  { text: '首页', link: '/' },
  { text: '开始阅读', link: '/chapters/00-序章/00-概述' },
]

const sidebar = [
  {
    text: '序章：为什么写第二本书',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/00-序章/00-概述' },
    ],
  },
  {
    text: '第一部：寻找一个稳定的抽象',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/01-寻找一个稳定的抽象/00-概述' },
      { text: '没有稳定的抽象，框架都是假的', link: '/chapters/01-寻找一个稳定的抽象/01-没有稳定的抽象框架都是假的' },
      { text: '会用工具的动物', link: '/chapters/01-寻找一个稳定的抽象/02-会用工具的动物' },
      { text: '一颗火星，然后整张图齐了', link: '/chapters/01-寻找一个稳定的抽象/03-一颗火星然后整张图齐了' },
    ],
  },
]

export default defineConfig({
  title: 'Agent 工程哲学',
  description: '当软件的基本构件从概率模型升格为自主角色——有岗位、有技能、有记忆、有自己的工作环境——软件工程需要重新理解什么。',
  lang: 'zh-CN',

  appearance: 'force-dark',
  base: '/agent-engineering-philosophy/',
  srcDir: '..',
  outDir: '.vitepress/dist',

  ignoreDeadLinks: [
    /\/LICENSE$/,
  ],

  srcExclude: [
    'node_modules/**',
    'output/**',
    'docs/**',
    'CLAUDE.md',
    '访谈记录.md',
    '**/试写-*.md',
  ],

  themeConfig: {
    nav,
    sidebar,
    outline: { label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    footer: {
      message: '采用 <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans" target="_blank">CC BY-NC-SA 4.0</a> 许可协议',
      copyright: 'Copyright © 2026 Chao Li',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Onenightcarnival/agent-engineering-philosophy' },
    ],
  },
})
