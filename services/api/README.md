# API 服务

统一后端服务的预留目录，目标技术栈为 NestJS + TypeScript。

本次仅建立仓库边界，尚未创建服务代码或新增依赖。后端负责隔离微信、Apple、手机号等身份提供方，并把外部身份映射到产品内部 `User`。

```text
平台凭证 → 身份提供方适配器 → Identity → User → 产品 token/session
```

微信 AppSecret、OpenID 和 session key 不得进入客户端或公共业务模型。
