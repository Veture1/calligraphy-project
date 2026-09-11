# 书法项目开发说明

## 项目概览

本仓库用于开发书法学习产品。微信小程序、教师 Web 和未来客户端都是产品的独立 client，共同通过后端服务访问业务能力。

## 目录结构

- `apps/miniprogram/`：微信小程序客户端；当前为原生 TypeScript、WXML、WXSS，目标技术栈为 Taro + React + TypeScript
- `apps/teacher-web/`：教师 Web 客户端预留目录，目标技术栈为 React + Vite + TypeScript
- `services/api/`：统一 API 预留目录，目标技术栈为 NestJS + TypeScript
- `packages/contracts/`：跨客户端与服务端的公共契约
- `packages/design-tokens/`：跨客户端的设计令牌
- `packages/art-assets/`：跨客户端美术资源的 SVG 母版和平台导出物
- `docs/product/`、`docs/domain/`、`docs/design/`、`docs/engineering/`：分类文档
- `.codex/`：Codex 项目配置、hooks 和子代理定义
- `.agents/skills/`：Compound Agent 的 Codex 工作流技能
- `.compound-agent/`：Compound Agent 的经验数据

## 开发约定

- 客户端之间不得互相导入源码；共享边界放在 `packages/`。
- 微信平台能力只允许出现在小程序适配层或后端微信适配器中，不得进入领域模型。
- 外部登录身份必须由后端映射到内部 `User`；Student、Assignment、宠物蛋孵化进度等领域对象不得依赖 OpenID。
- 每个碑帖对应一套宠物蛋与孵化后宠物形象；学生学习该碑帖时积累对应经验值，达到阈值后孵化。
- 美术母版放在 `packages/art-assets/source/` 并保留 SVG；小程序使用从母版导出的 PNG，不把原始母版散落在客户端目录中。
- 当前小程序新增页面放在 `apps/miniprogram/pages/<页面名>/`，并在 `apps/miniprogram/app.json` 注册。
- 在后续 Taro 迁移任务完成前，小程序页面逻辑继续使用 TypeScript，界面使用 WXML，样式使用 WXSS。
- 公共小程序逻辑提取到 `apps/miniprogram/utils/`，避免复制页面业务逻辑。
- 用户可见文案使用简体中文，并保持短句清晰。
- 不提交 `node_modules/`、`miniprogram_npm/` 或个人开发者工具配置。
- 修改 TypeScript 后运行 `pnpm typecheck`。
- 用户已授权本仓库自动提交和推送：完成并验证仓库修改后，默认提交当前任务的改动并推送当前分支到 `origin`，无需等待再次提醒；只有用户明确要求暂不提交或暂不推送时才停止。
- 提交前必须检查 `git status` 和 diff，避免夹带与当前任务无关且来源不明的改动。
- 不要直接编辑 `.compound-agent/lessons/index.jsonl`；使用 `ca learn` 保存经验。

## 文档与 Lesson 边界

- `README.md`、`docs/` 和 ADR 是当前产品计划、领域规则、架构决策与资源规范的权威来源；相关决定变化时直接更新这些文件。
- lesson 用于记录已经发生的工程问题、失败原因、验证过的解决办法和可复用的防复发规则，以便遇到相似问题时按需召回。
- 不要用 lesson 代替产品文档、领域文档、设计规范或技术决策，也不要重复保存已经完整写入权威文档的结论。
- 用户纠正如果改变的是项目设计，应更新对应文档；只有同时产生了独立、可复用的工程经验时，才另外提议记录 lesson。

## Compound Agent

本项目只接入 Codex。使用 `$compound-spec-dev`、`$compound-plan`、`$compound-work`、`$compound-review`、`$compound-learn` 或 `$compound-cook-it` 运行相应工作流。

### 会话启动与加载失败兜底

- 每次根 Codex 会话启动、恢复、清空或完成上下文压缩后，必须先确认当前开发者上下文中存在 `# Compound Agent Active` 标记，再开始项目分析、规划、读取或修改文件。
- 如果没有看到该标记，必须立即在仓库根目录运行 `ca prime`，并把它输出的规则和 Mandatory Recall lessons 作为本次会话的强制上下文。
- `ca prime` 输出 `# Compound Agent Active` 但没有列出 lesson，表示加载成功且当前没有符合条件的高严重度经验，不得把空列表误判为失败。
- 如果找不到 `ca`，先运行 `ca version` 检查全局安装，再读取 `.codex/hooks.json` 中当前平台的绝对命令路径并直接执行其中的 `ca prime`。
- 如果 `ca prime` 返回非零状态、超时，或输出中仍没有 `# Compound Agent Active`，必须向用户报告原始错误和已经尝试的命令。在恢复加载前，不得进行架构决策或修改项目文件，除非用户明确要求忽略本次加载失败并继续。
- 不得因为 `.codex/hooks.json` 的 hook 使用了静默错误处理而假定加载成功；以上标记检查是项目级兜底规则。

<!-- compound-agent:start -->
## Compound Agent Integration

This project uses compound-agent for session memory via **CLI commands**.

### CLI Commands (ALWAYS USE THESE)

**You MUST use CLI commands for lesson management:**

| Command | Purpose |
|---------|---------|
| `ca search "query"` | Search lessons - MUST call before architectural decisions; use anytime you need context |
| `ca knowledge "query"` | Semantic search over project docs - MUST call before architectural decisions; use keyword phrases, not questions |
| `ca learn "insight"` | Capture lessons - use AFTER corrections or discoveries |
| `ca list` | List all stored lessons |
| `ca show <id>` | Show details of a specific lesson |
| `ca wrong <id>` | Mark a lesson as incorrect |

### Mandatory Recall

You MUST call `ca search` and `ca knowledge` BEFORE:
- Architectural decisions or complex planning
- Patterns you've implemented before in this repo
- After user corrections ("actually...", "wrong", "use X instead")

**NEVER skip search for complex decisions.** Past mistakes will repeat.

Beyond mandatory triggers, use these commands freely — they are lightweight queries, not heavyweight operations. Uncertain about a pattern? `ca search`. Need a detail from the docs? `ca knowledge`. The cost of an unnecessary search is near-zero; the cost of a missed one can be hours.

### Capture Protocol

Run `ca learn` AFTER:
- User corrects you
- Test fail -> fix -> pass cycles
- You discover project-specific knowledge

**Workflow**: Search BEFORE deciding, capture AFTER learning.

### Quality Gate

Before capturing, verify the lesson is:
- **Novel** - Not already stored
- **Specific** - Clear guidance
- **Actionable** (preferred) - Obvious what to do

### Never Edit JSONL Directly

**WARNING: NEVER edit .compound-agent/lessons/index.jsonl directly.**

The JSONL file requires proper ID generation, schema validation, and SQLite sync.
Use CLI (`ca learn`) — never manual edits.

See [the customized Codex fork](https://github.com/Veture1/compound-agent/tree/feature/native-codex) for more details.
<!-- compound-agent:end -->
