---
# You can also start simply with 'default'
theme: apple-basic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Current Projects Share
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# Current Projects Share

Presentation slides for developers

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Press Space for next page <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<Footer />

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---

# 现有项目

## 1. 团队首页

作用： 1. 集体荣誉感 2. 增加传播，试图吸引更多非初级工程师/别的职能到团队中来。

1. 项目展示

   - 缺乏一个 tab 对团队已有项目进行罗列

2. 内容贡献

- 纯开发内容较少，重在有效内容的填充

---


## 2. 女义字

为 “女” 字旁的汉字正名

1. 规范化的准确的可查证的内容

   - ♀一名能写脚本的成员进行数据清洗二次处理 -> 规范化
   - 每个成员都可以对数据进行 review -> 数据准确性

2. 足够创意的展示方式

   - ♀一名 UI/UX 设计师
   - 本身展示 sheet 足矣
   - 足够新颖的页面效果让项目传播广泛

3. 相关资料
   1. [女书](https://nushuscript.org/) 字体，或许可以与本项目结合
   2. [女义字](https://docs.qq.com/sheet/DTHp6RmhFUG13dGN0?tab=BB08J2) 源数据
   3. [汉典](https://www.zdic.net/) 数据查证

---


## 3. Odessey of a girl

一个简单的角色扮演文本游戏。目的是与常见乙女/ 恋爱 / 模拟游戏区分开来。集中在一名女性从出生到年迈的成长叙事。

1. 有趣的玩法

   1. ♀游戏策划

2. 吸引人打动人的内容

   1. ♀内容策划

3. 相关资料
   1. [重启人生](https://liferestart.syaro.io/public/index.html)
   2. [什么是女性向游戏](https://sspai.com/post/35631)
   3. [如何写游戏策划文档？](https://maniahero.com/2019/01/20/%E5%A6%82%E4%BD%95%E5%86%99%E6%B8%B8%E6%88%8F%E7%AD%96%E5%88%92%E6%96%87%E6%A1%A3%EF%BC%9F/)

---

## 4. 阿加莎迷宫和伍尔夫的房间 ？

等大家的合作进入状态，可开启更复杂一些的项目。

---

# 一些基本规范

> Create some lightweight, creative, fun, and feminist projects

1. 理想化 / 乌托邦的目的
2. 🙅‍♀️ 不要当成像上班

---


## 1. 工作流程标准化

提高效率 / 减少误解 / 确保一致性

1. 关键步骤
   1. 需求分析
   2. 研究和灵感收集
   3. 草图 / 原型设计
   4. 视觉设计
   5. 前端开发
   6. 测试 + 可用性优化 + ...

2. 使用统一的工具

   1. 通用工具
      1. slack / zoom / ...
   2. 开发工具
      1. github
   3. 设计工具
      1. Figma, MasterGo
   4. 项目管理工具
      1. ? 暂时没想法，似乎也不是瓶颈

3. 建立设计体系
   1. 需要 UI / UX 共同制定
   2. logo / slogan 规范
   3. 创建组件库，定义颜色、字体、间距等设计规范

---


## 2. 版本控制和文档管理

1. 使用 Git 进行版本控制

   1. [开发协作流程](https://github.com/girlspowertech/girlspowertech.github.io/issues/3)

2. 文档管理
   1. 团队通用文档： 1. 经验分享 2. 文案规范 3. 设计风格指南
   2. 特定项目相关文档： 1. 项目概览 (`README.md`) 2. 版本更新日志 (`CHANGELOG.md`) 3. ...

---


## 3. 知识共享

互助学习 / 促进团队合作

1. 建立知识库
   1. 分享有用的资源、教程和最佳实践

2. 鼓励分享 （不定期举办内部分享会）
   1. eg: 鼓励团队成员写博客
   2. eg: 制作教程
