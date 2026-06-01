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
    text: '第一章：寻找一个稳定的抽象',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/01-寻找一个稳定的抽象/00-概述' },
      { text: '没有稳定的抽象，框架都是假的', link: '/chapters/01-寻找一个稳定的抽象/01-没有稳定的抽象框架都是假的' },
      { text: '会用工具的动物', link: '/chapters/01-寻找一个稳定的抽象/02-会用工具的动物' },
      { text: '一颗火星，然后整张图齐了', link: '/chapters/01-寻找一个稳定的抽象/03-一颗火星然后整张图齐了' },
    ],
  },
  {
    text: '第二章：模型不是员工',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/02-模型不是员工/00-概述' },
      { text: '出生以前', link: '/chapters/02-模型不是员工/01-出生以前' },
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
      { text: '上岗培训', link: '/chapters/04-上岗培训与职业证书/02-上岗培训' },
      { text: '职业证书', link: '/chapters/04-上岗培训与职业证书/03-职业证书' },
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
      { text: '成长不一定发生在权重里', link: '/chapters/06-试用期晋升与退休/03-成长不一定发生在权重里' },
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
      { text: '可观测性会改写组织病', link: '/chapters/07-当团队里有很多agent/04-可观测性会改写组织病' },
      { text: '抄协调机制，删人性疤痕', link: '/chapters/07-当团队里有很多agent/05-抄协调机制删人性疤痕' },
    ],
  },
  {
    text: '第八章：什么会变，什么不会变',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/08-什么会变什么不会变/00-概述' },
      { text: '组织是为了降低协作成本而存在的', link: '/chapters/08-什么会变什么不会变/01-组织是为了降低协作成本而存在的' },
      { text: '超级个体的回归', link: '/chapters/08-什么会变什么不会变/02-超级个体的回归' },
      { text: '分工之后的归一', link: '/chapters/08-什么会变什么不会变/03-分工之后的归一' },
      { text: '工作可以拆，影响不能拆', link: '/chapters/08-什么会变什么不会变/04-工作可以拆影响不能拆' },
      { text: '公司还剩什么', link: '/chapters/08-什么会变什么不会变/05-公司还剩什么' },
      { text: '什么会变，什么不会变', link: '/chapters/08-什么会变什么不会变/06-什么会变什么不会变' },
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
