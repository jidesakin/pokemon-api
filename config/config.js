const joi = require('joi');

const envVarSchema = joi
  .object({
    LOGGING_LEVEL: joi
      .string()
      .allow(['error', 'warn', 'info', 'verbose', 'debug', 'silly'])
      .default('info'),
    LOGGER_ENABLED: joi
      .boolean()
      .truthy('TRUE')
      .truthy('true')
      .falsy('FALSE')
      .falsy('false')
      .default(true),
    REDIS_HOST: joi.string().default('127.0.0.1'),
    REDIS_PORT: joi.string().default('6379'),
  })
  .unknown()
  .required();

const { error, value: envVars } = joi.validate(process.env, envVarSchema);

if (error) {
  throw new Error(`Config Validation Error: ${error.message}`);
}

const config = {
  logger: {
    level: envVars.LOGGING_LEVEL,
    enabled: envVars.LOGGER_ENABLED,
  },
  redis: {
    host: envVars.REDIS_HOST,
    port: envVars.REDIS_PORT,
  },
};

module.exports = config;
