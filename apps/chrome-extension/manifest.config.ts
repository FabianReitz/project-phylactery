import { defineManifest } from '@crxjs/vite-plugin';
import pkg from './package.json' with { type: 'json' };

export default defineManifest({
  manifest_version: 3,
  name: 'Phylactery',
  version: pkg.version,
  action: {
    default_popup: 'index.html',
  },
});
