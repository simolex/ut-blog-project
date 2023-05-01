const fs = require('fs');
const path = require('path');

console.info('Clear webpack cache...');
const cachePath = path.resolve(__dirname, '..', 'node_modules', '.cache');
fs.rmSync(cachePath, { recursive: true, force: true });
