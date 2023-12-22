import { defineConfig } from "vite"
import { resolve } from "path"

import vue from "@vitejs/plugin-vue"
import babel from "rollup-plugin-babel"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      isProduction: true
    })
  ],
  build: {
    target: "modules",
    cssCodeSplit: true,
    lib: {
      // src/index.ts is where we have exported the component(s)
      entry: resolve(__dirname, "src/index.js"),
      name: "VueBarcodeReader",
      // the name of the output files when the build is run
      fileName: "vuebarcodereader",
      formats: ["umd", "es", "cjs", "iife"]
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"], // add  "@zxing/library"
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue"
        }
      },
      plugins: [
        babel({
          exclude: "node_modules/**",
          presets: [
            "@babel/env",
            "@vue/babel-preset-jsx"
          ]
        })
      ]
    }
  }
})
