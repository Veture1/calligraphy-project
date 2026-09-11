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
