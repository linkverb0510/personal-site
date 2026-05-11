import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  {
    ignores: ['dist', '.astro', 'node_modules'],
  },
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // Why: 第一版先聚焦基础安全和正确性，避免一次性加太多风格规则分散注意力。
      'astro/no-set-html-directive': 'error',
    },
  },
];
