module.exports = {
  // Point to your local fork
  repositories: ['bkenez/camunda-platform-helm-renovate'],

  // Use your existing renovate.json5 config
  extends: [],

  // Enable platform-specific settings
  platform: 'github',

  // Enable dry-run mode (won't create PRs)
  dryRun: 'full',

  // Print resolved config
  printConfig: true,

  // Optionally require config from repo
  requireConfig: 'optional',

  // Provide secrets for local testing
  secrets: {
    DISTRO_CAMUNDA_DOCKER_REGISTRY_PASSWORD: process.env.DISTRO_CAMUNDA_DOCKER_REGISTRY_PASSWORD || 'dummy-password-for-testing',
  },

  // **TESTING OVERRIDES** - Override schedule to see all possible updates
  schedule: null,
  
  // Force Renovate to check for updates even if recently checked
  force: {
    schedule: [],
  },
};
