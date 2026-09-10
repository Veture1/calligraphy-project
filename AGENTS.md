# 书法项目开发说明

## 项目概览

本仓库用于开发书法学习微信小程序。应用代码使用原生微信小程序技术栈：TypeScript、WXML、WXSS 和 JSON。

## 目录结构

- `miniprogram/app.*`：小程序入口和全局样式
- `miniprogram/pages/`：页面代码
- `miniprogram/sitemap.json`：页面索引规则
- `types/`：项目级 TypeScript 类型
- `.codex/`：Codex 项目配置、hooks 和子代理定义
- `.agents/skills/`：Compound Agent 的 Codex 工作流技能
- `.compound-agent/`：Compound Agent 的经验数据

## 开发约定

- 新页面放在 `miniprogram/pages/<页面名>/`，并在 `miniprogram/app.json` 注册。
- 页面逻辑使用 TypeScript，界面使用 WXML，样式使用 WXSS。
- 公共逻辑提取到 `miniprogram/utils/`，避免复制页面业务逻辑。
- 用户可见文案使用简体中文，并保持短句清晰。
- 不提交 `node_modules/`、`miniprogram_npm/` 或个人开发者工具配置。
- 修改 TypeScript 后运行 `pnpm typecheck`。
- 不要直接编辑 `.compound-agent/lessons/index.jsonl`；使用 `ca learn` 保存经验。

## Compound Agent

本项目只接入 Codex。使用 `$compound-spec-dev`、`$compound-plan`、`$compound-work`、`$compound-review`、`$compound-learn` 或 `$compound-cook-it` 运行相应工作流。
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
