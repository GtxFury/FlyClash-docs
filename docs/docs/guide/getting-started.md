---
title: 快速开始
---

# 快速开始

本页帮助你在几分钟内跑起来文档站点，并了解常见的开发流程。后续章节可以继续扩展成更详细的项目说明。

## 环境准备

在本地先确保安装以下工具：

- Node.js 18 或更新版本（推荐使用 20.x）
- 包管理器可选 `npm`、`pnpm` 或 `yarn`，仓库默认使用 `npm`

```bash
npm install
npm run dev
```

访问终端输出的本地地址即可预览文档。

## 目录结构

```text
docs/
├─ docs/                # 文档源文件
│  ├─ index.md          # 首页（当前所见的 Home 布局）
│  └─ guide/            # 指南章节
│     └─ getting-started.md
├─ .vitepress/          # VitePress 配置
└─ package.json         # 构建脚本
```

根据需要自由新增 Markdown 文件，VitePress 会自动参与构建。

## 发版流程

1. 本地执行 `npm run build`，确保构建通过。
2. 提交代码并推送到 `main`。
3. GitHub Actions 会自动构建并发布至 `GitHub Pages`。

若部署失败，可在 Actions 详情页查看日志，常见问题包括依赖未安装或路径配置不正确。

## 下一步

- 在 `guide/` 目录下继续拆分功能模块文档。
- 根据团队需要补充 `FAQ`、`API 参考` 或 `变更日志` 等章节。
- 调整 `.vitepress/config.ts` 中的导航和侧边栏配置，让文档结构更加清晰。
