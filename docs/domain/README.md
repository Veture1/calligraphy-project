# 领域文档

这里记录领域术语、实体关系和业务规则。

身份体系采用 `Identity → User` 的分层：微信 OpenID、Apple subject、手机号等属于外部 Identity；Student、Pet、Assignment 等领域对象只关联内部 User，不依赖具体登录平台。
