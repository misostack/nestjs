import { SessionEntity } from './session-entity';
import { BaseEntity } from '../base.entity';

export type SecureCodeScope = '2FA';

export class SecureCode extends BaseEntity {
  session: SessionEntity;
  code: string;
  scopes: [SecureCodeScope];
  expiredAt: Date;
}
