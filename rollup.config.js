import replace from 'rollup-plugin-replace';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import css from 'rollup-plugin-css-only';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-es';

export default {
  input  : 'client/index.js',
  output : {
    format : 'iife',
    file   : 'server/public/bundle.js'
  },
  plugins : [
    replace({
      'process.env.NODE_ENV' : JSON.stringify('production')
    }),
    resolve({
      extensions : [ '.js', '.jsx', '.json' ]
    }),
    babel({
      exclude : 'node_modules/**'
    }),
    css({ output: 'server/public/bundle.css' }),
    json(),
    commonjs({
      namedExports : {
        'node_modules/react-dom/index.js'             : [ 'render', 'findDOMNode' ],
        'node_modules/react/index.js'                 : [ 'Component', 'Children', 'createElement', 'cloneElement' ],
        'node_modules/radium/lib/index.js'            : [ 'Style' ],
        'node_modules/prop-types/index.js'            : [ 'shape', 'bool', 'object', 'string', 'func' ],
        'node_modules/rc-editor-mention/lib/index.js' : [ 'toString' ]
      }
    }),
    uglify({}, minify)
  ]
};
