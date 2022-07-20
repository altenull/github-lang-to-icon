import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import packageJson from './package.json';

export default [
  {
    input: './src/index.ts',
    output: {
      file: packageJson.main,
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      babel({
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }),
      nodeResolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
    ],
  },
  {
    input: './dist/types/index.d.ts',
    output: [{ file: packageJson.types, format: 'esm' }],
    plugins: [dts()],
  },
];
