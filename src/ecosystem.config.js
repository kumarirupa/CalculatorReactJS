module.exports = {
    apps: [{
      name: 'REALITY_SOCIAL_FRONTEND',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }],
    deploy: {
      production: {
        'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
      }
    }
  };
  