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
    ],
  },
  {
    text: '第八章：重新设计一种求真的团队',
    collapsed: false,
    items: [
      { text: '概述', link: '/chapters/08-重新设计一种求真的团队/00-概述' },
      { text: '底层条件变了，组织要重审', link: '/chapters/08-重新设计一种求真的团队/01-底层条件变了组织要重审' },
      { text: '协调要留，表演要删', link: '/chapters/08-重新设计一种求真的团队/02-协调要留表演要删' },
      { text: 'agent 的新问题要靠新机制处理', link: '/chapters/08-重新设计一种求真的团队/03-agent的新问题要靠新机制处理' },
      { text: '事实判断与最终责任', link: '/chapters/08-重新设计一种求真的团队/04-事实判断与最终责任' },
      { text: '重新设计一种求真的团队', link: '/chapters/08-重新设计一种求真的团队/05-重新设计一种求真的团队' },
    ],
  },
]

const enNav = [
  { text: 'Home', link: '/en/' },
  { text: 'Start Reading', link: '/en/chapters/00-prologue/00-overview' },
]

const enSidebar = [
  {
    text: 'Prologue: Why a Second Book',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/en/chapters/00-prologue/00-overview' },
      { text: 'Not Another Agent Framework Guide', link: '/en/chapters/00-prologue/01-not-another-agent-framework-guide' },
      { text: 'A Personal Statement of Position', link: '/en/chapters/00-prologue/02-a-personal-statement-of-position' },
    ],
  },
  {
    text: 'Chapter 1: Finding a Stable Abstraction',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/en/chapters/01-finding-a-stable-abstraction/00-overview' },
      { text: 'Without a Stable Abstraction, Every Framework Is Fake', link: '/en/chapters/01-finding-a-stable-abstraction/01-without-a-stable-abstraction-every-framework-is-fake' },
      { text: 'A Tool-Using Animal', link: '/en/chapters/01-finding-a-stable-abstraction/02-a-tool-using-animal' },
      { text: 'Skills Snap the Picture into Place', link: '/en/chapters/01-finding-a-stable-abstraction/03-skills-snap-the-picture-into-place' },
    ],
  },
  {
    text: 'Chapter 2: The Model Is Not the Employee',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/en/chapters/02-the-model-is-not-the-employee/00-overview' },
      { text: 'Before the Agent Is Born', link: '/en/chapters/02-the-model-is-not-the-employee/01-before-the-agent-is-born' },
      { text: 'Pretraining Is General Education', link: '/en/chapters/02-the-model-is-not-the-employee/02-pretraining-is-general-education' },
      { text: 'Post-training Is Vocational Education', link: '/en/chapters/02-the-model-is-not-the-employee/03-post-training-is-vocational-education' },
      { text: 'A Degree Is Not Job Competence', link: '/en/chapters/02-the-model-is-not-the-employee/04-a-degree-is-not-job-competence' },
    ],
  },
  {
    text: 'Chapter 3: The Job Comes Before the Candidate',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/en/chapters/03-the-job-comes-before-the-candidate/00-overview' },
      { text: 'Write the JD Before Picking the Model', link: '/en/chapters/03-the-job-comes-before-the-candidate/01-write-the-jd-before-picking-the-model' },
      { text: 'The System Prompt Is Not an Incantation', link: '/en/chapters/03-the-job-comes-before-the-candidate/02-the-system-prompt-is-not-an-incantation' },
      { text: 'Permission Boundaries Define Autonomy', link: '/en/chapters/03-the-job-comes-before-the-candidate/03-permission-boundaries-define-autonomy' },
      { text: 'Role Mismatch Is More Common than Lack of Ability', link: '/en/chapters/03-the-job-comes-before-the-candidate/04-role-mismatch-is-more-common-than-lack-of-ability' },
    ],
  },
  {
    text: 'Chapter 4: Onboarding and Certification',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/en/chapters/04-onboarding-and-certification/00-overview' },
      { text: 'A Skill Is Not a Tool', link: '/en/chapters/04-onboarding-and-certification/01-a-skill-is-not-a-tool' },
      { text: 'Role-Specific Skills Are Onboarding Training', link: '/en/chapters/04-onboarding-and-certification/02-onboarding-training' },
      { text: 'Transferable Skills Are Professional Certification', link: '/en/chapters/04-onboarding-and-certification/03-professional-certification' },
      { text: 'Capability Assets Must Be Reproducible', link: '/en/chapters/04-onboarding-and-certification/04-capability-assets-must-be-reproducible' },
    ],
  },
  {
    text: 'Chapter 5: The Work Computer and the Career Record',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/en/chapters/05-the-work-computer-and-the-career-record/00-overview' },
      { text: 'A Worker Needs a Computer of Their Own', link: '/en/chapters/05-the-work-computer-and-the-career-record/01-a-worker-needs-a-computer-of-their-own' },
      { text: 'A Stable Environment Makes Work Continuous', link: '/en/chapters/05-the-work-computer-and-the-career-record/02-a-stable-environment-makes-work-continuous' },
      { text: 'Memory Is Not Chat History', link: '/en/chapters/05-the-work-computer-and-the-career-record/03-memory-is-not-chat-history' },
      { text: 'A Track Record Changes Judgment', link: '/en/chapters/05-the-work-computer-and-the-career-record/04-a-track-record-changes-judgment' },
    ],
  },
  {
    text: 'Chapter 6: Probation, Promotion, and Retirement',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/en/chapters/06-probation-promotion-and-retirement/00-overview' },
      { text: 'Evals Are the Probation Period', link: '/en/chapters/06-probation-promotion-and-retirement/01-evals-are-the-probation-period' },
      { text: 'Performance Comes from the Work Record', link: '/en/chapters/06-probation-promotion-and-retirement/02-performance-comes-from-the-work-record' },
      { text: 'Growth Mostly Happens Outside the Weights', link: '/en/chapters/06-probation-promotion-and-retirement/03-growth-mostly-happens-outside-the-weights' },
      { text: 'Transfers and Promotion', link: '/en/chapters/06-probation-promotion-and-retirement/04-transfers-and-promotion' },
      { text: 'Departure and Retirement', link: '/en/chapters/06-probation-promotion-and-retirement/05-departure-and-retirement' },
    ],
  },
  {
    text: 'Chapter 7: When the Team Has Many Agents',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/en/chapters/07-when-the-team-has-many-agents/00-overview' },
      { text: 'A Team Is Not Multi-Agent Orchestration', link: '/en/chapters/07-when-the-team-has-many-agents/01-a-team-is-not-multi-agent-orchestration' },
      { text: 'Division of Labor and Handoffs', link: '/en/chapters/07-when-the-team-has-many-agents/02-division-of-labor-and-handoffs' },
      { text: 'Delegation and Escalation Paths', link: '/en/chapters/07-when-the-team-has-many-agents/03-delegation-and-escalation-paths' },
      { text: 'Context Isolation and Sharing', link: '/en/chapters/07-when-the-team-has-many-agents/04-context-isolation-and-sharing' },
      { text: 'Multi-Agent Writing Is Not Parallel Generation', link: '/en/chapters/07-when-the-team-has-many-agents/05-multi-agent-writing-is-not-parallel-generation' },
    ],
  },
  {
    text: 'Chapter 8: Redesigning a Truth-Seeking Team',
    collapsed: false,
    items: [
      { text: 'Overview', link: '/en/chapters/08-redesigning-a-truth-seeking-team/00-overview' },
      { text: 'The Ground Conditions Changed — Reexamine the Organization', link: '/en/chapters/08-redesigning-a-truth-seeking-team/01-the-ground-conditions-changed-reexamine-the-organization' },
      { text: 'Keep the Coordination, Cut the Theater', link: '/en/chapters/08-redesigning-a-truth-seeking-team/02-keep-the-coordination-cut-the-theater' },
      { text: 'New Problems Need New Mechanisms', link: '/en/chapters/08-redesigning-a-truth-seeking-team/03-new-problems-need-new-mechanisms' },
      { text: 'Judgments of Fact and Final Responsibility', link: '/en/chapters/08-redesigning-a-truth-seeking-team/04-judgments-of-fact-and-final-responsibility' },
      { text: 'Redesigning a Truth-Seeking Team', link: '/en/chapters/08-redesigning-a-truth-seeking-team/05-redesigning-a-truth-seeking-team' },
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

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Agent Engineering Philosophy',
      description: 'When the basic building block of software rises from a probabilistic model to an autonomous actor — with a job, skills, memory, and a working environment of its own — what does software engineering need to rethink?',
      themeConfig: {
        nav: enNav,
        sidebar: { '/en/': enSidebar },
        outline: { label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' },
        footer: {
          message: 'Licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</a>',
          copyright: 'Copyright © 2026 Chao Li',
        },
      },
    },
  },

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
