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
      { text: '不是又一本 agent 框架指南', link: '/chapters/00-序章/01-不是又一本agent框架指南' },
      { text: '个人立场声明', link: '/chapters/00-序章/02-个人立场声明' },
    ],
  },
  {
    text: '第一章：寻找一个稳定的抽象',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/01-寻找一个稳定的抽象/00-概述' },
      { text: '没有稳定的抽象，框架都是假的', link: '/chapters/01-寻找一个稳定的抽象/01-没有稳定的抽象框架都是假的' },
      { text: '会用工具的动物', link: '/chapters/01-寻找一个稳定的抽象/02-会用工具的动物' },
      { text: 'skill 让整张图归位', link: '/chapters/01-寻找一个稳定的抽象/03-skill让整张图归位' },
    ],
  },
  {
    text: '第二章：模型不是员工',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/02-模型不是员工/00-概述' },
      { text: 'agent 出生以前', link: '/chapters/02-模型不是员工/01-出生以前' },
      { text: '预训练是通识教育', link: '/chapters/02-模型不是员工/02-预训练是通识教育' },
      { text: '后训练是职业教育', link: '/chapters/02-模型不是员工/03-后训练是职业教育' },
      { text: '学历不是岗位胜任', link: '/chapters/02-模型不是员工/04-学历不是岗位胜任' },
    ],
  },
  {
    text: '第三章：岗位先于候选人',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/03-岗位先于候选人/00-概述' },
      { text: '先写 JD，再选模型', link: '/chapters/03-岗位先于候选人/01-先写JD再选模型' },
      { text: '系统提示词不是咒语', link: '/chapters/03-岗位先于候选人/02-系统提示词不是咒语' },
      { text: '权限边界决定自主性', link: '/chapters/03-岗位先于候选人/03-权限边界决定自主性' },
      { text: '岗位错配比能力不足更常见', link: '/chapters/03-岗位先于候选人/04-岗位错配比能力不足更常见' },
    ],
  },
  {
    text: '第四章：上岗培训与职业证书',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/04-上岗培训与职业证书/00-概述' },
      { text: 'skill 不是工具', link: '/chapters/04-上岗培训与职业证书/01-skill不是工具' },
      { text: '岗位特定的 skill 是上岗培训', link: '/chapters/04-上岗培训与职业证书/02-上岗培训' },
      { text: '可迁移的 skill 是职业证书', link: '/chapters/04-上岗培训与职业证书/03-职业证书' },
      { text: '能力资产要可复现', link: '/chapters/04-上岗培训与职业证书/04-能力资产要可复现' },
    ],
  },
  {
    text: '第五章：工作电脑与职业履历',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/05-工作电脑与职业履历/00-概述' },
      { text: '打工人需要一台自己的电脑', link: '/chapters/05-工作电脑与职业履历/01-打工人需要一台自己的电脑' },
      { text: '环境稳定，工作才连续', link: '/chapters/05-工作电脑与职业履历/02-环境稳定工作才连续' },
      { text: '记忆不是聊天记录', link: '/chapters/05-工作电脑与职业履历/03-记忆不是聊天记录' },
      { text: '履历改变判断', link: '/chapters/05-工作电脑与职业履历/04-履历改变判断' },
    ],
  },
  {
    text: '第六章：试用期、晋升与退休',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/06-试用期晋升与退休/00-概述' },
      { text: 'eval 是试用期', link: '/chapters/06-试用期晋升与退休/01-eval是试用期' },
      { text: '绩效来自工作记录', link: '/chapters/06-试用期晋升与退休/02-绩效来自工作记录' },
      { text: '成长大多不在权重里', link: '/chapters/06-试用期晋升与退休/03-成长大多不在权重里' },
      { text: '转岗与晋升', link: '/chapters/06-试用期晋升与退休/04-转岗与晋升' },
      { text: '离职与退休', link: '/chapters/06-试用期晋升与退休/05-离职与退休' },
    ],
  },
  {
    text: '第七章：当团队里有很多 agent',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/07-当团队里有很多agent/00-概述' },
      { text: '团队不是多 agent 编排', link: '/chapters/07-当团队里有很多agent/01-团队不是多agent编排' },
      { text: '分工与交接', link: '/chapters/07-当团队里有很多agent/02-分工与交接' },
      { text: '授权与升级路径', link: '/chapters/07-当团队里有很多agent/03-授权与升级路径' },
      { text: '上下文隔离与共享', link: '/chapters/07-当团队里有很多agent/04-上下文隔离与共享' },
      { text: '多 agent 写作不是并行生成', link: '/chapters/07-当团队里有很多agent/05-多agent写作不是并行生成' },
      { text: '主编岗位负责收束', link: '/chapters/07-当团队里有很多agent/06-主编岗位负责收束' },
    ],
  },
  {
    text: '第八章：不要复制人类组织病',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/08-不要复制人类组织病/00-概述' },
      { text: '多 agent 不是公司仿真', link: '/chapters/08-不要复制人类组织病/01-多agent不是公司仿真' },
      { text: '协调机制要保留', link: '/chapters/08-不要复制人类组织病/02-协调机制要保留' },
      { text: '人性补丁要删除', link: '/chapters/08-不要复制人类组织病/03-人性补丁要删除' },
      { text: 'agent 新病要新治', link: '/chapters/08-不要复制人类组织病/04-agent新病要新治' },
      { text: '事实判断与最终责任', link: '/chapters/08-不要复制人类组织病/05-事实判断与最终责任' },
      { text: '重新设计一种团队', link: '/chapters/08-不要复制人类组织病/06-重新设计一种团队' },
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
