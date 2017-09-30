import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import css from 'rollup-plugin-css-only';

export default {
  entry   : 'client/index.js',
  format  : 'cjs',
  plugins : [
    resolve({
      extensions : [ '.js', '.jsx', '.json' ]
    }),
    babel({
      exclude : 'node_modules/**'
    }),
    css({ output: 'client/bundle.css' })
  ],
  dest : 'client/bundle.js'
};
