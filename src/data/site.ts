import { DEFAULT_SITE_URL } from '../../site.constants.js';

export const siteConfig = {
  title: 'Leestww 的精神家园',
  shortTitle: 'Leestww',
  description: '记录学习过程、项目实践、日常感悟的个人博客。',
  author: 'Leestww',
  locale: 'zh-CN',
  email: 'RicardoLee@buaa.edu.cn',
  location: 'Beijing, China',
  github: 'https://github.com/linkverb0510',
  siteUrl: process.env.PUBLIC_SITE_URL ?? DEFAULT_SITE_URL,
  navigation: [
    { href: '/', label: '首页' },
    { href: '/blog', label: '博客' },
    { href: '/projects', label: '项目' },
    { href: '/archive', label: '归档' },
    { href: '/about', label: '关于我' },
  ],
  socialLinks: [
    { href: 'mailto:RicardoLee@buaa.edu.cn', label: 'Email' },
    { href: 'https://github.com/linkverb0510', label: 'GitHub' },
  ],
} as const;

export const homeSections = {
  heroEyebrow: 'Personal Writing · Project Cases · Learning Notes',
  heroTitle: '有一分光，发一分热。',
  heroText:
    '欢迎来到Leestww的精神家园，坐下来喝杯茶再走吧',
  heroCaption:
    '软件项目 / 作品分享 / 人生感悟 / 学习笔记',
  values: [
    '内容先行：文章和项目都由 Markdown 驱动，新增内容不需要改页面逻辑。',
    '表达克制：尽量用清晰结构，而不是炫技式交互，去支撑内容阅读。',
    '工程可持续：从第一天就保持 TypeScript、Lint、Format、CI 与可验证构建。',
  ],
  stats: [
    { value: 'Astro', label: '静态站框架' },
    { value: 'Markdown', label: '内容来源' },
    { value: 'SSG', label: '生成方式' },
  ],
  currentFocus: [
    '大模型基础：LLM 原理、微调方法、应用开发',
    '写作表达：把“正在学习什么”转化为能被阅读和复盘的文字',
    '工程思维：让个人项目也保持结构清晰、便于长期维护',
  ],
  contactLead:
    '如果你也在做个人网站、记录学习与生活，欢迎通过邮件或 GitHub 与我交流。',
} as const;

export const aboutProfile = {
  intro:
    '一名大二的学生，正在开发的道路上持续摸索。这个网站既是我的公开名片，也是我用来沉淀项目、整理认知和训练表达的长期空间。',
  biography:
    '希望这里能诚实地呈现一个仍在学习、仍在修正、愿意长期投入的人。',
  learningFocus: [
    '大模型基础：LLM 原理、微调方法、应用开发',
    '音乐理论：和声、旋律、节奏',
    '软件工程：项目结构、前端体验、长期维护方法',
  ],
  principles: [
    '先把问题拆小，再动手编码。',
    '优先追求可读性和可维护性，而不是“看起来很聪明”的写法。',
    '每完成一个项目，都留下可以复盘的记录。',
  ],
  skillMap: [
    { title: '写作与表达', description: '把学习过程和生活思考整理成可以分享的内容。' },
    { title: '乐器演奏', description: '探索钢琴演奏和学习乐理中…' },
    { title: '学习与迭代', description: '保持长期记录，把兴趣与能力沉淀成可以展示的作品。' },
  ],
  links: [
    { href: 'mailto:RicardoLee@buaa.edu.cn', label: 'Email' },
    { href: 'https://github.com/linkverb0510', label: 'GitHub' },
  ],
} as const;

export const publishingChecklist = [
  '确认标题、摘要、日期、标签完整。',
  '草稿内容在发布前切换为非 draft 状态。',
  '检查外链、仓库地址和演示链接是否可访问。',
  '运行 check、lint、build 并手动预览关键页面。',
] as const;
