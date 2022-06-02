/* eslint-env node */

module.exports = {
  apps: [
    {
      name: 'interval-docsearch',
      cwd: 'web',
      script: 'yarn start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
