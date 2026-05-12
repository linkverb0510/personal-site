import { DEFAULT_SITE_URL } from '../../site.constants.js';
import { blogCategoryMeta, projectSectionMeta } from './content-taxonomy';

export const siteConfig = {
  title: 'Leestww 的精神家园',
  shortTitle: 'Leestww',
  description: '记录生活感悟、学习笔记与个人项目的个人网站。',
  author: 'Leestww',
  locale: 'zh-CN',
  email: 'RicardoLee@buaa.edu.cn',
  location: 'Beijing, China',
  github: 'https://github.com/linkverb0510',
  siteUrl: process.env.PUBLIC_SITE_URL ?? DEFAULT_SITE_URL,
  navigation: [
    { href: '/', label: '首页' },
    { href: blogCategoryMeta.life.href, label: blogCategoryMeta.life.label },
    { href: blogCategoryMeta.study.href, label: blogCategoryMeta.study.label },
    { href: projectSectionMeta.href, label: projectSectionMeta.label },
    { href: '/about', label: '关于我' },
  ],
  socialLinks: [
    { href: 'mailto:RicardoLee@buaa.edu.cn', label: 'Email' },
    { href: 'https://github.com/linkverb0510', label: 'GitHub' },
  ],
} as const;

export const homeSections = {
  heroEyebrow: 'Life Reflections · Learning Notes · Personal Projects',
  heroTitle: '有一分光，发一分热。',
  heroText:
    '这里是我的长期个人网站，用来记录生活感悟、整理学习笔记，也沉淀我真正做过的个人项目。',
  heroCaption:
    '首页只保留最必要的介绍，具体内容分别归入生活感悟、学习笔记和个人项目。',
  heroNote:
    '我希望它像一间持续整理中的书房：入口简洁，但每个房间都有明确主题，也能看见最近的变化。',
  sectionLead:
    '三个板块承担三种不同任务：生活负责表达，学习负责沉淀，项目负责证明。',
  recentLead:
    '首页只保留最近更新，让访客先感受到这个网站是持续生长的，而不是一次性摆好的展板。',
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
