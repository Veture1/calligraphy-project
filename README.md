# 书法学习产品

这是一个面向多客户端的书法学习产品仓库。微信小程序只是其中一个 client；教师 Web、未来 iOS 等客户端通过统一后端复用用户与业务能力。

## 仓库结构

```text
calligraphy/
├── apps/
│   ├── miniprogram/       # 当前原生小程序；目标 Taro + React + TypeScript
│   └── teacher-web/       # 目标 React + Vite + TypeScript
├── services/
│   └── api/               # 目标 NestJS + TypeScript
├── packages/
│   ├── contracts/         # 公共接口契约
│   └── design-tokens/     # 公共设计令牌
├── docs/
│   ├── product/
│   ├── domain/
│   ├── design/
│   └── engineering/
├── AGENTS.md
├── package.json
├── pnpm-workspace.yaml
└── .gitignore
```

本次调整只重组仓库目录，没有搭建 Taro、Vite 或 NestJS 代码，也没有新增对应依赖。现有原生小程序代码已原样迁入 `apps/miniprogram`。

## 当前开发

1. 运行 `pnpm install` 安装现有开发依赖。
2. 运行 `pnpm typecheck` 检查当前小程序 TypeScript。
3. 使用微信开发者工具导入 `apps/miniprogram`。

## 身份边界

```text
小程序 → wx.login() → temporary code → Backend → 微信服务器
                                      ↓
                              Identity → User
                                      ↓
                            产品 token/session
```

微信 AppSecret 只属于后端。OpenID 是外部 Identity，不是业务 User ID；未来增加 Apple 或手机号身份时，Student、Pet、Assignment 等领域模型不随登录方式变化。

详细决策见 [`docs/engineering/技术决策.md`](docs/engineering/技术决策.md)。
