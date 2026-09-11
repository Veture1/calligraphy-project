# Art Assets

跨客户端共享的产品美术资源包，目前为宠物蛋和孵化后宠物预留。

```text
art-assets/
├── source/               # 可编辑的 SVG 母版
│   └── pet-eggs/
└── exports/              # 从母版生成的平台运行资源
    ├── miniprogram/      # 透明 PNG
    │   └── pet-eggs/
    └── web/              # 优化后的 SVG
        └── pet-eggs/
```

每个碑帖使用稳定的 `<copybook-key>` 建立子目录，例如：

```text
source/pet-eggs/yan-qin-li-bei/
├── egg.svg
└── pet.svg
```

`source` 是唯一母版；`exports` 中的文件可以重新生成。资源键和具体文件路径的边界见 [`docs/design/美术资源.md`](../../docs/design/美术资源.md)。当前目录仅作结构预留，没有引入构建脚本或代码依赖。
