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

```ts
import { Result, must, wrap } from "https://deno.land/x/errgo/mod.ts";

async function divide(
  dividend: number,
  divisor: number
): Promise<Result<number>> {
  if (divisor === 0) {
    return [new Error("Division by zero is not defined.")];
  }
  return [, dividend / divisor];
}

const [err, result] = await divide(2, 3);
if (!err) console.log(result); // typescript is smart about result being defined

// returns result or throws
const result = must(await divide(2, 3));

// wraps function which throws with `Result` interface
const [err, result] = await wrap(fetch("…"));
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
