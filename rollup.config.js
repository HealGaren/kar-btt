// rollup.config.js
import {getBabelOutputPlugin} from '@rollup/plugin-babel';
import {nodeResolve} from "@rollup/plugin-node-resolve";

export default {
    input: 'src/index.js',
    output: [
        {file: 'dist/bundle.mjs', format: 'esm'},
        {
            file: 'dist/bundle.es5.js',
            format: 'esm',
            plugins: [getBabelOutputPlugin({presets: ['@babel/preset-env']})]
        }
    ],
    plugins: [nodeResolve()]
};
