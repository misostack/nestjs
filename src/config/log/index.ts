import { ConsoleLogger, Optional } from '@nestjs/common';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import {
  configure,
  getLogger,
  Layout,
  Logger as Log4js,
  LoggingEvent,
} from 'log4js';
import { ERROR_LOG_PATH, LOG_LEVEL, LOG_PATH } from '@config/environment';

// Fix timezone
dayjs.extend(utc);

export const log4jLayout = (isConsole = false): Layout => {
  return {
    type: 'pattern',
    pattern: isConsole
      ? '%[[%x{startTime}] [%p] [%c] -%] %m'
      : '[%x{startTime}] [%p] [%c] - %m',
    tokens: {
      startTime: (logEvent: LoggingEvent) =>
        dayjs.utc(logEvent.startTime).format(),
    },
  };
};

configure({
  appenders: {
    Server: {
      type: 'dateFile',
      maxLogSize: 52428800,
      numBackups: 20,
      filename: LOG_PATH,
      layout: log4jLayout(),
      pattern: 'yyyy-MM-dd',
      compress: true,
    },
    serverError: {
      type: 'dateFile',
      maxLogSize: 52428800,
      numBackups: 20,
      filename: ERROR_LOG_PATH,
      layout: log4jLayout(),
      pattern: 'yyyy-MM-dd',
      compress: true,
    },
    serverLogFilter: {
      type: 'logLevelFilter',
      appender: `serverError`,
      level: 'error',
    },
    console: {
      type: 'console',
      layout: log4jLayout(true),
    },
  },
  categories: {
    default: {
      appenders: ['Server', 'serverLogFilter', 'console'],
      level: LOG_LEVEL,
    },
  },
});

export class Logger extends ConsoleLogger {
  logger: Log4js;
  constructor(
    @Optional() protected context?: string,
    @Optional() protected options: { timestamp?: boolean } = {},
  ) {
    super();
    this.logger = getLogger('Server');
  }

  log(message: any, ...optionalParams: any[]): void {
    optionalParams = this.context
      ? optionalParams.concat(this.context)
      : optionalParams;
    this.logger.info(message, ...optionalParams);
  }

  error(message: any, ...optionalParams: any[]): void {
    optionalParams = this.context
      ? optionalParams.concat(this.context)
      : optionalParams;
    this.logger.error(message, ...optionalParams);
  }

  warn(message: any, ...optionalParams: any[]): void {
    optionalParams = this.context
      ? optionalParams.concat(this.context)
      : optionalParams;
    this.logger.warn(message, ...optionalParams);
  }

  debug(message: any, ...optionalParams: any[]): void {
    optionalParams = this.context
      ? optionalParams.concat(this.context)
      : optionalParams;
    this.logger.debug(message, ...optionalParams);
  }
}
