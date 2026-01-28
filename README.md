# Elysia + React Fullstack Boilerplate

A fully type-safe fullstack boilerplate based on [Bun](https://bun.com), integrating **ElysiaJS** as the backend and **React 19** as the frontend, with **TanStack Router** for routing. UI-wise, it comes pre-installed with **Tailwind CSS v4** and **Shadcn UI**.

## 🚀 Features

- **Runtime**: [Bun](https://bun.com) - Fast all-in-one JavaScript runtime, bundler, and package manager.
- **Backend**: [ElysiaJS](https://elysiajs.com) - High-performance, standard-compliant TypeScript framework.
- **Frontend**: [React 19](https://react.dev) - The most popular JavaScript library for building user interfaces.
- **Routing**: [TanStack Router](https://tanstack.com/router) - Powerful type-safe routing with file-based route generation.
- **UI & Styling**:
  - [Tailwind CSS v4](https://tailwindcss.com) - Atomic CSS framework.
  - [Shadcn UI](https://ui.shadcn.com) - Beautifully designed, accessible components.
- **Tooling**:
  - [Biome](https://biomejs.dev) - Fast Formatter and Linter.
  - [Husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/lint-staged/lint-staged) - Git Hooks for code quality.

## 📦 Installation

Ensure you have [Bun](https://bun.com) installed.

```bash
bun install
```

## 🛠️ Development

Start the development server. This will:
1. Automatically generate the route tree for TanStack Router.
2. Start the Elysia backend server (with hot reload).

```bash
bun dev
```

Open your browser at `http://localhost:3000`.

### Other Commands

- **Manually Generate Routes**:
  ```bash
  bun generate-routes
  ```
- **Watch Route Changes**:
  ```bash
  bun watch-routes
  ```

## 🏗️ Build & Production

Build the project:

```bash
bun build
```

Run in production:

```bash
bun start
```

## 📂 Directory Structure

```
├── src/
│   ├── app/                # Frontend React application
│   │   ├── routes/         # File-based routing pages
│   │   ├── APITester.tsx   # API test component
│   │   ├── App.tsx         # APP root component
│   │   └── frontend.tsx    # Frontend entry point
│   ├── server/             # Backend Elysia application
│   │   ├── controllers/    # API controllers
│   │   └── index.ts        # Backend entry point
│   └── shadcn-ui/          # Shadcn UI components and utility libraries
├── scripts/                # Helper scripts
├── build.ts                # Build script
├── tsr.config.json         # TanStack Router configuration
└── package.json
```

## 🔧 Configuration

- **Port**: Default is 3000 (configured in `src/server/index.ts`).
- **Styles**: Global styles are located at `src/app/styles/globals.css`.
- **Components**: New Shadcn components can be added via CLI or manually placed in `src/shadcn-ui/components/ui`.

## 🤝 Contributing

Ensure lint checks pass before submitting a PR:

```bash
bun biome check src
```

---

# Elysia + React 全栈样板

这是一个基于 [Bun](https://bun.com) 的全栈全类型安全样板项目，集成了 **ElysiaJS** 作为后端框架和 **React 19** 作为前端框架，并使用 **TanStack Router** 进行路由管理。UI 方面预装了 **Tailwind CSS v4** 和 **Shadcn UI**。

## 🚀 特性

- **Runtime**: [Bun](https://bun.com) - 极速的 JavaScript 运行时、打包器和包管理器。
- **Backend**: [ElysiaJS](https://elysiajs.com) - 高性能、符合许多标准的 TypeScript 框架。
- **Frontend**: [React 19](https://react.dev) - 最流行的构建用户界面的 JavaScript 库。
- **Routing**: [TanStack Router](https://tanstack.com/router) - 强大的类型安全路由，支持基于文件的路由生成。
- **UI & Styling**:
  - [Tailwind CSS v4](https://tailwindcss.com) - 原子化 CSS 框架。
  - [Shadcn UI](https://ui.shadcn.com) - 设计精美、可访问的组件库。
- **Tooling**:
  - [Biome](https://biomejs.dev) - 极速的 Formatter 和 Linter。
  - [Husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/lint-staged/lint-staged) - Git Hooks 保证代码质量。

## 📦 安装

确保你已经安装了 [Bun](https://bun.com)。

```bash
bun install
```

## 🛠️ 开发

启动开发服务器。这将会：
1. 自动生成 TanStack Router 的路由树。
2. 启动 Elysia 后端服务器（带有热重载）。

```bash
bun dev
```

打开浏览器访问 `http://localhost:3000`。

### 其他命令

- **手动生成路由**:
  ```bash
  bun generate-routes
  ```
- **监听路由变化**:
  ```bash
  bun watch-routes
  ```

## 🏗️ 构建与生产

构建项目：

```bash
bun build
```

在生产环境中运行：

```bash
bun start
```

## 📂 目录结构

```
├── src/
│   ├── app/                # 前端 React 应用
│   │   ├── routes/         # 基于文件的路由页面
│   │   ├── APITester.tsx   # API 测试组件
│   │   ├── App.tsx         # APP 根组件
│   │   └── frontend.tsx    # 前端入口文件
│   ├── server/             # 后端 Elysia 应用
│   │   ├── controllers/    # API 控制器
│   │   └── index.ts        # 后端入口文件
│   └── shadcn-ui/          # Shadcn UI 组件和工具库
├── scripts/                # 辅助脚本
├── build.ts                # 构建脚本
├── tsr.config.json         # TanStack Router 配置
└── package.json
```

## 🔧 配置说明

- **端口**: 默认运行在 3000 端口（在 `src/server/index.ts` 中配置）。
- **样式**: 全局样式位于 `src/app/styles/globals.css`。
- **组件**: 新的 Shadcn 组件可以使用 CLI 添加，或者手动放入 `src/shadcn-ui/components/ui`。

## 🤝 贡献

提交 PR 前请确保通过了 lint 检查：

```bash
bun biome check src
```
