import * as dotenv from 'dotenv';
// LOAD process's enviroment variables
dotenv.config();
// REQUIRED VARIABLES
const REQUIRED_VARIABLES = ['NODE_ENV', 'MYSQL_DB_URI'];
/*
Log level:
- fatal
- error
- warn
- info
- verbose
- debug
*/
export const LOG_LEVEL = process.env.LOG_LEVEL;
export const ERROR_LOG_PATH =
  process.env.ERROR_LOG_PATH || 'logs/server-errors.log';
export const LOG_PATH = process.env.LOG_PATH || 'logs/server.log';

export const validateRequiredEnviromentVariables = () => {
  const missingKeys = [];
  REQUIRED_VARIABLES.map((requiredKey) => {
    if (!process.env[requiredKey]) {
      missingKeys.push(requiredKey);
    }
  });
  if (missingKeys.length > 0) {
    console.log(missingKeys);
    missingKeys.map((key, index) => {
      console.error(`${index + 1}. Missing ${key} !!!`);
    });
    process.exit(1);
  }
};

export const NODE_ENV = process.env.NODE_ENV;
export const MYSQL_DB_URI = process.env.MYSQL_DB_URI;

validateRequiredEnviromentVariables();
