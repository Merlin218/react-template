<!-- # ERC管理后台

ECR：`Engineering Change Request` 工程变更请求 -->

## 技术栈

- [React](https://reactjs.bootcss.com/)
- [Vite (打包工具)](https://cn.vitejs.dev/guide/)
- pnpm (包管理工具)
  - npm install -g pnpm (安装pnpm)
  - pnpm i xxx -D/-S (安装第三方包)
  - pnpm xxx (见 `package.json` 中`scripts`)
- [axios (http请求)](https://axios-http.com/docs/intro)
- [Redux (状态管理，后续根据需求添加)](http://cn.redux.js.org/)
- [react-router (路由)](https://reactrouter.com/docs/en/v6/getting-started/tutorial)
- eslint (代码检查)
- [ant design (UI框架)](https://ant.design/docs/react/introduce-cn)
- less (css预编译)
- Typescript (类型检查)


## 项目目录结构

```bash
├── src/
│   ├── App.tsx # 根组件
│   ├── assets/ # 静态资源
│   ├── common/ # 公共方法
│   │   └── axios/ # axios封装
│   ├── components/ # 全局组件
│   │   ├── LoginPanel/ # 登录面板组件
│   │   ├── Logo/ # Logo组件
│   │   └── ... # 布局组件
│   ├── configs/ # 配置文件
│   │   └── index.ts
│   ├── hooks/ # hooks方法
│   ├── main.tsx # 程序入口文件
│   ├── pages/ # 页面组件
│   │   └── Login/ # 登录页面
│   ├── routes/ # 路由配置
│   │   └── index.tsx
│   ├── store/ # 状态管理
│   ├── styles/ # 样式文件
│   │   ├── main.less # 全局样式文件
│   │   └── theme.less # 主题样式文件
│   ├── types/ # 类型文件
│   │   └── common.d.ts
│   ├── utils/ # 工具方法
│   ├── vite-env.d.ts
│   └── ...
├── .eslintrc.cjs # eslint配置文件
├── .gitignore # git忽略文件
├── .vscode/ # vscode配置文件
├── README.md # 项目介绍文件
├── index.html # index模板
├── node_modules/ # npm包文件
├── package.json # 项目配置文件
├── pnpm-lock.yaml # npm包锁文件
├── public/ # 静态资源文件
├── tsconfig.json # TypeScript配置文件
├── tsconfig.node.json 
├── vite.config.ts # vite配置文件
├── ...
```
