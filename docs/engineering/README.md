# 工程文档

这里记录仓库结构、技术决策、开发流程和部署约定。

依赖方向约定：

```text
apps/* ───────┐
              ├──> packages/*
services/* ───┘

apps/* ──HTTP/API contract──> services/api
```

客户端之间不得互相导入代码；平台 SDK 不得进入领域模型或公共 contracts。

`packages/art-assets` 保存跨客户端美术母版和平台导出物。领域与 API 只使用稳定资源键，不依赖小程序、Web 或仓库内的具体文件路径。
