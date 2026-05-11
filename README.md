# 个人博客与作品集网站

一个基于 `Astro + TypeScript + Markdown` 的个人网站项目，当前已经包含：

- 首页、博客、项目、关于我、归档页
- 博客标签页与 RSS 输出
- 内容集合 schema 校验
- 基础 SEO、sitemap、robots
- Lint、Format、CI 与静态构建流程

## 本地开发

```bash
npm install
npm run dev
```

默认开发地址：

```text
http://127.0.0.1:3000
```

说明：当前 Windows 环境会拦截 Astro 默认的 `4321` 端口，所以项目显式改用 `3000`。

## 常用命令

- `npm run dev`：启动本地开发服务器
- `npm run check`：运行 Astro 和 TypeScript 检查
- `npm run lint`：运行 ESLint
- `npm run format`：用 Prettier 格式化项目
- `npm run build`：生成生产构建

## 当前页面结构

- `/`：首页
- `/blog`：博客列表
- `/blog/[slug]`：文章详情
- `/projects`：项目列表
- `/projects/[slug]`：项目详情
- `/archive`：文章归档
- `/tags/[tag]`：标签聚合页
- `/about`：关于我
- `/rss.xml`：RSS 订阅

## 内容模型

### 博客文章

```md
---
title: 文章标题
description: 一句话摘要
date: 2026-05-11
featured: false
updatedAt: 2026-05-12
tags:
  - 标签一
  - 标签二
draft: false
---
```

### 项目案例

```md
---
title: 项目名称
summary: 项目摘要
date: 2026-05-11
period: 2026.05 - 至今
role: 独立设计与开发
status: completed
highlights:
  - 亮点一
  - 亮点二
techStack:
  - Astro
  - TypeScript
featured: true
repoUrl: https://github.com/your-username/project
demoUrl: https://example.com
---
```

## 发布前检查清单

1. 核对标题、摘要、日期、标签与外链。
2. 草稿文章确认是否仍需 `draft: true`。
3. 运行：

```bash
npm run check
npm run lint
npm run build
```

4. 人工预览首页、文章详情页、项目详情页、归档页和标签页。

## 部署到 Vercel

1. 把仓库推送到 GitHub。
2. 在 Vercel 中导入仓库。
3. 构建命令保持为 `npm run build`。
4. 输出目录使用 Astro 默认的 `dist`。
5. 在 Vercel 环境变量中配置 `PUBLIC_SITE_URL`：

```text
PUBLIC_SITE_URL=https://你的正式域名
```

这样 `canonical`、`rss.xml`、`sitemap-index.xml` 会自动使用正确域名。

补充说明：

- 代码里的 `DEFAULT_SITE_URL` 是“默认生产域名回退值”，主要用来避免未注入环境变量时生成错误的站点地址。
- Vercel 上线时仍然推荐显式配置 `PUBLIC_SITE_URL`，这样生产环境和预览环境的行为更可控，也更容易排查问题。
- 如果同时接入根域名和 `www`，建议把 `leestww06.cloud` 设为主域名，并让 `www.leestww06.cloud` 重定向到根域名，避免重复内容。

### 推荐上线流程

1. 在 GitHub 创建或确认仓库，例如：

```text
https://github.com/linkverb0510/personal-site
```

2. 在 Vercel Dashboard 中点击 `Add New Project`，导入该 GitHub 仓库。
3. 首次导入时确认：
   - Framework Preset: `Astro`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. 在 `Settings -> Environment Variables` 中为 `Production` 和 `Preview` 都添加：

```text
PUBLIC_SITE_URL=https://leestww06.cloud
```

5. 在 `Settings -> Domains` 中依次添加：
   - `leestww06.cloud`
   - `www.leestww06.cloud`
6. 把 `leestww06.cloud` 设为 Primary Domain，让 `www` 自动重定向到根域名。

### DNSPod / 腾讯云 DNS 配置

当 Vercel 域名面板提示你添加 DNS 记录时，优先以 Vercel 实际显示的值为准。常见静态站点配置如下：

- 根域名：`@` -> `A` -> `76.76.21.21`
- `www` 子域名：`www` -> `CNAME` -> `cname.vercel-dns-0.com`

配置完成后：

1. 等待 DNS 生效。
2. 回到 Vercel 检查域名状态是否变为 Valid Configuration。
3. 等待 Vercel 自动签发 HTTPS 证书。

### 上线后验收

- 访问 `https://leestww06.cloud` 能正常打开首页。
- 访问 `https://www.leestww06.cloud` 会跳转到根域名。
- `https://leestww06.cloud/rss.xml`、`/robots.txt`、`/sitemap-index.xml` 可访问。
- 页面源码中的 `canonical` 与 `og:url` 使用根域名，而不是本地地址。
