const { spawn } = require('child_process');
const port = process.env.PORT || 5678;

// Set the PORT environment variable for n8n
process.env.N8N_PORT = port;
// Set other important environment variables
process.env.NODE_OPTIONS = '--max-old-space-size=512'; // Limit memory usage

// Start n8n with the correct port
const n8nProcess = spawn('node', ['./packages/cli/bin/n8n.js', 'start'], {
  env: process.env,
  stdio: 'inherit'
});

n8nProcess.on('close', (code) => {
  console.log(`n8n process exited with code ${code}`);
  process.exit(code);
});
