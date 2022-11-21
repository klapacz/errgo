# errgo

Better error handling.

## Installation

```
pnpm add @klapacz/errgo
```

## Example

### `Result`

```ts
import { Result } from "@klapacz/errgo";

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
import { must } from "@klapacz/errgo";

// throws error if returned by `readFile(…)`
const result = must(readFile("test.txt"));
```

### `wrap`

```ts
import { wrap } from "@klapacz/errgo";

const [err, result] = await wrap(fetch("…"));
if (!err) {
  result; // typescript knows result is defined
}
```
