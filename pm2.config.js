/* eslint-env node */

module.exports = {
  apps: [
    {
      name: 'interval-docsearch',
      script: 'yarn start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
