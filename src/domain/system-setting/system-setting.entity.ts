export enum SystemSettingType {
  BOOLEAN = 'boolean',
  INTEGER = 'integer',
  DOUBLE = 'double',
  STRING = 'string',
  JSON = 'json',
  DATETIME = 'datetime',
}
export class SystemSetting {
  settingKey: string;
  settingValue: string;
  settingValueType: SystemSettingType;
}
