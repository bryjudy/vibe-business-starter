import { config } from 'dotenv';
import { resolve } from 'path';

// Load from repo root .env or parent
config({ path: resolve(__dirname, '../.env') });
config({ path: resolve(__dirname, '../.env.local') });

import { Template, defaultBuildLogger } from 'e2b';
import { template } from './template';

async function main() {
  console.log('Building vibe-starter template (v2)...');
  const result = await Template.build(template, 'vibe-starter', {
    cpuCount: 4,
    memoryMB: 8192,
    onBuildLogs: defaultBuildLogger(),
  });
  console.log('Build complete:', result);
}

main().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
