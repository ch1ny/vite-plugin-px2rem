# vite-plugin-px2rem

<div align="center">

[![npm version](https://badgen.net/npm/v/vite-plugin-px2rem)](https://www.npmjs.com/package/vite-plugin-px2rem)
[![npm weekly download](https://badgen.net/npm/dw/vite-plugin-px2rem)](https://www.npmjs.com/package/vite-plugin-px2rem)
[![github stars](https://badgen.net/github/stars/ch1ny/vite-plugin-px2rem)](https://github.com/ch1ny/vite-plugin-px2rem/stargazers)

</div>

English | [中文](./README-zh_CN.md)

## Introduction

A `vite` plugin that allows you to convert `px` into `rem` in your stylesheets.

Now support `css`, `less` and `sass/scss`.

> Code conversion in `js/ts` files is not supported.

## Usage

Install plugin:

```bash
# npm
npm install vite-plugin-px2rem --save-dev
# or yarn
yarn add vite-plugin-px2rem -D
# or pnpm
pnpm add vite-plugin-px2rem -D
```

Use in vite:
```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import { px2rem } from 'vite-plugin-px2rem';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [px2rem({ width: 750 })],
});
```
