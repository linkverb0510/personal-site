export const BLOG_CATEGORY_KEYS = ['life', 'study'] as const;

export type BlogCategory = (typeof BLOG_CATEGORY_KEYS)[number];

export const blogCategoryMeta = {
  // Why: “生活感悟”强调个人经验和阶段性思考，所以文案更偏成长与日常。
  life: {
    label: '生活感悟',
    href: '/life',
    eyebrow: 'Life Reflections',
    description: '记录成长、日常和阶段性思考，把生活里的感受写得更清楚。',
  },
  // Why: “学习笔记”强调知识沉淀和方法复盘，所以文案更偏学习与实践。
  study: {
    label: '学习笔记',
    href: '/study',
    eyebrow: 'Learning Notes',
    description: '整理知识、学习路径和技术思考，让输入慢慢沉淀成输出。',
  },
} as const satisfies Record<BlogCategory, { label: string; href: string; eyebrow: string; description: string }>;

export const projectSectionMeta = {
  label: '个人项目',
  href: '/projects',
  eyebrow: 'Personal Projects',
  description: '展示项目目标、实现取舍与复盘，让“做过”变成“说得清楚”。',
} as const;

export const primarySections = [
  { key: 'life', ...blogCategoryMeta.life },
  { key: 'study', ...blogCategoryMeta.study },
  { key: 'projects', ...projectSectionMeta },
] as const;

export const getBlogCategoryMeta = (category: BlogCategory) => blogCategoryMeta[category];
