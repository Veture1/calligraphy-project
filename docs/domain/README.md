# 领域文档

这里记录领域术语、实体关系和业务规则。

身份体系采用 `Identity → User` 的分层：微信 OpenID、Apple subject、手机号等属于外部 Identity；Student、Assignment、宠物蛋孵化进度等领域对象只关联内部 User，不依赖具体登录平台。

当前已确认的宠物蛋规则见 [`宠物蛋系统.md`](宠物蛋系统.md)。
