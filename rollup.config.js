import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/vue-barcode-reader.umd.js',
    format: 'umd',
    name: 'VueBarcodeReader',
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env'],
    }),
    vue(),
  ],
};
