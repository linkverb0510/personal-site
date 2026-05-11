# lw长期记忆

- Astro 6 的 content collections 使用 Content Layer API；条目主键用 `entry.id`，渲染正文用 `render(entry)`。
- 使用 `loader: glob(...)` 时，不再保留旧写法里的 `type: 'content'`。
- 当前 Windows 环境中，端口 `4321` 位于系统 TCP excluded port range `4254-4353` 内，`astro dev` 必须使用 `127.0.0.1:3000`。
- 网站当前是静态优先架构：不引入数据库、自建后台、登录系统或评论系统。
- 公开内容发现能力当前已包含：归档页、标签页、RSS、上一篇/下一篇、相关文章。
- 正式域名通过 `PUBLIC_SITE_URL` 提供，避免在本地或未部署阶段写死错误 canonical。
- `public/og-default.png` 目前仅为占位文件，后续应替换为真实社交分享图。
- `src/content.config.ts` 里 `z.string().url()` 目前有非阻塞弃用提示，后续升级依赖时应处理。
- 用户要求：复杂任务先理清目标与步骤；代码注释尽量解释“为什么”；每轮任务结束后补 `开发文档.md` 与 `lw长期记忆.md`。
- `cover` 字段如果没有真正接入卡片图或 SEO 图渲染，就不要只停留在 content schema 里；未兑现的模型声明会误导后续维护。
- 面向公开站点的项目卡片不能保留 `example.com` 或 `your-username` 之类占位外链；宁可删掉字段，也不要展示假链接。
- `DEFAULT_SITE_URL` 用于生产域名回退，`PUBLIC_SITE_URL` 用于显式覆盖；Vercel 上线时推荐两者同时保留，以环境变量为准。
- PowerShell 里看到中文乱码时，先用脚本按 UTF-8 读取源码再判断，不要仅凭终端输出认定文件已损坏。
