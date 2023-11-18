import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json", exclude: ["./src/stories/*", "./**/*stories.(js|jsx|mjs|ts|tsx)"]  }),
      postcss({
        modules: true,
        extract: "main.css",
        sourceMap: true,
      }),
    ],
  },
  {
    input: "src/icons/index.ts",
    output: [
      {
        file: "dist/icons/index.js",
        format: "cjs",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json", exclude: ["./src/stories/*", "./**/*stories.(js|jsx|mjs|ts|tsx)"]  }),
      postcss({
        modules: true,
        sourceMap: true,
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
  {
    input: "dist/icons/types/icons/index.d.ts",
    output: [{ file: "dist/icons/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
