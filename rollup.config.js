import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import del from "rollup-plugin-delete";
import copy from "rollup-plugin-copy";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/bundle.js",
      format: "esm",
    },
    {
      file: "dist/bundle.min.js",
      format: "esm",
      name: "version",
      sourcemap: true,
      // plugins: [terser()],
    },
  ],

  plugins: [
    peerDepsExternal({ includeDependencies: true }),
    del({ targets: "dist" }),
    resolve(),
    commonjs(),
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss({
      extract: "index.css",
    }),
    copy({
      targets: [{ src: "src/static/fonts", dest: "dist/" }],
    }),
  ],
};
