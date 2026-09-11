# 微信小程序客户端

本目录是书法学习产品的微信小程序客户端。

- 当前代码：由原仓库根目录的原生微信小程序原样迁入。
- 目标技术栈：Taro + React + TypeScript。
- 本次调整只迁移目录，不进行技术栈改造。
- 使用微信开发者工具时，请导入本目录。

微信专属能力必须停留在客户端适配层。客户端只通过 `wx.login()` 获取临时 code，并把 code 交给后端；不得保存微信 AppSecret，也不得自行调用 `code2Session`。

宠物蛋和宠物的 SVG 母版位于 `packages/art-assets/source`。当前原生小程序如需本地打包，使用 `packages/art-assets/exports/miniprogram` 导出的 PNG，并复制到本目录的 `assets/pet-eggs`；未来 Taro 版本使用 `src/assets/pet-eggs`。客户端副本不是美术母版。
