module.exports = {
  config: {
    database: {
      type: process.env.DB_TYPE || 'sqlite',
    },
    executions: {
      maxTimeout: 3600,
      saveDataOnError: 'none',
      saveDataOnSuccess: 'none',
      saveExecutionProgress: false,
    },
    workflowTagsDisabled: true,
    telemetry: {
      enabled: false,
    },
    logging: {
      level: 'warn',
    },
    userManagement: {
      disabled: process.env.N8N_USER_MANAGEMENT_DISABLED === 'true',
    },
    custom: {
      minMemory: '128M',
      maxMemory: '512M',
    }
  }
};
