---
title: 个人博客与作品集网站
summary: 使用 Astro、TypeScript 和 Markdown 搭建的第一版个人网站，重点放在内容组织、性能与可维护性。
date: 2026-05-11
period: 2026.05 - 至今
role: 独立设计与开发
status: completed
highlights:
  - 搭建 Astro + TypeScript + Markdown 内容驱动架构
  - 设计博客、项目、关于我和首页的统一展示体系
  - 补齐 Lint、Format、CI 与内容模板等工程基线
techStack:
  - Astro
  - TypeScript
  - Markdown
  - CSS
featured: true
repoUrl: https://github.com/linkverb0510/personal-site
---

## 项目目标

这个项目的目标不是“堆功能”，而是建立一个可以长期演进的网站骨架。

我希望它同时满足三件事：

- 能稳定展示个人信息、文章和项目
- 能作为练习前端工程化的真实项目
- 能在未来逐步扩展，而不是推倒重来

## 为什么这么设计

我把站点分成页面、组件、内容和工具函数四层：

- 页面负责路由和数据组装
- 组件负责可复用的界面片段
- 内容集合负责规范 Markdown 字段
- 工具函数负责复用排序和日期格式化逻辑

这种拆法的好处是：随着文章和项目增多，结构仍然清楚。
