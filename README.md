<div align="center">
  <a href="https://hono.dev">
    <img src="https://raw.githubusercontent.com/honojs/hono/main/docs/images/hono-title.png" width="500" height="auto" alt="Hono"/>
  </a>
</div>

<hr />

Hono - _**\[炎\] means flame🔥 in Japanese**_ - is a small, simple, and ultrafast web framework for the Edges.
It works on any JavaScript runtime: Cloudflare Workers, Fastly Compute@Edge, Deno, Bun, Vercel, Lagon, AWS Lambda, Lambda@Edge, and Node.js.

Fast, but not only fast.

```ts
import { Hono } from 'hono'
const app = new Hono()

app.get('/', (c) => c.text('Hono!'))

export default {
    port: 3000,
    fetch: app.fetch,
}
```

## Quick Start

```
bun create hono my-app
```

## Features

- **Ultrafast** 🚀 - The router `RegExpRouter` is really fast. Not using linear loops.
- **Lightweight** 🪶 - The `hono/tiny` preset is under 12kB. Hono has zero dependencies and uses only the Web Standard API.
- **Multi-runtime** 🌍 - Works on Cloudflare Workers, Fastly Compute@Edge, Deno, Bun, Lagon, AWS Lambda, Lambda@Edge, or Node.js.
- **Batteries Included** 🔋 - Hono has built-in middleware, custom middleware, and third-party middleware.
- **Delightful DX** 🛠️ - Super clean APIs. First-class TypeScript support.

## Benchmarks

**Hono is the fastest**, compared to other routers for Cloudflare Workers.

```
Hono x 510,171 ops/sec ±4.61% (82 runs sampled)
itty-router x 285,810 ops/sec ±4.13% (85 runs sampled)
sunder x 345,272 ops/sec ±4.46% (87 runs sampled)
worktop x 203,468 ops/sec ±3.03% (91 runs sampled)
Fastest is Hono
✨  Done in 28.68s.
```

## Documentation

The documentation is available on [hono.dev](https://hono.dev).

## Authors

Yusuke Wada <https://github.com/yusukebe>

_RegExpRouter_, _SmartRouter_, _LinearRouter_, and _PatternRouter_ are created by Taku Amano <https://github.com/usualoma>

<hr />

## Run the example


```
bun install
bun run dev
```

```
open http://localhost:3000/api/lotteries
```
