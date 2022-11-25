import { build, emptyDir } from "https://deno.land/x/dnt@0.32.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  test: false,
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "@klapacz/errgo",
    version: Deno.args[0],
    description: "Better error handling.",
    license: "MIT",
    keywords: ["golang", "error", "error handling"],
    repository: {
      type: "git",
      url: "git+https://github.com/klapacz/errgo.git",
    },
    bugs: {
      url: "https://github.com/klapacz/errgo/issues",
    },
  },
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
