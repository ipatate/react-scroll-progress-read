import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import {terser} from 'rollup-plugin-terser';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
    {
      file: pkg.browser,
      format: 'iife',
      name: 'ScrollProgress',
      globals: {
        react: 'React',
      },
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    terser(),
  ],
};
