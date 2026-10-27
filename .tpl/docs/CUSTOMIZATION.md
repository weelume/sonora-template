# 修改指南

品牌：src/features/site-templates/catalog/sonora/config/brand.ts。文案：content/ui.ts 和 content/stories.ts；页面扩展内容位于对应 pages 文件。主题：tokens.css，布局：theme.css。图片：public/templates/sonora/images，替换后更新素材来源及 SHA256。

新增页面同步 meta.ts、.tpl/template.json 与导航；中英文一起维护。通用动效在 components/Motion.tsx，CSS 动画在 theme.css，尊重 prefers-reduced-motion。

修改后执行 typecheck、lint 和适用测试；改路由、交互或全局样式后运行构建及对应页面验证。截图仅使用真实浏览器结果，不使用设计图替代。
