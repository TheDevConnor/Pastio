import * as esbuild from 'esbuild';

// Bundle the analytics script for browser use
await esbuild.build({
  entryPoints: ['scripts/analytics.js'],
  bundle: true,
  format: 'esm',
  outfile: 'scripts/analytics.bundle.js',
  platform: 'browser',
  minify: true,
});

console.log('✓ Analytics bundle created successfully');
