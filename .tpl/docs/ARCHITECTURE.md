# 架构

原生 Next.js App Router + React + TypeScript。路由入口 src/app/[[...slug]]/page.tsx 从模板 meta.ts 查找页面，仅决定语言与路由。

模板位于 src/features/site-templates/catalog/sonora/：config/brand.ts 管理品牌；content/ 管理双语内容与文章；tokens.css 管理主题变量；theme.css 管理响应式、动画、玻璃卡片与作用域样式；components/ 管理布局、表单、图库和动效；pages/ 组合独立页面。host.tsx 通过 React Context 接收可选品牌和入口，独立运行使用自身品牌。

表单状态分别保存在自身组件内，图库索引由实际图片数组计算。没有外部 API、数据库与静默降级。页面使用 Next Link，语言切换保留页面、查询参数与锚点。菜单使用原生 dialog 保留键盘焦点和 Escape 行为，滚动样式离开时清理。
