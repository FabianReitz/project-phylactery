import { defineManifest } from '@crxjs/vite-plugin';
import pkg from './package.json' with { type: 'json' };

const DDB_MATCHES = ['https://*.dndbeyond.com/*', 'https://dndbeyond.com/*'];

export default defineManifest({
  manifest_version: 3,
  name: 'Phylactery',
  version: pkg.version,
  action: {},
  side_panel: {
    default_path: 'index.html',
  },
  background: {
    service_worker: 'src/background/index.ts',
    type: 'module',
  },
  permissions: ['sidePanel', 'unlimitedStorage'],
  host_permissions: DDB_MATCHES,
  content_scripts: [
    {
      matches: DDB_MATCHES,
      js: ['src/content/main-world.ts'],
      run_at: 'document_start',
      world: 'MAIN',
    },
    {
      matches: DDB_MATCHES,
      js: ['src/content/bridge.ts'],
      run_at: 'document_start',
    },
  ],

  // TODO: capture images already rendered on book pages and store them as blobs
});
