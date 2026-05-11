// Why: 把“生产环境是否显示内容”的规则集中起来，避免多个页面重复判断草稿状态。
export const isProductionVisible = (draft?: boolean) => !import.meta.env.PROD || !draft;

// Why: 博客和项目都要按日期倒序显示，这种重复逻辑抽成小工具更容易维护。
export const sortByDateDesc = <T extends { data: { date: Date } }>(entries: T[]) =>
  [...entries].sort((left, right) => right.data.date.valueOf() - left.data.date.valueOf());
