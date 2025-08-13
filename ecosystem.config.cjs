module.exports = {
  apps: [
    {
      name: "claude-server",
      script: "server/index.js",
      interpreter: "node",
      cwd: "C:\\Users\\info\\server-project\\claudecodeui",
      env: {
        NODE_ENV: "development",
        PORT: 3002
      }
    },
    {
      name: "claude-client",
      cwd: "C:\\Users\\info\\server-project\\claudecodeui",
      script: "C:/Windows/System32/cmd.exe",
      args: '/d /s /c "node node_modules/vite/bin/vite.js --host"',
      interpreter: "none",
      windowsHide: true,
      autorestart: true,
      watch: false
    }
  ]
};
