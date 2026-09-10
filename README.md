# 书法项目

这是一个使用原生 TypeScript、WXML 和 WXSS 开发的微信小程序项目。

## 开始开发

1. 在 PowerShell 中进入本目录并安装开发依赖：

   ```powershell
   pnpm install
   ```

2. 打开微信开发者工具，选择“导入项目”，项目目录选择本仓库根目录。
3. 测试阶段可以保留 `project.config.json` 中的 `touristappid`；需要使用登录、云开发或发布时，替换为你自己的小程序 AppID。
4. 修改 `miniprogram/` 中的页面并在开发者工具中预览。

## 常用命令

```powershell
pnpm typecheck
ca version
ca stats
```

Compound Agent 的 Codex 配置位于 `.codex/`，工作流技能位于 `.agents/skills/`，经验数据存放在 `.compound-agent/`。

