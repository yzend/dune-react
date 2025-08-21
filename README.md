# dune-react

前端业务组件库项目

框架：react + vite + storybook

[story 文档 ](https://storybook.js.org/docs/react/addons/addons-api#addonssetconfigconfig)

### 开发

```
 yarn storybook
```

### 打包

```
 yarn build
```

### 发布 npm

```
  npm publish
```

### 使用组件库

```
  npm install dune-react

  // 在入口文件如_app.js中引入style
  import 'dune-react/dist/style.css'

  // 在目标页面中
  import {xxx} from dune-react
```

### 发布到 github 静态页

使用[@storybook/storybook-deployer 文档](https://github.com/storybook-eol/storybook-deployer)发布到 github

```
    yarn build-storybook

    // 在storybook-static 文件夹中添加.nojekyll文件

    yarn deploy-storybook -- --existing-output-dir=storybook-static
```
