# vite-plugin-px2rem

<div align="center">

[![npm version](https://badgen.net/npm/v/vite-plugin-px2rem)](https://www.npmjs.com/package/vite-plugin-px2rem)
[![npm weekly download](https://badgen.net/npm/dw/vite-plugin-px2rem)](https://www.npmjs.com/package/vite-plugin-px2rem)
[![github stars](https://badgen.net/github/stars/ch1ny/vite-plugin-px2rem)](https://github.com/ch1ny/vite-plugin-px2rem/stargazers)

</div>

[English](./README.md) | 中文

## 介绍

一个支持将你的样式表中的 `px` 转换成 `rem` 的 `vite` 插件。

支持 `css`、`less` 以及 `sass/scss`。

> 不支持对 `js/ts` 文件内部的代码进行转换。

## 使用

安装插件:

```bash
npm install vite-plugin-px2rem --save-dev
```

在 vite 中使用:
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import px2rem from 'vite-plugin-px2rem';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [px2rem({ width: 750 })],
});
```
