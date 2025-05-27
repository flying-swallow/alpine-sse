import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default { 
    input: 'builds/cdn.js',
    output: [
        {
            file: 'dist/alpine-sse.js',
            format: 'umd',
            sourcemap: true,
        },
        {
            file: 'dist/alpine-sse.min.js',
            format: 'umd',
            plugins: [terser()],
            sourcemap: true,
        }
    ],
    plugins: [
        resolve(),
        filesize(),
        typescript(),
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            node: 'current',
                        },
                    },
                ],
            ],
        }),
    ]

};
