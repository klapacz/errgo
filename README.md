# errgo

Better error handling. Inspired by
[error handling in golang](https://go.dev/blog/error-handling-and-go).

## Installation

Deno

```ts
import { Result, must, wrap } from "https://deno.land/x/errgo/mod.ts";
```

Node.js

```sh
pnpm add @klapacz/errgo
```

## Example

### `Result`

```ts
import { Result } from "https://deno.land/x/errgo/mod.ts";

async function readFile(path: string): Result<string> {
  if (exists(path)) {
    return [undefined, await readFile(path)];
  }
  return [new Error("invalid path")];
}

const [err, result] = readFile("test.txt");
if (!err) {
  result; // typescript knows result is defined
}
```

### `must`

```ts
import { must } from "https://deno.land/x/errgo/mod.ts";

// throws error if returned by `readFile(…)`
const result = must(readFile("test.txt"));
```

### `wrap`

```ts
import { wrap } from "https://deno.land/x/errgo/mod.ts";

const [err, result] = await wrap(fetch("…"));
if (!err) {
  result; // typescript knows result is defined
}
```

## Alternatives

- [ts-results - A typescript implementation of Rust's Result object](https://github.com/vultix/ts-results)

## Releasing

Deno

```sh
git tag VERSION_HERE
git push origin --tags
```

Node.js

```sh
# run script
deno run -A scripts/build_npm.ts VERSION_HERE

# go to output directory and publish
cd npm
npm publish
```
